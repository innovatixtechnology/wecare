import React from 'react';
import CountUp from 'react-countup';


const FunFactS2 = (props) => {
    return (
        <section className={"" + props.hclass}>
            <h3 className="d-none"> section title</h3>
            <div className="container">
                <div className="wraper">
                    <div className="row g-0">
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="item">
                                {/* <i className="flaticon-pawprint"></i> */}
                                <h2><CountUp end={500} enableScrollSpy />+</h2>
                                <p>Blood Units Collected Annually</p>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="item">
                                {/* <i className="flaticon-donation"></i> */}
                                <h2><CountUp end={1500} enableScrollSpy />+</h2>
                                <p>Health Beneficiaries</p>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="item">
                                {/* <i className="flaticon-global-distribution"></i> */}
                                <h2><CountUp end={100} enableScrollSpy />+</h2>
                                <p>Children Supported</p>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="item">
                                {/* <i className="flaticon-charity"></i> */}
                                <h2><CountUp end={100} enableScrollSpy />+</h2>
                                <p>Active Volunteers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunFactS2;

