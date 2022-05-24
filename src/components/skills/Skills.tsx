import React from "react";
import s from './Skills.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Skill} from "./skill/skill";
import {Title} from "../../common/components/Title";
import {
    SiCss3,
    SiJavascript,
    SiRedux,
    SiHtml5,
    SiTypescript,
    SiReact
} from 'react-icons/si'


export const Skills = () => {


    return (
        <div className={s.skillBlock}>
            <div className={`${styleContainer.container} ${s.skillContainer}`}>
                <Title text={'Skills'} style={{color: '#294861'}}/>
                <div className={s.skills}>
                    <Skill title={'HTML'} icon={<SiHtml5 color='#294861' size={'4rem'}/>}
                           description={'Using my knowledge to make UI more interactive and adaptable'}/>
                    <Skill title={'CSS/SCSS'} icon={<SiCss3 color='#FFFFE0' size={'4rem'}/>}/>
                    <Skill title={'JavaScript'} icon={<SiJavascript color='#FFFFE0' size={'4rem'}/>}/>
                    <Skill title={'TypeScript'} icon={<SiTypescript color=' #FFFFE0' size={'4rem'}/>}/>
                    <Skill title={'React'} icon={<SiReact color=' #FFFFE0' size={'4rem'}/>} description={'Using this library to make magic happen'}/>
                    <Skill title={'Redux/Toolkit'} icon={<SiRedux color=' #FFFFE0' size={'4rem'}/>}/>
                    <Skill title={'Redux Toolkit'} icon={<SiJavascript color=' #FFFFE0' size={'4rem'}/>}/>
                </div>
            </div>
        </div>
    )
}