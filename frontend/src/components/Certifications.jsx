import React, { useState } from 'react';
import { Award, CheckCircle, ExternalLink, Calendar, ShieldCheck, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certifications" className="section-wrapper" style={{ backgroundColor: '#f8fafc' }}>
      <div className="ambient-blob ambient-blob-1" />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Section Header */}
        <div className="section-header">
          <h2>
            <span className="text-gradient">Professional Certifications</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Industry recognized credentials in Artificial Intelligence, Generative AI models, and Full Stack Engineering.
          </p>
        </div>

        {/* Certifications Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card"
              onClick={() => setActiveCert(cert)}
              style={{
                padding: '2.25rem 2rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Header Icon & Badge */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.25rem'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
                    color: '#2563eb',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.15)'
                  }}>
                    <Award size={24} />
                  </div>

                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    backgroundColor: '#ecfdf5',
                    color: '#059669',
                    border: '1px solid #a7f3d0'
                  }}>
                    {cert.badge}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  marginBottom: '0.4rem',
                  lineHeight: 1.3
                }}>
                  {cert.title}
                </h3>

                <h4 style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#0891b2',
                  marginBottom: '1rem'
                }}>
                  {cert.issuer}
                </h4>

                <p style={{
                  color: '#475569',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  marginBottom: '1.25rem'
                }}>
                  {cert.description}
                </p>
              </div>

              {/* Bottom Footer Info */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '1rem',
                borderTop: '1px solid #f1f5f9',
                fontSize: '0.82rem',
                color: '#64748b'
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Calendar size={14} />
                  Issued {cert.date}
                </span>

                {cert.credentialId && (
                  <span style={{
                    fontFamily: 'monospace',
                    fontSize: '0.75rem',
                    color: '#2563eb',
                    backgroundColor: '#eff6ff',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '4px'
                  }}>
                    ID: {cert.credentialId}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cert Details Modal */}
      {activeCert && (
        <div className="modal-backdrop" onClick={() => setActiveCert(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
            <div style={{
              padding: '1.75rem',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'linear-gradient(135deg, #eff6ff, #f8fafc)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <ShieldCheck size={28} className="text-blue-600" />
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a' }}>
                    Credential Details
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Verified Certification</span>
                </div>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '9999px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#64748b'
                }}
              >
                <X size={16} />
              </button>
            </div>

            <div style={{ padding: '1.75rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #06b6d4, #2563eb)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  boxShadow: '0 8px 24px rgba(37, 99, 235, 0.3)'
                }}>
                  <Award size={36} />
                </div>
                <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.25rem' }}>
                  {activeCert.title}
                </h4>
                <p style={{ color: '#0891b2', fontWeight: 600, fontSize: '0.95rem' }}>
                  {activeCert.issuer}
                </p>
              </div>

              <div style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                fontSize: '0.88rem',
                color: '#334155',
                marginBottom: '1.5rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b' }}>Domain:</span>
                  <strong>{activeCert.category}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b' }}>Date of Issue:</span>
                  <strong>{activeCert.date}</strong>
                </div>
                {activeCert.credentialId && (
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#64748b' }}>Credential ID:</span>
                    <strong style={{ fontFamily: 'monospace' }}>{activeCert.credentialId}</strong>
                  </div>
                )}
              </div>

              <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, textAlign: 'center' }}>
                {activeCert.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
