import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'


const Contactpage = () => {

    return(
        <section className="contact-page section-padding">
            <div className="container">
                <div className="office-info">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="office-info-item">
                                <div className="office-info-icon">
                                    <div className="icon">
                                        <i className="fi flaticon-home-address"></i>
                                    </div>
                                </div>
                                <div className="office-info-text">
                                    <h2>address line</h2>
                                <p>
Manik Sarkar, T.N. Singh Lane
Bengali Tola, Bhagalpur, Bihar – 812001
</p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="office-info-item active">
                                <div className="office-info-icon">
                                    <div className="icon">
                                        <i className="fi flaticon-phone-call"></i>
                                    </div>
                                </div>
                                <div className="office-info-text">
                                    <h2>Phone Number</h2>
                                    <p>9006955211 | 9162410681</p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="office-info-item">
                                <div className="office-info-icon">
                                    <div className="icon">
                                        <i className="fi flaticon-mail-1"></i>
                                    </div>
                                </div>
                                <div className="office-info-text">
                                    <h2>Address</h2>
                                    <p>✉️ info@wecarebgp.org</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="contact-left">
                                <h2>Get in touch</h2>
                                <div className="map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.423237038043!2d86.98180560000002!3d25.256344200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f035142fbe7bbd%3A0x76d4c34a1b373f50!2sWe%20Care!5e0!3m2!1sen!2sin!4v1771439455317!5m2!1sen!2sin"
                                        ></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="contact-right">
                                <div className="title">
                                    <h2>Fill Up The Form</h2>
                                    <p>Your email address will not be published. Required fields are marked *</p>
                                </div>
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     )
        
}

export default Contactpage;
// https://maps.app.goo.gl/V4tojabiueYavhaJ8
