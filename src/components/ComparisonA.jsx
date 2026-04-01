import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const rows = [
  {
    category: 'Cost',
    template: 'Monthly subscription — you pay as long as the site exists',
    custom: 'One-time investment — you pay once and it\'s yours',
  },
  {
    category: 'Design',
    template: 'Choose from shared templates used by thousands of other sites',
    custom: 'Designed from scratch around your brand and your audience',
  },
  {
    category: 'Ownership',
    template: 'Your content lives on their platform, under their terms',
    custom: 'You own everything — the code, the content, the data',
  },
  {
    category: 'Flexibility',
    template: 'Customize within the platform\'s boundaries',
    custom: 'No boundaries — built to do exactly what your business needs',
  },
  {
    category: 'Support',
    template: 'Submit a ticket and wait for someone who\'s never seen your site',
    custom: 'Call the person who designed and built it',
  },
  {
    category: 'Portability',
    template: 'Leave the platform, start over from scratch',
    custom: 'Take it anywhere — it\'s your code and your product.',
  },
]

const ComparisonA = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section style={{
      padding: 'clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 4rem)',
      background: '#060B18',
      position: 'relative',
    }}>
      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 5vw, 5rem)', maxWidth: '700px', margin: '0 auto' }}>
        <motion.p
          style={{
            fontSize: '0.875rem', color: '#007ed8', letterSpacing: '0.15em',
            textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem',
          }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          A Different Approach
        </motion.p>
        <motion.h2
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700,
            color: '#F5F5F7', lineHeight: 1.2, marginBottom: '1.25rem',
          }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
        >
          Two ways to build a website
        </motion.h2>
        <motion.p
          style={{
            fontSize: '1.05rem', color: '#cbd1dc', lineHeight: 1.7,
            maxWidth: '550px', margin: '0 auto',
            marginBottom: 'clamp(3rem, 5vw, 5rem)',
          }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
        >
          Template platforms work well for some. But if you want something built for your business
          that you actually own, here&apos;s what that looks like.
        </motion.p>
      </div>

      {/* Desktop: table layout */}
      {!isMobile && (
        <motion.div
          style={{
            maxWidth: '1000px', margin: '0 auto',
            background: 'rgba(10, 15, 30, 0.6)',
            backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.06)',
            overflow: 'hidden', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          }}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div style={{
            display: 'grid', gridTemplateColumns: '140px 1fr 1fr',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            background: 'rgba(255, 255, 255, 0.02)',
          }}>
            <div style={{ padding: '1.25rem 1.5rem' }} />
            <div style={{
              padding: '1.25rem 1.5rem', fontSize: '0.8rem', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B',
              borderLeft: '1px solid rgba(255, 255, 255, 0.04)',
            }}>
              Template Platforms
            </div>
            <div style={{
              padding: '1.25rem 1.5rem', fontSize: '0.8rem', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase', color: '#007ed8',
              borderLeft: '1px solid rgba(255, 255, 255, 0.04)',
            }}>
              What I Build
            </div>
          </div>

          {rows.map((row, i) => (
            <div key={row.category} style={{
              display: 'grid', gridTemplateColumns: '140px 1fr 1fr',
              borderBottom: i < rows.length - 1 ? '1px solid rgba(255, 255, 255, 0.04)' : 'none',
              transition: 'background 0.3s ease',
            }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{
                padding: '1.25rem 1.5rem', fontSize: '0.85rem', fontWeight: 600,
                color: '#d4d7dc', display: 'flex', alignItems: 'center',
              }}>{row.category}</div>
              <div style={{
                padding: '1.25rem 1.5rem', fontSize: '0.95rem', color: '#6d7a8d',
                lineHeight: 1.6, borderLeft: '1px solid rgba(255, 255, 255, 0.04)',
                display: 'flex', alignItems: 'center',
              }}>{row.template}</div>
              <div style={{
                padding: '1.25rem 1.5rem', fontSize: '0.95rem', color: '#e2e7ed',
                lineHeight: 1.6, borderLeft: '1px solid rgba(255, 255, 255, 0.04)',
                display: 'flex', alignItems: 'center',
              }}>{row.custom}</div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Mobile: stacked cards */}
      {isMobile && (
        <div style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {rows.map((row, i) => (
            <motion.div
              key={row.category}
              style={{
                background: 'rgba(10, 15, 30, 0.6)',
                backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
                borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.06)',
                padding: '1.25rem 1.5rem', overflow: 'hidden',
              }}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
            >
              <p style={{
                fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: '#007ed8', marginBottom: '1rem',
              }}>{row.category}</p>

              <div style={{
                padding: '0.75rem 1rem',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.04)',
                marginBottom: '0.75rem',
              }}>
                <p style={{ fontSize: '0.7rem', fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>Template Platforms</p>
                <p style={{ fontSize: '0.95rem', color: '#7d8a9d', lineHeight: 1.6 }}>{row.template}</p>
              </div>

              <div style={{
                padding: '0.75rem 1rem',
                background: 'rgba(0, 126, 216, 0.04)',
                borderRadius: '10px',
                border: '1px solid rgba(0, 126, 216, 0.08)',
              }}>
                <p style={{ fontSize: '0.7rem', fontWeight: 600, color: '#007ed8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>Custom Built</p>
                <p style={{ fontSize: '0.95rem', color: '#e2e7ed', lineHeight: 1.6 }}>{row.custom}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  )
}

export default ComparisonA
