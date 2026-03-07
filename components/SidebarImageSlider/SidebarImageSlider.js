import React from 'react';
import Slider from 'react-slick';

const SidebarImageSlider = ({ images }) => {

    const defaultImages = [
        { id: 1, src: 'https://placehold.co/392x273/e8e8e8/999?text=Gallery+1+392X273', alt: 'Gallery image 1 392X273' },
        { id: 2, src: 'https://placehold.co/392x273/e8e8e8/999?text=Gallery+2+392X273', alt: 'Gallery image 2 392X273' },
        { id: 3, src: 'https://placehold.co/392x273/e8e8e8/999?text=Gallery+3+392X273', alt: 'Gallery image 3 392X273' },
        { id: 4, src: 'https://placehold.co/392x273/e8e8e8/999?text=Gallery+4+392X273', alt: 'Gallery image 4 392X273' },
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
