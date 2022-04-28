import React, {ReactNode} from "react";
import s from './Skill.module.scss'

export type SkillProps = {
    description?: string
    title: string
    style?: object
    icon: ReactNode
}

export const Skill = (props: SkillProps) => {
    return (
        <div className={s.skill}>
            <div className={s.icon} />
            <h3 className={s.title} style={props.style}>
            {props.title}
            </h3>
            {props.icon}
            {/*<span className={s.description}>*/}
            {/*    {props.description}*/}
            {/*</span>*/}

        </div>
    )
}