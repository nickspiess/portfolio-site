import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import PricingSection from '../components/PricingSection';
import Head from 'next/head';
import StructuredData from './StructuredData';
import Holistic from '../../public/images/Holistic.png';
import { useRouter } from 'next/router';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const services = [
  {
    title: 'Web Design & Development',
    description: 'From sleek interfaces to robust architectures — custom-built sites you fully own.',
  },
  {
    title: 'Mobile Apps',
    description: 'Native-feeling mobile experiences for Android and iOS, tailored to your audience.',
  },
  {
    title: 'Cloud Services',
    description: 'Secure, scalable cloud infrastructure customized to your operations.',
  },
  {
    title: 'SEO',
    description: 'Proven strategies to improve rankings, drive organic traffic, and boost engagement.',
  },
  {
    title: 'E-Commerce',
    description: 'Full-stack storefronts with secure payments and conversion-optimized UX.',
  },
  {
    title: 'Maintenance',
    description: 'Ongoing support, updates, and performance monitoring to keep you running.',
  },
];

const steps = [
  { num: '01', title: 'Discovery', desc: 'Understanding your business, goals, and target audience.' },
  { num: '02', title: 'Strategy', desc: 'Creating a comprehensive plan for your digital success.' },
  { num: '03', title: 'Development', desc: 'Building your solution with cutting-edge technology.' },
  { num: '04', title: 'Growth', desc: 'Ongoing optimization and scaling for continued success.' },
];

/* Custom SVG icons for benefits */
const BookSvg = () => (
  <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#60a5fa" /><stop offset="100%" stopColor="#a78bfa" /></linearGradient></defs>
    <path d="M6 8C6 6.89543 6.89543 6 8 6H17C18.1046 6 19 6.89543 19 8V33C19 33.5523 18.5523 34 18 34H8C6.89543 34 6 33.1046 6 32V8Z" stroke="url(#bookGrad)" strokeWidth="2" fill="none"/>
    <path d="M34 8C34 6.89543 33.1046 6 32 6H23C21.8954 6 21 6.89543 21 8V33C21 33.5523 21.4477 34 22 34H32C33.1046 34 34 33.1046 34 32V8Z" stroke="url(#bookGrad)" strokeWidth="2" fill="none"/>
    <path d="M20 7V34" stroke="url(#bookGrad)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 13H16" stroke="url(#bookGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
    <path d="M10 17H15" stroke="url(#bookGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <path d="M10 21H14" stroke="url(#bookGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
    <path d="M24 13H30" stroke="url(#bookGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
    <path d="M24 17H29" stroke="url(#bookGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <path d="M24 21H28" stroke="url(#bookGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
  </svg>
);

const BrandSvg = () => (
  <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#f472b6" /><stop offset="100%" stopColor="#818cf8" /></linearGradient></defs>
    <circle cx="20" cy="20" r="14" stroke="url(#brandGrad)" strokeWidth="2" fill="none"/>
    <circle cx="20" cy="20" r="5" fill="url(#brandGrad)" opacity="0.3"/>
    <path d="M20 6V10" stroke="url(#brandGrad)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 30V34" stroke="url(#brandGrad)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M6 20H10" stroke="url(#brandGrad)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M30 20H34" stroke="url(#brandGrad)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10.1 10.1L12.9 12.9" stroke="url(#brandGrad)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M27.1 27.1L29.9 29.9" stroke="url(#brandGrad)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M29.9 10.1L27.1 12.9" stroke="url(#brandGrad)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12.9 27.1L10.1 29.9" stroke="url(#brandGrad)" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="20" cy="20" r="2" fill="url(#brandGrad)"/>
  </svg>
);

const DevSvg = () => (
  <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="devGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#34d399" /><stop offset="100%" stopColor="#60a5fa" /></linearGradient></defs>
    <path d="M14 13L7 20L14 27" stroke="url(#devGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26 13L33 20L26 27" stroke="url(#devGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 8L17 32" stroke="url(#devGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    <circle cx="11" cy="8" r="2.5" stroke="url(#devGrad)" strokeWidth="1.5" fill="none" opacity="0.4"/>
    <circle cx="29" cy="32" r="2.5" stroke="url(#devGrad)" strokeWidth="1.5" fill="none" opacity="0.4"/>
  </svg>
);

const GrowSvg = () => (
  <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="growGrad" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#34d399" /><stop offset="100%" stopColor="#a3e635" /></linearGradient></defs>
    <path d="M20 34V18" stroke="url(#growGrad)" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M20 22C16 22 12 18 12 14C16 14 20 18 20 22Z" stroke="url(#growGrad)" strokeWidth="2" fill="url(#growGrad)" fillOpacity="0.15"/>
    <path d="M20 16C24 16 28 12 28 8C24 8 20 12 20 16Z" stroke="url(#growGrad)" strokeWidth="2" fill="url(#growGrad)" fillOpacity="0.15"/>
    <path d="M20 28C17 28 14 25 14 22" stroke="url(#growGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    <circle cx="20" cy="34" r="2" fill="url(#growGrad)" opacity="0.5"/>
    <path d="M15 34H25" stroke="url(#growGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
  </svg>
);

const benefits = [
  { title: 'Your Story', desc: 'We dive deep into your history, niche, and vision to craft a digital narrative that authentically represents your unique journey.', Icon: BookSvg },
  { title: '360° Brand Design', desc: 'From design, to SEO, and to marketing, we build your entire online presence as a cohesive brand experience.', Icon: BrandSvg },
  { title: 'Integrative Development', desc: 'Custom-fitted solutions using diverse tools and technologies that perfectly align with your business needs.', Icon: DevSvg },
  { title: 'Continuous Growth', desc: 'Ongoing support, iterative improvements, and design evolution that keeps your brand ahead of the curve.', Icon: GrowSvg },
];

const Services = () => {
  const router = useRouter();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Spiess Technologies",
    "url": "https://spiess.tech/services",
    "description": "Learn about the services to maximize your digital footprint.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "995 Cobblestone Drive",
      "addressLocality": "Highlands Ranch",
      "addressRegion": "CO",
      "postalCode": "80126",
      "addressCountry": "US",
    },
  };

  return (
    <>
      <Head>
        <title>Spiess Tech Services</title>
        <meta name="description" content='Our services to expand your digital footprint.' />
        <meta property="og:title" content="Spiess Tech Services" />
        <meta property="og:description" content='Our services to expand your digital footprint.' />
        <meta property="og:image" content={'/images/Logo.png'} />
        <meta property="og:url" content={`https://spiess.tech/Services`} />
        <meta name="robots" content="index,follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Spiess Technologies Services" />
        <meta name="twitter:description" content='Our services to expand your digital footprint.' />
        <meta name="twitter:image" content={'/images/Logo.png'} />
        <link rel="canonical" href={`https://spiess.tech/Services`} />
      </Head>
      <StructuredData data={structuredData} />
      <Navbar />

      <div style={{ background: '#0a1120', minHeight: '100vh', overflowX: 'hidden' }}>

        {/* ── Hero (compact) ── */}
        <section style={{
          position: 'relative', height: '50vh', minHeight: '360px', overflow: 'hidden',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <video autoPlay muted loop playsInline style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0,
          }}>
            <source src="videos/ServicesBackground.mp4" type="video/mp4" />
          </video>
          <div style={{
            position: 'absolute', inset: 0, zIndex: 1,
            background: 'linear-gradient(to bottom, rgba(10, 17, 32, 0.5) 0%, rgba(10, 17, 32, 0.85) 100%)',
          }} />
          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 1.5rem' }}>
            <motion.h1 {...fade(0)} style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 700, color: '#F5F5F7',
              lineHeight: 1.15, marginBottom: '1.25rem',
            }}>
              Holistic Web Solutions<br />for your Craft
            </motion.h1>
            <motion.div {...fade(0.2)}>
              <button onClick={() => router.push('/Contact')} style={{
                padding: '0.8rem 2rem', fontSize: '0.95rem', fontWeight: 600,
                color: '#F5F5F7', background: 'rgba(0, 126, 216, 0.12)',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(0, 126, 216, 0.3)', borderRadius: '12px',
                cursor: 'pointer', transition: 'all 0.3s ease',
              }}>
                Schedule Services
              </button>
            </motion.div>
          </div>
        </section>

        {/* ── Holistic Section (primary) ── */}
        <section style={{ padding: 'clamp(5rem, 8vw, 8rem) clamp(1rem, 4vw, 4rem)' }}>
          {/* 4 benefit pillars across the top */}
          <div style={{
            maxWidth: '1100px', margin: '0 auto',
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem',
            marginBottom: 'clamp(3rem, 5vw, 5rem)',
          }}>
            {benefits.map((b, i) => (
              <motion.div key={b.title} {...fade(0.1 + i * 0.08)} style={{
                padding: '1.75rem 1.25rem',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.06)',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 0.75rem',
                }}>
                  <b.Icon />
                </div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#F5F5F7', marginBottom: '0.35rem' }}>
                  {b.title}
                </h4>
                <p style={{ fontSize: '0.8rem', color: '#94A3B8', lineHeight: 1.5 }}>
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Infographic + Why Holistic — side by side, infographic on right */}
          <div style={{
            maxWidth: '1000px', margin: '0 auto',
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center',
          }}>
            <motion.div {...fade(0.2)}>
              <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, color: '#F5F5F7', marginBottom: '1rem' }}>
                Why Holistic?
              </h3>
              <p style={{ fontSize: '1rem', color: '#c6cacf', lineHeight: 1.8, marginBottom: '2rem' }}>
                We don&apos;t just build websites — we get to know you, your story, and what makes you and your service unique.
              </p>
              <p style={{ fontSize: '1rem', color: '#c6cacf', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                Every element works together seamlessly to deliver exceptional results for your business.
              </p>

              {/* CTAs inline */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/consultation" style={{ textDecoration: 'none' }}>
                  <button style={{
                    padding: '0.8rem 1.75rem', fontSize: '0.9rem', fontWeight: 600,
                    color: '#F5F5F7', background: 'rgba(0, 126, 216, 0.12)',
                    border: '1px solid rgba(0, 126, 216, 0.3)', borderRadius: '12px', cursor: 'pointer',
                  }}>
                    Start your Project
                  </button>
                </Link>
                <Link href="/Portfolio" style={{ textDecoration: 'none' }}>
                  <button style={{
                    padding: '0.8rem 1.75rem', fontSize: '0.9rem', fontWeight: 500,
                    color: '#94A3B8', background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', cursor: 'pointer',
                  }}>
                    View Our Work
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div {...fade(0.25)} style={{
              display: 'flex', justifyContent: 'center',
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.06)',
              padding: '1.5rem',
            }}>
              <Image src={Holistic} alt="Our holistic web development process" width={260} height={520} style={{ borderRadius: '12px' }} />
            </motion.div>
          </div>
        </section>

        {/* ── Our Specialties ── */}
        <section style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1rem, 4vw, 4rem)' }}>
          <motion.h2 {...fade()} style={{
            textAlign: 'center', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700,
            color: '#F5F5F7', marginBottom: 'clamp(3rem, 5vw, 5rem)',
          }}>
            Our Specialties
          </motion.h2>

          <div style={{
            maxWidth: '1100px', margin: '0 auto',
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem',
          }}>
            {services.map((s, i) => (
              <motion.div key={s.title} {...fade(0.1 + i * 0.06)} style={{
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#F5F5F7', marginBottom: '0.5rem' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6 }}>
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Video ── */}
        <section style={{ padding: 'clamp(3rem, 6vw, 6rem) clamp(1rem, 4vw, 4rem)', textAlign: 'center' }}>
          <motion.h3 {...fade()} style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 600, color: '#F5F5F7', marginBottom: '0.75rem',
          }}>
            See Our Process in Action
          </motion.h3>
          <motion.p {...fade(0.1)} style={{
            fontSize: '1rem', color: '#94A3B8', marginBottom: '2.5rem',
          }}>
            Watch how we transform ideas into powerful digital solutions
          </motion.p>
          <motion.div {...fade(0.2)} style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{
              position: 'relative', paddingBottom: '56.25%', borderRadius: '16px', overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}>
              <iframe
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                src="https://www.youtube.com/embed/GfwYdfgk8cc?si=85y9wmkgh2lsMP8c"
                title="Holistic Web Solutions Process"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>
        </section>

        {/* ── Process Steps ── */}
        <section style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 4rem)', textAlign: 'center' }}>
          <motion.h3 {...fade()} style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 600, color: '#F5F5F7', marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
          }}>
            Our 4-Phase Process
          </motion.h3>

          <div style={{
            maxWidth: '1100px', margin: '0 auto',
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem',
          }}>
            {steps.map((s, i) => (
              <motion.div key={s.num} {...fade(0.1 + i * 0.08)} style={{
                padding: '2rem 1.5rem',
                background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.06)',
                textAlign: 'center',
              }}>
                <p style={{ fontSize: '2.5rem', fontWeight: 800, color: 'rgba(0, 126, 216, 0.55)', marginBottom: '0.75rem', lineHeight: 1 }}>
                  {s.num}
                </p>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#F5F5F7', marginBottom: '0.5rem' }}>
                  {s.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Pricing (home page component) ── */}
        <PricingSection />

        <Footer />
      </div>
    </>
  );
};

export default Services;
