import "./Home.scss";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import umidjon3 from "../../assets/images/about.jpg";


const Home = () => {
  return (

    <section className="home" id="home">
      <div className="container home-wrapper">
        <div className="media-icons">
          <a
            href="https://t.me/csss2272"
            target="_blank"
            rel="noopener noreferrer"
            className="telegram"
          >
            <FaTelegram />
          </a>

          <a
            href="https://www.instagram.com/csss2272"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://github.com/umidjon2272"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <FaGithub />
          </a>
        </div>
        <div className="home-info">
          <h1>Hi, I am Umid</h1>
          <h3>Front-end Developer</h3>
          <p>
            I create stunning websites for your business, Highly experienced in web design and development
          </p>
          <a href="" className="home-info-link inner-info-link">
            Contact me
            <FaCircleArrowRight />
          </a>
        </div>
        <div className="home-img">
          <img src={umidjon3} alt="" />
        </div>
      </div>
      <a href="#about" className="scroll-down">
        Scroll down
        <FaArrowDownLong />
      </a>
    </section>
  )
}

export default Home