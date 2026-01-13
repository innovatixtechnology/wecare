import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link'
import shape1 from '/public/images/slider/shape-1.svg'
import shape2 from '/public/images/slider/shape-2.svg'
import shape3 from '/public/images/slider/shape-3.svg'
import shape4 from '/public/images/slider/shape-4.png'
import shape5 from '/public/images/slider/shape-5.svg'
import Image from "next/image";





const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Hero = (props) => {
    return (

        <section className={"" + props.hclass} >
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                navigation
            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-1.jpg'})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <span>Beacon of Compassion : Donate Blood, Save Live</span>
                                </div>
                                <div className="slide-sub-title">
                                    <h2>Change The
                                        <span> Life, </span> Change The <span className="text">world </span>
                                    </h2>
                                </div>
                                <div data-swiper-parallax="500" className="slide-btns">
                                    <Link onClick={ClickHandler} href="/about" className="theme-btn">About Us</Link>
                                    <div className="call">
                                        <div className="icon">
                                            <i className="flaticon-phone"></i>
                                        </div>
                                        <div className="text">
                                            <h3>Call Us Now</h3>
                                            <span>+91 9006955211</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-shape">
                            <Image src={shape1} alt="" />
                        </div>
                        <div className="shape-1">
                            <Image src={shape2} alt="" />
                        </div>
                        <div className="shape-2">
                            <Image src={shape3} alt="" />
                        </div>
                        <div className="shape-3">
                            <Image src={shape4} alt="" />
                        </div>
                        <div className="shape-4">
                            <Image src={shape5} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-1.jpg'})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <span>Paathshala Udaan Hausloon Ki</span>
                                </div>
                                <div className="slide-sub-title">
                                    <h2>Giving Help 
                                        <span> To, </span> Those Who <span className="text">Needs It </span>
                                    </h2>
                                </div>
                                <div data-swiper-parallax="500" className="slide-btns">
                                    <Link onClick={ClickHandler} href="/about" className="theme-btn">About Us</Link>
                                    <div className="call">
                                        <div className="icon">
                                            <i className="flaticon-phone"></i>
                                        </div>
                                        <div className="text">
                                            <h3>Call Us Now</h3>
                                            <span>+91 9006955211</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-shape">
                            <Image src={shape1} alt="" />
                        </div>
                        <div className="shape-1">
                            <Image src={shape2} alt="" />
                        </div>
                        <div className="shape-2">
                            <Image src={shape3} alt="" />
                        </div>
                        <div className="shape-3">
                            <Image src={shape4} alt="" />
                        </div>
                        <div className="shape-4">
                            <Image src={shape5} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
               
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-2.jpg'})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <span>Project Prakriti</span>
                                </div>
                                <div className="slide-sub-title">
                                    <h2>Better Environment 
                                         <span className="text"> Better Tomorrow </span>
                                        </h2>
                                </div>
                                <div data-swiper-parallax="500" className="slide-btns">
                                    <Link onClick={ClickHandler} href="/about" className="theme-btn">About Us</Link>
                                    <div className="call">
                                        <div className="icon">
                                            <i className="flaticon-phone"></i>
                                        </div>
                                        <div className="text">
                                            <h3>Call Us Now</h3>
                                            <span>+91 9162410681</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-shape">
                            <Image src={shape1} alt="" />
                        </div>
                        <div className="shape-1">
                            <Image src={shape2} alt="" />
                        </div>
                        <div className="shape-2">
                            <Image src={shape3} alt="" />
                        </div>
                        <div className="shape-3">
                            <Image src={shape4} alt="" />
                        </div>
                        <div className="shape-4">
                            <Image src={shape5} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
               
                ...
            </Swiper>
        </section>
    )
}

export default Hero;