import React from "react";
import s from './Project.module.scss'
import {motion} from "framer-motion"
import {Button, ButtonGroup, Link} from "@material-ui/core";


export type ProjectProps = {
    description: string
    title: string
    style: any
}

export const Project = (props: ProjectProps) => {
    return (
        <div className={s.project}>
            <motion.div
                whileHover={{scale: 1.1, transition: {ease: "easeOut", duration: 0.5}}}
                className={s.projectImage} style={props.style}>
                <a href={''}>
                    <motion.button whileTap={{scale: 1}} whileHover={{scale: 1.2}}
                                   transition={{type: "spring", stiffness: 300}}
                                   className={s.viewBtn}>View
                    </motion.button>
                </a>
                <a href={''}>
                    <motion.button whileTap={{scale: 1}} whileHover={{scale: 1.2}}
                                   transition={{type: "spring", stiffness: 300}}
                                   className={s.viewBtn}>Code
                    </motion.button>
                </a>
            </motion.div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    )
}