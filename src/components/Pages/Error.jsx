import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import { baseUrl } from '../../config';

class Error extends React.Component {
    constructor() {
        super()
        this.state = {
            banner: []
        }
    }

    componentDidMount()
    {
        fetch(`${baseUrl}bannerinterna/otros`)
            .then(response => response.json())
            .then(response => {
                this.setState({banner: response});
                //console.log('llenado',this.state.socio.banners);
            })
    }
    render() {
        const {banner} = this.state;
        return (
            <>

                <Header />
                <div className="page-content">
                <Banner title="Page Not Found" pagename="Error Page" bgimage={banner.image}/>
                   
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb150">
                        <div className="container">
                            <div className="section-content">
                                <div className="page-notfound text-center">
                                    <strong>Pagina no encontrada</strong>
                                    <span className="title">404</span>
                                    <p>Parece que esta página no existe.</p>
                                    <NavLink to="/" title="Back to home" className="site-button btn-effect">Back to home</NavLink>
                                </div>
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

export default Error;