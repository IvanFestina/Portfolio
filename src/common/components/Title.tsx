import React from "react";
import s from './Title.module.scss'

type TitlePropsType = { text: string }

export const Title = ({text}: TitlePropsType) => {
    return (
        <div className={s.title}>
            <h2>{text}</h2>
        </div>
    )
}