import React from 'react';
import { NavLink } from 'react-router-dom';

var img1 = require('./../../images/left-men.png');
var img2 = require('./../../images/background/bg-4.png');
var img3 = require('./../../images/background/bg-site.png');

class OurMission extends React.Component {
    render() {
        const grupo = this.props.datos;
        return (
            <>
                <div className="section-full mobile-page-padding mission-outer-section  p-t80 p-b30 bg-gray bg-no-repeat bg-right-center" style={{ backgroundImage: 'url(' + img1.default + '), url(' + img2.default + ')' }}>
                    <div className="section-content">
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="mt-separator-outer separator-center">
                                    <div className="mt-separator">
                                        <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Misión |</span> Visión</h2>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <div className="mission-left bg-white m-b30 p-a30 bg-no-repeat bg-bottom-left" style={{ backgroundImage: 'url(' + img3.default + ')' }}>
                                        <h3 className="m-t0"><span className="font-weight-100"> Nuestra</span><br /> misión</h3>
                                        <p>{grupo.mission}</p>
                                        
                                        <div className="text-right">
                                            <NavLink to="/consorcio" className="site-button-link" data-hover="Ver más">Ver más <i className="fa fa-angle-right arrow-animation" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="mission-left bg-white m-b30 p-a30 bg-no-repeat bg-bottom-left" style={{ backgroundImage: 'url(' + img3.default + ')' }}>
                                        <h3 className="m-t0"><span className="font-weight-100"> Nuestra</span><br /> visión</h3>
                                        <p>{grupo.vision}</p>
                                        
                                        <div className="text-right">
                                            <NavLink to="/consorcio" className="site-button-link" data-hover="Ver más">Ver más <i className="fa fa-angle-right arrow-animation" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
                        <strong>Mission</strong>
                    </div>
                </div>
            </>
        );
    }
};

export default OurMission;