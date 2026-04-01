import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { Building2, Rocket, User } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Businesses',
    description: 'Scalable web platforms, e-commerce, and SEO strategies built to grow with your company.',
    features: [
      'Custom web applications',
      'E-commerce solutions',
      'SEO & performance optimization',
      'Ongoing maintenance & support',
    ],
  },
  {
    icon: Rocket,
    title: 'Startups',
    description: 'Ship fast with MVPs and full-stack solutions designed to capture your market from day one.',
    features: [
      'MVP development',
      'Mobile-responsive apps',
      'Launch-ready e-commerce',
      'Growth-focused SEO',
    ],
  },
  {
    icon: User,
    title: 'Individuals',
    description: 'Personal portfolios, blogs, and brand sites that turn your expertise into a professional presence.',
    features: [
      'Portfolio & personal sites',
      'Blog platforms',
      'Personal brand optimization',
      'Content management setup',
    ],
  },
]

const ServiceComponent = () => {
  const router = useRouter()

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
          Services
        </motion.p>
        <motion.h2
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700,
            color: '#F5F5F7', lineHeight: 1.2, marginBottom: '1.25rem',
          }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
        >
          Solutions for every stage
        </motion.h2>
        <motion.p
          style={{
            fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.7,
            maxWidth: '560px', margin: '0 auto',
          }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
        >
          Whether you're launching, growing, or establishing your personal brand — every project is custom-built and fully yours.
        </motion.p>
      </div>

      {/* Service cards */}
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.5rem',
      }}>
        {services.map((service, i) => {
          const Icon = service.icon
          return (
            <motion.div
              key={service.title}
              style={{
                background: 'rgba(10, 15, 30, 0.6)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
                display: 'flex',
                flexDirection: 'column',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            >
              {/* Icon + label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '12px',
                  background: 'rgba(0, 126, 216, 0.08)',
                  border: '1px solid rgba(0, 126, 216, 0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={18} color="#FFFFFF" strokeWidth={1.5} />
                </div>
                <p style={{
                  fontSize: '1.15rem', fontWeight: 600, color: '#F5F5F7',
                }}>
                  {service.title}
                </p>
              </div>

              {/* Description */}
              <p style={{
                fontSize: '0.95rem', color: '#94A3B8', lineHeight: 1.6,
                marginBottom: '1.5rem',
              }}>
                {service.description}
              </p>

              {/* Accent line */}
              <div style={{
                width: '40px', height: '2px', borderRadius: '1px',
                background: 'linear-gradient(90deg, rgba(0, 126, 216, 0.5), transparent)',
                marginBottom: '1.5rem',
              }} />

              {/* Features list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', flex: 1 }}>
                {service.features.map((feature) => (
                  <div key={feature} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <div style={{
                      width: '6px', height: '6px', borderRadius: '50%',
                      background: '#475569', flexShrink: 0,
                    }} />
                    <p style={{ fontSize: '0.9rem', color: '#CBD5E1', lineHeight: 1.4 }}>
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                onClick={() => router.push('/Services')}
                style={{
                  width: '100%',
                  padding: '0.75rem 1.5rem',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: '#CBD5E1',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  cursor: 'pointer',
                }}
                whileHover={{
                  scale: 1.02,
                  color: '#F5F5F7',
                  borderColor: 'rgba(255, 255, 255, 0.25)',
                  background: 'rgba(255, 255, 255, 0.08)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default ServiceComponent
