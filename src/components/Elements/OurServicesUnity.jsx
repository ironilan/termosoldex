import React from 'react';
import { NavLink } from 'react-router-dom';

var img1 = require('./../../images/background/bg-5.png');
var img2 = require('./../../images/background/line.png');

class OurServicesUnity extends React.Component {
    componentDidMount(){
        
      
    };
    render() {
        const servicio = this.props.datos;
        //console.log('ssssssssss', servicio);
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-white mobile-page-padding" style={{ backgroundImage: 'url(' + img1.default + ')' }}>
                    <div className="container">
                        {/* TITLE START */}
                        {
                            servicio.otros_servicios?
                            <div className="section-head">
                                <div className="mt-separator-outer separator-center">
                                    <div className="mt-separator">
                                        <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Otros</span> Servicios</h2>
                                    </div>
                                </div>
                            </div>
                            : ''
                        }
                        
                        {/* TITLE END */}
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="row mb-4">
                            {servicio.otros_servicios?.map((item, index) => (
                                <div key={index} className="col-md-4 col-sm-6">
                                    <div className="mt-icon-box-wraper p-a30 center m-b30 box-shadow bg-white">
                                        <div className="mt-icon-box-sm inline-icon text-primary  m-b20 radius bg-primary  scale-in-center bg-moving" style={{ backgroundImage: 'url(' + img2.default + ')' }}>
                                            <span className="icon-cell text-secondry"><i className={item.icon} /></span>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="mt-tilte text-uppercase font-weight-600 m-b20">{item.name}</h4>
                                            <p>{item.resume}</p>
                                            <NavLink to={"/servicios/"+item.slug} className="site-button-link" data-hover="Ver más">Ver más <i className="fa fa-angle-right arrow-animation" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default OurServicesUnity;