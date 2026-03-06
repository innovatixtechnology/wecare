import React from "react";
import Link from "next/link";
import Teams from "../../api/team";
import Image from "next/image";
import Slider from "react-slick";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSection = (props) => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="section-title text-center">
                            <span>You Can Help The Poor With Us</span>
                            <h2>Our Founders & Co-Founders</h2>
                        </div>
                    </div>
                </div>
                <div className="team-slider-wrapper">
                    <Slider {...settings}>
                        {
                            Teams.slice(0, 8).map((team, titem) => (
                                <div className="team-slide-item" key={titem}>
                                    <div className="vol-card">
                                        <div className="image">
                                            <Image src={team.timg} alt="" />
                                            <span className="hover-icon"><i className="flaticon-share"></i></span>
                                            <ul>
                                                <li><Link onClick={ClickHandler} href="#"><i className="flaticon-camera"></i></Link></li>
                                                <li><Link onClick={ClickHandler} href="#"><i className="flaticon-facebook-app-symbol"></i></Link></li>
                                                <li><Link onClick={ClickHandler} href="#"><i className="flaticon-linkedin"></i></Link></li>
                                                <li><Link onClick={ClickHandler} href="#"><i className="flaticon-twitter"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="text">
                                            <h3><Link onClick={ClickHandler} href={'/volunteer-single/[slug]'} as={`/volunteer-single/${team.slug}`}>{team.title}</Link></h3>
                                            <span>{team.subtitle}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
                <div className="all-btn">
                    <Link onClick={ClickHandler} href="/volunteer-1" className="theme-btn">All Volunteer / Members</Link>
                </div>
            </div>
        </section>
    )
}
export default TeamSection;
