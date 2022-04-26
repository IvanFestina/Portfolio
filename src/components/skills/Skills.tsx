import React from "react";
import s from './Skills.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Skill} from "./skill/skill";
import {Title} from "../../common/components/Title";
import JSTS from "../../assets/image/TSpng.png";
import HTMLCSS from "../../assets/image/HTMLCSS.png";
import ReactLogo from "../../assets/image/React.png";


export const Skills = () => {


    const JS_TS = {
        backgroundImage: `url(${JSTS})`
    }
    const HTML_CSS = {
        backgroundImage: `url(${HTMLCSS})`
    }
    const React_Logo = {
        backgroundImage: `url(${ReactLogo})`
    }

    return (
        <div className={s.skillBlock}>
            <div className={`${styleContainer.container} ${s.skillContainer}`}>
                <Title text={'Skills'}/>
                <div className={s.skills}>
                    <Skill title={'HTML CSS'} style={HTML_CSS}
                           description={'Using my knowledge to make UI more interactive and adaptable'}/>
                    <Skill title={'TypeScript'} style={JS_TS}
                           description={'Applying JavaScript with TypeScript to make apps more stable'}/>
                    <Skill title={'React'} style={React_Logo} description={'Using this library to make magic happen'}/>
                </div>
            </div>
        </div>
    )
}