// About section: a short personal intro and a profile card.

function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container">
        {/* Section heading */}
        <span className="section-label">About Me</span>
        <h2 className="section-title">A little about myself</h2>
        <div className="heading-line" />

        {/* Two-column layout: text on the left, card on the right */}
        <div className="about__grid">
          {/* Left: description */}
          <div className="about__text">
            <p>
              Hi! I'm Umidjon — a junior frontend developer based in Tashkent,
              Uzbekistan. I recently completed a structured frontend development
              course where I learned everything from HTML and CSS fundamentals
              all the way to React and TypeScript.
            </p>
            <p>
              I'm passionate about building websites that are not just functional,
              but also clean, accessible, and enjoyable to use. I pay attention
              to detail and always aim to write readable, maintainable code.
            </p>
            <p>
              I'm currently looking for my first professional opportunity where
              I can grow as a developer, contribute to real projects, and
              collaborate with experienced teammates.
            </p>
          </div>

          {/* Right: quick-facts card */}
          <div className="about__card">
            <div className="about__card-avatar">👨‍💻</div>
            <p className="about__card-name">Umidjon Jurabayev</p>
            <p className="about__card-role">Junior Frontend Developer</p>
            <ul className="about__card-facts">
              <li><span>📍</span> Tashkent, Uzbekistan</li>
              <li><span>🎓</span> Frontend Course Graduate</li>
              <li><span>💼</span> Open to opportunities</li>
              <li><span>🌐</span> English — intermediate</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
