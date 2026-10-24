import React, { useState } from 'react';
import { Code, Smartphone, Server, Database, GitBranch, Brain, Check, Layers, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Code: <Code size={22} />,
  Smartphone: <Smartphone size={22} />,
  Server: <Server size={22} />,
  Database: <Database size={22} />,
  GitBranch: <GitBranch size={22} />,
  Brain: <Brain size={22} />
};

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [activeTab, setActiveTab] = useState('All');

  const filteredCategories = activeTab === 'All'
    ? skillCategories
    : skillCategories.filter((cat) => cat.name.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section id="skills" className="section-wrapper" style={{ backgroundColor: '#f8fafc' }}>
      <div className="ambient-blob ambient-blob-3" />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Section Header */}
        <div className="section-header">
          <h2>
            <span className="text-gradient">My Skills & Expertise</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            A specialized tech stack honed through full-stack web engineering, native-feel mobile releases, and modern software architectures.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.6rem',
          justifyContent: 'center',
          marginBottom: '2.5rem'
        }}>
          {['All', 'Frontend', 'Mobile', 'Backend', 'Databases', 'AI / ML'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '0.55rem 1.35rem',
                borderRadius: '9999px',
                fontSize: '0.88rem',
                fontWeight: 600,
                transition: 'all 0.25s ease',
                backgroundColor: activeTab === tab ? '#2563eb' : '#ffffff',
                color: activeTab === tab ? '#ffffff' : '#64748b',
                border: activeTab === tab ? '1px solid #2563eb' : '1px solid #e2e8f0',
                boxShadow: activeTab === tab ? '0 4px 12px rgba(37, 99, 235, 0.25)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab) {
                  e.currentTarget.style.borderColor = '#93c5fd';
                  e.currentTarget.style.color = '#2563eb';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab) {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.color = '#64748b';
                }
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem'
        }}>
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Category Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
                    color: '#2563eb',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 10px rgba(37, 99, 235, 0.12)'
                  }}>
                    {iconMap[cat.icon] || <Cpu size={22} />}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a' }}>
                      {cat.name}
                    </h3>
                    <span style={{ fontSize: '0.78rem', color: '#64748b' }}>
                      {cat.skills.length} competencies
                    </span>
                  </div>
                </div>

                {/* Skill Bars & Badges */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '0.35rem',
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        color: '#334155'
                      }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <Check size={14} className="text-emerald-500" />
                          {skill.name}
                        </span>
                        <span style={{ fontSize: '0.78rem', color: '#0891b2', fontWeight: 700 }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div style={{
                        height: '7px',
                        backgroundColor: '#f1f5f9',
                        borderRadius: '9999px',
                        overflow: 'hidden'
                      }}>
                        <div
                          style={{
                            height: '100%',
                            width: `${skill.level}%`,
                            background: 'linear-gradient(90deg, #06b6d4, #2563eb)',
                            borderRadius: '9999px',
                            transition: 'width 1s ease'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tag List */}
              <div style={{
                marginTop: '1.5rem',
                paddingTop: '1rem',
                borderTop: '1px solid #f1f5f9',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.35rem'
              }}>
                {cat.skills.slice(0, 4).map((s, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.72rem',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '6px',
                      backgroundColor: '#f8fafc',
                      color: '#475569',
                      border: '1px solid #e2e8f0'
                    }}
                  >
                    #{s.name.split(' ')[0]}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
