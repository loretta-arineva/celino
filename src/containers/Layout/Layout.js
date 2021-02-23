import React, {Fragment} from 'react';
// import { Route } from 'react-router-dom';

import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Home/Hero/Hero';

import classes from './Layout.module.css';

class Layout extends React.Component {
    state = {
        showSideDrawer: false,
        ESCAPE_KEY: "Escape",
        currentYear: new Date().getFullYear()
    }

    sideDrawerClosedHandler = () => {
        document.querySelector("body").style.overflow = 'hidden';
        this.setState({ showSideDrawer: true });
    }

    sideDrawerToggleHandler = () => {
        document.querySelector("body").style.overflow = 'scroll';

        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    _handleKeyDown = (event) => {
        switch (event.key) {
            case this.state.ESCAPE_KEY:
                document.querySelector("body").style.overflow = 'scroll';
                this.setState((prevState) => {
                    return { showSideDrawer: false };
                });
                break;
            default:
                break;
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this._handleKeyDown);
    }

    render() {
        return (
            <Fragment>
                <Header clicked={this.sideDrawerClosedHandler} />
                <SideDrawer open={this.state.showSideDrawer} close={this.sideDrawerToggleHandler} esc={this.closeSideDrawerHandler} />
                <main className={classes.Layout}>
                <Hero title="Path of" />
                <About />
                    {/* <Route path="/" exact component={Karma} /> */}
                    {/* <Route path="/about" component={About} /> */}
                    {/* <Route path="/contact" component={Contact} /> */}
                </main>
                <Footer currentYear={this.state.currentYear} />
            </Fragment>
        );
    }
}

export default Layout;