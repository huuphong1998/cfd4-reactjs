import React from 'react'

export default function ProjectItem(props) {
    return (
        <div className="col-md-6 course">
            <div className="wrap">
                <a href="#" className="cover">
                    <img src={props.thumbnail} alt="" />
                </a>
                <div className="info">
                    <a href="#" className="name">
                        {props.name}
                    </a>
                    <p className="des">
                        Dự án hoàn thành trong khóa CFD1 Offline của CFD Team.
                                                </p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src="img/avt.png" alt="" />
                        </div>
                        <div className="name">Trần Nghĩa</div>
                    </div>
                    <div className="register-btn">Website</div>
                </div>
            </div>
        </div>
    )
}
