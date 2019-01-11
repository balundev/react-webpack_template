import React from "react"

const Skills = (props) => {
    return (
        <div className="skills-navigation">
            <div className={`skills-box ${props.activeClasses[0]}`}>
                <div className="skills-element">
                    <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="skill-description">
                    <h3>Responsive</h3>
                    Layouts will work on all devices.
                </div>
            </div>
            <div className={`skills-box ${props.activeClasses[1]}`}>
                <div className="skill-description">
                    <h3>Intuitive</h3>
                    Easy to use, intuitive UI, inspired from senior designers & developers
                </div>
                <div className="skills-element">
                    <i className="far fa-lightbulb"></i>
                </div>
            </div>
            <div className={`skills-box ${props.activeClasses[2]}`}>
                <div className="skills-element">
                    <i className="fas fa-rocket"></i>
                </div>
                <div className="skill-description">
                    <h3>Dynamic</h3>
                    I love making pages come to life.
                </div>
            </div>
            <div className={`skills-box ${props.activeClasses[3]}`}>
                <div className="skill-description">
                    <h3>Modern</h3>
                    To create my applications I'm using modern development stack
                </div>
                <div className="skills-element flex-bottom">
                    <i className="fab fa-react"></i>
                </div>
            </div>
        </div>
    )
};

export default Skills