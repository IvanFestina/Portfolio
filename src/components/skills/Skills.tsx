import React from "react";
import s from './Skills.module.scss'
import {Skill} from "./skill/skill";
import {Title} from "../../common/Title/Title";
import {
    SiJavascript,
    SiJest,
    SiMaterialui,
    SiReact,
    SiRedux,
    SiStorybook,
    SiTypescript,
    SiNextdotjs, SiNodedotjs, SiMongodb
} from 'react-icons/si'
import {FaExchangeAlt, FaWpforms} from "react-icons/fa/";
import {FaGithubSquare} from "react-icons/fa";
import {FiFramer} from "react-icons/fi";


export const Skills = () => {

    return (
        <div id='skills' className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                <Title text={'Skills'} style={{color: '#294861'}}/>
                <div
                    className={s.skills}>
                    <Skill title={'JavaScript'}
                           icon={<SiJavascript color='#FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'TypeScript'}
                           icon={<SiTypescript color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'React'}
                           icon={<SiReact color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'React Native (expo)'}
                           icon={<SiReact color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'Next.js'}
                           icon={<SiNextdotjs color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'Redux/Thunk/Toolkit'}
                           icon={<SiRedux color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'Node.js'}
                           icon={<SiNodedotjs color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'MongoDB'}
                           icon={<SiMongodb color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'Formik / React-Hook-Form'}
                           icon={<FaWpforms color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'MaterialUI'}
                           icon={<SiMaterialui color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'Git / GitHub'}
                           icon={<FaGithubSquare color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'Storybook'}
                           icon={<SiStorybook color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'TDD, Jest'}
                           icon={<SiJest color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'Axios'}
                           icon={<FaExchangeAlt color='#FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'Framer Motion'}
                           icon={<FiFramer color=' #FFFFE0' size={'3rem'}/>}/>
                </div>
            </div>
        </div>
    )
}