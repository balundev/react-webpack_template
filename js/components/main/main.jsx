import React from "react"
import EntryPage from "../entryPage/entryPage.jsx";
import About from "../about/about.jsx";
import Projects from "../projects/projects.jsx";
import Contact from "../contact/contact.jsx";
import Footer from "../footer/footer.jsx";
import Navigation from "../navigation/Navigation.jsx";


class Main extends React.Component {
    state = {
        titles: ["About", "Projects", "Contact"],
        navigationChange: "2",
        navOffset: 1
    };

    handleScrolling = (classname,on)=>{
        const nav = document.querySelector('nav');
        const getClass = document.getElementsByClassName(classname);
        if(on) {
            nav.classList.add('about-navigation2');
            setTimeout(() => {
                nav.classList.remove('about-navigation2');
            }, 1500);
        }
        getClass[0].scrollIntoView({behavior: "smooth", block: "start"});
    };

    handleAboutPress = () => {
        this.handleScrolling("about",false);
        this.setState({
            navigationChange: "2"
        })

    };

    handleHomePress = () => {
        this.handleScrolling("entry-page",true);
    };

    handleProjectsPress = () => {
        this.handleScrolling("projects-section",true);
    };

    handleContactPress = () => {
        this.handleScrolling("contact-section",true);
    };

    handleNavigationChange = (number) => {
        this.setState({
            navigationChange: number.toString()
        })
    };


    render() {
        return (

            <div id="page">
                <EntryPage screenHeight={this.state.navOffset} navigationChange={this.handleNavigationChange}
                           currentNavigation={this.state.navigationChange} scrollTo={this.handleAboutPress}/>
                <Navigation currentNavigation={this.state.navigationChange} projectsClick={this.handleProjectsPress} homeClick={this.handleHomePress} aboutClick={this.handleAboutPress} contactClick={this.handleContactPress}/>
                <About navigationChange={this.handleNavigationChange} currentNavigation={this.state.navigationChange}
                       title={this.state.titles[0]} projectsClick={this.handleProjectsPress}
                       homeClick={this.handleHomePress} aboutClick={this.handleAboutPress} contactClick={this.handleContactPress}/>
                <Projects navigationChange={this.handleNavigationChange} currentNavigation={this.state.navigationChange}
                          title={this.state.titles[1]}/>
                <Contact navigationChange={this.handleNavigationChange} title={this.state.titles[2]}/>
                <Footer/>
            </div>
        )
    }

}

export default Main