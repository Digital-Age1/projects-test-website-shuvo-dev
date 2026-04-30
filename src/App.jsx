import { useState } from 'react'
import './App.css'

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
}

const encode = (data) => new URLSearchParams(data).toString()

function App() {
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const validateField = (name, value) => {
    const trimmedValue = value.trim()

    if (name === 'name') {
      if (!trimmedValue) return 'Full Name is required'
      if (trimmedValue.length < 2) return 'Full Name must be at least 2 characters'
    }

    if (name === 'email') {
      if (!trimmedValue) return 'Email Address is required'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
        return 'Please enter a valid email address'
      }
    }

    if (name === 'phone' && trimmedValue && !/^[0-9\s+\-()]+$/.test(trimmedValue)) {
      return 'Phone Number can only include numbers, spaces, +, -, and parentheses'
    }

    if (name === 'subject') {
      if (!trimmedValue) return 'Subject is required'
      if (trimmedValue.length < 3) return 'Subject must be at least 3 characters'
    }

    if (name === 'message') {
      if (!trimmedValue) return 'Message is required'
      if (trimmedValue.length < 10) return 'Message must be at least 10 characters'
    }

    return ''
  }

  const validateForm = () => {
    const nextErrors = {}

    Object.keys(initialFormData).forEach((fieldName) => {
      const error = validateField(fieldName, formData[fieldName])

      if (error) {
        nextErrors[fieldName] = error
      }
    })

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value
    }))

    const fieldError = validateField(name, value)

    setErrors((currentErrors) => {
      if (fieldError) {
        return {
          ...currentErrors,
          [name]: fieldError
        }
      }

      const nextErrors = { ...currentErrors }
      delete nextErrors[name]
      return nextErrors
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitStatus(null)

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: encode({
          'form-name': 'contact',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          'bot-field': ''
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData(initialFormData)
        setErrors({})
      } else {
        console.error('Netlify form submission failed with status:', response.status)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Netlify form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="app-container">
      <section className="form-card" aria-labelledby="contact-title">
        <div className="form-header">
          <p className="eyebrow">Contact Form</p>
          <h1 id="contact-title">Get in Touch</h1>
          <p>
            Send your message using the contact form below. We will respond as soon as possible.
          </p>
        </div>

        {submitStatus === 'success' && (
          <div className="success-message" role="status">
            Thank you! Your message has been sent successfully.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="error-message" role="alert">
            Sorry, your message could not be sent. Please check the console for the Netlify response status and try again.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          noValidate
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" value="" readOnly />

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'input-error' : ''}
                placeholder="Enter your full name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && <span id="name-error" className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email Address <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'input-error' : ''}
                placeholder="Enter your email address"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <span id="email-error" className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? 'input-error' : ''}
                placeholder="Enter your phone number"
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && <span id="phone-error" className="error-text">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">
                Subject <span className="required">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={errors.subject ? 'input-error' : ''}
                placeholder="Enter the subject"
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
              />
              {errors.subject && <span id="subject-error" className="error-text">{errors.subject}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">
              Message <span className="required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'input-error' : ''}
              placeholder="Write your message"
              rows="6"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && <span id="message-error" className="error-text">{errors.message}</span>}
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <p className="required-note">All fields marked * are required.</p>
      </section>
    </main>
  )
}

export default App
