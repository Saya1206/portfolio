import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle, AlertCircle, Loader2, Info } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const contactCards = [
    {
      icon: <MapPin size={22} className="text-red-500" />,
      title: "Location",
      value: personal.location,
      link: "https://www.google.com/maps/place/Kolhapur,+Maharashtra,+India",
      accentBg: "#fef2f2",
      borderCol: "#fecaca"
    },
    {
      icon: <Mail size={22} className="text-amber-500" />,
      title: "Email Address",
      value: personal.email,
      link: `mailto:${personal.email}`,
      accentBg: "#fffbeb",
      borderCol: "#fde68a"
    },
    {
      icon: <Phone size={22} className="text-emerald-500" />,
      title: "Phone Number",
      value: personal.phone,
      link: `tel:${personal.phone}`,
      accentBg: "#ecfdf5",
      borderCol: "#a7f3d0"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name';
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name should only contain letters and spaces';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write a message';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setStatusMessage(null);

    const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch (_err) {
          // ignore
        }

        const successNotice = data.message || `Thank you, ${formData.name}! Your message has been received.`;
        onShowToast(successNotice, 'success');
        setStatusMessage({
          type: data.demoMode ? 'info' : 'success',
          text: successNotice
        });

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        const errorText = data.message || data.error || 'Failed to send message. Please try again.';
        const hintText = data.hint ? ` (${data.hint})` : '';
        const fullMsg = errorText + hintText;
        onShowToast(fullMsg, 'error');
        setStatusMessage({
          type: 'error',
          text: fullMsg
        });
      }
    } catch (err) {
      console.error('Network Error while contacting backend:', err);
      const networkErrMsg = 'Could not reach backend server. Please make sure the backend is running on port 5000.';
      onShowToast(networkErrMsg, 'error');
      setStatusMessage({
        type: 'error',
        text: networkErrMsg
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-wrapper" style={{ backgroundColor: '#ffffff' }}>
      <div className="ambient-blob ambient-blob-1" />
      <div className="ambient-blob ambient-blob-2" />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Section Header */}
        <div className="section-header">
          <h2>
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Have a project in mind, an opportunity to discuss, or just want to say hi? I'd love to hear from you!
          </p>
        </div>

        {/* 2-Column Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2.5rem',
          alignItems: 'start'
        }}
        className="contact-grid-layout"
        >
          {/* Left Column: Direct Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {contactCards.map((card, idx) => (
              <a
                key={idx}
                href={card.link}
                target={card.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  backgroundColor: card.accentBg,
                  border: `1px solid ${card.borderCol}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {card.icon}
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b', marginBottom: '0.15rem' }}>
                    {card.title}
                  </div>
                  <div style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#0f172a',
                    wordBreak: 'break-all'
                  }}>
                    {card.value}
                  </div>
                </div>
              </a>
            ))}

            {/* Social Connect Card */}
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                Connect on Professional Networks
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '1.25rem' }}>
                Follow my ongoing coding updates and development activities on GitHub and LinkedIn.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.65rem 1.25rem',
                    borderRadius: '8px',
                    backgroundColor: '#0f172a',
                    color: '#ffffff',
                    fontWeight: 600,
                    fontSize: '0.88rem'
                  }}
                >
                  <GithubIcon size={16} />
                  <span>GitHub Profile</span>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.65rem 1.25rem',
                    borderRadius: '8px',
                    backgroundColor: '#0a66c2',
                    color: '#ffffff',
                    fontWeight: 600,
                    fontSize: '0.88rem'
                  }}
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card" style={{ padding: '2.5rem 2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.75rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #06b6d4, #2563eb)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Send size={18} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>
                Send a Message
              </h3>
            </div>

            {statusMessage && (
              <div
                style={{
                  padding: '0.85rem 1rem',
                  borderRadius: '10px',
                  marginBottom: '1.25rem',
                  fontSize: '0.88rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.65rem',
                  backgroundColor:
                    statusMessage.type === 'success'
                      ? '#ecfdf5'
                      : statusMessage.type === 'info'
                      ? '#eff6ff'
                      : '#fef2f2',
                  border: `1px solid ${
                    statusMessage.type === 'success'
                      ? '#a7f3d0'
                      : statusMessage.type === 'info'
                      ? '#bfdbfe'
                      : '#fecaca'
                  }`,
                  color:
                    statusMessage.type === 'success'
                      ? '#065f46'
                      : statusMessage.type === 'info'
                      ? '#1e40af'
                      : '#991b1b'
                }}
              >
                {statusMessage.type === 'success' ? (
                  <CheckCircle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                ) : statusMessage.type === 'info' ? (
                  <Info size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                ) : (
                  <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                )}
                <div style={{ flex: 1, lineHeight: 1.5 }}>{statusMessage.text}</div>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Name & Email Row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.25rem'
              }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>
                    Your Name <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Johnson"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      border: errors.name ? '1px solid #ef4444' : '1px solid #cbd5e1',
                      outline: 'none',
                      fontSize: '0.92rem',
                      fontFamily: 'inherit',
                      backgroundColor: '#f8fafc',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                    onBlur={(e) => e.target.style.borderColor = errors.name ? '#ef4444' : '#cbd5e1'}
                  />
                  {errors.name && (
                    <span style={{ fontSize: '0.76rem', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.3rem' }}>
                      <AlertCircle size={12} /> {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>
                    Your Email <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      border: errors.email ? '1px solid #ef4444' : '1px solid #cbd5e1',
                      outline: 'none',
                      fontSize: '0.92rem',
                      fontFamily: 'inherit',
                      backgroundColor: '#f8fafc',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                    onBlur={(e) => e.target.style.borderColor = errors.email ? '#ef4444' : '#cbd5e1'}
                  />
                  {errors.email && (
                    <span style={{ fontSize: '0.76rem', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.3rem' }}>
                      <AlertCircle size={12} /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>
                  Subject <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Full Stack Developer Opportunity / Project Inquiry"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: errors.subject ? '1px solid #ef4444' : '1px solid #cbd5e1',
                    outline: 'none',
                    fontSize: '0.92rem',
                    fontFamily: 'inherit',
                    backgroundColor: '#f8fafc',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                  onBlur={(e) => e.target.style.borderColor = errors.subject ? '#ef4444' : '#cbd5e1'}
                />
                {errors.subject && (
                  <span style={{ fontSize: '0.76rem', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.3rem' }}>
                    <AlertCircle size={12} /> {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>
                  Message <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: errors.message ? '1px solid #ef4444' : '1px solid #cbd5e1',
                    outline: 'none',
                    fontSize: '0.92rem',
                    fontFamily: 'inherit',
                    backgroundColor: '#f8fafc',
                    resize: 'vertical',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                  onBlur={(e) => e.target.style.borderColor = errors.message ? '#ef4444' : '#cbd5e1'}
                />
                {errors.message && (
                  <span style={{ fontSize: '0.76rem', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.3rem' }}>
                    <AlertCircle size={12} /> {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="shimmer-btn"
                style={{
                  background: 'linear-gradient(135deg, #06b6d4, #2563eb)',
                  color: '#ffffff',
                  padding: '0.9rem',
                  fontSize: '0.98rem',
                  width: '100%',
                  opacity: isSubmitting ? 0.75 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem'
                }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <p style={{ textAlign: 'center', fontSize: '0.82rem', color: '#94a3b8', marginTop: '0.5rem' }}>
                ✨ I'll get back to you within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .contact-grid-layout {
            grid-template-columns: 1fr 1.35fr !important;
          }
        }
      `}</style>
    </section>
  );
}
