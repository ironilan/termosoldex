import React from 'react';
import { NavLink } from 'react-router-dom';
import CountUp from 'react-countup';
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/css/modal-video.min.css';


class OurValue extends React.Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/masonary.js');

    };

    render() {
        const grupo = this.props.datos;
        
        return (
            <>
                <div className="section-full mobile-page-padding p-t80 p-b30 bg-white">
                    <div className="container">
                        <div className="section-content">
                            <div className="row">
                                <div className="col-md-4 col-sm-12">
                                    {/* TITLE START */}
                                    <div className="section-head">
                                        <div className="mt-separator-outer separator-left">
                                            <div className="mt-separator">
                                                <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Nuestros </span>Valores</h2>
                                            </div>
                                            <p>{grupo.values}</p>
                                        </div>
                                    </div>
                                    {/* TITLE END */}
                                    
                                    <div className="video-section-full bg-no-repeat bg-cover overlay-wraper" style={{ backgroundImage: 'url(' + grupo.image + ')' }}>
                                        <div className="overlay-main bg-black opacity-07" />
                                        <div className="video-section-inner">
                                            <div className="video-section-content">
                                                
                                                <div className="video-section-left">
                                                <NavLink to={"#"} className="play-now" onClick={this.openModal}>
                                                        <i className="icon fa fa-play" />
                                                        <span className="ripple" />
                                                    </NavLink>
                                                </div>
                                                <div className="video-section-right">
                                                <NavLink to={"#"} className="font-weight-600 text-uppercase" onClick={this.openModal}>Video Presentation</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    {
                                        grupo.number1 ?
                                        <>
                                            <div className="mt-count m-b30 text-white mt-icon-box-wraper center  bg-dark p-a20">
                                                <div className="counter font-30 font-weight-800 m-b15 text-primary"><CountUp end={grupo?.number1} duration={5} /></div>
                                                <h4 className="m-tb0">{grupo.label1}</h4>
                                            </div>
                                            <div className="mt-count m-b30 text-white mt-icon-box-wraper center  bg-dark p-a20">
                                                <div className="counter font-30 font-weight-800 m-b15  text-primary"><CountUp end={grupo?.number2} duration={5} /></div>
                                                <h4 className="m-tb0">{grupo.label2}</h4>
                                            </div>
                                            <div className="mt-count m-b30 text-white mt-icon-box-wraper center  bg-dark p-a20">
                                                <div className="counter font-30 font-weight-800 m-b15 text-primary"><CountUp end={grupo?.number3} duration={5} /></div>
                                                <h4 className="m-tb0">{grupo.label3}</h4>
                                            </div>
                                        </>
                                    : ''
                                    }
                                </div>
                                <div className="col-md-5 col-sm-6">
                                    <div className="p-b0">
                                        <div className="mt-box">
                                            <h3 className="m-t0"><span className="font-weight-100"> Más de </span><span className="text-primary"> {grupo.exp_years} años</span> de experiencia</h3>
                                        </div>
                                        {
                                            grupo.experiencia?.map((item, index) => (
                                                <div key={index}>
                                                    <span className="progressText text-black"><b>{item.label}</b></span>
                                                    <div className="progress mt-probar-1  m-b30 m-t10">
                                                        <div className="progress-bar bg-primary " role="progressbar" aria-valuenow={item.value} aria-valuemin={0} aria-valuemax={100}>
                                                            <span className="popOver" data-toggle="tooltips" data-placement="top" title={`${item.value}%`} />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={grupo.video} onClose={() => this.setState({ isOpen: false })} />
            </>
        );
    }
};

export default OurValue;