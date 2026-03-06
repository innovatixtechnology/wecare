import React, { Fragment, useState } from 'react';

import Collapse from "@mui/material/Collapse";
import Link from "next/link";

import { NAV_ITEMS } from '../header/Header';

const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="mobileMenu-wrapper">
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {NAV_ITEMS.map((item, mn) => {
                        return (
                            <li className={item.id === openId ? 'active' : null} key={mn}>
                                {item.items && item.items.length > 0 ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <ul className="subMenu">
                                                <Fragment>
                                                    {item.items.map((submenu, i) => {
                                                        return (
                                                            <li key={i}>
                                                                <Link onClick={ClickHandler} className="active"
                                                                    href={submenu.href || '#'}>{submenu.title}</Link>
                                                            </li>
                                                        )
                                                    })}
                                                </Fragment>
                                            </ul>
                                        </Collapse>
                                    </Fragment>
                                    : <Link onClick={ClickHandler} className="active"
                                        href={item.href || '#'}>{item.title}</Link>
                                }
                            </li>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu mobail-menu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;