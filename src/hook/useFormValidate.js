import { useState } from "react";

let patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let patternUrl = /https?:\/\/(www\.)?facebook.com\/[-a-zA-Z0-9@:%._\+~#=]{1,256}/;
let patternPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;


export default function useFormValidate(initialValue, validate) {
    let [form, setForm] = useState(initialValue)

    function inputChange(event) {
        setForm({
            ...form,
            [event.target.getAttribute('name')]: event.target.value
        })
    }

    let [error, setError] = useState({})

    function submit() {
        let { rule, message } = validate;

        let errorObject = {}

        for (let i in rule) {
            let r = rule[i];

            if (r.required) {
                if (!form[i]) {
                    errorObject[i] = message?.[i]?.required || "Trường này không được để trống!"
                }
            }
            if (r.pattern) {

                let pattern = r.pattern;
                if (pattern === 'email') pattern = patternEmail
                if (pattern === 'phone') pattern = patternPhone
                if (pattern === 'url') pattern = patternUrl
                if (!pattern.test(form[i])) {
                    errorObject[i] = message?.[i]?.pattern || "Trường này không đúng định dạng yêu cầu!"
                }
            }
        }
        setError(errorObject);
        return errorObject
    }

    return {
        form,
        inputChange,
        error,
        submit
    }
}