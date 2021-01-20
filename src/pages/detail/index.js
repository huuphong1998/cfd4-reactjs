import React from 'react'
import Banner from './components/Banner'
import DetailCourse from './components/DetailCourse'
import Course from '../../components/Course'
import Project from './components/Project'
import { useRouteMatch } from 'react-router-dom'


export default function Detail() {

    let routerMatch = useRouteMatch();
    console.log(routerMatch)

    return (
        <main className="course-detail" id="main">
            <Banner />
            <DetailCourse />
            <section className="section-3">
                <div className="container">
                    <div className="textbox">
                        <h3 className="sub-title">DỰ ÁN</h3>
                        <h2 className="main-title">THÀNH VIÊN</h2>
                    </div>
                    <div className="list row">
                        <Project thumbnail="/img/img.png" name="Wooder" description="One of the best corporate fashion brands in Sydney" />
                        <Project thumbnail="/img/img.png" name="Kymco" description="One of the best corporate fashion brands in Sydney" />
                        <Project thumbnail="/img/img.png" name="GboxMB" description="One of the best corporate fashion brands in Sydney" />
                    </div>
                </div>
            </section>
            <section className="section-4">
                <div className="container">
                    <div className="textbox">
                        <h3 className="sub-title">Khóa học</h3>
                        <h2 className="main-title">Liên quan</h2>
                    </div>
                    <div className="list row">
                        <Course thumbnail="/img/img.png" name="React JS" description="One of the best corporate fashion brands in Sydney" />
                        <Course thumbnail="/img/img2.png" name="Animation" description="One of the best corporate fashion brands in Sydney" />
                        <Course thumbnail="/img/img3.png" name="Scss, Grunt JS và Boostrap 4" description="One of the best corporate fashion brands in Sydney" />
                    </div>
                </div>
            </section>
        </main>

    )
}

