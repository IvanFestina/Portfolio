import React from "react";
import s from './Projects.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {Project} from "./project/Project";


export const Projects = () => {
    return (
        <div className={s.projectBlock}>
            <div className={`${styleContainer.container} ${s.projectContainer}`}>
                <div  className={s.title}>
                    <h2>My projects</h2>
                </div>
                <div className={s.projects}>
                    <Project title={'Social Network Project'}
                             description={'This is a model of basic social network to assess my skill'}/>
                    <Project title={'TodoList'}
                             description={'Here you can find interactive todolist for your needs'}/>
                </div>
            </div>
        </div>
    )
}