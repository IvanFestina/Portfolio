import React from "react";
import s from './Nav.module.scss'
import {Link} from "react-scroll";

export const Nav = () => {
    return (
        <div className={s.nav}>
            <Link activeClass={s.active} to='about' spy={true} smooth={true} offset={0}
                  duration={500}>About</Link>
            <Link activeClass={s.active} to='skills' spy={true} smooth={true} offset={0}
                  duration={500}>Skills</Link>
            <Link activeClass={s.active} to='projects' spy={true} smooth={true} offset={-200}
                  duration={500}>Projects</Link>
            <Link activeClass={s.active} to='contacts' spy={true} smooth={true} offset={-270}
                  duration={500}>Contacts</Link>
        </div>
    )
}