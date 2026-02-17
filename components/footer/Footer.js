import { useState } from 'react'
import Link from 'next/link'
import Services from '../../api/Services';
import shape1 from '/public/images/f-shape1.svg';
import Image from 'next/image';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const Footer = (props) => {
    const [email, setEmail] = useState('');

    const handleReset = () => {
        setEmail('');
    };
    return (
        <footer className="wpo-site-footer">
            <div className="footer-socialicon">
                <ul>
                    <li><i className="flaticon-facebook-app-symbol"></i> <span>Facebook</span></li>
                    <li><i className="ti-instagram"></i> <span>Instagram</span></li>
                    <li><i className="flaticon-twitter"></i> <span>Twitter</span></li>
                    <li><i className="flaticon-youtube"></i> <span>youtube</span></li>
                    <li><i className="flaticon-linkedin"></i> <span>LinkedIN</span></li>
                </ul>
            </div>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget newsletter-s2">
                                <div className="widget-title">
                                    <h3>Stay connected with WE CARE</h3>
                                </div>
                                <p>
Join our newsletter to receive updates on our initiatives, events, and impact stories from the community.</p>
                                <form className="form-fild">
                                    <input
                                        className="fild"
                                        type="text"
                                        placeholder="Your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <button type="button" onClick={handleReset}>
                                        <i className="flaticon-right-arrow"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget ">
                                <div className="widget-title">
                                    <h3>Services</h3>
                                </div>
                                <ul>
                                    {Services.slice(0, 5).map((service, Sitem) => (
                                        <li key={Sitem}><Link onClick={ClickHandler} href={'/service/[slug]'} as={`/service/${service.slug}`}>{service.title}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget ">
                                <div className="widget-title">
                                    <h3>Useful links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/">Home</Link></li>
                                    <li><Link onClick={ClickHandler} href="/about">about us</Link></li>
                                    <li><Link onClick={ClickHandler} href="/service">Our Work</Link></li>
                                    <li><Link onClick={ClickHandler} href="/events">Events</Link></li>
                                    <li><Link onClick={ClickHandler} href="/team">Our Team</Link></li>
                                    <li><Link onClick={ClickHandler} href="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget locations-widget ">
                                <div className="widget-title">
                                    <h3>Locations</h3>
                                </div>
                                <p>WE CARE NGO, <br />
Manik Sarkar, T.N. Singh Lane<br />
Bengali Tola, Bhagalpur, Bihar – 812001
</p>
                                <ul>
                                    <li>Contact</li>
                                    <li>✉️ info@wecarebgp.org</li>
                                    <li>📞 9006955211 | 9162410681
</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> &copy; 2025 <Link onClick={ClickHandler} href="/">wecarebgp.in</Link> All
                                rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape">
                <Image src={shape1} alt="" />
            </div>
        </footer>
    )
}

export default Footer;







