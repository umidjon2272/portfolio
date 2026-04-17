import { useState } from 'react'
import { } from "../../components/contact/Contact.scss";
interface FormData {
  name: string
  email: string
  message: string
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <>
      <section className="contact section" id="contact">
        <div className="container flex-center">

          <h2 className="inner-title">Contact Me</h2>
          <h3 className="inner-second-title">Contact Me</h3>

          <div className="contact-wrapper">

            <div className="contact-left">
              <h2>Let's discuss your project</h2>

              <ul className="contact-list">
                <li>
                  <h3>
                    <i className="fa-solid fa-envelope"></i> Email Address
                  </h3>
                  <span>
                    <a href="mailto:umidjon.dev@gmail.com">
                      umidjon.dev@gmail.com
                    </a>
                  </span>
                </li>

                <li>
                  <h3>
                    <i className="fa-brands fa-telegram"></i> Telegram
                  </h3>
                  <span>
                    <a href="https://t.me/csss2272" target="_blank" rel="noopener noreferrer">Umidjon_tg</a>
                  </span>
                </li>

                <li>
                  <h3>
                    <i className="fa-brands fa-github"></i> GitHub
                  </h3>
                  <span>
                    <a href="https://github.com/umidjon2272" target="_blank" rel="noopener noreferrer">github.com/umidjon-dev
                    </a>
                  </span>
                </li>
              </ul>
            </div>

            <div className="contact-right">
              <p>
                I'm always open to discussing product{' '}
                <span>design work or partnerships.</span>
              </p>

              <form className="form contact-form" onSubmit={handleSubmit}>

                <div className="first-row">
                  <input
                    name="name"
                    placeholder="Name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="second-row">
                  <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  <input placeholder="Subject" type="text" />
                </div>

                <div className="third-row">
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button className="contact-btn inner-info-link" type="submit">
                  Send Message
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>

              {submitted && (
                <p style={{ marginTop: '10px', color: 'green' }}>
                  Message sent successfully!
                </p>
              )}
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default Contact