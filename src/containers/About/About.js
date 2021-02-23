import React, { Fragment } from 'react';

import Intro from '../../components/About/Intro/Intro';
import classes from './About.module.css';
import Business from '../../components/About/Business/Business';

class Karma extends React.Component {
    render() {
        return (
            <div className={classes.About}>
                <Intro />
                <div className={classes.about__line}></div>
                <Business />
            </div>
        );
    }
}
export default Karma;