import React from "react";
import s from './Title.module.scss'
import {motion} from "framer-motion";


type TitlePropsType = { text: string, style?: object }

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

export const Title = ({text, style}: TitlePropsType) => {
    return (
        <motion.div className={s.title} initial='hidden'
                    whileInView='visible' variants={titleAnimation}
                    transition={{delay: 0.4, duration: 0.5}} style={style}>
            <motion.h2 variants={titleAnimation}
                       transition={{delay: 0.2, duration: 0.5}}>{text}</motion.h2>
        </motion.div>
    )
}