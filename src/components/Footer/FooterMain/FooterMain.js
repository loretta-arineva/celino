import React from 'react';

import classes from './FooterMain.module.css';

const footerMain = (props) => {
    return (
        <div className={classes.FooterMain}>
            <div className={classes.footer__about}>
                <h3>Celino<span>.</span></h3>
                <p>
                    Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut.
                </p>
            </div>
            <div className={classes.footer__notification}>
                <p className="title">Get Notified</p>
                <p>Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt iusto porro.</p>
            </div>
            <div className={classes.newsletter__input}>
                <input type="email" placeholder="Email Address"/>
                <button className={classes.subscribe__btn}>Subscribe</button>
            </div>
        </div>
    );
};

export default footerMain;