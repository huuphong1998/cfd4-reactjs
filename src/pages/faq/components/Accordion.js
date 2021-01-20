import React from 'react'

export default function Accordion(props) {
    return (
        <div className="accordion">
            <div className="accordion__title">
                <h2><strong>{props.question}</strong></h2>
            </div>
            <div className="content">
                {props.content}
            </div>
        </div>
    )
}
