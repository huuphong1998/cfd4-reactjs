export default function Reducer(state, action) {
    console.log('reducer', state)
    switch (action.type) {
        case 'FORM_INPUT_CHANGE':
            return {
                ...state,
                form: action.form
            }
        case 'LOADING':
            return {
                ...state,
                loading: action.loading
            }
        case 'ERROR':
            return {
                ...state,
                error: action.error
            }
        case 'BTN_REGISTER_CLICK':
            if (state.loading) {
                alert('Ban khong the gui lien tuc');
                return state;
            }

            let error = {};
            if (!state.form.username) {
                error['username'] = 'Họ và tên không được để trống'
            }

            if (!state.form.email) {
                error['email'] = 'Email không được để trống'
            } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(state.form.email)) {
                error['email'] = 'Email không đúng định dạng'
            }

            if (!state.form.fb) {
                error['fb'] = 'Facebook không được để trống'
            } else if (!/https?:\/\/(www\.)?facebook.com\/[-a-zA-Z0-9@:%._\+~#=]{1,256}/.test(state.form.fb)) {
                error['fb'] = 'Facebook không đúng định dạng'
            }

            if (!state.form.phone) {
                error['phone'] = 'Số điện thoại không được để trống'
            } else if (!/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(state.form.phone)) {
                error['phone'] = 'Số điện thoại không đúng định dạng'
            }

            if (Object.keys(error).length === 0) {
                action.successCallback();
            }

            return {
                ...state,
                error

            }
    }

    return state;
}