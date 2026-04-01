'use client'

import React, { useId } from 'react'
import { motion } from 'framer-motion'

// ═══════════════════════════════════════════════════════════════════════════════
// SHIFTING GRADIENT BACKGROUND
//
// Living, breathing animated gradient with layered blobs, noise texture,
// vignette, shimmer sweep, and floating particles.
//
// Colors derived from the Spiess Technologies logo palette.
// ═══════════════════════════════════════════════════════════════════════════════

const PALETTE = {
  primary: '#1B3F73',
  primaryRgb: '27, 63, 115',

  accent: '#007ed8',
  accentRgb: '0, 126, 216',

  accent2Rgb: '59, 130, 246',

  background: '#060B18',

  text: '#F5F5F7',
  textMuted: '#94A3B8',
}

function NoiseOverlay({ opacity = 0.035 }) {
  const filterId = useId()
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{ opacity, mixBlendMode: 'overlay' }}
    >
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id={filterId}>
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter={`url(#${filterId})`} />
      </svg>
    </div>
  )
}

function GradientBlob({ color, size, initialX, initialY, duration, delay, blurAmount }) {
  return (
    <motion.div
      className="pointer-events-none absolute rounded-full"
      style={{
        width: size, height: size, left: initialX, top: initialY,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: `blur(${blurAmount})`,
        willChange: 'transform',
      }}
      animate={{
        x: [0, 80, -60, 40, -30],
        y: [0, -50, 70, -80, 30],
        scale: [1, 1.15, 0.9, 1.08, 0.95],
      }}
      transition={{ duration, delay, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
    />
  )
}

function Vignette({ intensity = 0.3 }) {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background: `radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(0, 0, 0, ${intensity}) 100%)`,
      }}
    />
  )
}

function ShimmerSweep() {
  return (
    <motion.div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -left-1/4 top-0 h-full w-1/4"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(${PALETTE.accentRgb}, 0.04), transparent)`,
          transform: 'skewX(-15deg)',
        }}
        animate={{ x: ['0%', '600%'] }}
        transition={{ duration: 12, delay: 3, repeat: Infinity, repeatDelay: 8, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}

export default function ShiftingGradientBg({ className, children }) {
  const p = PALETTE

  const blobs = [
    { color: `rgba(${p.primaryRgb}, 0.35)`, size: '80%', initialX: '-10%', initialY: '-15%', duration: 32, delay: 0, blurAmount: '100px' },
    { color: `rgba(${p.accentRgb}, 0.22)`, size: '65%', initialX: '50%', initialY: '30%', duration: 38, delay: 1.5, blurAmount: '90px' },
    { color: `rgba(${p.accent2Rgb}, 0.18)`, size: '55%', initialX: '25%', initialY: '60%', duration: 42, delay: 3, blurAmount: '110px' },
    { color: `rgba(${p.accentRgb}, 0.12)`, size: '40%', initialX: '65%', initialY: '-5%', duration: 28, delay: 5, blurAmount: '70px' },
    { color: `rgba(${p.primaryRgb}, 0.2)`, size: '50%', initialX: '70%', initialY: '70%', duration: 35, delay: 2, blurAmount: '120px' },
  ]

  return (
    <div
      className={`relative overflow-hidden ${className ?? ''}`}
      style={{ backgroundColor: p.background }}
    >
      {/* Base static gradient bed */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            `radial-gradient(ellipse at 25% 20%, rgba(${p.primaryRgb}, 0.18) 0%, transparent 50%)`,
            `radial-gradient(ellipse at 75% 70%, rgba(${p.accentRgb}, 0.12) 0%, transparent 50%)`,
            `radial-gradient(ellipse at 50% 100%, rgba(${p.primaryRgb}, 0.08) 0%, transparent 40%)`,
          ].join(', '),
        }}
      />

      {/* Animated blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {blobs.map((blob, i) => <GradientBlob key={i} {...blob} />)}
      </div>

      {/* Slow-rotating conic gradient interference */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `conic-gradient(from 0deg at 40% 40%, rgba(${p.primaryRgb}, 0.06), rgba(${p.accentRgb}, 0.04), transparent, rgba(${p.primaryRgb}, 0.06))`,
          willChange: 'transform',
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      />

      <ShimmerSweep />
      <NoiseOverlay opacity={0.04} />
      <Vignette intensity={0.25} />

      {/* Edge glow strips */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 sm:w-48"
        style={{ background: `linear-gradient(90deg, rgba(${p.primaryRgb}, 0.06), transparent)` }}
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 sm:w-48"
        style={{ background: `linear-gradient(270deg, rgba(${p.primaryRgb}, 0.06), transparent)` }}
      />

      {/* Top & bottom accent hairlines */}
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent 10%, rgba(${p.accentRgb}, 0.2) 50%, transparent 90%)` }}
      />
      <div className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent 10%, rgba(${p.accentRgb}, 0.2) 50%, transparent 90%)` }}
      />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: i % 3 === 0 ? 3 : 2, height: i % 3 === 0 ? 3 : 2,
              backgroundColor: p.accent,
              left: `${8 + i * 11}%`, top: `${15 + (i % 4) * 20}%`,
              opacity: 0,
            }}
            animate={{ opacity: [0, 0.35, 0], y: [0, -30, -60], scale: [0.4, 1, 0.4] }}
            transition={{ duration: 5 + i * 0.7, delay: i * 1.2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          />
        ))}
      </div>

      {children && <div className="relative z-10">{children}</div>}
    </div>
  )
}

export { PALETTE }
