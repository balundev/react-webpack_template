import React from "react"
import EntryPage from "../entryPage/entryPage.jsx";
import About from "../about/about.jsx";
import Projects from "../projects/projects.jsx";
import Contact from "../contact/contact.jsx";
import Footer from "../footer/footer.jsx";


class Main extends React.Component {
    state = {
        titles: ["About", "Projects", "Contact"],
        navigationChange: "2",
        navOffset: 1
    };
    handleAboutPress = () => {
        const about = document.getElementsByClassName("about");
        about[0].scrollIntoView({behavior: "smooth"});
        this.setState({
            navigationChange: "2"
        })

    };
    handleHomePress = () => {
        const entryPage = document.getElementsByClassName("entry-page");
        entryPage[0].scrollIntoView({behavior: "smooth"})
    };
    handleProjectsPress = () => {
        const entryPage = document.getElementsByClassName("projects-section");
        entryPage[0].scrollIntoView({behavior: "smooth"})
    };
    handleContactPress = () => {
        const entryPage = document.getElementsByClassName("contact-section");
        entryPage[0].scrollIntoView({behavior: "smooth"})
    };
    handleNavigationChange = (number) => {
        this.setState({
            navigationChange: number.toString()
        })
    };
    handleNavigationPosition = () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > this.state.navOffset) {
            nav.classList.add('fixed-nav');
        } else {
            nav.classList.remove('fixed-nav');
        }
    };

    render() {
        return (

            <div id="page">
                <EntryPage navigationChange={this.handleNavigationChange}
                           currentNavigation={this.state.navigationChange} scrollTo={this.handleAboutPress}/>
                <About navigationChange={this.handleNavigationChange} currentNavigation={this.state.navigationChange}
                       title={this.state.titles[0]} projectsClick={this.handleProjectsPress}
                       homeClick={this.handleHomePress} aboutClick={this.handleAboutPress} contactClick={this.handleContactPress}/>
                <Projects navigationChange={this.handleNavigationChange} currentNavigation={this.state.navigationChange}
                          title={this.state.titles[1]}/>
                <Contact title={this.state.titles[2]}/>
                <Footer/>
            </div>
        )
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

export default Main