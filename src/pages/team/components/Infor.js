import React from 'react'

export default function Infor(props) {
    return (
        <div className="item col-md-3 col-sm-4 col-xs-6">
            <div className="wrap">
                <div className="cover">
                    <span className="text">{props.text}</span>
                    <img src={props.thumbnail} alt="" />
                </div>
                <div className="info">
                    <div className="name">
                        {props.name}
                    </div>
                    <p className="title">{props.class}</p>
                </div>
            </div>
        </div>
    )
}
