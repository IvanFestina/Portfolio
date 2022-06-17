import React, {ReactNode} from "react";
import s from './Skill.module.scss'
import {motion} from "framer-motion";

export type SkillProps = {
    description?: string
    title: string
    style?: object
    icon: ReactNode
}

export const Skill = (props: SkillProps) => {

    const variants = {
        visible: {
            opacity: 1,
            animate: {scale: [1, 1.2, 1.2, 1], rotate: [-45, -405, -405, -45]},
            transition: {ease: "easeOut", duration: 2},
        },
        hidden: {opacity: 0},
    }

    return (
        <div className={s.skill}>
            <div className={s.square}>
                <motion.div className={s.icon} variants={variants}
                            whileInView={"visible"} initial={"hidden"} whileHover={{scale: [1, 1.2, 1.2, 1], rotate: [-45, -405, -405, -45]}}
                >
                    {props.icon}
                </motion.div>
            </div>
            <h3 className={s.title} style={props.style}>
                {props.title}
            </h3>
        </div>
    )
}