# Sayali Patil - Full Stack Developer Portfolio

This repository is organized into two separate folders:
- **`frontend/`**: Modern React + Vite portfolio application.
- **`backend/`**: Node.js + Express API server with email service for the Contact Us form.

---

## 📁 Project Structure

```
portfolio/
├── backend/                  # Node.js & Express REST API
│   ├── .env                  # Environment configuration
│   ├── .env.example          # Template environment file
│   ├── .gitignore            # Ignores node_modules and .env
│   ├── package.json          # Express, CORS, dotenv, Nodemailer
│   └── server.js             # API routes (/api/contact, /api/health, /api/verify-smtp)
│
├── frontend/                 # React.js + Vite Application
│   ├── .env                  # Frontend environment configuration
│   ├── .env.example
│   ├── package.json
│   ├── vite.config.js        # Configured with proxy for /api -> localhost:5000
│   ├── public/
│   └── src/
│       ├── components/       # Contact.jsx, Hero.jsx, Projects.jsx, etc.
│       └── ...
│
└── package.json              # Root package with helper scripts
```

---

## 🚀 Quick Start Guide

### 1. Run the Backend Server

```bash
cd backend
npm install
npm run dev
```

The backend server runs on `http://localhost:5000`.

- **Health Check**: `GET http://localhost:5000/api/health`
- **Verify Status**: `GET http://localhost:5000/api/verify-smtp`
- **Contact API**: `POST http://localhost:5000/api/contact`

---

### 2. Run the Frontend Application

In a separate terminal window:

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173`. Any message sent via the Contact Us form will automatically connect to the backend API.

---

## ✉️ Contact API Details

### `POST /api/contact`

**Request Body (JSON):**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Full Stack Developer Opportunity",
  "message": "Hi Sayali, I would like to discuss an opportunity."
}
```

**Features:**
- **Inquiry Notification**: Sends a clean HTML-formatted email with sender information, timestamp, and a direct reply action.
- **Auto-Reply**: Automatically sends a friendly confirmation email to the visitor thanking them for contacting.
- **Input Validation**: Validates inputs, handles timeouts, and provides responsive feedback to the frontend.
