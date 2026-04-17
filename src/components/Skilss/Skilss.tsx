import Work from "./Work"
import Aword from "./Aword"
import Education from "./Education"
import SkilsInfo from "./SkilsInfo"
import "./Skilss.scss"
const Skilss = () => {
    return (
        <section className="skills section" id="skills">
            <div className="container flex-center">
                <h2 className="inner-title">Skills</h2>
                <h3 className="inner-second-title">Skills</h3>
                <div className="inner-content">
                    <div className="skills-description">
                        <h3>Education & Skills</h3>
                        <p>
                            For more than 5 years our experts have been accomplishing enough with modern Web
                            Development,
                            new generation web and app programming language.
                        </p>
                    </div>
                    <div className="skills-info education-all">
                        <Education />
                     <SkilsInfo/>
                      <Aword/>

                    </div>
                    <Work/>

                </div>
            </div>
        </section>
    )
}

export default Skilss