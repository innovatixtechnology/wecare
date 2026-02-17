import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '/public/images/testimonial/1.jpg'
import Img2 from '/public/images/testimonial/2.jpg'
import Image from 'next/image';


const testimonials = [
    {
        id: '01',
        img: Img1,
        Des: "Witnessing We Care’s work in blood donation, healthcare, and community relief has been truly inspiring. Their dedication to improving lives reflects genuine compassion and commitment.",
        title: 'Sanu Kumar',
        sub: 'Manager, Dakshin Bihar Gramin Bank',
    },
    {
        id: '02',
        img: Img2,
        Des: "We Care’s consistent efforts in blood donation, education, and disaster support show true dedication to community welfare. Their impact continues to inspire trust and respect.",
        title: 'Ashish Dev',
        sub: 'Assistant Prosecution Officer, Home Department, Bihar',
    },
    {
        id: '03',
        img: Img1,
        Des: "Seeing We Care work so passionately—whether in education or blood donation—has been deeply inspiring. Their commitment to society is truly commendable.",
        title: 'Nitish Kumar',
        sub: 'Branch Manager, UCO Bank',
    },
    {
        id: '04',
        img: Img1,
        Des: "Being associated with We Care has shown me the power of collective action. Their work in blood donation and community support creates real and lasting impact.",
        title: 'Shekhar Jha',
        sub: 'Associate, State Bank of India',
    },
    {
        id: '05',
        img: Img1,
        Des: "We Care’s compassion-driven work in education, healthcare, and relief efforts sets a powerful example. Their dedication to social betterment is truly admirable.",
        title: 'Dr. (Prof.) Sita Bhagat',
        sub: 'Associate Professor, TMBU Bhagalpur',
    },
    {
        id: '06',
        img: Img1,
        Des: "We Care’s commitment to addressing community needs through education and relief work is inspiring. Their leadership continues to touch countless lives.",
        title: 'Dr. Anupma Dubey',
        sub: 'Assistant Professor, New Horizon College of Education',
    },
    {
        id: '07',
        img: Img1,
        Des: "We Care’s dedication to blood donation and child education creates meaningful change. Their efforts save lives today and shape a better future.",
        title: 'Dr. Ayush Srivastava',
        sub: 'Assistant Professor, AIIMS Jammu',
    },
];





const Testimonial = (props) => {

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        ]
    };


    return (

        <section className={"" + props.tClass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="section-title">
                            <span>We are always open for children</span>
                            <h2>Helping each other can
                                make <span>world</span> better</h2>
                        </div>
                    </div>
                </div>
                <div className="testimonial-wrap">
                    <Slider {...settings} className="testimonial-slider">
                        {testimonials.map((testitem, titem) => (
                            <div className="testimonial-card" key={titem}>
                                <ul>
                                    <li><i className="flaticon-star"></i></li>
                                    <li><i className="flaticon-star"></i></li>
                                    <li><i className="flaticon-star"></i></li>
                                    <li><i className="flaticon-star"></i></li>
                                    <li><i className="flaticon-star"></i></li>
                                </ul>
                                <p>{testitem.Des}</p>
                                <div className="autr-name">
                                    <div className="image">
                                        <Image src={testitem.img} alt="" />
                                    </div>
                                    <div className="text">
                                        <h3>{testitem.title}</h3>
                                        <span>{testitem.sub}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </section>
    );
}

export default Testimonial;





