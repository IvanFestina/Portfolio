import React from 'react';
import s from './Projects.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Project} from './project/Project';
import {Title} from '../../common/Title/Title';
import DemoTodolistProject from './../../assets/image/DemoTodolistProject.jpg'
import DemoSocialNetworkProject from './../../assets/image/DemoSocialNetworkProject.png'
import DemoFlashCardsProject from './../../assets/image/DemoFlashCardsProject.jpg'

export const Projects = () => {

    const socialNetwork = {
        backgroundImage: `url(${DemoSocialNetworkProject})`
    }
    const todolist = {
        backgroundImage: `url( ${DemoTodolistProject} )`
    }
    const flashCards = {
        backgroundImage: `url( ${DemoFlashCardsProject} )`,
    }


    return (
        <div className={s.projectBlock}>
            <div className={`${styleContainer.container} ${s.projectContainer}`}>
                <Title text={'Projects'} style={{color: '#FFFFE0'}}/>
                <div className={s.projects}>
                    <Project title={'Social Network Project'}
                             description={'This is a model of basic social network to assess my skill'}
                             style={socialNetwork}/>
                    <Project title={'TodoList'}
                             description={'Here you can find interactive todolist for your needs'} style={todolist}/>
                    <Project title={'Memorize'}
                             description={'Team project for learning and memorizing with use of cards'}
                             style={flashCards}/>
                </div>
            </div>
        </div>
    )
}