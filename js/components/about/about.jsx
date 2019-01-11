import React from "react"
import AboutNavigation from "./aboutNavigation.jsx";
import Skills from "./skills.jsx";
import Title from "../title.jsx";
import Particles from 'react-particles-js';

const particlesOptions = {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 1000
            }
        }
    }
};

class About extends React.Component {
    state ={
        activeClasses : []
    };

    handleLoadSection =()=> {

        let load = ["first-skill", "second-skill" , "third-skill", "fourth-skill", "slide-fade"];
        if(this.props.currentNavigation!=="2"){
            this.props.navigationChange("2");
        }
        if(this.state.activeClasses.length===0) {
            this.setState({
                activeClasses: load
            })
        }
    };

    render() {
        return (
            <div onMouseOver={this.handleLoadSection} className="about">
                <Particles className="particles" params={particlesOptions}/>
                <AboutNavigation currentNavigation={this.props.currentNavigation} projectsClick={this.props.projectsClick} homeClick={this.props.homeClick} aboutClick={this.props.aboutClick} contactClick={this.props.contactClick}/>
                <Title slideClass={this.state.activeClasses[4]} title={this.props.title}/>
                <div className="about-me_container">
                    <div className="about-photo"></div>
                    <Skills activeClasses={this.state.activeClasses}/>
                </div>
            </div>
        )
    }
};

export default About