import React from 'react';
import classes from './Intro.module.css';

const intro = (props) => {
    return (
        <section className={classes.Intro}>
            <div className={classes.title}>
                <p className={classes.subtitle}>Hello there</p>
                <h2 className={classes.about__title}>We Are Celino</h2>
            </div>
            <div className={classes.description}>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est sapiente necessitatibus, modi quis doloribus numquam praesentium deleniti amet, similique ipsum hic voluptatem temporibus autem nulla tempore quod laborum asperiores laboriosam.</p>
            </div>
        </section>
    );
};

export default intro;