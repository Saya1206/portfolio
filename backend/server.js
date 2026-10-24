import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS Configuration - allow frontend dev server and production origins
const allowedOrigins = [
  process.env.CLIENT_URL || 'http://localhost:5173',
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173'
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, postman)
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(null, true); // Permissive in dev mode
    },
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

// Helper function to check if SMTP is configured
function isSmtpConfigured() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) return false;
  if (
    pass === 'your-app-password-here' ||
    pass === 'your-16-digit-app-password' ||
    pass.trim() === ''
  ) {
    return false;
  }
  return true;
}

// Create Nodemailer Transporter
function createTransporter() {
  const service = process.env.SMTP_SERVICE || 'gmail';
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = Number(process.env.SMTP_PORT) || 587;
  const secure = process.env.SMTP_SECURE === 'true';

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS?.replace(/\s+/g, ''); // strip any accidental spaces

  if (service && service.toLowerCase() === 'gmail') {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass }
    });
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass }
  });
}

// -----------------------------------------------------------------------------
// Routes
// -----------------------------------------------------------------------------

// Root route
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    message: 'Portfolio Backend API is running smoothly',
    endpoints: {
      health: 'GET /api/health',
      verifySmtp: 'GET /api/verify-smtp',
      contact: 'POST /api/contact'
    }
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  const configured = isSmtpConfigured();
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    smtp: {
      configured,
      sender: process.env.SMTP_USER || 'Not set',
      receiver: process.env.RECEIVER_EMAIL || process.env.SMTP_USER || 'Not set',
      notice: configured
        ? 'SMTP credentials detected and ready.'
        : 'SMTP password is not set yet in backend/.env. Please update SMTP_PASS.'
    }
  });
});

// Verify SMTP connection directly
app.get('/api/verify-smtp', async (req, res) => {
  if (!isSmtpConfigured()) {
    return res.status(400).json({
      success: false,
      message: 'SMTP is not configured yet. Please open backend/.env and set your SMTP_PASS.'
    });
  }

  try {
    const transporter = createTransporter();
    await transporter.verify();
    return res.json({
      success: true,
      message: 'SMTP connection verified successfully! Email sending is ready.'
    });
  } catch (error) {
    console.error('SMTP Verification Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to authenticate with SMTP server.',
      error: error.message,
      troubleshooting: [
        'Ensure 2-Step Verification is enabled on your Gmail account.',
        'Make sure you generated an "App Password" (not your regular Gmail login password).',
        'Verify your email in SMTP_USER and the 16-character code in SMTP_PASS in backend/.env.'
      ]
    });
  }
});

// Contact Us API Endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  const errors = {};
  if (!name || !name.trim()) errors.name = 'Name is required';
  if (!email || !email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Invalid email format';
  }
  if (!subject || !subject.trim()) errors.subject = 'Subject is required';
  if (!message || !message.trim()) errors.message = 'Message is required';

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors
    });
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim();
  const cleanSubject = subject.trim();
  const cleanMessage = message.trim();
  const timestamp = new Date().toLocaleString();

  // If SMTP is NOT yet configured, gracefully acknowledge without failing
  if (!isSmtpConfigured()) {
    console.log('\n======================================================');
    console.log('📬 [CONTACT FORM SUBMISSION RECEIVED (DEMO MODE)]');
    console.log(`From:    ${cleanName} <${cleanEmail}>`);
    console.log(`Subject: ${cleanSubject}`);
    console.log(`Message: ${cleanMessage}`);
    console.log('------------------------------------------------------');
    console.log('⚠️ [NOTICE]: Real email was not dispatched because SMTP_PASS');
    console.log('   in backend/.env is still set to placeholder.');
    console.log('   Add your 16-character Gmail App Password in backend/.env');
    console.log('======================================================\n');

    return res.status(200).json({
      success: true,
      demoMode: true,
      message: `Thank you, ${cleanName}! Your message has been received. (Note: SMTP password is not set yet in backend/.env, message logged to backend console).`
    });
  }

  // If SMTP IS configured, send actual emails via Nodemailer
  try {
    const transporter = createTransporter();
    const receiverEmail = process.env.RECEIVER_EMAIL || process.env.SMTP_USER;

    // 1. Notification Email to the Portfolio Owner
    const ownerMailOptions = {
      from: `"${cleanName} via Portfolio" <${process.env.SMTP_USER}>`,
      to: receiverEmail,
      replyTo: cleanEmail,
      subject: `[Portfolio Inquiry] ${cleanSubject}`,
      text: `You received a new inquiry from your portfolio website:\n\nName: ${cleanName}\nEmail: ${cleanEmail}\nSubject: ${cleanSubject}\nDate: ${timestamp}\n\nMessage:\n${cleanMessage}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <div style="background: linear-gradient(135deg, #06b6d4, #2563eb); padding: 20px; border-radius: 8px 8px 0 0; text-align: center; color: #ffffff;">
            <h2 style="margin: 0; font-size: 22px;">New Portfolio Contact Inquiry</h2>
            <p style="margin: 5px 0 0 0; opacity: 0.9; font-size: 14px;">Received via Portfolio Contact Form</p>
          </div>

          <div style="padding: 24px; color: #1e293b; line-height: 1.6;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: bold; width: 100px;">Sender:</td>
                <td style="padding: 8px 0; font-weight: 600; color: #0f172a;">${cleanName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${cleanEmail}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${cleanEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Subject:</td>
                <td style="padding: 8px 0; color: #0f172a;">${cleanSubject}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Received:</td>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px;">${timestamp}</td>
              </tr>
            </table>

            <div style="background-color: #f8fafc; border-left: 4px solid #2563eb; padding: 16px; border-radius: 6px; margin-top: 12px;">
              <h4 style="margin: 0 0 8px 0; color: #334155;">Message Content:</h4>
              <p style="margin: 0; white-space: pre-wrap; color: #1e293b;">${cleanMessage}</p>
            </div>

            <div style="margin-top: 24px; text-align: center;">
              <a href="mailto:${cleanEmail}?subject=Re: ${encodeURIComponent(cleanSubject)}"
                 style="background: #2563eb; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
                Reply Directly to ${cleanName}
              </a>
            </div>
          </div>

          <div style="text-align: center; padding: 12px; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9;">
            This email was sent automatically from your Portfolio Contact API.
          </div>
        </div>
      `
    };

    // 2. Auto-reply Confirmation Email to the Visitor
    const visitorReplyOptions = {
      from: `"Sayali Patil" <${process.env.SMTP_USER}>`,
      to: cleanEmail,
      subject: `Thank you for contacting me, ${cleanName}!`,
      text: `Hi ${cleanName},\n\nThank you for reaching out via my portfolio. I have received your message regarding "${cleanSubject}" and will get back to you within 24 hours.\n\nBest regards,\nSayali Patil\nFull Stack Developer`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 540px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h3 style="color: #0f172a; margin-top: 0;">Thank you for reaching out!</h3>
          <p style="color: #334155; line-height: 1.6;">Hi <strong>${cleanName}</strong>,</p>
          <p style="color: #334155; line-height: 1.6;">
            I have received your message regarding <em>"${cleanSubject}"</em>. Thank you for your interest and inquiry!
          </p>
          <p style="color: #334155; line-height: 1.6;">
            I will review your message and get back to you as soon as possible (usually within 24 hours).
          </p>
          <div style="background-color: #f8fafc; padding: 12px 16px; border-radius: 8px; margin: 20px 0; border: 1px solid #e2e8f0; font-size: 14px; color: #64748b;">
            <strong>Your Message:</strong><br/>
            ${cleanMessage.replace(/\n/g, '<br/>')}
          </div>
          <p style="color: #334155; line-height: 1.6; margin-bottom: 0;">
            Best regards,<br/>
            <strong>Sayali Patil</strong><br/>
            <span style="font-size: 13px; color: #64748b;">Full Stack Developer</span>
          </p>
        </div>
      `
    };

    // Send emails
    await transporter.sendMail(ownerMailOptions);

    // Send auto-reply without failing if recipient address is rejectable
    try {
      await transporter.sendMail(visitorReplyOptions);
    } catch (autoReplyErr) {
      console.warn('Auto-reply to visitor failed or skipped:', autoReplyErr.message);
    }

    console.log(`✅ [EMAIL SENT] Message from ${cleanName} (${cleanEmail}) dispatched successfully!`);

    return res.status(200).json({
      success: true,
      message: `Thank you, ${cleanName}! Your message has been sent successfully.`
    });
  } catch (error) {
    console.error('❌ [EMAIL ERROR]:', error);

    let helpfulHint = 'Please ensure your SMTP credentials are valid.';
    if (error.code === 'EAUTH' || error.responseCode === 535) {
      helpfulHint =
        'Authentication failed. For Gmail, make sure you generated a 16-character App Password (not standard account password) and 2-Step Verification is enabled.';
    }

    return res.status(500).json({
      success: false,
      message: 'Failed to send email through SMTP.',
      error: error.message,
      hint: helpfulHint
    });
  }
});

// Start Server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`====================================================`);
  console.log(`🚀 Portfolio Backend running on http://localhost:${PORT}`);
  console.log(`📡 Endpoints:`);
  console.log(`   - GET  /api/health`);
  console.log(`   - GET  /api/verify-smtp`);
  console.log(`   - POST /api/contact`);
  console.log(`🔑 SMTP Status: ${isSmtpConfigured() ? 'CONFIGURED' : 'NOT CONFIGURED (DEMO MODE ACTIVE)'}`);
  if (!isSmtpConfigured()) {
    console.log(`👉 To enable live emails: edit backend/.env and set SMTP_PASS`);
  }
  console.log(`====================================================`);
});
