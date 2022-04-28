import React from 'react'
import s from './Contacts.module.scss'
import style from '../../common/styles/Container.module.css'

export const Contacts = () => {

    return (
        <div className={s.contactsBlock}>
            <div className={`${style.container} ${s.container}`}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea id="msg" name="user_message"></textarea>
                    <button type='submit' onClick={(event) => {event.preventDefault()}}>Sent</button>
                </form>
            </div>
        </div>
    )
}
