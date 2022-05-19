import React from 'react';
import Header from './../../Common/Header';
import Footer from './../../Common/Footer';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Servicios from '../../Elements/servipetrol/Servicios';



import './css/estilos.css'
import './css/servipetrol.css'
import Nosotros from '../../Elements/servipetrol/Nosotros';
import Equipo from '../../Elements/servipetrol/Equipo';
import Clientes from '../../Elements/servipetrol/Clientes';
import Proyectos from '../../Elements/servipetrol/Proyectos';
import Contacto from '../../Elements/servipetrol/Contacto';
import { baseUrl } from '../../../config';






class Servipetrol extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            socio: {
                //banners:{}
            }
        }

        
    }


    componentDidMount() {
        
        fetch(`${baseUrl}socio/servipetrol`)
            .then(response => response.json())
            .then(response => {
                this.setState({socio: response});
                //console.log('llenado',this.state.socio.banners);
            })
    }


    render() {
        const options = {
            loop: true,
            autoplay: true,
            autoplayTimeout: 7000,
            margin: 30,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            items: 1,
            dots: false,
            animateOut: 'fadeOut',
        };

        
        const socio = this.state.socio;
       
        return (
            <>

                <Header />
                <div className="page-content ">
                    
                    <div className="text-center">
                        <img src={this.state.socio.image} alt="" className="logoInterno" />
                    </div>

                    
                    <div className="section-full square_shape1 square_shape3 inner-page-padding">
                        <div className="container">
                            
                            <div className="blog-post date-style-3 blog-detail text-black">
                                <div className="mt-post-media">
                                   
                                {
                                    socio.banners ? 
                                
                                 <OwlCarousel className="bannerprincipal_socio owl-carousel owl-fade-slider-one owl-btn-vertical-center owl-dots-bottom-right m-b30" {...options}>
                                    {
                                        socio.banners?.map((item, index) => {
                                            return (
                                                <div className="item" key={index}>
                                                    <div className="aon-thum-bx">
                                                        <img src={item.imagen} alt="" />
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    
                                </OwlCarousel>
                                : ''
                                }
                                    
                                </div>


                            </div>


                        </div>
                    </div>
                  
                    <Nosotros datos={socio} />
                    <Servicios datos={socio} />
                    <Equipo datos={socio} />
                    <Clientes datos={socio}/>
                    <Proyectos datos={socio}/>
                    <Contacto datos={socio} />

                </div>

                <br />
                <br />
                <br />
                <br />
                <Footer />

            </>
        );
    };
};

export default Servipetrol;