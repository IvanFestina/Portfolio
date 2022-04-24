import React from "react";
import s from './Projects.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../../common/components/Title";


export const Projects = () => {
    // const socialNetwork = {
    //     backgroundImage: 'url(' + imgUrl + ')',
    // }
    return (
        <div className={s.projectBlock}>
            <div className={`${styleContainer.container} ${s.projectContainer}`}>
                <Title text={'Projects'}/>
                <div className={s.projects}>
                    <Project title={'Social Network Project'}
                             description={'This is a model of basic social network to assess my skill'}/>
                    <Project title={'TodoList'}
                             description={'Here you can find interactive todolist for your needs'}/>
                    <Project title={'Memorize'}
                             description={'Team project for learning and memorizing with use of cards'}/>
                </div>
            </div>
        </div>
    )
}