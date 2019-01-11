import React from 'react'

const Title = (props) =>{
    return (
        <div className={`${props.slideClass}`}>
            <h2>{props.title}</h2>
            <hr/>
        </div>
    )
};

export default Title