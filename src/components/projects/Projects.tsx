import React, {useState} from 'react';
import s from './Projects.module.scss'
import {Project} from './project/Project';
import {Title} from '../../common/Title/Title';
import DemoTodolistProject from './../../assets/image/DemoTodolistProject.jpg'
import DemoSocialNetworkProject from './../../assets/image/DemoSocialNetworkProject.png'
import DemoFlashCardsProject from './../../assets/image/DemoFlashCardsProject.jpg'
import DemoTaxiApp from './../../assets/image/Taxi_app.jpg'
import Modal from "../../common/components/Modal";

export const Projects = () => {

    const [isModal, setIsModal] = useState<boolean>(false)


    const socialNetwork = {
        backgroundImage: `url(${DemoSocialNetworkProject})`
    }
    const todolist = {
        backgroundImage: `url( ${DemoTodolistProject} )`
    }
    const flashCards = {
        backgroundImage: `url( ${DemoFlashCardsProject} )`,
    }
    const taxiApp = {
        backgroundImage: `url( ${DemoTaxiApp})`
    }


    return (
        <div className={s.projectBlock}>
            <div className={s.projectContainer}>
                <Title text={'Projects'} style={{color: '#FFFFE0'}}/>
                <div id='projects' className={s.projects}>
                    <Project title={'Memorize'}
                             description={'Team project for learning and memorizing with use of cards'}
                             style={flashCards}
                             urlDemo={'https://msseleznev.github.io/friday-app'}
                             urlCode={'https://github.com/msseleznev/friday-app'}
                    />
                    <Project title={'TodoList'}
                             description={'Here you can find interactive todolist for your needs'}
                             style={todolist}
                             urlDemo={'https://ivanfestina.github.io/todolist-project'}
                             urlCode={'https://github.com/IvanFestina/todolist-project'}
                    />
                    <Project title={'Social Network Project'}
                             description={'This is a model of basic social network to assess my skill'}
                             style={socialNetwork}
                             urlDemo={'https://ivanfestina.github.io/TS-React-Social-NetWork'}
                             urlCode={'https://github.com/IvanFestina/TS-React-Social-NetWork'}
                    />
                    <Project title={'Taxi - React Native App'}
                             description={'Frontend part of a mobile app for ordering a taxi, picking up a destination and more'}
                             style={taxiApp}
                             urlCode={'https://github.com/IvanFestina/Taxi-react-native-app'}
                             setCallback={setIsModal}
                    />
                </div>
                <Modal active={isModal} setActive={setIsModal}>
                    <iframe width="600" height="900"
                            src="https://www.youtube.com/embed/q-1LX_JUW3w"
                            title="Taxi react-native app (demo)" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                    </Modal>
            </div>
        </div>
    )
}