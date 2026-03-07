import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Accordion from '../../components/Accordion/Accordion';
import { useRouter } from 'next/router'
import Services from '../../api/Services';
import ServiceSidebar from './sidebar'
import SidebarImageSlider from '../../components/SidebarImageSlider/SidebarImageSlider'
import video from '/public/images/service-single/video.jpg'
import simg1 from '/public/images/image-gallery/1.jpg'
import simg2 from '/public/images/image-gallery/2.jpg'
import simg3 from '/public/images/image-gallery/3.jpg'
import simg4 from '/public/images/image-gallery/4.jpg'
import Footer from '../../components/footer/Footer';
import logo from '/public/images/logo-2.svg'
import VideoModal from '../../components/ModalVideo/VideoModal';
import Image from 'next/image';

const ServiceSinglePage = (props) => {
    const router = useRouter()

    const serviceDetails = Services.find(item => item.slug === router.query.slug)

    return (
        <Fragment>
            <Navbar Logo={logo} hclass={'wpo-site-header'} />
            <PageTitle pageTitle={serviceDetails?.title} pagesub={'Service Single'} />
            <section className="service-single-page section-padding">
                <div className="container">
                    <div className="row service-detail-row">
                        <div className="col-lg-4 col-12 service-left-col">
                            <div className="service-sidebar-col">
                                <ServiceSidebar activeSlug={router.query.slug} />
                            </div>
                            <div className="service-slider-col">
                                <SidebarImageSlider />
                            </div>
                            <div className="service-slider-col d-none d-lg-block">
                                <SidebarImageSlider images={[
                                    { id: 1, src: 'https://placehold.co/392x273/e8e8e8/999?text=Impact+1+392X273', alt: 'Impact 1 392X273' },
                                    { id: 2, src: 'https://placehold.co/392x273/e8e8e8/999?text=Impact+2+392X273', alt: 'Impact 2 392X273' },
                                    { id: 3, src: 'https://placehold.co/392x273/e8e8e8/999?text=Impact+3+392X273', alt: 'Impact 3 392X273' },
                                    { id: 4, src: 'https://placehold.co/392x273/e8e8e8/999?text=Impact+4+392X273', alt: 'Impact 4 392X273' },
                                ]} />
                            </div>
                        </div>
                        <div className="col-lg-8 col-12 service-content-col">
                            <div className="service-single-wrap">
                                <div className="title-image">
                                    <Image src={serviceDetails?.simage} alt="" />
                                </div>
                                <h2>{serviceDetails?.title}</h2>
                                <p>{serviceDetails?.subheading}</p>
                                <div className="video-wrap">
                                    <div className="video-img">
                                        <Image src={video} alt="" />
                                    </div>
                                </div>
                                {
                                    serviceDetails?.data?.map((item, index) => (
                                        <div key={item?.heading + index}>
                                            <h3>{item?.heading}</h3>
                                            <p>{item.text}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ServiceSinglePage;