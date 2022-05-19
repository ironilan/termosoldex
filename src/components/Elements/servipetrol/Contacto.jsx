import React from 'react';

import GoogleMaps from "simple-react-google-maps"

class Contacto extends React.Component {
    render() {
        const socio = this.props.datos;
        return (
            <>
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
                                                <div className="mt-separator-outer separator-left servipetrol">
                                                    <div className="mt-separator">
                                                        <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary colorservipetrol">Escríbenos</span> Aquí</h2>
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
                                            <div className="text-right servipetrol">
                                                <button name="submit" type="submit" value="Submit" className="bgservipetrol site-button btn-effect">Enviar
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
                                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary colorservipetrol">Info de</span> Contacto</h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        <div className="bg-dark p-a20 text-white">
                                            <div className="mt-icon-box-wraper left p-b40">
                                                <div className="icon-xs"><i className="fa fa-phone" /></div>
                                                <div className="icon-content">
                                                    <h5 className="m-t0 font-weight-500">Teléfono</h5>
                                                    <p>{socio.phone}</p>
                                                </div>
                                            </div>
                                            <div className="mt-icon-box-wraper left p-b40">
                                                <div className="icon-xs"><i className="fa fa-envelope" /></div>
                                                <div className="icon-content">
                                                    <h5 className="m-t0 font-weight-500">Email</h5>
                                                    <p>{socio.email}</p>
                                                </div>
                                            </div>
                                            <div className="mt-icon-box-wraper left">
                                                <div className="icon-xs"><i className="fa fa-map-marker" /></div>
                                                <div className="icon-content">
                                                    <h5 className="m-t0 font-weight-500">Dirección</h5>
                                                    <p>{socio.address}</p>
                                                    {/* <p>{parseFloat(socio.map_center_latitud)}</p>
                                                    <p>{parseFloat(socio.map_center_longitud)}</p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gmap-outline">
                        {
                            socio.lat ? 
                            <GoogleMaps
                            apiKey={"AIzaSyAfY1DRbspf6E3jYUso-PeI_tdfRXA59i0"}
                            style={{height: "400px", width: "100%"}}
                            zoom={15}
                            center={{lat: socio.lat, lng: socio.lng}}
                            markers={{lat: socio.lat, lng: socio.lng}} //optional
                            />
                        : ''
                        }
                        </div>
                    </div>
                </div>
                {/* SECTION CONTENT END */}
            </>
        );
    }
};

export default Contacto;