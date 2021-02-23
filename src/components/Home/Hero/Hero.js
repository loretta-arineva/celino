import React from 'react';
import classes from './Hero.module.css';

const hero = (props) => {
    return (
        <section className={classes.Hero}>
            <div className={classes.shadowOverlay}></div>
            <div className={classes.wrapper}>
                <p className={classes.subtitle}>WELCOME TO CELINO</p>
                <h1><span className={classes.titleName}>Where dreams come to reality.</span></h1>
                <div className={classes.homeContent__buttons}>
                    <button className={classes.hero__buttons}>Adopt a cabbage</button>
                    <button className={classes.hero__buttons}>More about us</button>
                </div>
                <div className={classes.homeContent__scroll}>
                    <a><span className={classes.scroll__arrow}>Scroll down</span></a>
                </div>
                <div className={classes.homeContent__line}></div>
            </div>

        </section>
    );
};

export default hero;