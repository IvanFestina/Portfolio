import React from "react";
import s from './Footer.module.scss'
import style from '../../common/styles/Container.module.css'
import {FooterNav} from "./footerNav/FooterNav";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${style.container} ${s.container}`}>
                <h2 className={s.title}>Ivan Andreev</h2>
                <div className={s.socialIcons}>
                    <div className={s.socialIcon}><a href={''}></a></div>
                    <div className={s.socialIcon}><a href={''}></a></div>
                    <div className={s.socialIcon}><a href={''}></a></div>
                </div>
                <h3>2022 All rights reserved</h3>
            </div>

        </div>
    )
}