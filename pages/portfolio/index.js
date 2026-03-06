import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import ProjectSectionS2 from '../../components/ProjectSectionS2/ProjectSectionS2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-2.svg'

const PortfolioPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Media Corner'} pagesub={'Media Corner'} />
            <ProjectSectionS2 hclass={'project-section-s2 section-padding'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default PortfolioPage;
