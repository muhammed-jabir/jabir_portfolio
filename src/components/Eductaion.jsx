import ScrollReveal from "./ScrollReveal";
import { FaGraduationCap } from "react-icons/fa";

function Education() {

    return (
        <section id="education">

            <ScrollReveal>

                <h2 className="title">
                    Education
                </h2>

                <div className="education-card">

                    <div className="education-icon">
                        <FaGraduationCap />
                    </div>

                    <div>

                        <h3>
                            Bachelor of Computer Applications (BCA)
                        </h3>

                        <p>
                            University of Calicut
                        </p>

                        <p>
                            Graduated: 2025
                        </p>

                        <p>
                            Computer Science | Software Development
                        </p>

                    </div>

                </div>

            </ScrollReveal>

        </section>
    );
}

export default Education;