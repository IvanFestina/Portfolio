import React from "react";
import s from './Main.module.scss'
import styleContainer from './../../common/styles/Container.module.css'
import MainPhoto from '../../assets/image/AvaMain.jpg'
export const Main = () => {

 const Main_Photo = {
        backgroundImage: `url( ${MainPhoto} )`
    }

    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.greetings}>
                    <span>Hi there!</span>
                    <h1>I'm Ivan</h1>
                    <span>And I'm a Front-End Developer</span>
                </div>
                <div className={s.photo} style={Main_Photo}/>
            </div>
        </div>
    )
}