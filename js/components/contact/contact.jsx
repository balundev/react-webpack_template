import React from "react"
import Title from "../title.jsx";

class Contact extends React.Component {
    state = {
        animateClass: [],
        name: "",
        email: "",
        message: "",
        sent: false,
        sentInfo: []
    };
    handleLoadSection = () => {
        this.props.navigationChange(4);
        if (this.state.animateClass.length === 0) {
            this.setState({
                animateClass: ["slide-fade", "element-grow"]
            })
        }
    };
    handleNameInput = (e) => {
        this.setState({
            name: e.target.value
        })
    };
    handleEmailInput = (e) => {
        this.setState({
            email: e.target.value
        })

    };
    handleMessageInput = (e) => {
        this.setState({
            message: e.target.value
        })
    };
    handleMessageHide = () =>{
        setTimeout(()=>{
            this.setState({
                sentInfo: []
            })
        },5000)
    };
    handleSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.name.length > 2 && this.state.message.length > 5 && this.state.email.length > 6 && this.state.sent === false) {
            let params = {
                user_id: 'user_Rm3AXzQZjmGkhaH9fy6gq',
                service_id: 'gmail',
                template_id: 'portfolio',
                template_params: {
                    'Message': `${this.state.message}`,
                    'Name': `${this.state.name}`,
                    'Email': `${this.state.email}`
                }
            };
            let headers = {
                "Content-type": "application/json"
            };

            let options = {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(params)
            };

            fetch('https://api.emailjs.com/api/v1.0/email/send', options)
                .then((httpResponse) => {
                    if (httpResponse.ok) {
                        this.setState({
                            sentInfo: ["Thanks for sending message", "green"],
                            sent: true,
                            name: "",
                            email: "",
                            message: "",
                        },this.handleMessageHide)
                    } else {
                        this.setState({
                            sentInfo: ["API response error, try again later","red"]
                        },this.handleMessageHide);
                        return httpResponse.text()
                            .then(text => Promise.reject(text))
                    }
                })
                .catch((error) => {
                        console.log("There is problem with " + error)
                });
        }else if(this.state.sent === true){
            this.setState({
                sentInfo: ["You have already sent a message", "red"],
                name: "",
                email: "",
                message: "",
            },this.handleMessageHide)
        }else{
            this.setState({
                sentInfo: ["Please fill all fields correctly", "red"]
            },this.handleMessageHide)
        }
    }
    ;
    render() {
        return (
                <div onMouseOver={this.handleLoadSection} className="contact-section">
                    <div className="higher-index">
                         <Title slideClass={this.state.animateClass[0]} title={this.props.title}/>
                        <p className={this.state.animateClass[1]}>Have a question or want to hire me?</p>
                        <p style={{color: `${this.state.sentInfo[1]}`,opacity: 1}}>{this.state.sentInfo[0]}</p>
                        <form onSubmit={this.handleSubmitForm} className={`contact-form` + " " + this.state.animateClass[1]}>
                            <label>
                                <input onChange={this.handleNameInput} value={this.state.name} type="text" placeholder="Name"/>
                            </label>
                            <label>
                                <input onChange={this.handleEmailInput} value={this.state.email} type="email" placeholder="Enter email"/>
                            </label>
                            <label>
                                <textarea onChange={this.handleMessageInput} value={this.state.message} placeholder="Write message here"></textarea>
                            </label>
                            <button className="btn btn-outline-info">Submit</button>
                        </form>
                    </div>
                </div>
        );
    }
}

export default Contact