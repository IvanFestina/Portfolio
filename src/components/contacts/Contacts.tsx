import React, {useState} from 'react'
import s from './Contacts.module.scss'
import {Title} from "../../common/Title/Title";
import {useFormik} from "formik";
import TextField from "@material-ui/core/TextField/TextField";
import {styled} from "@material-ui/core";

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

        }
    })

    return (
        <div id='contacts' className={s.contactsBlock}>
            <div className={s.contactsContainer}>
                <Title text={'Contacts'} style={{color: '#294861'}}/>
                <div className={s.form}>
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
                            style={{color: '#294861'}}>{formik.errors.name}</div>
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
                    <div style={{color: '#294861'}}>{formik.errors.name}</div>
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
                            style={{color: '#294861'}}>{formik.errors.message}</div>}

                    <div className={s.terms}>
                        <button className={s.button}>Send</button>
                    </div>
                </div>
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