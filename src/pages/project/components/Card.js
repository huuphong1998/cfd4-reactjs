import React from 'react'

export default function Card(props) {
    return (
        <a href="#" className="item col-md-6">
            <div className="wrap">
                <div className="cover">
                    <img src={props.thumbnail} alt="" />
                </div>
                <div className="info">
                    <div className="name">{props.name}</div>
                    <div className="makeby">{props.makeby}</div>
                </div>
            </div>
        </a>
    )
}
