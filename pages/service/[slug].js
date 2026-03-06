import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Accordion from '../../components/Accordion/Accordion';
import { useRouter } from 'next/router'
import Services from '../../api/Services';
import ServiceSidebar from './sidebar'
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
                    <div className="row">
                        <div className="col-lg-4 col-12 order-2 order-lg-1">
                            <ServiceSidebar activeSlug={router.query.slug} />
                        </div>
                        <div className="col-lg-8 col-12 order-1 order-lg-2">
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