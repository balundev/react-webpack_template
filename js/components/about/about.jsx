import React from "react"
import Skills from "./skills.jsx";
import Title from "../title.jsx";


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
                <Title slideClass={this.state.activeClasses[4]} title={this.props.title}/>
                <div className="about-me_container">
                    <div className={`about-me_me + " " + ${this.state.activeClasses[0]}`}>
                        <h3>Who Am I?</h3>
                        Junior JavaScript developer who loves
                        <br/>
                        UI effects and animations.
                        <div className="about-photo"></div>
                    </div>
                    <Skills activeClasses={this.state.activeClasses}/>
                </div>
            </div>
        )
    }
};

export default About