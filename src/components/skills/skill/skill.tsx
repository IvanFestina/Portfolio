import React from "react";
import s from './Skill.module.scss'

export type SkillProps = {
    description: string
    title: string
    style: any
}

export const Skill = (props: SkillProps) => {
    return (
        <div className={s.skill}>
            <div className={s.icon} style={props.style}/>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>

        </div>
    )
}