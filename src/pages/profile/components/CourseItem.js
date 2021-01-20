import React from 'react'

export default function CourseItem(props) {
    return (
        <div className="item">
            <div className="cover">
                <img src={props.thumbnail} alt="" />
            </div>
            <div className="info">
                <a href="#" className="name">
                    {props.name}
                </a>
                <div className="date">Khai giảng ngày 09/09/2019</div>
                <div className="row">
                    <div className>
                        <img src="/img/clock.svg" alt="" className="icon" />54 giờ
                                            </div>
                    <div className>
                        <img src="/img/play.svg" alt="" className="icon" />25 video
                                            </div>
                    <div className>
                        <img src="/img/user.svg" alt="" className="icon" />20 học viên
                                            </div>
                </div>
                <div className="process">
                    <div className="line">
                        <div className="rate" style={{ width: '30%' }} />
                    </div>
                                                30%
                                        </div>
                <div className="btn overlay round btn-continue">
                    Tiếp tục học
                </div>
            </div>
        </div>
    )
}
