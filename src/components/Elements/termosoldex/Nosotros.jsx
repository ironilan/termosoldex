import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

var bnr1 = require('./../../../images/background/line.png');

class Nosotros extends React.Component {
    
    componentDidMount(){
    //     function loadScript(src) {
           
    //       return new Promise(function(resolve, reject){
    //         var script = document.createElement('script');
    //         script.src = src;
    //         script.addEventListener('load', function () {
    //           resolve();
    //         });
    //         script.addEventListener('error', function (e) {
    //           reject(e);
    //         });
    //         document.body.appendChild(script);
    //         document.body.removeChild(script);
    //       })
    //     };
 
    //   loadScript('./assets/js/masonary.js');
      
    };
    
    render() {
        const options = {
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            margin:30,
            nav:false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            items:1,
            dots: true
        };

        const socio = this.props.datos;

        return (
            <>
                <div className="section-full p-t30 p-b80 bg-white inner-page-padding">
                    <div className="container">
                        <div className="section-content ">
                            <div className="row">
                                <div className="col-md-5 col-sm-6">
                                    <div className="m-about ">
                                    {socio.carousel?
                                        <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
                                            {socio.carousel?.map((item, index) => (
                                                <div className="item" key={index}>
                                                    <div className="ow-img">
                                                    <NavLink to="/consorcio"><img src={item.image} alt=""/></NavLink>
                                                    </div>
                                                </div>
                                            ))}
                                        
                                        </OwlCarousel>
                                        : ''}
                                        
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-6">
                                    <div className="m-about-containt text-black p-t80">
                                        <div className="m-about-years bg-moving" style={{backgroundImage:"url(" + bnr1.default + ")"}}>
                                            <span className="large-title-info">Sobre</span>
                                            <span className="text-primary large-title">Nosotros</span>
                                        </div>
                                        <div className="fs-16"
                                        dangerouslySetInnerHTML={{
                                            __html: this.props.datos.about
                                        }}></div>
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

export default Nosotros;