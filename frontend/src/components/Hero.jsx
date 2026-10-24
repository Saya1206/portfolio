import React, { useState, useEffect } from 'react';
import { Download, Mail, ArrowRight, Phone, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

const roles = [
  'Full Stack Developer',
  'React.js & React Native Specialist',
  'MERN Stack Engineer',
  'Cross-Platform Mobile App Builder'
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section id="home" className="hero-section">
      {/* Background Grids & Glow Lights */}
      <div className="hero-grid-bg" />
      <div className="hero-glow-sphere hero-glow-1" />
      <div className="hero-glow-sphere hero-glow-2" />

      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        {/* Profile Avatar with Glowing Ring */}
        <div className="hero-avatar-wrapper">
          <div className="hero-avatar-ring" />
          <img
            src={portfolioData.personal.avatar}
            alt={portfolioData.personal.name}
            className="hero-avatar-img"
          />
          <div className="hero-badge-live" title="Available for opportunities">
            <div className="hero-badge-dot" />
          </div>
        </div>

        {/* Small greeting tag */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.4rem 1.1rem',
          borderRadius: '9999px',
          background: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(10px)',
          marginBottom: '1.25rem',
          fontSize: '0.85rem',
          fontWeight: 600,
          color: '#38bdf8'
        }}>
          <Sparkles size={14} className="text-cyan-400" />
          <span>WELCOME TO MY DIGITAL PORTFOLIO</span>
        </div>

        {/* Main Title */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.25rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: '1rem',
          letterSpacing: '-0.03em'
        }}>
          Hi, I'm <span className="text-gradient-hero">{portfolioData.personal.name}</span>
        </h1>

        {/* Dynamic Typewriter Subtitle */}
        <div style={{
          fontSize: 'clamp(1.2rem, 3vw, 1.85rem)',
          fontWeight: 600,
          color: '#cbd5e1',
          minHeight: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.35rem',
          marginBottom: '1.25rem'
        }}>
          <span style={{
            background: 'linear-gradient(135deg, #38bdf8, #818cf8, #c084fc)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700
          }}>
            {displayedText}
          </span>
          <span style={{
            display: 'inline-block',
            width: '3px',
            height: '1.4em',
            backgroundColor: '#38bdf8',
            animation: 'blink 1s infinite'
          }} />
        </div>

        {/* Summary Description from Resume */}
        <p style={{
          maxWidth: '720px',
          margin: '0 auto 2.25rem',
          fontSize: 'clamp(0.95rem, 1.5vw, 1.12rem)',
          lineHeight: 1.7,
          color: '#94a3b8'
        }}>
          {portfolioData.personal.shortBio}
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          <a
            href={portfolioData.personal.resumeUrl}
            download="Sayali_Patil_Resume.pdf"
            className="shimmer-btn"
            style={{
              background: 'linear-gradient(135deg, #06b6d4, #2563eb)',
              color: '#ffffff',
              padding: '0.9rem 2.2rem',
              fontSize: '1rem',
              fontWeight: 700
            }}
          >
            <Download size={18} />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.85rem 2rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              backdropFilter: 'blur(10px)',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '0.98rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.18)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Mail size={18} />
            <span>Contact Me</span>
          </a>

          <a
            href="#projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.85rem 1.75rem',
              color: '#38bdf8',
              fontWeight: 600,
              fontSize: '0.98rem',
              transition: 'all 0.2s ease'
            }}
          >
            <span>Explore Work</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Social Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.25rem',
          marginBottom: '3rem'
        }}>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#181717';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <GithubIcon size={20} />
          </a>

          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0077b5';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,119,181,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <LinkedinIcon size={20} />
          </a>

          <a
            href={`mailto:${portfolioData.personal.email}`}
            aria-label="Email Me"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ea4335';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(234,67,53,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Mail size={20} />
          </a>

          <a
            href={`tel:${portfolioData.personal.phone}`}
            aria-label="Call Me"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#10b981';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(16,185,129,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Phone size={20} />
          </a>
        </div>

        {/* Highlight Stats Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '1rem',
          maxWidth: '850px',
          margin: '0 auto'
        }}>
          {portfolioData.stats.map((stat, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.09)',
                borderRadius: '1rem',
                padding: '1.25rem 1rem',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.09)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                fontSize: '1.85rem',
                fontWeight: 800,
                color: '#38bdf8',
                lineHeight: 1.2
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f1f5f9', marginTop: '0.2rem' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                {stat.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
