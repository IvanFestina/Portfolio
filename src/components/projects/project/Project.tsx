import React from "react";
import s from './Project.module.scss'
import {motion} from "framer-motion"


export type ProjectProps = {
    description: string
    title: string
    style: any
    urlDemo?: string
    urlCode?: string
    setCallback?: (toggle: boolean) => void
    onlyCode?: boolean
    onlyDemo?: boolean
}

export const Project = ({
                            description,
                            title,
                            style,
                            urlDemo,
                            urlCode,
                            setCallback,
                            onlyCode,
                            onlyDemo
                        }: ProjectProps) => {
    return (
        <div className={s.project}>
            <motion.div
                whileHover={{scale: 1.03, transition: {ease: "easeOut", duration: 0.5}}}
                className={s.projectImage} style={style}>
                {onlyCode ?
                    null
                    : setCallback ?
                        <motion.button
                            onClick={() => setCallback(true)}
                            whileTap={{scale: 1}} whileHover={{scale: 1.2}}
                            transition={{type: "spring", stiffness: 300}}
                            className={s.viewBtn}>Video
                        </motion.button>
                        :
                        <a href={urlDemo}>
                            <motion.button whileTap={{scale: 1}} whileHover={{scale: 1.2}}
                                           transition={{type: "spring", stiffness: 300}}
                                           className={s.viewBtn}>Demo
                            </motion.button>
                        </a>
                }
                {
                    onlyDemo ?
                        null
                        : <a href={urlCode}>
                            <motion.button whileTap={{scale: 1}} whileHover={{scale: 1.2}}
                                           transition={{type: "spring", stiffness: 300}}
                                           className={s.viewBtn}>Code
                            </motion.button>
                        </a>}
            </motion.div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{title}</h3>
                <span className={s.description}>{description}</span>
            </div>
        </div>
    )
}
