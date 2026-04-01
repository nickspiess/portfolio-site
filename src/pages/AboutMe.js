import React from 'react'
import { motion } from 'framer-motion'

const AboutMe = () => {
  return (
    <section style={{
      padding: 'clamp(8rem, 12vw, 12rem) clamp(1rem, 4vw, 4rem) clamp(4rem, 8vw, 6rem)',
      position: 'relative',
      width: '100%',
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
          About
        </motion.p>
        <motion.h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700,
            color: '#F5F5F7', lineHeight: 1.15, marginBottom: '1.25rem',
          }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
        >
          The person behind the code
        </motion.h2>
        <motion.p
          style={{
            fontSize: '1.05rem', color: '#CBD5E1', lineHeight: 1.7,
            maxWidth: '560px', margin: '0 auto',
          }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
        >
          A decade of building software, rooted in the belief that small businesses deserve great technology.
        </motion.p>
      </div>

      {/* Content card */}
      <motion.div
        style={{
          maxWidth: '960px',
          margin: '0 auto',
          background: 'rgba(10, 15, 30, 0.6)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          padding: 'clamp(2rem, 4vw, 3rem)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div style={{
          display: 'flex',
          gap: 'clamp(2rem, 4vw, 3rem)',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          {/* Headshot */}
          <div style={{ flexShrink: 0 }}>
            <img
              src="/images/SpiessHeadshotResize.jpeg"
              alt="Nick Spiess"
              style={{
                width: '220px',
                height: '220px',
                objectFit: 'cover',
                borderRadius: '16px',
                border: '2px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 0 30px rgba(27, 63, 115, 0.2)',
              }}
            />
          </div>

          {/* Text */}
          <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p style={{
              fontSize: '1.25rem', fontWeight: 600, color: '#F5F5F7', lineHeight: 1.4,
            }}>
              Hi, I'm Nick Spiess.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#E2E8F0', lineHeight: 1.8 }}>
              I'm a software developer based near Denver, Colorado with a decade of experience in full-stack development and IT. I believe technology's potential is only limited by our own creative capacity.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#E2E8F0', lineHeight: 1.8 }}>
              Growing up in an entrepreneurial, blue-collar home, I've been inspired by the power of small business. The ability to provide goods and services to our community is what allows us to give back our unique talents to the world around us.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#CBD5E1', lineHeight: 1.8 }}>
              I built Spiess Technologies to give businesses a real digital presence — custom-built, fully owned, no strings attached. Whether you're a painter breaking into the local market or a growing company ready to level up online, I'll build the platform to get you there.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutMe
