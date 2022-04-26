import React from "react";
import s from './Header.module.scss'
import {Nav} from "../navigation/Nav";
export const Header = () => {
    return (
        <div className={s.header}>
            <Nav/>
        </div>
    )
}