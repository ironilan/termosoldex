import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        count: 1,
        title: 'Tratamiento Térmico de solubilización en aceros...',
        slug: 'tratamiento-termico-de-solubilizacion-en-aceros',
        flaticon: 'flaticon-city',
        description: 'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.',
    },
    {
        count: 2,
        title: 'Ingeniería e Inspección de Soldaduras',
        slug: 'ingenieria-e-inspeccion-de-soldaduras',
        flaticon: 'flaticon-paint',
        description: 'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.',
    },
    {
        count: 3,
        title: 'Especificación de procedimientos de ...',
        slug: 'especificacion-de-procedimientos-de',
        flaticon: 'flaticon-crane',
        description: 'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.',
    },
    {
        count: 4,
        title: 'Calificación de Procedimientos bajo ...',
        slug: 'calificacion-de-procedimientos-bajo',
        flaticon: 'flaticon-decorating',
        description: 'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.',
    },
    {
        count: 5,
        title: 'Tratamiento Térmico Post Soldadura',
        slug: 'tratamiento-termico-post-soldadura',
        flaticon: 'flaticon-chart',
        description: 'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.',
    },
    {
        count: 6,
        title: 'Tratamiento Térmico “ in situ” bajo...',
        slug: 'tratamiento-termico-in-situ-bajo',
        flaticon: 'flaticon-sketch',
        description: 'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.',
    },
    {
        count: 7,
        title: 'Tratamiento Térmico Post soldadura',
        slug: 'tratamiento-termico-post-soldadura',
        flaticon: 'flaticon-builder',
        description: 'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.',
    },
    {
        count: 8,
        title: 'Tratamiento Térmico de Deshidrogenado',
        slug: 'tratamiento-termico-de-deshidrogenado',
        flaticon: 'flaticon-drill',
        description: 'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.',
    },
    {
        count: 9,
        title: 'Precalentamiento de soldadura',
        slug: 'precalentamiento-de-soldadura',
        flaticon: 'flaticon-art-and-design',
        description: 'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.',
    }
]

var img1 = require('./../../../images/background/bg-5.png');
var img2 = require('./../../../images/background/line.png');

class Unidad extends React.Component {
    // componentDidMount(){
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
      
    // };
    render() {
        const {datos} = this.props;
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-white mobile-page-padding" style={{ backgroundImage: 'url(' + img1.default + ')' }}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Todas</span> las unidades</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="row mb-4">
                            {datos?.map((item, index) => (
                                <div key={index} className="col-md-4 col-sm-6">
                                    <div className="mt-icon-box-wraper p-a30 center m-b30 box-shadow bg-white">
                                        <div className="mt-icon-box-sm inline-icon text-primary  m-b20 radius bg-primary  scale-in-center bg-moving" style={{ backgroundImage: 'url(' + img2.default + ')' }}>
                                            <span className="icon-cell text-secondry"><i className={item.icon} /></span>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="mt-tilte text-uppercase font-weight-600 m-b20">{item.title}</h4>
                                            <p>{item.resume}</p>
                                            {/* <NavLink to={"/categorias/"+item.slug} className="site-button-link" data-hover="Ver más">Ver más <i className="fa fa-angle-right arrow-animation" /></NavLink> */}
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

export default Unidad;