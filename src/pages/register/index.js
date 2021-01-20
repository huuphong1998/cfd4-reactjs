import { CircularProgress } from '@material-ui/core';
import React, { useState, useEffect, useReducer } from 'react'
import useFormValidate from '../../hook/useFormValidate';
import Reducer from './reducer'

const style = {
    inputError: { color: 'red', fontSize: 14, fontStyle: 'italic', paddingLeft: 230 }
}

export default function Register() {

    let [loading, setLoading] = useState(false);


    let { form, error, inputChange, submit } = useFormValidate({
        username: '',
        phone: '',
        email: '',
        fb: '',
        payment: 'chuyen-khoan',
        note: ''
    }, {
        rule: {
            username: {
                required: true
            },
            phone: {
                pattern: 'phone'
            },
            email: {
                pattern: 'email'
            },
            fb: {
                pattern: 'url'
            }
        },
        message: {
            username: {
                required: 'Họ và tên không được để trống!'
            },
            phone: {
                pattern: 'Số điện thoại không được để trống'
            },
            email: {
                pattern: 'Email không đúng định dạng'
            },
            fb: {
                pattern: 'Facebook URL không đúng định dạng'
            }
        }
    })

    // let [state, dispatch] = useReducer(Reducer, {
    //     loading: false,
    //     form: {
    //         username: '',
    //         phone: '',
    //         email: '',
    //         fb: '',
    //         payment: 'chuyen-khoan',
    //         note: ''
    //     },
    //     error: {}
    // });

    // useEffect(() => {
    //     console.log('window click add')
    //     function windowClick() {
    //         console.log('window click')
    //     }
    //     window.addEventListener('click', windowClick)

    //     return () => {
    //         window.removeEventListener('click', windowClick)
    //         console.log('window click destroy')
    //     }
    // }, [form]);

    // let [error, setError] = useState({})

    function submitBtnClick() {

        // dispatch({ type: 'ERROR', error })
        let error = submit();
        // dispatch({ type: 'LOADING', loading: true })
        if (Object.keys(error).length === 0) {
            setLoading(true);
            setTimeout(() => {
                // alert('dang ky thanh cong')
                setLoading(false)
                // dispatch({ type: 'LOADING', loading: false })
            }, 1000);
        }

    }


    // function inputChange(event) {
    //     // let val = event.target.value;
    //     // let name = event.target.getAttribute('name')

    //     // state.form[name] = val;

    //     // setForm({
    //     //     ...state.form,
    //     //     [event.target.getAttribute('name')]: event.target.value
    //     // })

    //     dispatch({
    //         type: 'FORM_INPUT_CHANGE',
    //         form: {
    //             ...state.form,
    //             [event.target.getAttribute('name')]: event.target.value
    //         }
    //     })
    // }

    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG KÝ</div>
                        <h1 className="main-title">Thực chiến front-end căn bản </h1>
                        <div className="main-info">
                            <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
                            <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                            <div className="time"><strong>Học phí:</strong> 6.000.000 VND</div>
                        </div>
                        <div className="state.form">
                            <label>
                                <p>Họ và tên<span>*</span></p>
                                <input type="text" placeholder="Họ và tên bạn" onChange={inputChange} name="username" value={form.username} />
                            </label>
                            {
                                // error.username ? <p className="error">{error.username}</p> : null
                                error.username && <p className="error" style={style.inputError}>{error.username}</p>
                            }
                            <label>
                                <p>Số điện thoại<span>*</span></p>
                                <input type="text" placeholder="Số điện thoại" onChange={inputChange} name="phone" value={form.phone} />
                            </label>
                            {
                                // error.username ? <p className="error">{error.username}</p> : null
                                error.phone && <p className="error" style={style.inputError}>{error.phone}</p>
                            }
                            <label>
                                <p>Email<span>*</span></p>
                                <input type="text" placeholder="Email của bạn" onChange={inputChange} name="email" value={form.email} />
                            </label>
                            {
                                // error.username ? <p className="error">{error.username}</p> : null
                                error.email && <p className="error" style={style.inputError}>{error.email}</p>
                            }
                            <label>
                                <p>URL Facebook<span>*</span></p>
                                <input type="text" placeholder="https://facebook.com" onChange={inputChange} name="fb" value={form.fb} />
                            </label>
                            {
                                // error.username ? <p className="error">{error.username}</p> : null
                                error.fb && <p className="error" style={style.inputError}>{error.fb}</p>
                            }
                            <label className="disable">
                                <p>Sử dụng COIN</p>
                                <div className="checkcontainer">
                                    Hiện có <strong>300 COIN</strong>
                                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                                    {/* Cần ít nhất 200 COIN để giảm giá */}
                                    <input type="checkbox" defaultChecked="checked" />
                                    <span className="checkmark" />
                                </div>
                            </label>
                            <label>
                                <p>Hình thức thanh toán</p>
                                <div className="select">
                                    <div className="head">Chuyển khoản</div>
                                    <div className="sub">
                                        <a href="#">Chuyển khoản</a>
                                        <a href="#">Thanh toán tiền mặt</a>
                                    </div>
                                </div>
                            </label>
                            <label>
                                <p>Ý kiến cá nhân</p>
                                <input type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." onChange={inputChange} name="note" value={form.note} />
                            </label>
                            <div className="btn main rect" onClick={submitBtnClick} >đăng ký {loading && <CircularProgress size={20} style={{ marginLeft: 20 }} />}</div>
                            {/* <div className="btn main rect" onClick={() => dispatch({ type: 'BTN_REGISTER_CLICK', successCallback: submitBtnClick })} >đăng ký {loading && <CircularProgress size={20} style={{ marginLeft: 20 }} />} </div> */}
                        </div>
                    </div>
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



