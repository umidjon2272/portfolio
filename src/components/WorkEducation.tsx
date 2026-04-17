import { timeline } from '../data'


function WorkEducation() {
  return (
    <section id="work" className="section">
      <div className="container">
        <span className="section-label">Work & Education</span>
        <h2 className="section-title">My journey soo far</h2>
        <p className="section-subtitle">
          How I got started, what I've learned, and where I'm headed.
        </p>
        <div className="heading-line" />

        <div className="timeline">
          {timeline.map((item) => (
            <div key={item.title} className="timeline-item">
              <div className="timeline-item__year">
                <span className="timeline-item__year-badge">{item.year}</span>
              </div>

              <div className={`timeline-item__content${item.isCurrent ? ' is-current' : ''}`}>
                {item.isCurrent && (
                  <span className="timeline-item__current-badge">● Active</span>
                )}

                <h3 className="timeline-item__title">{item.title}</h3>
                <p className="timeline-item__place">{item.place}</p>
                <p className="timeline-item__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkEducation
