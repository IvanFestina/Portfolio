import React from "react";
import s from './Main.module.scss'
import MainPhoto from '../../assets/image/AvaMain.jpg'
// import {ParticlesComponent} from "../../common/particles/particles";
import {ParticlesComponent} from "../../common/particles/particles";
import {motion} from "framer-motion";


const titleAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
    },
}

const Main_Photo = {
    backgroundImage: `url( ${MainPhoto} )`
}

export const Main = () => {


    return (
        <div className={s.mainBlock}>
            <ParticlesComponent/>
            <motion.div initial='hidden'
                        whileInView='visible' variants={titleAnimation}
                        transition={{delay: 0.4, duration: 0.5}}
                        className={s.mainContainer}>
                <div className={s.greetings}>
                    <span>Hi there!</span>
                    <h1>I'm Ivan</h1>
                    <p>And I'm a</p>
                    <span>Front-End Developer</span>
                </div>
                <div className={s.photo} style={Main_Photo}/>
            </motion.div>
        </div>
    )
}