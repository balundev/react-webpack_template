import React from "react"

class AboutNavigation extends React.Component{
    state = {
        active: "2"
    };

    handleActive = (index)=>{
        this.setState({
            active: index
        })
    };

    render() {
        return (
            <nav className="about-navigation">
                <ul className="about-navigation_list">
                    <li className={this.state.active === "1" ? 'active': null} onClick={()=>{
                        this.handleActive("1");
                        this.props.homeClick();
                    }}>Home</li>
                    <li className={this.state.active === "2" ? 'active': null} onClick={()=>{
                        this.handleActive("2");
                        this.props.aboutClick();
                    }}>About</li>
                    <li className={this.state.active === "3" ? 'active': null} onClick={()=>{
                        this.handleActive("3");
                        this.props.projectsClick();
                    }}>Projects</li>
                    <li className={this.state.active === "4" ? 'active': null} onClick={()=>{
                        this.handleActive("4");
                        this.props.contactClick();
                    }}>Contact</li>
                </ul>
            </nav>
        )
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            active: nextProps.currentNavigation
        })
    }
}

export default AboutNavigation