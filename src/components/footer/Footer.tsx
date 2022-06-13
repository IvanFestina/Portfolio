import React from "react";
import s from './Footer.module.scss'
import style from '../../common/styles/Container.module.css'
import {FaGithubSquare, FaLinkedin, FaTelegram} from "react-icons/fa";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${style.container} ${s.container}`}>
                <h2 className={s.title}>Ivan Andreev</h2>
                <div className={s.socialIcons}>
                    <div className={s.socialIcon}><FaLinkedin color='#294861'
                                                              size={'3rem'}/></div>
                    <div className={s.socialIcon}><FaTelegram color='#294861'
                                                              size={'3rem'}/></div>
                    <div className={s.socialIcon}><FaGithubSquare color='#294861'
                                                                  size={'3rem'}/></div>
                </div>
                <h3 className={s.rights}>2022 All rights reserved</h3>
            </div>
        </div>
    )
}