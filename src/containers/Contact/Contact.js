import React, { Fragment } from 'react';

import classes from './Contact.module.css';
import ContactForm from '../../components/SiteComponents/Contact/ContactForm/ContactForm';
import FormDescription from '../../components/SiteComponents/Contact/ContactDescription/FormDescription';

class Karma extends React.Component {
    render() {
        return (
            <Fragment>
                <section className={classes.Contact}>
                    <div className={classes.contact__container}>
                        <FormDescription />
                        <ContactForm />
                    </div>
                </section>
            </Fragment>
        );
    }
}
export default Karma;