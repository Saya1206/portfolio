import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  const iconMap = {
    GraduationCap: <GraduationCap size={20} className="text-blue-600" />,
    BookOpen: <BookOpen size={20} className="text-cyan-600" />,
    Award: <Award size={20} className="text-amber-600" />
  };

  return (
    <section id="education" className="section-wrapper" style={{ backgroundColor: '#ffffff' }}>
      <div className="ambient-blob ambient-blob-3" />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Section Header */}
        <div className="section-header">
          <h2>
            <span className="text-gradient">Education & Academics</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Formal academic background in Computer Science and Engineering with continuous technical advancement.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="timeline-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="timeline-line" />

          {education.map((edu, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-node">
                {iconMap[edu.icon] || <GraduationCap size={16} className="text-blue-600" />}
              </div>

              <div className="glass-card" style={{ padding: '2rem' }}>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  marginBottom: '0.75rem'
                }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>
                      {edu.degree}
                    </h3>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#2563eb', marginTop: '0.2rem' }}>
                      {edu.institution}
                    </h4>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.3rem' }}>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: '#0891b2',
                      backgroundColor: '#ecfeff',
                      padding: '0.2rem 0.65rem',
                      borderRadius: '9999px'
                    }}>
                      <Calendar size={13} />
                      {edu.period}
                    </span>

                    {edu.score && (
                      <span style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: '#059669',
                        backgroundColor: '#ecfdf5',
                        padding: '0.2rem 0.65rem',
                        borderRadius: '9999px',
                        border: '1px solid #a7f3d0'
                      }}>
                        {edu.score}
                      </span>
                    )}

                    {edu.status && (
                      <span style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: '#d97706',
                        backgroundColor: '#fef3c7',
                        padding: '0.2rem 0.65rem',
                        borderRadius: '9999px',
                        border: '1px solid #fde68a'
                      }}>
                        {edu.status}
                      </span>
                    )}
                  </div>
                </div>

                <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.65 }}>
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
