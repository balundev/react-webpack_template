import React from "react"
import Typist from 'react-typist';


const EntryPageName = () => {
    return (
        <div className="entry-page_name">
            <h1>Alan</h1>
            <h1>Danieluk</h1>
            <hr/>
            <Typist>
                <span className="entry-page_position" > Junior Frontend Developer </span>
                <Typist.Backspace count={19} delay={700} />
                <span className="entry-page_position"> Backend Developer</span>
                <Typist.Backspace count={17} delay={700} />
                <span className="entry-page_position"> JavaScript Developer</span>
            </Typist>
        </div>
    )
};

export default EntryPageName