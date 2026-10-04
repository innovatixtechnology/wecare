import React from "react";
import Image from "next/image";


const LeadershipSection = (props) => {

    const { hclass, sectionTitle, members } = props;

    return (
        <section className={"" + hclass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="section-title text-center">
                            <h2>{sectionTitle}</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {
                        members.map((member, mitem) => (
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4" key={mitem}>
                                <div className="vol-card">
                                    <div className="image">
                                        <Image src={member.timg} alt={member.title} />
                                    </div>
                                    <div className="text">
                                        <h3>{member.title}</h3>
                                        <span>{member.subtitle}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default LeadershipSection;
