import "./Project.scss";

import portfolio1 from "../../assets/images/watch.jpg";
import portfolio2 from "../../assets/images/awangers.png";
import portfolio3 from "../../assets/images/portfolio-3.webp";
import portfolio4 from "../../assets/images/clothing store.png";
import portfolio5 from "../../assets/images/portfolio-5.webp";
import portfolio6 from "../../assets/images/portfolio-6.webp";

const Portfolio = () => {
  return (
    <section id="projects" className="portfolio-section">
      <div className="container">
        <h2 className="inner-title">My Projects</h2>
        <h3 className="inner-second-title">My Projects</h3>
        <div className="cards">

          <div className="card" style={{ backgroundImage: `url(${portfolio1})` }}>
            <div className="content">
              <h3>Watch</h3>
              <p>Html csss</p>
              <div className="links">
                <a href="https://umidjon2272.github.io/WATCH" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/umidjon2272/WATCH" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>

          <div className="card" style={{ backgroundImage: `url(${portfolio2})` }}>
            <div className="content">
              <h3>Vue cinemas</h3>
              <p>Html csss</p>
              <div className="links">
                <a href="https://umidjon2272.github.io/Vue-cinema/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/umidjon2272/Vue-cinema/settings/pages" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>

          <div className="card" style={{ backgroundImage: `url(${portfolio3})` }}>
            <div className="content">
              <h3>Feng shui shop</h3>
              <p>Html csss</p>
              <div className="links">
                <a href="https://umidjon2272.github.io/feng-shui/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/umidjon2272/feng-shui/settings/pages" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>

          <div className="card" style={{ backgroundImage: `url(${portfolio4})` }}>
            <div className="content">
              <h3>Clothing store</h3>
              <p>Html csss</p>
              <div className="links">
                <a href="https://umidjon2272.github.io/clothingstore/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/umidjon2272/clothingstore" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>

          <div className="card" style={{ backgroundImage: `url(${portfolio5})` }}>
            <div className="content">
              <h3>Online shop</h3>
              <p>React</p>
              <div className="links">
                <a href="https://diplom-ishi-five.vercel.app//" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/umidjon2272/mini-shop" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>

          <div className="card" style={{ backgroundImage: `url(${portfolio6})` }}>
            <div className="content">
              <h3>Todo-list</h3>
              <p>React</p>
              <div className="links">
                <a href="https://astonishing-mermaid-64e49d.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/umidjon2272/todo" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;