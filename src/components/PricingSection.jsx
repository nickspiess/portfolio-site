import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { ArrowRight } from 'lucide-react'

/**
 * PRICING SECTION — Reframed around ownership
 *
 * Positions each tier as an investment in something you keep,
 * not a purchase you consume. Emphasizes what transfers to the client.
 */

const tiers = [
  {
    name: 'Foundation',
    price: 'From $4,000',
    tagline: 'For businesses ready to own their online presence',
    description: 'A professional website and a solid brand foundation. You own everything — the code, the domain, the content.',
    includes: [
      '5–7 page custom website',
      'Logo design or refinement',
      'Brand color palette & typography',
      'Mobile-responsive across all devices',
      'SEO setup & domain configuration',
      'CMS so you can manage your own content',
      'Walkthrough & training',
      '30 days post-launch support',
    ],
    accent: false,
  },
  {
    name: 'Atmosphere',
    price: 'From $8,000',
    tagline: 'For businesses ready to stand out and convert',
    description: 'Everything in Foundation, plus a full brand identity, polished animations, and the tools to actually drive traffic.',
    includes: [
      '8–12 page custom website',
      'Full brand identity & guidelines',
      'Custom motion & scroll animations',
      'Blog or content system',
      'Advanced SEO & analytics integration',
      'Social media profile assets',
      'Copywriting collaboration',
      '60 days post-launch support',
    ],
    accent: true,
  },
  {
    name: 'Immersive',
    price: 'From $15,000',
    tagline: 'For businesses where digital is the front door',
    description: 'The full digital buildout — brand strategy, web platform, e-commerce, email, and everything in between.',
    includes: [
      'Complete brand strategy & logo suite',
      'Full-scale web platform',
      'E-commerce or booking system',
      'Email marketing setup & templates',
      'Print-ready collateral designs',
      'Social media content templates',
      'Custom functionality & integrations',
      '90 days support + quarterly check-ins',
    ],
    accent: false,
  },
]

const PricingSection = () => {
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
          Investment
        </motion.p>
        <motion.h2
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700,
            color: '#F5F5F7', lineHeight: 1.2, marginBottom: '1.25rem',
          }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
        >
          One investment. Fully yours.
        </motion.h2>
        <motion.p
          style={{
            fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.7,
            maxWidth: '560px', margin: '0 auto',
          }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
        >
          Every tier includes full ownership — your code, your domain,
          your data. No subscriptions to keep the lights on.
        </motion.p>
      </div>

      {/* Tier cards */}
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.5rem',
        alignItems: 'stretch',
      }}>
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            style={{
              background: 'rgba(10, 15, 30, 0.6)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderRadius: '20px',
              border: tier.accent
                ? '1px solid rgba(0, 126, 216, 0.2)'
                : '1px solid rgba(255, 255, 255, 0.06)',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              boxShadow: tier.accent
                ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 60px rgba(0, 126, 216, 0.05)'
                : '0 8px 32px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
          >
            {/* Popular badge */}
            {tier.accent && (
              <div style={{
                position: 'absolute',
                top: '-1px',
                left: '50%',
                transform: 'translateX(-50%)',
                padding: '0.35rem 1.25rem',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#060B18',
                background: 'linear-gradient(135deg, #007ed8, #3B82F6)',
                borderRadius: '0 0 10px 10px',
              }}>
                Most Popular
              </div>
            )}

            {/* Tier name */}
            <p style={{
              fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: tier.accent ? '#007ed8' : '#64748B',
              marginBottom: '0.75rem',
              marginTop: tier.accent ? '0.75rem' : 0,
            }}>
              {tier.name}
            </p>

            {/* Price */}
            <p style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
              fontWeight: 700,
              color: '#F5F5F7',
              marginBottom: '0.5rem',
            }}>
              {tier.price}
            </p>

            {/* Tagline */}
            <p style={{
              fontSize: '0.9rem', color: '#94A3B8', fontWeight: 500,
              marginBottom: '1.25rem',
            }}>
              {tier.tagline}
            </p>

            {/* Description */}
            <p style={{
              fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6,
              marginBottom: '1.5rem',
            }}>
              {tier.description}
            </p>

            {/* Accent line */}
            <div style={{
              width: '100%', height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.06), transparent)',
              marginBottom: '1.5rem',
            }} />

            {/* Includes list */}
            <div style={{
              display: 'flex', flexDirection: 'column', gap: '0.75rem',
              marginBottom: '2rem', flex: 1,
            }}>
              {tier.includes.map((item) => (
                <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: tier.accent ? '#007ed8' : '#475569',
                    flexShrink: 0, marginTop: '7px',
                  }} />
                  <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.4 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              onClick={() => router.push('/consultation')}
              style={{
                width: '100%',
                padding: '0.875rem 1.5rem',
                fontSize: '0.95rem',
                fontWeight: 500,
                color: tier.accent ? '#060B18' : '#CBD5E1',
                background: tier.accent
                  ? 'linear-gradient(135deg, #007ed8, #3B82F6)'
                  : 'rgba(255, 255, 255, 0.04)',
                border: tier.accent
                  ? 'none'
                  : '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: tier.accent
                  ? '0 6px 24px rgba(0, 126, 216, 0.3)'
                  : '0 4px 16px rgba(255, 255, 255, 0.05)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              Start a Conversation
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Bottom note */}
      <motion.div
        style={{
          textAlign: 'center', marginTop: 'clamp(2.5rem, 4vw, 4rem)',
          maxWidth: '600px', margin: 'clamp(2.5rem, 4vw, 4rem) auto 0',
        }}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p style={{ fontSize: '0.95rem', color: '#94A3B8', lineHeight: 1.7, marginBottom: '0.5rem' }}>
          Every project is different. These starting points give you a frame of reference —
          let&apos;s talk about what your business actually needs.
        </p>
        <p style={{ fontSize: '0.85rem', color: '#475569' }}>
          Payment plans available. No surprise fees.
        </p>
      </motion.div>
    </section>
  )
}

export default PricingSection
