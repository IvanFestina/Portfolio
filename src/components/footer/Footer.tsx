import React from "react";
import s from './Footer.module.css'
import style from '../../common/styles/Container.module.css'
import {FooterNav} from "./footerNav/FooterNav";
export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${style.container} ${s.container}`}>
                <h2>Ivan Andreev</h2>
                <div className={''}>
                    <FooterNav/>
                </div>
                <h3>2022 All rights reserved</h3>
            </div>

        </div>
    )
}