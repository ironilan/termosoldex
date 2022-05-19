import React from 'react';
import { NavLink } from 'react-router-dom';

import socio from './../../images/socio.jpg'

class AboutCompany extends React.Component {
    render() {
        const {datos: {title, image, description, cellphone}} = this.props;
        
        return (
            <>
                <div className="section-full p-t80 bg-white">
                    <div className="container">
                        <div className="section-content ">
                            <div className="m-service-containt text-black">
                                <div className="row">
                                    <div className="col-md-5 col-sm-12">
                                        <div className="service-about-left">
                                            <div className="mt-media">
                                                <img src={image} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7 col-sm-12">
                                        <div className="service-about-right m-b30">
                                            <h3 className="m-t0">{title}</h3>
                                            <p className=""
                                            dangerouslySetInnerHTML={{
                                                __html: description
                                            }}></p>
                                            <div className="call-for-quote-outer">
                                                <div className="call-quote">
                                                    <span>Puedes comunicarte al:</span>
                                                    <h4>{cellphone}</h4>
                                                </div>
                                                <div className="call-estimate bg-dark">
                                                <NavLink to={"/contacto"} className="site-button-secondry btn-effect">Contáctanos</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default AboutCompany;