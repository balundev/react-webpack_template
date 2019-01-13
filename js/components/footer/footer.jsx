import React from "react"

class Footer extends React.Component {

    handleMoveTop = () => {
        const entryPage = document.getElementsByClassName("entry-page");
        entryPage[0].scrollIntoView({behavior: "smooth"})
    };
    render() {
        return (
            <footer>
                <div className="footer-socials">
                    <a href="https://github.com/balundev/" target="_blank"><div className="social"><i className="fab fa-github-square"></i></div></a>
                    <a href="https://www.facebook.com/alan.danieluk" target="_blank"><div className="social"><i className="fab fa-facebook-square"></i></div></a>
                    <a href="https://www.linkedin.com/in/balundev/" target="_blank"><div className="social"><i className="fab fa-linkedin"></i></div></a>
                    <a href="https://www.instagram.com/d_alanofficial/" target="_blank"><div className="social"><i className="fab fa-instagram"></i></div></a>
                </div>
                <div onClick={this.handleMoveTop} className="move-top"><i className="fas fa-angle-double-up"></i></div>
                <p>&copy; 2019 Alan Danieluk</p>
            </footer>
        );
    }
};

export default Footer