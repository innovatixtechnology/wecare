import { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/hero/hero';
import FunFact from '../components/FunFact/FunFact';
import About from '../components/about/about';
import EventSection from '../components/EventSection/EventSection';
import ServiceSection from '../components/ServiceSection/ServiceSection';
import CausesSection from '../components/CausesSection/CausesSection';
import CtaSection from '../components/CtaSection/CtaSection';
import Testimonial from '../components/Testimonial/Testimonial';
import ProcessSection from '../components/ProcessSection/ProcessSection';
import BlogSection from '../components/BlogSection/BlogSection';
import Footer from '../components/footer/Footer';
import Scrollbar from '../components/scrollbar/scrollbar';

const HomePage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'} />
            <Hero hclass={'wpo-hero-slider'} />
            {/* <PartnerSection hclass={'partners-section'} /> */}
            <FunFact />
            <About hclass={'about-section section-padding'}/>
            <EventSection />
            <ServiceSection  />
            <CausesSection hclass={"causes-section section-padding pt-0"} />
            <CtaSection hclass={'cta-section'}/>
            {/* <ProjectSection hclass={'project-section section-padding'}/>  */}
            <Testimonial tClass={'testimonial-section section-padding'} />
            <ProcessSection />
            {/* <InstagamSection hclass={'instagam-section section-padding pb-0'}/> */}
            <BlogSection tClass={'blog-section'}/>
            <Footer />
            <Scrollbar /> 
        </Fragment>
    )
};
export default HomePage;