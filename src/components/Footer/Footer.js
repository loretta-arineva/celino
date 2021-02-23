import React from 'react';

import classes from './Footer.module.css';
import Copyright from '../Footer/Copyright/Copyright';
import FooterMain from '../Footer/FooterMain/FooterMain';

const navigationItem = (props) => {
    return (
        <footer className={classes.Footer}>
            <FooterMain />
            <Copyright currentYear={props.currentYear} />
        </footer>
    );
};

export default navigationItem;