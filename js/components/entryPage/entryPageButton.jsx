import React from "react"

const EntryPageButton = (props) =>{
    return (
        <button type="button" className="btn btn-outline-info" onClick={()=>{
            props.scrollTo();
            props.navigationChange("2");
        }}>
            View my work
            <i className="fas fa-arrow-right"></i>
        </button>
    )
};

export default EntryPageButton