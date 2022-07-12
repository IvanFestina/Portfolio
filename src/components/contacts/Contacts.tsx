import React, {useState} from 'react'
import s from './Contacts.module.scss'
import {Title} from "../../common/Title/Title";
import {useFormik} from "formik";
import TextField from "@material-ui/core/TextField/TextField";
import {styled} from "@material-ui/core";
import axios from 'axios';

type FormikErrorType = {
    name?: string
    email?: string
    message?: string
}

export const Contacts = () => {

    const [message, setMessage] = useState<string>('The message was sent')
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate: values => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.name) {
                errors.name = 'Required';
            } else if (values.name.length > 20) {
                errors.name = 'Must be 20 characters or less';
            }
            if (!values.message) {
                errors.message = 'Required';
            } else if (values.message.length > 2000) {
                errors.message = 'Must be 2000 characters or less';
            }
            return errors;
        },
        onSubmit: values => {
            debugger
            axios.post("http://localhost:3010/sendMessage", {
                name: values.name,
                email: values.email,
                message: values.message
            })
                .then(() => {
                    debugger
                    alert(values)
                })
                .catch(error => {console.log(error.message)})
        }
    })

    return (
        <div id='contacts' className={s.contactsBlock}>
            <div className={s.contactsContainer}>
                <Title text={'Contacts'} style={{color: '#294861'}}/>
                <form className={s.form} onSubmit={formik.handleSubmit}>
                    <CssTextField className={s.mUIInput}
                                  InputLabelProps={{className: s.label}}
                                  id="custom-css-outlined-input"
                                  label="Name"
                                  margin="normal"
                                  {...formik.getFieldProps('name')}/>
                    {
                        formik.touched.name
                        && formik.errors.name
                        && <div
                            style={{color: '#DEB112'}}>{formik.errors.name}</div>
                    }

                    <CssTextField className={s.mUIInput}
                                  InputLabelProps={{className: s.label}}
                                  id="custom-css-outlined-input"
                                  label="Email"
                                  margin="normal"
                                  {...formik.getFieldProps('email')}/>
                    {formik.touched.email
                    && formik.errors.email
                    &&
                    <div style={{color: '#DEB112'}}>{formik.errors.name}</div>
                    }

                    <CssTextField className={s.mUITextarea}
                                  InputLabelProps={{className: s.label}}
                                  id="custom-css-outlined-input"
                                  multiline
                                  minRows={3}
                                  label="Message" margin="normal"
                                  {...formik.getFieldProps('message')}/>
                    {
                        formik.touched.message
                        && formik.errors.message
                        && <div
                            style={{color: '#DEB112'}}>{formik.errors.message}</div>}

                    <div className={s.terms}>
                        <button className={s.button} type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#DEB112',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#294861',
        },
        '&:hover fieldset': {
            borderColor: '#DEB112',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#DEB112',
        },
    },
});