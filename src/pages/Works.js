import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Works.module.css';

const ACCENT = 'rgb(59, 130, 246)';
const ACCENT_RGB = '59, 130, 246';
const PRIMARY_RGB = '15, 23, 42';

const projects = [
  {
    title: 'Praxis Running',
    description:
      'A full-stack marathon training platform delivering personalized plans and real-time performance analytics. My favorite work so far.',
    image: '/images/praxis-full-dark.png',
    link: 'https://runpraxis.com',
    features: ['Next.js', 'Full-Stack', 'Supabase'],
  },
  {
    title: 'Preece Financial Services',
    description:
      'Custom CMS-powered website giving a financial advisory firm full control over their content. Built with Payload CMS, TypeScript, and React — owned entirely by the client.',
    image: '/images/PreeceFinancialServices.webp',
    link: 'https://www.preecefp.com',
    features: ['Payload CMS', 'TypeScript', 'React'],
  },
  {
    title: 'Wealth Planning Advisors',
    description:
      'Complete brand identity and custom web presence from concept to launch. Designed in Figma, hand-coded, and implemented within WordPress — no page builders.',
    image: '/images/Depth_Large.png',
    link: 'https://www.wpadvisorsgroup.com',
    features: ['Brand Design', 'Figma', 'WordPress'],
    imageInset: '15% 5%',
  },
  {
    title: 'Spiess Carpet Cleaning',
    description:
      'A fast, conversion-optimized web app for a Minnesota-based small business. Built with React and Next.js — lightweight, responsive, and fully owned by the business.',
    image: '/images/logo%20copy.png',
    link: 'https://www.spiesscarpet.com',
    features: ['React', 'Next.js', 'SEO'],
  },
];

const Works = () => {
  return (
    <section id="works" className={styles.mainContainer}>
      <div className={styles.inner}>
        <div className={styles.cardGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.33, 1, 0.68, 1] }}
            >
              <GlassCard item={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

function GlassCard({ item }) {
  const [hovered, setHovered] = useState(false);
  const isTouchRef = React.useRef(false);

  const handleClick = () => {
    // On touch devices, first tap expands, second tap navigates
    if (isTouchRef.current) {
      if (!hovered) {
        setHovered(true);
        return;
      }
    }
    if (item.link) {
      window.open(
        item.link.startsWith('http') ? item.link : `//${item.link}`,
        '_blank',
        'noopener noreferrer'
      );
    }
  };

  // Close card when tapping outside on mobile
  React.useEffect(() => {
    if (!hovered || !isTouchRef.current) return;
    const handleOutside = (e) => {
      if (!e.target.closest(`.${styles.glassCard}`)) {
        setHovered(false);
      }
    };
    document.addEventListener('touchstart', handleOutside);
    return () => document.removeEventListener('touchstart', handleOutside);
  }, [hovered]);

  return (
    <div
      className={styles.glassCard}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => { isTouchRef.current = true; }}
      onClick={handleClick}
      style={{
        border: `1px solid ${hovered ? `rgba(${ACCENT_RGB}, 0.4)` : 'rgba(255, 255, 255, 0.12)'}`,
        boxShadow: hovered
          ? `0 25px 60px rgba(${PRIMARY_RGB}, 0.15), 0 8px 24px rgba(${ACCENT_RGB}, 0.12)`
          : `0 8px 30px rgba(${PRIMARY_RGB}, 0.1), 0 2px 8px rgba(${ACCENT_RGB}, 0.04)`,
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'border-color 0.6s ease, box-shadow 0.6s ease, transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)',
      }}
    >
      {/* Background image */}
      <div
        className={styles.cardBgImage}
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 0.9s cubic-bezier(0.33, 1, 0.68, 1)',
          ...(item.imageInset ? { inset: item.imageInset } : {}),
        }}
      />

      {/* Dark gradient overlay */}
      <div
        className={styles.cardOverlay}
        style={{
          background: hovered
            ? `linear-gradient(
                to top,
                rgba(0, 0, 0, 0.88) 0%,
                rgba(0, 0, 0, 0.55) 35%,
                rgba(0, 0, 0, 0.3) 60%,
                rgba(0, 0, 0, 0.15) 100%
              )`
            : `linear-gradient(
                to top,
                rgba(0, 0, 0, 0.8) 0%,
                rgba(0, 0, 0, 0.45) 35%,
                rgba(0, 0, 0, 0.25) 60%,
                rgba(0, 0, 0, 0.18) 100%
              )`,
          transition: 'background 0.6s ease',
        }}
      />

      {/* Accent color wash on hover */}
      <div
        className={styles.cardOverlay}
        style={{
          background: `linear-gradient(135deg, rgba(${ACCENT_RGB}, 0.15) 0%, transparent 60%)`,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.75s ease',
          pointerEvents: 'none',
        }}
      />


      {/* Feature tags */}
      {item.features && item.features.length > 0 && (
        <div
          className={styles.featureTags}
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateX(0)' : 'translateX(12px)',
            transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
          }}
        >
          {item.features.slice(0, 3).map((feat, fi) => (
            <span
              key={fi}
              className={styles.featureTag}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.55)',
                color: 'rgba(255, 255, 255, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transitionDelay: `${fi * 60}ms`,
              }}
            >
              {feat}
            </span>
          ))}
        </div>
      )}

      {/* Bottom glass content panel */}
      <div
        className={styles.glassPanel}
        style={{
          transform: hovered ? 'translateY(0)' : 'translateY(28px)',
          transition: 'transform 0.75s cubic-bezier(0.33, 1, 0.68, 1)',
        }}
      >
        {/* Glass panel backdrop */}
        <div
          className={styles.glassPanelBg}
          style={{
            backgroundColor: `rgba(0, 0, 0, 0.6)`,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.05)',
            borderRight: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        />

        <div className={styles.glassPanelContent}>
          {/* Accent line above title */}
          <div
            className={styles.accentLine}
            style={{
              backgroundColor: ACCENT,
              opacity: hovered ? 1 : 0.5,
              width: hovered ? '48px' : '32px',
              transition: 'opacity 0.6s ease, width 0.6s ease',
            }}
          />

          <h3 className={styles.cardTitle}>{item.title}</h3>

          <p
            className={styles.cardDescription}
            style={{
              maxHeight: hovered ? '200px' : '0px',
              opacity: hovered ? 1 : 0,
              transition:
                'max-height 0.75s cubic-bezier(0.33, 1, 0.68, 1), opacity 0.6s ease 0.15s',
            }}
          >
            {item.description}
          </p>

          {/* View project indicator */}
          <div
            className={styles.viewMore}
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.6s ease 0.25s, transform 0.6s ease 0.25s',
            }}
          >
            <div
              className={styles.viewMoreLine}
              style={{ backgroundColor: ACCENT }}
            />
            <span className={styles.viewMoreText} style={{ color: ACCENT }}>
              View Project
            </span>
            <svg
              className={styles.viewMoreArrow}
              fill="none"
              viewBox="0 0 24 24"
              stroke={ACCENT}
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Subtle border glow on hover */}
      <div
        className={styles.cardGlow}
        style={{
          boxShadow: `inset 0 0 60px rgba(${ACCENT_RGB}, 0.06)`,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.6s ease',
        }}
      />
    </div>
  );
}

export default Works;
