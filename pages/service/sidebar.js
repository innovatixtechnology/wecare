import React from 'react';
import Link from 'next/link'
import Services from '../../api/Services';


const ServiceSidebar = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const filteredIndex = Services.findIndex((service) => service.slug === props.activeSlug) + 1;

    return (
        <div className="service-sidebar">
            <div className="service-catagory">
                <ul className="service-sidebar-list">
                    {Services.map((serves, index) => (
                        <li key={index}>
                            <Link href={'/service/[slug]'} className={serves.slug === props.activeSlug ? 'active' : ''} as={`/service/${serves.slug}`} onClick={ClickHandler}>
                                {serves.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ServiceSidebar;

