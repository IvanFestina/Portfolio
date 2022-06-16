import React from "react";
import s from './Main.module.scss'
import MainPhoto from '../../assets/image/AvaMain.jpg'
// import {ParticlesComponent} from "../../common/particles/particles";
import {ParticlesComponent} from "../../common/particles/particles";

const Main_Photo = {
    backgroundImage: `url( ${MainPhoto} )`
}

export const Main = () => {

    return (
        <div className={s.mainBlock}>
            <ParticlesComponent />
            <div className={s.mainContainer}>
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