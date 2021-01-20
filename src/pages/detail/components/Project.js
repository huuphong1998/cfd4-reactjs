import React from 'react'

export default function Project(props) {
    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <a className="cover" href="#">
                    <img src={props.thumbnail} alt="" />
                </a>
                <div className="info">
                    <a className="name" href="#">
                        {props.name}
                    </a>
                    <p className="des">
                        {props.description}
                    </p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src="/img/avt.png" alt="" />
                        </div>
                        <div className="name">Trần Nghĩa</div>
                    </div>
                    <div className="register-btn">Đăng Ký</div>
                </div>
            </div>
        </div>
    )
}
