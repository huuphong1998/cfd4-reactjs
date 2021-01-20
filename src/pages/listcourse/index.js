import React from 'react'
import Course from '../../components/Course'

export default function Listcourse() {
    return (
        <main className="homepage" id="main">
            <section className="section-1">
                <div className="container">
                    <h2 className="main-title">KHÓA HỌC CFD</h2>
                    <p className="top-des">
                        The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                        has a more-or-less normal
                    </p>
                    <div className="textbox">
                        <h3 className="sub-title">KHÓA HỌC</h3>
                        <h2 className="main-title">ONLINE</h2>
                    </div>
                    <div className="list row">
                        <Course thumbnail="img/img1.png" name="Front-end căn bản" description="One of the best corporate fashion brands in Sydney" />
                        <Course thumbnail="img/img.png" name="React JS" description="One of the best corporate fashion brands in Sydney" />
                        <Course thumbnail="img/img2.png" name="Animation" description="One of the best corporate fashion brands in Sydney" />
                        <Course thumbnail="img/img3.png" name="Scss, Grunt JS và Boostrap 4" description="One of the best corporate fashion brands in Sydney" />
                        <Course thumbnail="img/img4.png" name="UX/UI Design" description="One of the best corporate fashion brands in Sydney" />
                        <Course thumbnail="img/img5.png" name="Web Responsive" description="One of the best corporate fashion brands in Sydney" />
                    </div>
                </div>
            </section>
            <section className="section-2 section-blue">
                <div className="container">
                    <div className="textbox white">
                        <h3 className="sub-title">KHÓA HỌC</h3>
                        <h2 className="main-title">OFFLINE</h2>
                    </div>
                    <div className="list row">
                        <Course thumbnail="img/img6.png" name="Front-end căn bản" description="One of the best corporate fashion brands in Sydney" />
                        <Course thumbnail="img/img7.png" name="Front-end nâng cao" description="One of the best corporate fashion brands in Sydney" />
                        <Course thumbnail="img/img8.png" name="Laravel framework" description="One of the best corporate fashion brands in Sydney" />
                    </div>
                    <div className="text-deco">C</div>
                </div>
            </section>
        </main>
    )
}
