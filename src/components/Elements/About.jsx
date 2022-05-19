import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { baseUrl } from '../../config';

const images = [
    require('./../../images/gal.jpg'),
    require('./../../images/gal.jpg'),
    require('./../../images/gal.jpg'),
    require('./../../images/gal.jpg'),
    require('./../../images/gal.jpg')    
]

var bnr1 = require('./../../images/background/bg-6.png');

class About extends React.Component {

   
    render() {
        const options = {
            loop:true,
            autoplay:true,
            margin:30,
            nav:false,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                991:{
                    items:1
                }
            }
        };

        const grupo = this.props.datos;
        //console.log('sssa', grupo);
        return (
            <>
                <div className="section-full mobile-page-padding p-t80 p-b30 bg-dark bg-repeat square_shape2 bg-moving" style={{backgroundImage:"url(" + bnr1.default + ")"}}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator">
                                    <h2 className="text-white text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Sobre</span> Nosotros</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content">
                            <div className="row">
                                <div className="col-md-9 col-sm-12">
                                    {
                                        grupo.banner?
                                        <OwlCarousel className="owl-carousel about-home owl-btn-vertical-center" {...options}>
                                            {grupo.banner?.map((item, index) => (
                                                <div className="item" key={index}>
                                                    <div className="mt-img-effect zoom-slow">
                                                    <NavLink to="/consorcio"><img src={item.imagen} alt=""/></NavLink>
                                                    </div>
                                                </div>
                                                
                                            ))}
                                        
                                        </OwlCarousel>
                                        : ''
                                    }
                                </div>
                                <div className="col-md-3 col-sm-12">
                                    <div className="about-home-right bg-white p-a30">
                                        
                                    <p 
                                        dangerouslySetInnerHTML={{
                                            __html: grupo.about
                                        }}></p>
                                        <div className="text-right">
                                            <NavLink to="/consorcio" className="site-button-link" data-hover="Read More">Ver más<i className="fa fa-angle-right arrow-animation" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-left p-l50 text-uppercase hilite-dark">
                        <strong>Consorcio</strong>
                    </div>
                </div>
            </>
        );
    }
};

export default About;