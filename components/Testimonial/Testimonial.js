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
        Des: "Being part of We Care fills me with immense pride as I witness your compassion and agility in addressing community needs, especially during emergencies and conservation efforts.\n\nI am particularly proud of my sons, Nitesh, Kush, and Yash, and other team members for their dedication in founding and supporting the We Care NGO. Their initiative and leadership inspire me daily.\n\nAs you continue your impactful work, please accept my best wishes. Your efforts have significantly improved countless lives, and I wholeheartedly support your mission",
        title: 'Dr. Anupma Dubey',
        sub: "Assistant professor New horizion college of education",
    },
    {
        id: '02',
        img: Img2,
        Des: "I first met the We Care team during a health event a few years ago, and since then, I've seen their unwavering dedication in organizing blood donation, providing essential healthcare services, educating children in slums, planting trees for a greener environment, and supporting flood victims  during emergencies. Their commitment to these causes is truly commendable, and being part of We Care fills me with immense pride. I extend my heartfelt best wishes to the team as they continue their impactful work for our community.",
        title: 'Ashish Dev',
        sub: "Assistant Prosecution Officer - Home Department, Bihar",
    },
    {
        id: '03',
        img: Img1,
        Des: "A bunch of hardworking, dedicated youths, We Care NGO has tirelessly served the people of Bhagalpur. They organize mega blood donation camps, provide free education to poor children, distribute blankets in winter, conduct cleanliness drives, and protect plants from insects, all with great zeal and dedication. I have been in the social field for the last ten years, and about three or four years ago, I discovered We Care in Adampur, Bhagalpur. Among many organizations, We Care stands out with its positive environment and creative minds. Working with them is a great experience that enhances inner talents and skills.",
        title: 'Md.Ainul Hoda',
        sub: "Ex Territory Sales Incharge Gillette India Ltd",
    },
]




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





