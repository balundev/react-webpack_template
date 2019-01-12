import React from "react"
import Title from "../title.jsx";

class Projects extends React.Component {
    state = {
        projectsObj: {
            projects: [],
            projectsClass: ""
        },
        buttonActive: "1",
        projectDescription: {}
    };

    createObj = (array, cls) => {
        return {
            projects: array,
            projectsClass: cls
        }
    };
    handleAllClick = () => {

        this.setState({
            projectsObj: this.createObj(["react1", "react2", "reactNode", "node", "javaScript", "sitOnChair"], "projects-box_all"),
            buttonActive: "1"
        })
    };
    handleReactClick = () => {

        this.setState({
            projectsObj: this.createObj(['react1', 'react2', 'reactNode'], "projects-box_react"),
            buttonActive: "2"
        })
    };
    handleNodeClick = () => {

        this.setState({
            projectsObj: this.createObj(['reactNode', 'node'], "projects-box_node"),
            buttonActive: "3"
        })
    };
    handleMouseLeave = () => {
        this.setState({
            projectDescription: {}
        })
    };
    handleMouseEnter = (index) => {
        let projectDescription = (title, technology, link, descNum) => {
            return {
                projectTitle: title,
                projectTechnology: technology,
                link: link,
                descriptionNumber: descNum
            }
        };

        switch (index) {
            case 0:
                if (this.state.projectsObj.projects.length === 2) {
                    this.setState({
                        projectDescription: projectDescription("Detect face", "React.js + Node.js", "https://github.com/balundev/DetectFaceOnImage-Reactjs-Nodejs", index)
                    });
                } else {
                    this.setState({
                        projectDescription: projectDescription("Find random movie", "React.js", "https://github.com/balundev/ChoseRandomFilm-Reactjs", index)
                    });
                }
                break;
            case 1:
                if (this.state.projectsObj.projects.length === 2) {
                    this.setState({
                        projectDescription: projectDescription("Cats blog", "Node.js", "https://github.com/balundev/CatsBlog-nodejs", index)
                    });
                } else {
                    this.setState({
                        projectDescription: projectDescription("Weather App", "React.js", "https://github.com/balundev/react-weather-app", index)
                    });
                }
                break;
            case 2:
                this.setState({
                    projectDescription: projectDescription("Detect face", "React.js + Node.js", "https://github.com/balundev/DetectFaceOnImage-Reactjs-Nodejs", index)
                });
                break;
            case 3:
                this.setState({
                    projectDescription: projectDescription("Cats blog", "Node.js", "https://github.com/balundev/CatsBlog-nodejs", index)
                });
                break;
            case 4:
                this.setState({
                    projectDescription: projectDescription("Simple game", "JavaScript", "https://github.com/balundev/furry-game.io", index)
                });
                break;
            case 5:
                this.setState({
                    projectDescription: projectDescription("Sit on chair", "HTML + SASS + JS", "https://github.com/balundev/Sit-on-chair-responsive-page.io", index)
                });
                break;
        }
    };
    handleLoadSection =()=> {
        let load = {
                projects: ["react1", "react2", "reactNode", "node", "javaScript", "sitOnChair"],
                projectsClass: "projects-box_all"
            };
        if(this.props.currentNavigation!=="3") {
            this.props.navigationChange("3");
        }
        if(this.state.projectsObj.projects.length===0)
        this.setState({
            projectsObj: load
        })
    };
    render() {
        let description = (title, technology, link) => {
            return (
                <div className="project-description">
                    <h4>{title}</h4>
                    <p>{technology}</p>
                    <a href={link} target="_blank">
                        <button className="btn btn-outline-warning">LEARN MORE</button>
                    </a>
                </div>)
        };
        return (
            <div onMouseOver={this.handleLoadSection} className="projects-section">
                <div className="section-template">
                    <Title title={this.props.title}/>
                    <div className="project-technologies">
                        <button className={`btn btn-outline-info + " " + ${this.state.buttonActive === "1" ? 'active' : null}`}
                                onClick={this.handleAllClick}>All
                        </button>
                        <button className={`btn btn-outline-info + " " + ${this.state.buttonActive === "2" ? 'active' : null}`}
                                onClick={this.handleReactClick}>ReactJS
                        </button>
                        <button className={`btn btn-outline-info + " " + ${this.state.buttonActive === "3" ? 'active' : null}`}
                                onClick={this.handleNodeClick}>NodeJS
                        </button>
                    </div>
                    <div className="projects-box">
                        {this.state.projectsObj.projects.map((el, i) => {
                            return <div onMouseLeave={() => {
                                this.handleMouseLeave(i)
                            }} onMouseEnter={() => {
                                this.handleMouseEnter(i)
                            }} key={i}
                                        className={this.state.projectsObj.projectsClass + i + " " + el}>{i === this.state.projectDescription.descriptionNumber ? description(this.state.projectDescription.projectTitle, this.state.projectDescription.projectTechnology, this.state.projectDescription.link, i) : null}</div>
                        })}
                    </div>
                </div>
            </div>
        );
    }

}

export default Projects