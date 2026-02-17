import React from 'react';
import Link from 'next/link'
import BlogSidebar from '../BlogSidebar/BlogSidebar'

import blogs from '../../api/blogs'
import Image from 'next/image';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogList = (props) => {
    return (
        <section className={`blog-pg-section section-padding ${props.blnewclass}`}>
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-8 col-12 ${props.blRight}`}>
                        <div className="blog-content">
                            {blogs.slice(0, 3).map((blog, bitem) => (
                                <div className={`post  ${blog.blClass}`} key={bitem}>
                                    <div className="entry-media">
                                        <Image src={blog.blogSingleImg} alt='' />
                                        <span>{blog.day}<br />
                                            {blog.month}</span>
                                    </div>
                                    <div className="entry-meta">
                                        <ul>
                                            <li><i className="fi flaticon-user"></i> By <Link onClick={ClickHandler} href={'/blog/[slug]'} as={`/blog/${blog.slug}`}>{blog.author}</Link> </li>
                                            <li><i className="fi ti-comment-alt"></i> Comments {blog.comment} </li>
                                            <li><i className="fi flaticon-clock"></i><Link onClick={ClickHandler} href={'/blog/[slug]'} as={`/blog/${blog.slug}`}>3 min Read</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="entry-details">
                                        <h3><Link onClick={ClickHandler} href={'/blog/[slug]'} as={`/blog/${blog.slug}`}>{blog.title2}</Link></h3>
                                        <p>{blog.description}</p>
                                        <Link onClick={ClickHandler} href={'/blog/[slug]'} as={`/blog/${blog.slug}`} className="read-more">READ MORE...</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <BlogSidebar blLeft={props.blLeft} />
                </div>
            </div>
        </section>

    )

}

export default BlogList;
