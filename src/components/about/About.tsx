import React from "react";
import s from './About.module.scss'
import MainPhoto from '../../assets/image/Ava2.jpg'
import {ParticlesComponent} from "../../common/particles/particles";
import {motion} from "framer-motion";
//@ts-ignore
import ReactTypingEffect from 'react-typing-effect'

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
export const About = () => {

    return (
        <div id='about' className={s.aboutBlock}>
            <ParticlesComponent/>
            <motion.div initial='hidden'
                        whileInView='visible' variants={titleAnimation}
                        transition={{delay: 0.4, duration: 0.5}}
                        className={s.aboutContainer}>
                <div className={s.greetings}>
                    <span>Hi there!</span>
                    <h1>I'm Ivan</h1>
                    <p>And I'm a</p>
                    <ReactTypingEffect
                            speed={100}
                            eraseSpeed = {100}
                            typingDelay ={800}
                            text={["Front-end developer"]}
                        />
                </div>
                <div className={s.photo} style={Main_Photo}/>
            </motion.div>
        </div>
    )
}
