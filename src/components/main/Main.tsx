import React from "react";
import s from './Main.module.css'
import styleContainer from './../../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.greetings}>
                    <span>Hello!</span>
                    <h1>I am Ivan Andreev</h1>
                    <span>Front-End Developer</span>
                </div>
                <div className={s.photo}>Photo will be placed here</div>
            </div>
        </div>
    )
}