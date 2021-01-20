import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div className="tab-title">
            <Link to={'/thong-tin-ca-nhan'} exact>Thông tin tài khoản</Link>
            <Link to={'/thong-tin-ca-nhan/khoa-hoc'}>Khóa học của bạn</Link>
            <Link to={'/thong-tin-ca-nhan/du-an'}>Dự án đã làm</Link>
            <Link to={'/thong-tin-ca-nhan/lich-su-thanh-toan'}>Lịch sử thanh toán</Link>
            <Link to={'/thong-tin-ca-nhan/coin'}>Quản lý COIN của tôi</Link>
        </div>
    )
}
