import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Logo from '../../public/images/SpiessTechLogo.png'

const AboutLanding = () => {
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
          About
        </motion.p>
        <motion.h2
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700,
            color: '#F5F5F7', lineHeight: 1.2, marginBottom: '1.25rem',
          }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
        >
          Built for businesses that want to own their platform
        </motion.h2>
        <motion.p
          style={{
            fontSize: '1.05rem', color: '#CBD5E1', lineHeight: 1.7,
            maxWidth: '560px', margin: '0 auto',
          }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
        >
          One developer. Direct communication. No layers between you and the person building your site.
        </motion.p>
      </div>

      {/* Content */}
      <div style={{
        maxWidth: '960px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        gap: 'clamp(2rem, 4vw, 4rem)',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {/* Logo */}
        <motion.div
          style={{
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src={Logo}
            alt="Spiess Technologies"
            width={220}
            height={220}
            style={{
              borderRadius: '50%',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 0 40px rgba(27, 63, 115, 0.3)',
            }}
          />
        </motion.div>

        {/* Text card */}
        <motion.div
          style={{
            flex: '1 1 400px',
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
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p style={{ fontSize: '1.05rem', color: '#E2E8F0', lineHeight: 1.8 }}>
              At Spiess Technologies, I believe small businesses deserve the same quality web presence as the big players — without the agency price tag or the lock-in.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#E2E8F0', lineHeight: 1.8 }}>
              Every project is a partnership. I handle the design, engineering, and technical details. You get a platform you fully own — your code, your domain, your data — with the knowledge to manage it yourself.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#CBD5E1', lineHeight: 1.8 }}>
              Based in Denver, Colorado. Working with businesses everywhere.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutLanding
