import React from 'react';


var img1 = require('./../../images/background/ptn-1.png');

class Specialization4 extends React.Component {
    render() {
        const consorcio = this.props.datos;
        return (
            <>
                <div className="section-full p-tb80 bg-white bg-repeat square_shape2 inner-page-padding" style={{ backgroundImage: 'url(' + img1.default + ')' }}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-left">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Misión </span>- Visión</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="row">
                            <div className="col-md-6 col-sm-6">
                                    <div className="mt-icon-box-wraper m-b30">
                                        <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                                            <span className="icon-count-number">1</span>
                                            <div className="icon-md inline-icon m-b15 text-primary scale-in-center">
                                                <span className="icon-cell"><img src={consorcio.mision_img} alt="mision"/></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="mt-tilte m-b25">Misión</h4>
                                                <p>{consorcio.mission}</p>
                                                {/* <NavLink to={"/services"} className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation" /></NavLink> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="mt-icon-box-wraper m-b30">
                                        <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                                            <span className="icon-count-number">2</span>
                                            <div className="icon-md inline-icon m-b15 text-primary scale-in-center">
                                                <span className="icon-cell"><img src={consorcio.vision_img} alt=""/></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="mt-tilte m-b25">Visión</h4>
                                                <p>{consorcio.vision}</p>
                                                {/* <NavLink to={"/services"} className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation" /></NavLink> */}
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

export default Specialization4;