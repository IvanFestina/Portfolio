import React from "react";
import s from './Title.module.scss'

type TitlePropsType = { text: string, style?: object }

export const Title = ({text, style}: TitlePropsType) => {
    return (
        <div className={s.title} style={style}>
            <h2>{text}</h2>
        </div>
    )
}