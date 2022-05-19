import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


class Clientes extends React.Component {
    render() {
        const {clientes} = this.props.datos;
        const options = {
            loop: true,
            margin: 0,
            autoplay: true,
            nav: false,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                767: {
                    items: 4
                },
                1000: {
                    items: 6
                }
            }
        };
        return (
            <>
                <div className="section-full p-t10 bg-white ">
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-center servipetrol">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary colorservipetrol">Nuestros</span> Clientes</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content">
                            {/* TESTIMONIAL 4 START ON BACKGROUND */}
                            <div className="section-content">
                                <div className="section-content p-tb10 owl-btn-vertical-center">
                                    {
                                        clientes ? 
                                        <OwlCarousel className="servipetrol owl-carousel home-client-carousel-2" {...options}>
                                            {clientes?.map((item, index) => (
                                                <div className="item" key={index}>
                                                    <div className="ow-client-logo">
                                                        <div className="client-logo client-logo-media">
                                                            <NavLink to={"#"} ><img src={item.image} alt="" /></NavLink></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </OwlCarousel>
                                        : ''
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Clientes;