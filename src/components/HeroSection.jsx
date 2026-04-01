import React from 'react'
import { motion } from 'framer-motion'
import ShiftingGradientBg from './ShiftingGradientBg'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <ShiftingGradientBg className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-24 md:py-32">

        {/* Logo mark */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/images/Logo.png"
            alt="Spiess Technologies"
            width={102}
            height={84}
            className="rounded-full"
            style={{
              border: '2px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 0 40px rgba(27, 63, 115, 0.4)',
              marginTop: '2rem',
            }}
          />
        </motion.div>

        {/* Main glassmorphic panel */}
        <motion.div
          className="text-center mx-auto"
          style={{
            background: 'rgba(10, 15, 30, 0.5)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 80px rgba(27, 63, 115, 0.08)',
            padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 5rem)',
            maxWidth: '900px',
            marginTop: '0' 
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Tagline */}
          <p
            style={{
              fontSize: '0.85rem',
              fontWeight: 500,
              color: '#007ed8',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            Handmade Digital
          </p>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              color: '#F5F5F7',
              marginBottom: '1.5rem',
            }}
          >
            Build Something People Remember
          </h1>

          {/* Subline */}
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              lineHeight: 1.75,
              color: '#afb9c7',
              maxWidth: '600px',
              margin: '0 auto 2.5rem',
              fontWeight: 400,
            }}
          >
            Captivating websites built for your brand — every transition tuned,
            every detail intentional. No templates, no subscriptions.
            You own the code, the design, and the platform.
          </p>

          {/* Accent line */}
          <div
            style={{
              width: '80px',
              height: '2px',
              margin: '0 auto 2.5rem',
              background: 'linear-gradient(90deg, transparent, rgba(0, 126, 216, 0.6), transparent)',
              borderRadius: '2px',
            }}
          />

          {/* CTAs */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              style={{ cursor: 'pointer' }}
            >
              <motion.button
                style={{
                  padding: '0.875rem 2rem',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#F5F5F7',
                  background: 'linear-gradient(135deg, rgba(27, 63, 115, 0.8), rgba(0, 126, 216, 0.4))',
                  border: '1px solid rgba(0, 126, 216, 0.3)',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  minWidth: '180px',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 4px 16px rgba(0, 126, 216, 0.15)',
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 6px 24px rgba(0, 126, 216, 0.25)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                Start a Project
              </motion.button>
            </ScrollLink>

            <Link href="/Portfolio" style={{ textDecoration: 'none' }}>
              <motion.button
                style={{
                  padding: '0.875rem 2rem',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#94A3B8',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  minWidth: '180px',
                }}
                whileHover={{
                  scale: 1.02,
                  color: '#F5F5F7',
                  borderColor: 'rgba(255, 255, 255, 0.25)',
                  background: 'rgba(255, 255, 255, 0.08)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                See the Work
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Location info */}
        <motion.div
          className="text-center mt-12 pb-16 md:pb-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p style={{
            fontSize: '0.875rem',
            color: '#64748B',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}>
            Based in Denver, Colorado
            <span style={{
              display: 'inline-block',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: '#007ed8',
              margin: '0 12px',
              verticalAlign: 'middle',
            }} />
            Working Everywhere
          </p>
        </motion.div>
      </div>
    </ShiftingGradientBg>
  )
}

export default HeroSection
