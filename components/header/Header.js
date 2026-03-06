import { useState } from 'react'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import HeaderTopbar from '../HeaderTopbar/HeaderTopbar';
import Midbar from '../Midbar/Midbar';
import Image from 'next/image';

export const NAV_ITEMS = [
    {
        title: "Home",
        href: "/",
        items: []
    },
    {
        title: "About",
        href: "/about",
        items: []
    },
    {
        title: "What we do",
        href: "/service",
        items: []
    },
    {
        title: "Media Corner",
        href: "/portfolio",
        items: []
    },
    {
        title: "Team",
        href: "/team",
        items: []
    },
    {
        title: "Blog",
        href: "/blog",
        items: []
    },
    {
        title: "Contact",
        href: "/contact",
    },
]



const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <header id="header">
            {/* <HeaderTopbar/> */}
            <Midbar />
            <div className={"" + props.hclass}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <MobileMenu />
                            </div>
                            <div className="col-lg-0 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" href="/home">
                                        <Image
                                            src={'/images/logo.webp'}
                                            width={100}
                                            height={100}
                                            alt="We Care logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        {
                                            NAV_ITEMS.map((nav) => (
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href={nav.href ?? '#'}>{nav.title}</Link>
                                                    {nav.items?.length ? <ul className="sub-menu">
                                                        {
                                                            nav?.items?.map((sub) => (
                                                                <li><Link onClick={ClickHandler} href={sub.href ?? '#'}>{sub.title}</Link></li>
                                                            ))
                                                        }
                                                    </ul> : null}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="close-form">
                                        <Link onClick={ClickHandler} className="theme-btn" href="/donate">Donate now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}


export default Header;