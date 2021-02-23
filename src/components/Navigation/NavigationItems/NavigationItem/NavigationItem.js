import React from 'react';

import classes from './NavigationItem.module.css';
import {Router, Link} from 'react-router-dom';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navigationItem = (props) => (
    <li className={classes.NavigationItem} onClick={props.clicked}>
        {/* <Link to={props.link} className={props.active ? classes.active : null}>{props.children}</Link> */}
    </li>
);

export default navigationItem;