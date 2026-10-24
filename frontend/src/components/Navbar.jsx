import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ExternalLink, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`nav-bar-fixed ${isScrolled ? 'nav-bar-scrolled' : 'nav-bar-hero'}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="nav-brand">
          <div className="nav-logo-badge">SP</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ 
              color: isScrolled ? '#0f172a' : '#ffffff', 
              fontSize: '1.15rem', 
              fontWeight: 800,
              lineHeight: 1.2
            }}>
              Sayali Patil
            </span>
            <span style={{ 
              fontSize: '0.75rem', 
              color: isScrolled ? '#64748b' : '#94a3b8', 
              fontWeight: 500,
              letterSpacing: '0.05em' 
            }}>
              FULL STACK DEV
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav>
          <ul className="nav-links">
            {navItems.map((item) => {
              const secId = item.href.replace('#', '');
              const isActive = activeSection === secId;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`nav-link-item ${isActive ? 'active' : ''}`}
                    style={{
                      color: isActive
                        ? '#2563eb'
                        : isScrolled
                        ? '#334155'
                        : '#cbd5e1',
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Button: Resume */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href={portfolioData.personal.resumeUrl}
            download="Sayali_Patil_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-btn"
            style={{
              background: 'linear-gradient(135deg, #06b6d4, #2563eb)',
              color: '#ffffff',
              padding: '0.6rem 1.35rem',
              fontSize: '0.88rem',
              display: 'none',
            }}
            id="desktop-resume-btn"
          >
            <Download size={16} />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              backgroundColor: isScrolled ? '#f1f5f9' : 'rgba(255, 255, 255, 0.1)',
              color: isScrolled ? '#0f172a' : '#ffffff',
            }}
            className="mobile-nav-toggle"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: '4.5rem 0 0 0',
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem 1.5rem',
            gap: '1rem',
            zIndex: 49,
            overflowY: 'auto',
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: activeSection === item.href.replace('#', '') ? '#38bdf8' : '#e2e8f0',
                padding: '0.75rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>{item.label}</span>
              <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>→</span>
            </a>
          ))}

          <a
            href={portfolioData.personal.resumeUrl}
            download="Sayali_Patil_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-btn"
            style={{
              background: 'linear-gradient(135deg, #06b6d4, #2563eb)',
              color: '#ffffff',
              marginTop: '1.5rem',
              padding: '0.9rem',
              width: '100%',
            }}
          >
            <Download size={18} />
            <span>Download Resume (PDF)</span>
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          #desktop-resume-btn {
            display: inline-flex !important;
          }
          .mobile-nav-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
