import React from 'react';
import { User, MapPin, Mail, Phone, Award, Code, Smartphone, CheckCircle, Globe, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, extracurricular, languages } = portfolioData;

  const keyStrengths = [
    {
      icon: <Smartphone className="text-cyan-600" size={22} />,
      title: "Mobile & Web Mastery",
      desc: "Cross-platform iOS and Android apps in React Native alongside responsive React.js web platforms."
    },
    {
      icon: <Code className="text-blue-600" size={22} />,
      title: "MERN Stack Architecture",
      desc: "End-to-end full stack development with Node.js, Express.js, MongoDB, Redux Toolkit, and REST APIs."
    },
    {
      icon: <CheckCircle className="text-emerald-600" size={22} />,
      title: "Secure Role-Based Systems",
      desc: "Expertise in multi-level RBAC (Borrower/Lender/Admin), Aadhaar authentication, and workflow automation."
    },
    {
      icon: <Award className="text-amber-600" size={22} />,
      title: "Production App Releases",
      desc: "Direct hands-on experience deploying iOS builds via Xcode, TestFlight, and Google Play Store."
    }
  ];

  return (
    <section id="about" className="section-wrapper" style={{ backgroundColor: '#ffffff' }}>
      {/* Ambient background decoration */}
      <div className="ambient-blob ambient-blob-1" />
      <div className="ambient-blob ambient-blob-2" />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Section Header */}
        <div className="section-header">
          {/* Decorative rotating circles */}
          <div
            className="deco-circle"
            style={{
              top: '-30px',
              left: '10%',
              width: '80px',
              height: '80px',
              border: '1px dashed rgba(6, 182, 212, 0.35)',
              display: 'none'
            }}
          />
          <h2>
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Get to know my journey, engineering philosophy, and the skills I bring to software development.
          </p>
        </div>

        {/* Main Content Grid: Left Profile Card + Right Narrative */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2.5rem',
          alignItems: 'start'
        }}
        className="about-grid-layout"
        >
          {/* Left Column: Glass Profile Card */}
          <div className="about-profile-card">
            <div className="about-card-glow" />

            <div className="about-photo-wrapper">
              <img
                src={personal.avatar}
                alt={personal.name}
                className="about-photo"
              />
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.25rem' }}>
              {personal.name}
            </h3>
            <p style={{ color: '#0891b2', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1rem' }}>
              {personal.role}
            </p>

            {/* Divider */}
            <div style={{ height: '1px', width: '60px', backgroundColor: '#e2e8f0', margin: '0.75rem auto 1rem' }} />

            {/* Core Tech Stack Pills */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.4rem',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              {['React.js', 'React Native', 'Node.js', 'Express.js', 'MongoDB'].map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    padding: '0.25rem 0.65rem',
                    borderRadius: '9999px',
                    backgroundColor: '#eff6ff',
                    color: '#1d4ed8',
                    border: '1px solid #bfdbfe'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Contact Details List */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              textAlign: 'left',
              fontSize: '0.85rem',
              color: '#475569',
              paddingTop: '1rem',
              borderTop: '1px solid #f1f5f9'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <MapPin size={16} className="text-cyan-600" style={{ flexShrink: 0 }} />
                <span>{personal.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Mail size={16} className="text-blue-600" style={{ flexShrink: 0 }} />
                <a href={`mailto:${personal.email}`} style={{ color: '#2563eb', wordBreak: 'break-all' }}>
                  {personal.email}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Phone size={16} className="text-emerald-600" style={{ flexShrink: 0 }} />
                <span>{personal.phone}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative + Strengths + Extracurricular */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Bio Card */}
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: '#ecfeff',
                  color: '#0891b2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <User size={20} />
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a' }}>
                  Engineering Background & Vision
                </h3>
              </div>

              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                I am <strong style={{ color: '#0f172a' }}>{personal.name}</strong>, a full stack software engineer
                based in Kolhapur, Maharashtra. I specialize in building responsive, scalable web applications
                and native-feeling cross-platform mobile apps for iOS and Android.
              </p>

              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                Currently working at <strong style={{ color: '#0f172a' }}>Walstar Technologies Pvt. Ltd.</strong>,
                I translate real-world client workflows into reusable component-based architectures, design
                resilient backend REST APIs with Node.js and MongoDB, and handle production deployment cycles
                including Xcode, TestFlight testing, and App Store releases.
              </p>

              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.75 }}>
                Whether it's architecting a role-based lending system with Aadhaar authentication or engineering
                an NRI property and eldercare management mobile app live on Google Play and Apple App Store,
                I take pride in high quality code, clear documentation, and proactive problem solving.
              </p>
            </div>

            {/* Core Strengths Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem'
            }}>
              {keyStrengths.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}
                >
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.25rem'
                  }}>
                    {item.icon}
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Extracurricular & Languages Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem'
            }}>
              {/* Extracurricular Card */}
              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                  <Users className="text-purple-600" size={20} />
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a' }}>
                    Leadership & Extracurricular
                  </h4>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {extracurricular.map((item, i) => (
                    <div key={i} style={{ borderLeft: '3px solid #8b5cf6', paddingLeft: '0.75rem' }}>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1e293b' }}>
                        {item.role}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                        {item.organization} ({item.period})
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#475569', marginTop: '0.2rem' }}>
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages Card */}
              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                  <Globe className="text-cyan-600" size={20} />
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a' }}>
                    Language Proficiencies
                  </h4>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {languages.map((lang, i) => (
                    <div key={i}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.25rem' }}>
                        <span>{lang.name}</span>
                        <span style={{ fontSize: '0.78rem', color: '#0891b2' }}>{lang.level}</span>
                      </div>
                      <div style={{ height: '6px', borderRadius: '9999px', backgroundColor: '#e2e8f0', overflow: 'hidden' }}>
                        <div
                          style={{
                            height: '100%',
                            width: `${(lang.stars / 5) * 100}%`,
                            background: 'linear-gradient(90deg, #06b6d4, #2563eb)',
                            borderRadius: '9999px'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .about-grid-layout {
            grid-template-columns: 320px 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
