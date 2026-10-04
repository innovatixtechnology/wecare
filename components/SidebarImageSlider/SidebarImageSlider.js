import React from 'react';
import Slider from 'react-slick';

const SidebarImageSlider = ({ images }) => {

    const defaultImages = [
        { id: 1, src: '/images/gallery/1.jpg', alt: 'We Care event photo 1' },
        { id: 2, src: '/images/gallery/2.jpg', alt: 'We Care event photo 2' },
        { id: 3, src: '/images/gallery/3.jpg', alt: 'We Care event photo 3' },
        { id: 4, src: '/images/gallery/4.jpg', alt: 'We Care event photo 4' },
    ];

    const sliderImages = images || defaultImages;

    const sliderSettings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="sidebar-image-slider">
            <Slider {...sliderSettings}>
                {sliderImages.map((img) => (
                    <div key={img.id} className="sidebar-slide">
                        <img src={img.src} alt={img.alt} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SidebarImageSlider;
