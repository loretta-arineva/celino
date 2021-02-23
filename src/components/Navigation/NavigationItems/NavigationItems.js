import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = (props) => (
    <nav className={classes.NavigationItems}>
        <NavigationItem clicked={props.clicked} link="/" active>Karma</NavigationItem>
        <NavigationItem clicked={props.clicked} link="/shop">Shop</NavigationItem>
        <NavigationItem clicked={props.clicked} link="/">Sessions</NavigationItem>
        <NavigationItem clicked={props.clicked} link="/">Blog</NavigationItem>
        <NavigationItem clicked={props.clicked} link="/contact">Contacts</NavigationItem>
        <NavigationItem clicked={props.clicked} link="/about">About</NavigationItem>
        <NavigationItem clicked={props.clicked} link="/">Custom Sessions</NavigationItem>
    </nav>
);

export default navigationItems;