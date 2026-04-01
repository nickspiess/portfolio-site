import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

const ContactFormPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})
  const [focused, setFocused] = useState(null)

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_PROCESS_TEMPLATE_ID
  const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID

  const handleInputChange = (e) => {
    const { name: field, value } = e.target
    if (field === 'name') setName(value)
    else if (field === 'email') setEmail(value)
    else if (field === 'phone') setPhone(value)
    else if (field === 'message') setMessage(value)
  }

  const validateInputs = () => {
    const errs = {}
    const nameRegex = /^[a-zA-Z\s]+$/
    if (!name.trim()) errs.name = 'Name is required'
    else if (!nameRegex.test(name)) errs.name = 'Name must contain letters only'
    if (!message.trim()) errs.message = 'Message is required'
    return errs
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validateInputs()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then(() => {
        Swal.fire({ icon: 'success', title: 'Message Sent Successfully' })
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
        setErrors({})
      }, (error) => {
        Swal.fire({ icon: 'error', title: 'Oops, something went wrong', text: error.text })
      })

    e.target.reset()
  }

  const getFieldStyle = (field) => ({
    width: '100%',
    padding: '16px 0',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${
      errors[field]
        ? 'rgba(239, 68, 68, 0.5)'
        : focused === field
          ? 'rgba(0, 126, 216, 0.6)'
          : 'rgba(255, 255, 255, 0.12)'
    }`,
    color: '#F5F5F7',
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  })

  return (
    <section style={{
      padding: 'clamp(8rem, 12vw, 12rem) clamp(1rem, 4vw, 4rem) clamp(4rem, 8vw, 8rem)',
      position: 'relative',
      width: '100%',
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {/* Header */}
        <motion.p
          style={{
            fontSize: '0.8rem', color: '#007ed8', letterSpacing: '0.2em',
            textTransform: 'uppercase', fontWeight: 600, marginBottom: '1.25rem',
          }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          Get in touch
        </motion.p>
        <motion.h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700,
            color: '#F5F5F7', lineHeight: 1.15, marginBottom: '1rem',
          }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
        >
          Let's build something great
        </motion.h2>
        <motion.p
          style={{
            fontSize: '1rem', color: '#CBD5E1', lineHeight: 1.7,
            marginBottom: 'clamp(2.5rem, 4vw, 4rem)',
          }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
        >
          Tell me about your project. I'll get back to you within 24 hours.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={onSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div>
              <label htmlFor="name" style={{
                display: 'block', marginBottom: '0.25rem',
                fontSize: '0.75rem', fontWeight: 500, color: '#64748B',
                letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>Name</label>
              <input
                type="text" id="name" name="name" value={name}
                placeholder="Your name"
                onChange={handleInputChange}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                style={getFieldStyle('name')}
              />
              {errors.name && <p style={{ color: '#F87171', fontSize: '0.8rem', marginTop: '0.4rem' }}>{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" style={{
                display: 'block', marginBottom: '0.25rem',
                fontSize: '0.75rem', fontWeight: 500, color: '#64748B',
                letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>Email</label>
              <input
                type="email" id="email" name="email" value={email}
                placeholder="you@company.com"
                onChange={handleInputChange}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                style={getFieldStyle('email')}
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" style={{
              display: 'block', marginBottom: '0.25rem',
              fontSize: '0.75rem', fontWeight: 500, color: '#64748B',
              letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>Phone</label>
            <input
              type="tel" id="phone" name="phone" value={phone}
              placeholder="(optional)"
              onChange={handleInputChange}
              onFocus={() => setFocused('phone')}
              onBlur={() => setFocused(null)}
              style={getFieldStyle('phone')}
            />
          </div>

          <div>
            <label htmlFor="message" style={{
              display: 'block', marginBottom: '0.25rem',
              fontSize: '0.75rem', fontWeight: 500, color: '#64748B',
              letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>Message</label>
            <textarea
              id="message" name="message" value={message}
              placeholder="Tell me about your project..."
              onChange={handleInputChange}
              onFocus={() => setFocused('message')}
              onBlur={() => setFocused(null)}
              style={{
                ...getFieldStyle('message'),
                minHeight: '140px',
                resize: 'vertical',
              }}
            />
            {errors.message && <p style={{ color: '#F87171', fontSize: '0.8rem', marginTop: '0.4rem' }}>{errors.message}</p>}
          </div>

          <motion.button
            type="submit"
            style={{
              width: '100%',
              padding: '1rem 2rem',
              fontSize: '0.95rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              color: '#F5F5F7',
              background: 'linear-gradient(135deg, #1e3a6e, #3B82F6)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              boxShadow: '0 4px 16px rgba(59, 130, 246, 0.15)',
              borderRadius: '12px',
              cursor: 'pointer',
              marginTop: '0.5rem',
              transition: 'background 0.3s ease, border-color 0.3s ease',
            }}
            whileHover={{
              scale: 1.01,
              boxShadow: '0 6px 24px rgba(59, 130, 246, 0.25)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default ContactFormPage
