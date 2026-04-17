import { projects } from '../data'

const thumbEmojis: Record<number, string> = {
  1: '✅',
  2: '🌤️',
  3: '🗂️',
  4: '🖥️',
}


function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <span className="section-label">Projects</span>
        <h2 className="section-title">Things I've built</h2>
        <p className="section-subtitle">
          Practice projects I created while learning — each one taught me something new.
        </p>
        <div className="heading-line" />

        <div className="projects__grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card__thumb">
                {thumbEmojis[project.id] ?? '💡'}
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>

                <p className="project-card__desc">{project.description}</p>

                <div className="project-card__tags">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>

                <div className="project-card__actions">
                  <a
                    href={project.demoUrl}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="btn btn-ghost"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
