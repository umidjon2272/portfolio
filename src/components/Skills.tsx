import { skills } from '../data'


function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <span className="section-label">Skills</span>
        <h2 className="section-title">What I work with</h2>
        <p className="section-subtitle">
          Technologies and tools I've learned during my course and personal projects.
        </p>
        <div className="heading-line" />

        <div className="skills__grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <span className="skill-card__icon">{skill.icon}</span>
              <span className="skill-card__name">{skill.name}</span>
              <span className="skill-card__category">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
