import React from 'react';

import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <p className={props.logoClass ? classes.logoClassDrawer : null}>Celino<span className={classes.logo__dot}>.</span></p>
    </div>
);

export default logo;