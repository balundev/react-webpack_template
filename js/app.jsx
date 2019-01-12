import React from "react";
import ReactDOM from "react-dom";
import '../scss/main.scss';
import Main from "./components/main/main.jsx"
import Particles from "react-particles-js";


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

class App extends React.Component {
    render() {
        return (
            <div>
                <Particles className="particles" params={particlesOptions}/>
                <Main/>
            </div>
        );
    }
}
document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});