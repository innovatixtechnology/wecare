import React from 'react';
import CountUp from 'react-countup';
import Shape from '/public/images/funfuck-shape.svg';
import Image from 'next/image';

const FunFact = (props) => {

    return (
        <section className="funfact-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <h2>Together We Can</h2>
                            <h3>Let’s Be Better  <span>Humans !</span></h3>
                            <p>Spreading kindness through action, compassion, and community to create real change.</p>
                            <a href="tel:+919006955211">
                                <i className="flaticon-phone-call"></i>
                                <span>+91 9006955211</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="funfact">
                            <ul>
                                <li>
                                    <div className="count">
                                        <h3><CountUp end={20} enableScrollSpy />+</h3>
                                    </div>
                                    <span>Cities we have connected</span>
                                </li>
                                <li>
                                    <div className="count">
                                        <h3><CountUp end={20} enableScrollSpy />k+</h3>
                                    </div>
                                    <span>Funds raised for every event</span>
                                </li>
                                <li>
                                    <div className="count">
                                        <h3><CountUp end={10} enableScrollSpy />+</h3>
                                    </div>
                                    <span>We have monthly donor</span>
                                </li>
                                <li>
                                    <div className="count">
                                        <h3><CountUp end={25} enableScrollSpy />+</h3>
                                    </div>
                                    <span>Successful Blood campains</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape">
                <Image src={Shape} alt="" />
            </div>
        </section>
    )

}

export default FunFact;