import React from 'react';

import classes from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import CloseButton from '../../UI/CloseButton/CloseButton';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.close];
    if(props.esc) {
        attachedClasses = [classes.SideDrawer, classes.close];
    }
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.open];
    }

    return (

        <div className={attachedClasses.join(' ')}>
            <CloseButton className={classes.closeBtn} place="drawer" close={props.close} />
            <Logo logoClass />
            <div className={classes.container}>
                <NavigationItems clicked={props.close}/>
            </div>
        </div>
    );
};

export default sideDrawer;