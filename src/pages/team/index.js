import React from 'react'
import Infor from './components/Infor'

export default function Team() {
    return (
        <main className="team" id="main">
            <section>
                <div className="container">
                    <div className="top">
                        <h2 className="main-title">cfd team</h2>
                        <p className="top-des">Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt
                        elementum
                        sem non luctus
                        </p>
                    </div>
                    <div className="list row">
                        <div className="item col-md-6 col-sm-6">
                            <div className="wrap">
                                <div className="cover">
                                    <img src="img/thumb-member.jpg" alt="" />
                                </div>
                                <div className="info">
                                    <div className="name">
                                        trần nghĩa
                                </div>
                                    <p className="title">Founder &amp; Creative Front-End Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="item col-md-6 col-sm-6">
                            <div className="wrap">
                                <div className="cover">
                                    <img src="img/thumb-member.jpg" alt="" />
                                </div>
                                <div className="info">
                                    <div className="name">
                                        đặng thuyền vương
                                </div>
                                    <p className="title">Co-Founder &amp; Fullstack Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="item col-md-6 col-sm-6">
                            <div className="wrap">
                                <div className="cover">
                                    <img src="img/thumb-member.jpg" alt="" />
                                </div>
                                <div className="info">
                                    <div className="name">
                                        đặng thuyền quân
                                </div>
                                    <p className="title">Co-Founder &amp; Backend Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="item col-md-6 col-sm-6">
                            <div className="wrap">
                                <div className="cover">
                                    <img src="img/thumb-member.jpg" alt="" />
                                </div>
                                <div className="info">
                                    <div className="name">
                                        nguyễn đức huy
                                    </div>
                                    <p className="title">Co-Founder &amp; Front-End Developer</p>
                                </div>
                            </div>
                        </div>
                        <Infor text="H" thumbnail="img/thumb-member.jpg" name="Diệp anh thy" class="CFD1-Offline" />
                        <Infor text="" thumbnail="img/thumb-member.jpg" name="huỳnh tiến tài" class="CFD1-Offline" />
                        <Infor text="" thumbnail="img/thumb-member.jpg" name="Ngô thành long" class="CFD1-Offline" />
                        <Infor text="" thumbnail="img/thumb-member.jpg" name="trần anh tuấn" class="CFD1-Offline" />
                        <Infor text="" thumbnail="img/thumb-member.jpg" name="ngô thành long" class="CFD1-Offline" />
                        <Infor text="" thumbnail="img/thumb-member.jpg" name="nguyễn thành tùng" class="CFD1-Offline" />
                        <Infor text="" thumbnail="img/thumb-member.jpg" name="phạm thành trung" class="CFD1-Offline" />
                    </div>
                </div>
            </section>
        </main>
    )
}

