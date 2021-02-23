import React from 'react';

import classes from './Hamburger.module.css';

const hamburgerIcon = (props) => (
    <div className={classes.container} onClick={props.clicked}>
        <div className={classes.Hamburger}></div>
    </div>
);

export default hamburgerIcon;