import React, { useState } from 'react'
import useFormValidate from '../../../hook/useFormValidate'

const style = {
    inputStyle: { color: 'red', fontSize: 14, fontStyle: 'italic', paddingLeft: 210 }
}

export default function Infor() {

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
            },
            skype: {
                required: true
            }
        },
    })

    function _btnClick() {
        let error = submit();
        if (Object.keys(error).length === 0) {
            alert('thanh cong');
        }
    }

    return (
        <div className="tab1">
            <label>
                <p>Họ và tên<span>*</span></p>
                <input type="text" placeholder="Nguyễn Văn A" onChange={inputChange} name="username" value={form.username} />
            </label>
            {
                // error.username ? <p className="error" style={style.inputStyle}>{error.username}</p> : null
                error.username && <p className="error" style={style.inputStyle}>{error.username}</p>
            }

            <label>
                <p>Số điện thoại<span>*</span></p>
                <input type="text" placeholder="0949******" onChange={inputChange} name="phone" value={form.phone} />
            </label>
            {
                error.phone && <p className="error" style={style.inputStyle}>{error.phone}</p>
            }

            <label>
                <p>Email<span>*</span></p>
                <input placeholder="vuong.dang@dna.vn" type="text" onChange={inputChange} name="email" value={form.email} />
            </label>
            {
                error.email && <p className="error" style={style.inputStyle}>{error.email}</p>
            }

            <label>
                <p>Facebook<span>*</span></p>
                <input type="text" placeholder="Facebook url" onChange={inputChange} name="fb" value={form.fb} />
            </label>
            {
                error.fb && <p className="error" style={style.inputStyle}>{error.fb}</p>
            }

            <label>
                <p>Skype<span>*</span></p>
                <input type="text" placeholder="Skype url" onChange={inputChange} name="skype" value={form.skype} />
            </label>
            {
                error.skype && <p className="error" style={style.inputStyle}>{error.skype}</p>
            }

            <div className="btn main rect" onClick={_btnClick}>LƯU LẠI</div>
        </div>
    )
}
