import React from "react";
import s from './Project.module.css'

export type ProjectProps = {
    description: string
    title: string
}

export const Project = (props: ProjectProps) => {
    return (
        <div className={s.project}>

            <div className={s.projectPhoto}>
                <span>Photo of my project will be placed here</span>
                <div className={s.projectRef}><a href={''}>Project</a></div>
            </div>
            <div className={s.textProjectBlock}>
                <h3>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    )
}