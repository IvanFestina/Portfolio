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
                <div className={s.viewBtn}><a href={''}>Project</a></div>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    )
}