import React from 'react';
import { NavLink } from 'react-router-dom';

import url_base from '../endpoint/'

var bgimage = require('./../../images/background/bg-site.png');

class Footer extends React.Component {
    constructor(props) {
        super(props);
        //this.currentstate = {logo: require('./../../images/logo.png').default};
        this.state = {
            config: []

        };
    }
    
    //updateFooterLogo = (updatedlogo) => {this.currentstate.logo = updatedlogo.default;}


    componentDidMount()
    {
        //api
        fetch(`${url_base}configs`)
         .then(response => response.json())
         .then(response => {
            this.setState(
                {config: response}
            );

            
        })
    }

    render() {

        const {config} = this.state;
        
        return (
            <>
                <footer className="site-footer footer-large  footer-dark	footer-wide">
                    <div className="container call-to-action-wrap bg-no-repeat bg-center" style={{ backgroundImage: 'url('+bgimage.default+')' }}>
                        <div className="p-a30 bg-primary ">
                            <div className="row">
                                <div className="col-md-8 col-sm-8">
                                    <div className="call-to-action-left text-black">
                                        <h4 className="text-uppercase m-b10 m-t0">Suscríbete!</h4>
                                        <span>Si quieres mas información déjanos tu correo.</span>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="call-to-action-right">
                                        <div className="widget_newsletter">
                                            <div className="newsletter-bx">
                                                <form role="search" action="./">
                                                    <div className="input-group">
                                                        <input name="news-letter" className="form-control" placeholder="INGRESA TU EMAIL" type="text" />
                                                        <span className="input-group-btn">
                                                            <button type="submit" className="site-button"><i className="fas fa-paper-plane"></i></button>
                                                        </span>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                {/* ABOUT COMPANY */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_about">
                                        {/*<h4 class="widget-title">About Company</h4>*/}
                                        <div className="logo-footer clearfix p-b15">
                                            
                                            <NavLink to={"./"}><img src={config.logo_footer} alt="" /></NavLink>
                                        </div>
                                        <p className="max-w400">{config.description}</p>
                                        <ul className="social-icons  mt-social-links qa">
                                            <li><a href={config.instagram} target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href={config.linkedin} target="_blank"><i className="fab fa-linkedin"></i></a></li>
                                            <li><a href={config.facebook} target="_blank"><i className="fab fa-facebook"></i></a></li>
                                            <li><a href={config.twitter} target="_blank"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href={config.youtube} target="_blank"><i className="fab fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* RESENT POST */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_address_outer">
                                        <h4 className="widget-title">Contáctanos</h4>
                                        <ul className="widget_address">
                                            <li>{config.address}</li>
                                            <li>{config.email}</li>
                                            <li>(+51) {config.cellphone}</li>
                                            <li>(+51) {config.whatsapp}</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* USEFUL LINKS */}
                                <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                                    <div className="widget widget_services inline-links">
                                        <h4 className="widget-title">Mapsite</h4>
                                        <ul>
                                            <li><NavLink to={"/links-interes"}>Links de Interés</NavLink></li>
                                            <li><NavLink to={"/consorcio"}>Consorcio</NavLink></li>
                                            <li><NavLink to={"/proyectos"}>Proyectos</NavLink></li>
                                            <li><NavLink to={"/noticias"}>Noticias</NavLink></li>
                                            <li><NavLink to={"/contacto"}>Contacto</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* TAGS */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget recent-posts-entry-date">
                                        <h4 className="widget-title">Novedades</h4>
                                        <div className="widget-post-bx">

                                            {
                                                config.noticias?.map((item, index) => (
                                                    <div className="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10" key={index}>
                                                        <div className="mt-post-date text-center text-uppercase text-white p-tb5">
                                                            <strong className="p-date">{item.day}</strong>
                                                            <span className="p-month">{item.month}</span>
                                                            <span className="p-year">{item.year}</span>
                                                        </div>
                                                        <div className="mt-post-info">
                                                            <div className="mt-post-header">
                                                                <h6 className="post-title"><NavLink to={`/noticias/${item.slug}`}>{item.title}</NavLink></h6>
                                                            </div>
                                                            <div className="mt-post-meta">
                                                                <ul>
                                                                    <li className="post-author"><i className="fa fa-user" />By Termosoldex</li>
                                                                    
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            
                                        </div>
                                    </div>
                                </div>
                                {/* NEWSLETTER */}
                            </div>
                        </div>
                    </div>
                    {/* FOOTER COPYRIGHT */}
                    <div className="footer-bottom overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                <div className="mt-footer-bot-center">
                                    <span className="copyrights-text">© 2021 Termosoldex. Designed By PHS Perú.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <Switcher updateFooterLogo={this.updateFooterLogo.bind(this)}/> */}

            </>
        );
    };
};

export default Footer;