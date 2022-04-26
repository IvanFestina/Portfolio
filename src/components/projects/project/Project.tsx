import React from "react";
import s from './Project.module.scss'

export type ProjectProps = {
    description: string
    title: string
    style: any
}

export const Project = (props: ProjectProps) => {
    return (
        <div className={s.project}>
            <div className={s.projectImage} style={props.style}>
                <div className={s.viewBtn}><a href={''}>View</a></div>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    )
}