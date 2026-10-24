import React, { useState } from 'react';
import { ExternalLink, Smartphone, Layers, Globe, Shield, Sparkles, X, ChevronRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Mobile Apps', value: 'mobile' },
    { label: 'Full Stack', value: 'fullstack' },
    { label: 'Web Applications', value: 'web' },
  ];

  return (
    <section id="projects" className="section-wrapper" style={{ backgroundColor: '#ffffff' }}>
      <div className="ambient-blob ambient-blob-1" />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Section Header */}
        <div className="section-header">
          <h2>
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            A showcase of production-ready mobile apps on the App Store & Play Store, full-stack enterprise portals, and modern web applications.
          </p>
        </div>

        {/* Filter Navigation */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.65rem',
          justifyContent: 'center',
          marginBottom: '3rem'
        }}>
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              style={{
                padding: '0.6rem 1.45rem',
                borderRadius: '9999px',
                fontSize: '0.9rem',
                fontWeight: 600,
                transition: 'all 0.25s ease',
                backgroundColor: activeFilter === cat.value ? '#2563eb' : '#f8fafc',
                color: activeFilter === cat.value ? '#ffffff' : '#64748b',
                border: activeFilter === cat.value ? '1px solid #2563eb' : '1px solid #e2e8f0',
                boxShadow: activeFilter === cat.value ? '0 4px 14px rgba(37, 99, 235, 0.25)' : 'none'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2rem'
        }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem'
              }}
            >
              <div>
                {/* Header Tag / Badge */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '9999px',
                    backgroundColor: project.featured ? '#ecfeff' : '#f1f5f9',
                    color: project.featured ? '#0891b2' : '#475569',
                    border: project.featured ? '1px solid #a5f3fc' : '1px solid #e2e8f0'
                  }}>
                    {project.tag}
                  </span>

                  <span style={{
                    fontSize: '0.75rem',
                    color: '#94a3b8',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}>
                    {project.category === 'mobile' ? <Smartphone size={14} /> : <Layers size={14} />}
                    {project.category.toUpperCase()}
                  </span>
                </div>

                {/* Project Title */}
                <h3 style={{
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  marginBottom: '0.75rem',
                  lineHeight: 1.3
                }}>
                  {project.title}
                </h3>

                {/* Project Description */}
                <p style={{
                  color: '#475569',
                  fontSize: '0.92rem',
                  lineHeight: 1.65,
                  marginBottom: '1.25rem'
                }}>
                  {project.description}
                </p>

                {/* Feature Highlights Pills */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.4rem',
                  marginBottom: '1.5rem'
                }}>
                  {project.badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.6rem',
                        borderRadius: '6px',
                        backgroundColor: '#f8fafc',
                        color: '#334155',
                        border: '1px solid #e2e8f0'
                      }}
                    >
                      ✓ {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions & Tech Pills */}
              <div>
                {/* Tech Badges */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.4rem',
                  marginBottom: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid #f1f5f9'
                }}>
                  {project.technologies.slice(0, 5).map((t, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.55rem',
                        borderRadius: '9999px',
                        backgroundColor: '#eff6ff',
                        color: '#1d4ed8'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', alignItems: 'center' }}>
                  {/* Google Play link if exists */}
                  {project.playStore && (
                    <a
                      href={project.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.55rem 1rem',
                        borderRadius: '8px',
                        backgroundColor: '#10b981',
                        color: '#ffffff',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        transition: 'opacity 0.2s ease'
                      }}
                    >
                      <Globe size={14} />
                      <span>Google Play</span>
                    </a>
                  )}

                  {/* App Store link if exists */}
                  {project.appStore && (
                    <a
                      href={project.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.55rem 1rem',
                        borderRadius: '8px',
                        backgroundColor: '#0284c7',
                        color: '#ffffff',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        transition: 'opacity 0.2s ease'
                      }}
                    >
                      <Smartphone size={14} />
                      <span>App Store</span>
                    </a>
                  )}

                  {/* Live Demo link if exists */}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.55rem 1rem',
                        borderRadius: '8px',
                        backgroundColor: '#2563eb',
                        color: '#ffffff',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        transition: 'opacity 0.2s ease'
                      }}
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {/* GitHub link if exists */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.55rem 1rem',
                        borderRadius: '8px',
                        backgroundColor: '#1e293b',
                        color: '#ffffff',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        transition: 'opacity 0.2s ease'
                      }}
                    >
                      <GithubIcon size={14} />
                      <span>Code</span>
                    </a>
                  )}

                  {/* View Details modal button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      padding: '0.55rem 0.9rem',
                      borderRadius: '8px',
                      backgroundColor: '#f1f5f9',
                      color: '#334155',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      marginLeft: 'auto'
                    }}
                  >
                    <span>Details</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div style={{
              padding: '1.75rem 2rem',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'linear-gradient(135deg, #f8fafc, #eff6ff)'
            }}>
              <div>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#2563eb',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {selectedProject.tag}
                </span>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', marginTop: '0.2rem' }}>
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '9999px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#64748b'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '2rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.75rem' }}>
                Architecture & Implementation Details
              </h4>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                {selectedProject.longDescription}
              </p>

              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.75rem' }}>
                Technologies Used
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                {selectedProject.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      padding: '0.35rem 0.85rem',
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

              {/* Action Links inside Modal */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {selectedProject.playStore && (
                  <a
                    href={selectedProject.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shimmer-btn"
                    style={{
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      color: '#ffffff',
                      fontSize: '0.88rem'
                    }}
                  >
                    <Globe size={16} />
                    <span>View on Google Play</span>
                  </a>
                )}
                {selectedProject.appStore && (
                  <a
                    href={selectedProject.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shimmer-btn"
                    style={{
                      background: 'linear-gradient(135deg, #0284c7, #0369a1)',
                      color: '#ffffff',
                      fontSize: '0.88rem'
                    }}
                  >
                    <Smartphone size={16} />
                    <span>View on App Store</span>
                  </a>
                )}
                {selectedProject.liveDemo && (
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shimmer-btn"
                    style={{
                      background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                      color: '#ffffff',
                      fontSize: '0.88rem'
                    }}
                  >
                    <ExternalLink size={16} />
                    <span>Open Live Demo</span>
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1.4rem',
                      borderRadius: '9999px',
                      backgroundColor: '#1e293b',
                      color: '#ffffff',
                      fontSize: '0.88rem',
                      fontWeight: 600
                    }}
                  >
                    <GithubIcon size={16} />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
