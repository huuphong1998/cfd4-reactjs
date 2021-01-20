import React, { useState } from 'react'

const style = {
    inputStyle: { color: 'red', fontSize: 14, fontStyle: 'italic', paddingLeft: 230 }
}

export default function Collaborate() {

    let [form, setForm] = useState({
        username: '',
        email: '',
        phone: '',
        web: '',
        title: '',
        content: ''
    })

    let [error, setError] = useState({})

    function inputChange(event) {
        setForm({
            ...form,
            [event.target.getAttribute('name')]: event.target.value
        })
    }


    function submitBtnClick() {
        let error = {};
        if (!form.username) {
            error['username'] = "Username không được để trống"
        }

        if (!form.phone) {
            error['phone'] = 'Phone không được để trống'
        } else if (!/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(form.phone)) {
            error['phone'] = 'Phone không đúng định dạng'
        }

        if (!form.email) {
            error['email'] = 'Email không được để trống'
        } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(form.email)) {
            error['email'] = 'Email không đúng định dạng'
        }

        if (!form.web) {
            error['web'] = 'Website không được để trống'
        } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(form.web)) {
            error['web'] = 'Website không đúng định dạng'
        }

        if (!form.title) {
            error['title'] = "Title không được để trống"
        }

        if (!form.content) {
            error['content'] = "Content không được để trống"
        }


        setError(error)
        if (Object.keys(error).length === 0) {
            alert('thành công')
        }
    }

    return (
        <main className="register-course" id="main">
            <section className="section-1 wrap container">
                {/* <div class="main-sub-title">liên hệ</div> */}
                <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
                <p className="top-des">
                    Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
                    việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
                </p>
                <div className="form">
                    <label>
                        <p>Họ và tên<span>*</span></p>
                        <input type="text" placeholder="Họ và tên bạn" onChange={inputChange} name="username" value={form.username} />
                    </label>
                    {
                        // error.username ? <p className="error">{error.username}</p> : null
                        error.username && <p className="error" style={style.inputStyle}>{error.username}</p>
                    }

                    <label>
                        <p>Số điện thoại</p>
                        <input type="text" placeholder="Số điện thoại" onChange={inputChange} name="phone" value={form.phone} />
                    </label>
                    {
                        // error.username ? <p className="error">{error.username}</p> : null
                        error.phone && <p className="error" style={style.inputStyle}>{error.phone}</p>
                    }

                    <label>
                        <p>Email<span>*</span></p>
                        <input type="text" placeholder="Email của bạn" onChange={inputChange} name="email" value={form.email} />
                    </label>
                    {
                        // error.username ? <p className="error">{error.username}</p> : null
                        error.email && <p className="error" style={style.inputStyle}>{error.email}</p>
                    }

                    <label>
                        <p>Website</p>
                        <input type="text" placeholder="Đường dẫn website http://" onChange={inputChange} name="web" value={form.web} />
                    </label>
                    {
                        // error.username ? <p className="error">{error.username}</p> : null
                        error.web && <p className="error" style={style.inputStyle}>{error.web}</p>
                    }

                    <label>
                        <p>Tiêu đề<span>*</span></p>
                        <input type="text" placeholder="Tiêu đề liên hệ" onChange={inputChange} name="title" value={form.title} />
                    </label>
                    {
                        // error.username ? <p className="error">{error.username}</p> : null
                        error.title && <p className="error" style={style.inputStyle}>{error.title}</p>
                    }

                    <label>
                        <p>Nội dung<span>*</span></p>
                        <textarea name id cols={30} rows={10} defaultValue={""} onChange={inputChange} name="content" value={form.content} />
                    </label>
                    {
                        // error.username ? <p className="error">{error.username}</p> : null
                        error.content && <p className="error" style={style.inputStyle}>{error.content}</p>
                    }

                    <div className="btn main rect" onClick={submitBtnClick}>đăng ký</div>
                </div>
            </section>
            {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
        </main>
    )
}
