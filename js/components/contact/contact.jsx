import React from "react"
import Title from "../title.jsx";

class Contact extends React.Component{
    state = {
        animateClass: []
    };
    handleLoadSection = () => {
        this.setState({
            animateClass: ["slide-fade","element-grow"]
        })
    };
    render() {
        return (
                <div onMouseOver={this.handleLoadSection} className="contact-section">
                    <div className="higher-index">
                         <Title slideClass={this.state.animateClass[0]} title={this.props.title}/>
                        <p className={this.state.animateClass[1]}>Have a question or want to hire me?</p>
                        <form className={`contact-form` + " " + this.state.animateClass[1]}>
                            <label>
                                <input type="text" placeholder="Name"/>
                            </label>
                            <label>
                                <input type="text" placeholder="Enter email"/>
                            </label>
                            <label>
                                <textarea placeholder="Write message here"></textarea>
                            </label>
                            <button className="btn btn-outline-warning">Submit</button>
                        </form>
                    </div>
                </div>
        );
    }
}

export default Contact