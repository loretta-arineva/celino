import React from 'react';
import classes from './Skill.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const skill = (props) => {
    return (
        <div className={classes.Skill}>
            <div className={classes.title}>
                <FontAwesomeIcon icon={props.icon} className={classes.icons} />
                <h3 className={classes.about__title}>{props.children}</h3>
            </div>
            <div className={classes.skill__description}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis necessitatibus soluta vitae minus aspernatur quam possimus. Eaque maxime explicabo voluptates laboriosam laudantium dolore, officia, repudiandae eveniet, aliquid nemo iure architecto.</p>
            </div>
        </div>
    );
};

export default skill;