import React from "react"

class Navigation extends React.Component{
    state = {
        active: "2"
    };

    handleActive = (index)=>{
        this.setState({
            active: index
        })
    };
    handleNavigationPosition = () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > this.state.navOffset+100) {
            nav.classList.add('fixed-nav');
        } else {
            nav.classList.remove('fixed-nav');
        }
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
    componentDidMount() {
        const nav = document.querySelector('nav');
        const navTop = nav.offsetTop;
        this.setState({
            navOffset: navTop
        });
        window.addEventListener('scroll', this.handleNavigationPosition);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleNavigationPosition);
    }
}

export default Navigation