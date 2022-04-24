import React from "react";
import s from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {Skill} from "./skill/skill";
import {Title} from "../../common/components/Title";


export const Skills = () => {
    return (
        <div className={s.skillBlock}>
            <div className={`${styleContainer.container} ${s.skillContainer}`}>
                <Title text={'Skills'}/>
                <div className={s.skills}>
                    <Skill title={'HTML CSS'}
                           description={'Using my knowledge to make UI more interactive and adaptable'}/>
                    <Skill title={'JS TS'}
                           description={'Applying JavaScript with TypeScript to make apps more stable'}/>
                    <Skill title={'React'} description={'Using this library to make magic happen'}/>
                </div>
            </div>
        </div>
    )
}