import React from 'react';
import s from './Projects.module.scss'
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
            <div className={s.projectContainer}>
                <Title text={'Projects'} style={{color: '#FFFFE0'}}/>
                <div id='projects' className={s.projects}>
                    <Project title={'Memorize'}
                             description={'Team project for learning and memorizing with use of cards'}
                             style={flashCards}/>
                    <Project title={'TodoList'}
                             description={'Here you can find interactive todolist for your needs'}
                             style={todolist}
                             urlDemo={'https://todolist-toolkit-ts-react.herokuapp.com'}
                             urlCode={'https://github.com/IvanFestina/todolist-project'}
                    />
                    <Project title={'Social Network Project'}
                             description={'This is a model of basic social network to assess my skill'}
                             style={socialNetwork}
                    />
                </div>
            </div>
        </div>
    )
}