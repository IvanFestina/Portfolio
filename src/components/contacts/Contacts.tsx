import React from 'react'
import s from './Contacts.module.css'
import style from '../../common/styles/Container.module.css'

export const Contacts = () => {

    return (
        <div className={s.contactsBlock}>
            <div className={`${style.container} ${s.container}`}>
                <h2>Contacts</h2>
                <div className={s.form}>
                    <form action="/my-handling-form-page" method="post">

                        <input type="text" id="name" name="user_name"/>

                        <input type="text" id="mail" name="user_mail"/>

                        <textarea id="msg" name="user_message"></textarea>

                    </form>
                </div>
                <button>Sent</button>
            </div>
        </div>
    )
}
