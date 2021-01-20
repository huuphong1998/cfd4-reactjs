import React from 'react'

export default function CoinHistory(props) {
    return (
        <div className="itemhistory">
            <div className="td"><span className="coin red">{props.coin}</span></div>
            <div className="td">{props.time}</div>
            <div className="td">{props.content}</div>
            <div className="td">{props.status}</div>
        </div>
    )
}
