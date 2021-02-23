import React from 'react';
import classes from './Business.module.css';
import Skill from './Skill/Skill';
import { faBrush, faVectorSquare, faTerminal, faBoxOpen, faGlobeEurope } from "@fortawesome/free-solid-svg-icons/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const business = (props) => {
    return (
        <section className={classes.Business}>
            <div className={classes.title}>
                <p className={classes.subtitle}>What we do</p>
                <h2 className={classes.business__title}>We’ve got everything you need to launch and grow your business</h2>
            </div>
            <Skill icon={faBrush}>Brand Identity</Skill>
            <Skill icon={faVectorSquare}>Graphic Design</Skill>
            <Skill icon={faTerminal}>Web Development</Skill>
            <Skill icon={faBoxOpen}>Packaging Design</Skill>
            <Skill icon={faGlobeEurope}>Web Design</Skill>
        </section>
    );
};

export default business;