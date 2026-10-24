import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="section-wrapper" style={{ backgroundColor: '#f8fafc' }}>
      <div className="ambient-blob ambient-blob-2" />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Section Header */}
        <div className="section-header">
          <h2>
            <span className="text-gradient">Professional Experience</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Demonstrated career track in engineering scalable web platforms, shipping cross-platform mobile apps, and managing production releases.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="timeline-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="timeline-line" />

          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              {/* Glowing Node */}
              <div className="timeline-node">
                <Briefcase size={14} className="text-blue-600" />
              </div>

              {/* Experience Card */}
              <div className="glass-card" style={{ padding: '2.25rem 2rem' }}>
                {/* Header Row */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  marginBottom: '1rem'
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>
                        {exp.title}
                      </h3>
                      {exp.current && (
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          padding: '0.2rem 0.65rem',
                          borderRadius: '9999px',
                          backgroundColor: '#ecfdf5',
                          color: '#059669',
                          border: '1px solid #a7f3d0'
                        }}>
                          <span style={{
                            width: '7px',
                            height: '7px',
                            borderRadius: '9999px',
                            backgroundColor: '#10b981',
                            animation: 'pulse 1.5s infinite'
                          }} />
                          PRESENT
                        </span>
                      )}
                    </div>

                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: '#2563eb',
                      marginTop: '0.2rem'
                    }}>
                      {exp.company}
                    </h4>
                  </div>

                  {/* Metadata (Period & Location) */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '0.3rem',
                    fontSize: '0.85rem',
                    color: '#64748b'
                  }}>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontWeight: 600,
                      color: '#0891b2',
                      backgroundColor: '#ecfeff',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px'
                    }}>
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p style={{
                  color: '#475569',
                  fontSize: '0.98rem',
                  lineHeight: 1.7,
                  marginBottom: '1.25rem'
                }}>
                  {exp.description}
                </p>

                {/* Key Responsibilities List */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  marginBottom: '1.5rem',
                  paddingLeft: '0.25rem'
                }}>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <CheckCircle2
                        size={17}
                        className="text-cyan-600"
                        style={{ flexShrink: 0, marginTop: '0.2rem' }}
                      />
                      <span style={{ color: '#334155', fontSize: '0.9rem', lineHeight: 1.6 }}>
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.45rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid #f1f5f9'
                }}>
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        backgroundColor: '#eff6ff',
                        color: '#1d4ed8',
                        border: '1px solid #bfdbfe'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
