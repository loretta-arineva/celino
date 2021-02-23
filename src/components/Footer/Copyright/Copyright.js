import React from 'react';

import classes from './Copyright.module.css';
import Logo from '../../Logo/Logo';

const copyrightContainer = (props) => (
    <div className={classes.Copyright}>
        <div className={classes.copyright__text}>
            <p>Copyright &copy; <span>{props.currentYear}</span> Loreta Krasteva. All Rights Reserved.</p>
        </div>
    </div>
);

export default copyrightContainer;