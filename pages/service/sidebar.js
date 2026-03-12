import React from 'react';
import Link from 'next/link'
import Services from '../../api/Services';


const ServiceSidebar = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const filteredServices = Services.filter((service) => !['Become-a-volunteer', 'Donate-for-paathshala'].includes(service.slug));

    return (
        <div className="service-sidebar">
            <div className="service-catagory">
                <ul className="service-sidebar-list">
                    {filteredServices.map((serves, index) => (
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
