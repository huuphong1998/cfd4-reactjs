import React from 'react'
import Avatar from './components/Avatar'
import Menu from './components/Menu'
import Infor from './components/Infor'
import Course from './components/Course'
import Project from './components/Project'
import HistoryPayment from './components/HistoryPayment'
import Coin from './components/Coin'
import { Redirect, Route, Switch } from 'react-router-dom'


export default function Profile() {

    let login = true;

    if (!login) return <Redirect to="/" />

    return (
        <main className="profile" id="main">
            <section>
                <Avatar />
                <div className="container">
                    <div className="tab">
                        <Menu />
                        <div className="tab-content">
                            <Switch>
                                <Route path="/thong-tin-ca-nhan/khoa-hoc">
                                    <Course />
                                </Route>
                                <Route path="/thong-tin-ca-nhan/du-an">
                                    <Project />
                                </Route>
                                <Route path="/thong-tin-ca-nhan/lich-su-thanh-toan">
                                    <HistoryPayment />
                                </Route>
                                <Route path="/thong-tin-ca-nhan/coin">
                                    <Coin />
                                </Route>
                                <Route>
                                    <Infor />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

