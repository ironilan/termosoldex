import React from 'react';
import GoogleMaps from "simple-react-google-maps"
import Header from './../../Common/Header';
import Footer from './../../Common/Footer';
import Banner from './../../Elements/Banner';
import { baseUrl } from '../../../config';


class Contacto extends React.Component {

    constructor() {
        super()
        this.state = {
            config: [],
            banner: []
        }
    }

    componentDidMount()
    {
        fetch(`${baseUrl}configs`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    config: response
                });
        })

        fetch(`${baseUrl}bannerinterna/contacto`)
            .then(response => response.json())
            .then(response => {
                this.setState({banner: response});
                //console.log('llenado',this.state.socio.banners);
            })
    }

    render() {
        const {config, banner} = this.state;
        //console.log(config.lat);
        const mapa = {
            center:{
                lat: config.lat,
                lng: config.lng
            }
        };
        return (
            <>

                <Header />
                <div className="page-content">
                <Banner title={banner?.title} pagename={banner?.subtitle} bgimage={banner?.image}/>
                   
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            {/* GOOGLE MAP & CONTACT FORM */}
                            <div className="section-content">
                                {/* CONTACT FORM*/}
                                <div className="row">
                                    <div className="col-md-8 col-sm-6">
                                        <form className="contact-form cons-contact-form" method="post" action="">
                                            <div className="contact-one m-b30">
                                                {/* TITLE START */}
                                                <div className="section-head">
                                                    <div className="mt-separator-outer separator-left">
                                                        <div className="mt-separator">
                                                            <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Escríbenos</span> Aquí</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* TITLE END */}
                                                <div className="form-group">
                                                    <input name="username" type="text" required className="form-control" placeholder="Nombre" />
                                                </div>
                                                <div className="form-group">
                                                    <input name="email" type="text" className="form-control" required placeholder="Email" />
                                                </div>
                                                <div className="form-group">
                                                    <textarea name="message" rows={4} className="form-control " required placeholder="Mensaje" defaultValue={""} />
                                                </div>
                                                <div className="text-right">
                                                    <button name="submit" type="submit" value="Submit" className="site-button btn-effect">Enviar
                  </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="contact-info m-b30">
                                            {/* TITLE START */}
                                            <div className="section-head">
                                                <div className="mt-separator-outer separator-left">
                                                    <div className="mt-separator">
                                                        <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Info de</span> Contacto</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* TITLE END */}
                                            <div className="bg-dark p-a20 text-white">
                                                <div className="mt-icon-box-wraper left p-b40">
                                                    <div className="icon-xs"><i className="fa fa-phone" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Teléfono</h5>
                                                        <p>{config.phone}</p>
                                                    </div>
                                                </div>
                                                <div className="mt-icon-box-wraper left p-b40">
                                                    <div className="icon-xs"><i className="fa fa-envelope" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Email</h5>
                                                        <p>{config.email}</p>
                                                    </div>
                                                </div>
                                                <div className="mt-icon-box-wraper left">
                                                    <div className="icon-xs"><i className="fa fa-map-marker" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Dirección</h5>
                                                        <p>{config.address}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="gmap-outline">
                                {
                                    config.lat?
                                    <GoogleMaps
                                apiKey={"AIzaSyAfY1DRbspf6E3jYUso-PeI_tdfRXA59i0"}
                                style={{height: "400px", width: "100%"}}
                                zoom={15}
                                center={{lat: mapa.center.lat, lng: mapa.center.lng}}
                                markers={{lat: mapa.center.lat, lng: mapa.center.lng}} //optional
                                />
                                : ''
                                }
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>


                <Footer />

            </>
        );
    };
};

export default Contacto;