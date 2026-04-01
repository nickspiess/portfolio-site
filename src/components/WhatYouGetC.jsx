import React from 'react'
import { motion } from 'framer-motion'
import { Hammer, KeyRound, Handshake } from 'lucide-react'

/**
 * WHAT YOU GET — VARIANT C: "Three Pillars"
 *
 * Groups deliverables into three categories:
 *   1. What I Build  (craft & code)
 *   2. What You Own  (infrastructure & data)
 *   3. How We Stay Connected  (support & relationship)
 *
 * Three glassmorphic columns with clear separation.
 */

const pillars = [
  {
    icon: Hammer,
    label: 'What I Build',
    headline: 'The Craft',
    items: [
      { title: 'Custom design', desc: 'Tailored to your brand — not a reskinned template' },
      { title: 'Content management', desc: 'A custom CMS so you can edit text, images, and pages yourself' },
      { title: 'SEO foundation', desc: 'Meta tags, structured data, performance — the technical groundwork' },
      { title: 'Responsive on every screen', desc: 'Phones, tablets, laptops, desktops — all covered' },
    ],
  },
  {
    icon: KeyRound,
    label: 'What You Own',
    headline: 'The Keys',
    items: [
      { title: 'Your codebase', desc: 'The complete source code, documented and organized' },
      { title: 'Your domain', desc: 'Registered in your name, under your account' },
      { title: 'Your analytics', desc: 'Google Analytics or equivalent, fully connected' },
      { title: 'Your data', desc: 'Customer info, form submissions, content — all yours' },
    ],
  },
  {
    icon: Handshake,
    label: 'How We Stay Connected',
    headline: 'The Relationship',
    items: [
      { title: 'A walkthrough', desc: 'Hands-on training so you know how everything works' },
      { title: '30 days of support', desc: 'Bug fixes and adjustments after launch, on me' },
      { title: 'A direct line', desc: 'When you need changes, reach out — no tickets, no agencies' },
      { title: 'Fast turnaround', desc: 'I built your system, so I can move quickly when things come up' },
    ],
  },
]

const WhatYouGetC = () => {
  return (
    <section style={{
      padding: 'clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 4rem)',
      background: '#060B18',
      position: 'relative',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
        <motion.p
          style={{
            fontSize: '0.875rem', color: '#007ed8', letterSpacing: '0.15em',
            textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem',
          }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          What You Get
        </motion.p>
        <motion.h2
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700,
            color: '#F5F5F7', lineHeight: 1.2, marginBottom: '1.25rem',
          }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
        >
          The craft, the keys, and the relationship
        </motion.h2>
        <motion.p
          style={{
            fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.7,
            maxWidth: '540px', margin: '0 auto',
          }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
        >
          A project with me is three things: quality work, full ownership,
          and a builder who stays in your corner.
        </motion.p>
      </div>

      {/* Three pillars */}
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.5rem',
      }}>
        {pillars.map((pillar, pi) => {
          const Icon = pillar.icon
          return (
            <motion.div
              key={pillar.label}
              style={{
                background: 'rgba(10, 15, 30, 0.6)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + pi * 0.1 }}
            >
              {/* Pillar header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '0.5rem',
              }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '12px',
                  background: 'rgba(0, 126, 216, 0.08)',
                  border: '1px solid rgba(0, 126, 216, 0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={18} color="#FFFFFF" strokeWidth={1.5} />
                </div>
                <p style={{
                  fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: '#007ed8',
                }}>
                  {pillar.label}
                </p>
              </div>

              <p style={{
                fontSize: '1.25rem', fontWeight: 600, color: '#F5F5F7',
                marginBottom: '1.5rem',
              }}>
                {pillar.headline}
              </p>

              {/* Accent line */}
              <div style={{
                width: '40px', height: '2px', borderRadius: '1px',
                background: 'linear-gradient(90deg, rgba(0, 126, 216, 0.5), transparent)',
                marginBottom: '1.5rem',
              }} />

              {/* Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {pillar.items.map((item, ii) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + pi * 0.1 + ii * 0.06 }}
                  >
                    <p style={{
                      fontSize: '0.95rem', fontWeight: 600, color: '#c1c7d1',
                      marginBottom: '0.2rem',
                    }}>
                      {item.title}
                    </p>
                    <p style={{
                      fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.5,
                    }}>
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default WhatYouGetC
