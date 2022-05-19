import React from 'react';
import { NavLink } from 'react-router-dom';

import bgblog from './../../images/bgblog.jpg'

const blogs = [
    {
        image: require('./../../images/proy1.png'),
        title: 'Commercial design for project',
        slug: 'comercial-deign-for-project',
        description: 'Which is the same as saying through shrinking from toil and pain.',
        date: '14',
        month: 'April',
        year: '2021'
    },
    {
        image: require('./../../images/proy2.png'),
        title: 'Our interior design prediction',
        slug: 'our-interior-design-prediction',
        description: 'Today we can tell you, thanks to your passion, hard work creativity, and expertise.',
        date: '16',
        month: 'Feb',
        year: '2021'
    },
    {
        image: require('./../../images/proy3.png'),
        title: 'Low cost interior designing ideas',
        slug: 'low-cost-interior-designing-ideas',
        description: 'Every pleasure is to be welcomed every pain avoided. in certain circumstances obligations.',
        date: '18',
        month: 'Jan',
        year: '2021'
    }
]



class Blogs extends React.Component {
    render() {
        const grupo = this.props.datos;
        return (
            <>
                <div className="section-full mobile-page-padding p-t80 p-b30 square_shape1 bg-parallax bg-cover" data-stellar-background-ratio="0.5" style={{backgroundImage:"url(" + bgblog + ")"}}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head ">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator">
                                    <h2 className="text-white text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Últimas</span> Noticias</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="row">
                                {grupo.noticias?.map((item, index) => (
                                    <div className="col-md-4 col-sm-6" key={index}>
                                        <div className="mt-box blog-post latest-blog-3 date-style-1 bg-white m-b30">
                                            <div className="mt-post-media mt-img-overlay7">
                                                <NavLink to={"/noticias/"+item.slug}><img src={item.image} alt={item.title} className="height-270"/></NavLink>
                                            </div>
                                            <div className="mt-post-info p-a30">
                                                <div className="post-overlay-position">
                                                    <div className="mt-post-meta ">
                                                        <ul>
                                                            <li className="post-date"><strong className="text-primary">{item.day}</strong> <span>{item.month} {item.year}</span></li>
                                                            {/* <li className="post-author">By <NavLink to={"/categorias/"+item.slug}>Admin</NavLink> </li>
                                                            <li className="post-comment"><NavLink to={"/categorias/"+item.slug}>2 comment</NavLink> </li> */}
                                                        </ul>
                                                    </div>
                                                    <div className="mt-post-title ">
                                                        <h4 className="post-title m-b0">{item.title}</h4>
                                                    </div>
                                                    <div className="mt-post-text">
                                                        <p>{item.resume}</p>
                                                    </div>
                                                    <div className="readmore-line">
                                                        <span><NavLink to={"/noticias/"+item.slug} className="site-button-link" data-hover="Ver más">Ver más <i className="fa fa-angle-right arrow-animation" /></NavLink></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-right p-r50 text-uppercase hilite-dark">
                        <strong>Noticias</strong>
                    </div>
                    <div className="m-0 text-center">
                        <NavLink to={"/noticias"} className="site-button btn-effect">Ver todas</NavLink>
                    </div>
                </div>
            </>
        );
    }
};

export default Blogs;