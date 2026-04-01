import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/images/SpiessTechLogo.png'
import { animateScroll as scroll } from 'react-scroll'
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const socials = [
  { icon: FaGithub, href: 'https://github.com/nickspiess', label: 'GitHub' },
  { icon: FaXTwitter, href: 'https://x.com/realnickspiess', label: 'X' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com/in/realnickspiess', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://instagram.com/realnickspiess', label: 'Instagram' },
  { icon: FaFacebookF, href: 'https://facebook.com/realnickspiess', label: 'Facebook' },
]

const navLinks = [
  { label: 'About', href: '/About' },
  { label: 'Portfolio', href: '/Portfolio' },
  { label: 'Services', href: '/Services' },
  { label: 'Contact', href: '/Contact' },
]

const Footer = () => {
  return (
    <footer style={{
      padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 4rem) clamp(1.5rem, 3vw, 2.5rem)',
      background: 'rgba(6, 11, 24, 0.95)',
      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      position: 'relative',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 'clamp(2rem, 4vw, 3rem)',
        marginBottom: 'clamp(2rem, 4vw, 3rem)',
      }}>
        {/* Brand column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div
            onClick={() => scroll.scrollToTop()}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
          >
            <Image
              src={Logo}
              alt="Spiess Technologies"
              width={36}
              height={36}
              style={{ borderRadius: '50%' }}
            />
            <span style={{
              fontSize: '1rem', fontWeight: 600, color: '#F5F5F7',
              letterSpacing: '-0.01em',
            }}>
              Spiess Technologies
            </span>
          </div>
          <p style={{
            fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6,
            maxWidth: '280px',
          }}>
            Build Something People Remember. Based in Denver, working everywhere.
          </p>
        </div>

        {/* Navigation column */}
        <div>
          <p style={{
            fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: '#475569', marginBottom: '1rem',
          }}>
            Navigation
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} style={{
                fontSize: '0.9rem', color: '#94A3B8', textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Connect column */}
        <div>
          <p style={{
            fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: '#475569', marginBottom: '1rem',
          }}>
            Connect
          </p>
          <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap' }}>
            {socials.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: '36px', height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#94A3B8',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 126, 216, 0.1)'
                    e.currentTarget.style.borderColor = 'rgba(0, 126, 216, 0.25)'
                    e.currentTarget.style.color = '#007ed8'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)'
                    e.currentTarget.style.color = '#94A3B8'
                  }}
                >
                  <Icon size={15} />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        paddingTop: '1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.75rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        <p style={{ fontSize: '0.8rem', color: '#475569' }}>
          &copy; {new Date().getFullYear()} Spiess Technologies. All rights reserved.
        </p>
        <Link href="/consultation" style={{
          fontSize: '0.8rem', color: '#007ed8', textDecoration: 'none',
          fontWeight: 500, transition: 'opacity 0.2s ease',
        }}>
          Start a Project &rarr;
        </Link>
      </div>
    </footer>
  )
}

export default Footer
