import React from 'react';

import classes from './Toolbar.module.css';
import Hamburger from '../SideDrawer/Hamburger/Hamburger';
import Logo from '../../Logo/Logo';

// import Logo from '../../Logo/Logo';
// import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
       <Logo />
       <Hamburger clicked={props.clicked}/>
    </header>
);

export default toolbar;