
function Hero() {
  const handleScrollToProjects = () => {
    const el = document.getElementById('projects')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScrollToContact = () => {
    window.location.href = '/contact'
  }

  return (
    <section className="hero">
      <div className="hero__eyebrow">
        <span className="hero__dot" />
        Available for work
      </div>

      <h1 className="hero__name">
        Umidjon <em>Jurabayev</em>
      </h1>

      <p className="hero__role">Junior Frontend Developer</p>

      <p className="hero__desc">
        I build clean, responsive, and user-friendly web interfaces.
        Recently finished a frontend development course and excited
        to start my professional journey.
      </p>

      <div className="hero__actions">
        <button className="btn btn-primary" onClick={handleScrollToProjects}>
          See My Projects →
        </button>
        <button className="btn btn-ghost" onClick={handleScrollToContact}>
          Get in Touch
        </button>
      </div>
    </section>
  )
}

export default Hero
