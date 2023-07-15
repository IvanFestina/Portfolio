import React from "react";
import s from './Skills.module.scss'
import {Skill} from "./skill/skill";
import {Title} from "../../common/Title/Title";
import {
    SiJavascript,
    SiJest,
    SiReact,
    SiRedux,
    SiStorybook,
    SiTypescript,
    SiNodedotjs,
    SiMongodb,

} from 'react-icons/si'
import {SiReactquery} from 'react-icons/si'
import {FaWpforms} from "react-icons/fa/";
import {FaGithubSquare} from "react-icons/fa";
import {GiPolarBear} from "react-icons/gi";
import {MdAnimation} from "react-icons/md";


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
                    <Skill title={'React Native'}
                           icon={<SiReact color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'React / Next.js'}
                           icon={<SiReact color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'Redux (RTK)'}
                           icon={<SiRedux color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'Zustand'}
                           icon={<GiPolarBear color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'React Query / Axios'}
                           icon={<SiReactquery color='#FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'Formik / React-Hook-Form'}
                           icon={<FaWpforms color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'Animated API / Reanimated'}
                           icon={<MdAnimation color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'Node.js'}
                           icon={<SiNodedotjs color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'MongoDB'}
                           icon={<SiMongodb color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'Git / GitHub'}
                           icon={<FaGithubSquare color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'Storybook'}
                           icon={<SiStorybook color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'TDD, Jest'}
                           icon={<SiJest color=' #FFFFE0' size={'3rem'}/>}/>
                </div>
            </div>
        </div>
    )
}
