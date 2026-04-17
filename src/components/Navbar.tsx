import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'


function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    if (location.pathname === '/') {
      const el = document.getElementById(id)
      el?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(id)
        el?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo" onClick={() => setMobileOpen(false)}>
          Umidjon<span>.</span>
        </Link>

        <nav>
          <ul className="navbar__links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <button onClick={() => scrollTo('skills')}>Skills</button>
            </li>
            <li>
              <button onClick={() => scrollTo('projects')}>Projects</button>
            </li>
            <li>
              <button onClick={() => scrollTo('work')}>Work</button>
            </li>
            <li>
              <Link to="/contact" className="btn btn-primary navbar__contact-btn">
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="navbar__toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {mobileOpen && (
        <nav className="navbar__mobile">
          <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <button onClick={() => scrollTo('skills')}>Skills</button>
          <button onClick={() => scrollTo('projects')}>Projects</button>
          <button onClick={() => scrollTo('work')}>Work</button>
          <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact Me</Link>
        </nav>
      )}
    </header>
  )
}

export default Navbar
