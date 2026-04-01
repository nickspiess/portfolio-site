import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const galleries = {
  adventures: [
    { src: '/images/adventures/NearSneffels.jpeg' },
    { src: '/images/adventures/MountainGarden.jpeg' },
    { src: '/images/adventures/BlueMesa.jpeg' },
    { src: '/images/adventures/Elbert.jpg' },
    { src: '/images/adventures/SneffelsLakes.jpeg' },
  ],
  running: [
    { src: '/images/running/Bell.JPG' },
    { src: '/images/running/AppletonFinish.jpeg' },
    { src: '/images/running/Smilin.jpeg', position: 'center 30%' },
  ],
  jiuJitsu: [
    { src: '/images/jiu-jitsu/Cheesin.jpg' },
    { src: '/images/jiu-jitsu/DoubleLeg.jpeg' },
    { src: '/images/jiu-jitsu/Gold.jpeg' },
    { src: '/images/jiu-jitsu/HalfGuard.jpg' },
    { src: '/images/jiu-jitsu/WiscoGold.jpeg' },
  ],
}

const galleryLabels = {
  adventures: 'Adventures',
  running: 'Running',
  jiuJitsu: 'Jiu Jitsu',
}

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedGallery, setSelectedGallery] = useState('adventures')
  const [direction, setDirection] = useState(1)

  const images = galleries[selectedGallery]

  const changeImage = (dir) => {
    setDirection(dir === 'next' ? 1 : -1)
    setCurrentIndex((prev) =>
      dir === 'next'
        ? (prev + 1) % images.length
        : (prev - 1 + images.length) % images.length
    )
  }

  const changeGallery = (gallery) => {
    if (gallery === selectedGallery) return
    setDirection(1)
    setSelectedGallery(gallery)
    setCurrentIndex(0)
  }

  useEffect(() => {
    const timer = setInterval(() => changeImage('next'), 6000)
    return () => clearInterval(timer)
  }, [currentIndex, selectedGallery])

  return (
    <section style={{
      padding: 'clamp(2rem, 6vw, 5rem) clamp(1rem, 4vw, 4rem)',
      position: 'relative',
      width: '100%',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
        <motion.p
          style={{
            fontSize: '0.875rem', color: '#007ed8', letterSpacing: '0.15em',
            textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem',
          }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          Life Outside the Code
        </motion.p>
        <motion.h2
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700,
            color: '#F5F5F7', lineHeight: 1.2,
          }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
        >
          A little glimpse into my world
        </motion.h2>
      </div>

      {/* Gallery */}
      <motion.div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Category tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.25rem',
          marginBottom: '1.5rem',
          background: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '12px',
          padding: '4px',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          width: 'fit-content',
          margin: '0 auto 1.5rem',
        }}>
          {Object.keys(galleries).map((gallery) => (
            <button
              key={gallery}
              onClick={() => changeGallery(gallery)}
              style={{
                padding: '0.5rem 1.25rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.03em',
                color: selectedGallery === gallery ? '#060B18' : '#64748B',
                background: selectedGallery === gallery
                  ? 'linear-gradient(135deg, #007ed8, #3B82F6)'
                  : 'transparent',
                border: 'none',
                borderRadius: '9px',
                cursor: 'pointer',
                transition: 'color 0.2s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {galleryLabels[gallery]}
            </button>
          ))}
        </div>

        {/* Image viewer */}
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}>
          {/* Prev button */}
          <button
            onClick={() => changeImage('prev')}
            aria-label="Previous image"
            style={{
              width: '40px', height: '40px', flexShrink: 0,
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: '#94A3B8',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 126, 216, 0.1)'
              e.currentTarget.style.borderColor = 'rgba(0, 126, 216, 0.25)'
              e.currentTarget.style.color = '#007ed8'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
              e.currentTarget.style.color = '#94A3B8'
            }}
          >
            <ChevronLeft size={18} />
          </button>

          {/* Image frame */}
          <div style={{
            flex: 1,
            aspectRatio: '4 / 3',
            borderRadius: '16px',
            overflow: 'hidden',
            background: 'rgba(10, 15, 30, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            position: 'relative',
          }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                key={`${selectedGallery}-${currentIndex}`}
                src={images[currentIndex].src}
                alt={`${galleryLabels[selectedGallery]} ${currentIndex + 1}`}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  top: 0, left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: images[currentIndex].position || 'center',
                }}
              />
            </AnimatePresence>
          </div>

          {/* Next button */}
          <button
            onClick={() => changeImage('next')}
            aria-label="Next image"
            style={{
              width: '40px', height: '40px', flexShrink: 0,
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: '#94A3B8',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 126, 216, 0.1)'
              e.currentTarget.style.borderColor = 'rgba(0, 126, 216, 0.25)'
              e.currentTarget.style.color = '#007ed8'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
              e.currentTarget.style.color = '#94A3B8'
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dot indicators */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          marginTop: '1.25rem',
        }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i) }}
              aria-label={`Go to image ${i + 1}`}
              style={{
                width: currentIndex === i ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: currentIndex === i ? '#007ed8' : 'rgba(255, 255, 255, 0.12)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default PhotoGallery
