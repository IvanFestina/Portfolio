import React from "react";
import s from './Footer.module.scss'
import {FaGithubSquare, FaLinkedin, FaTelegram} from "react-icons/fa";
import {motion} from "framer-motion"


export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.container}>
                <h2 className={s.title}>Ivan Andreev</h2>
                <div className={s.socialIcons}>
                    <motion.div whileHover={{scale: 1.4}}
                                className={s.socialIcon}><a
                        href="https://www.linkedin.com/in/ivan-andreev-86853a233/"><FaLinkedin
                        color='#294861'
                        size={'3rem'}/></a></motion.div>
                    <motion.div className={s.socialIcon} whileHover={{scale: 1.4}}><a
                        href=""><FaTelegram color='#294861'
                                            size={'3rem'}/></a></motion.div>
                    <motion.div className={s.socialIcon} whileHover={{scale: 1.4}}><a
                        href=""><FaGithubSquare
                        color='#294861'
                        size={'3rem'}/></a></motion.div>
                </div>
                <h3 className={s.rights}>2022 All rights reserved</h3>
            </div>
        </div>
    )
}