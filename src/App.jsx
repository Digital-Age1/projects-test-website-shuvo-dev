import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    botField: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus(null)

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const formPayload = new URLSearchParams()
      formPayload.append('form-name', 'contact')
      formPayload.append('name', formData.name)
      formPayload.append('email', formData.email)
      formPayload.append('phone', formData.phone)
      formPayload.append('subject', formData.subject)
      formPayload.append('message', formData.message)
      formPayload.append('bot-field', formData.botField)

      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formPayload.toString()
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          botField: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="app-container">
      <div className="form-card">
        <div className="form-header">
          <h1>Contact Us</h1>
          <p>Send us a message and we will get back to you soon.</p>
        </div>

        {submitStatus === 'success' && (
          <div className="success-message">
            Thank you! Your message has been sent successfully. We will get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="error-message">
            Sorry, something went wrong. Please try again later.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          name="contact"
          data-netlify="true"
          netlify-honeypot="bot-field"
          noValidate
        >
          <input type="hidden" name="form-name" value="contact" />
          
          <div className="hidden-field" aria-hidden="true">
            <label htmlFor="bot-field">Do not fill this out</label>
            <input 
              type="text" 
              id="bot-field" 
              name="bot-field" 
              tabIndex="-1" 
              autoComplete="off"
              value={formData.botField || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, botField: e.target.value }))}
            />
          </div>

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
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
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
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number (optional)"
            />
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
            />
            {errors.subject && <span className="error-text">{errors.subject}</span>}
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
              placeholder="Enter your message"
              rows="5"
            />
            {errors.message && <span className="error-text">{errors.message}</span>}
          </div>

          <button 
            type="submit" 
            className="submit-btn" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <p className="required-note">All fields marked * are required.</p>
      </div>
    </div>
  )
}

export default App
