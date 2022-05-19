import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import Header from './../../Common/Header';
import Footer from './../../Common/Footer';

import Banner from './../../Elements/Banner';
import ModalVideo from 'react-modal-video'
import '../../../../node_modules/react-modal-video/css/modal-video.min.css';
import { baseUrl } from '../../../config';

export default function SProyecto() {
    const {slug} = useParams();
    const [proyecto, setProyecto] = useState([])
    const [banner, setBanner] = useState([])
    const [open, setOpen] = useState(false)
    //console.log(slug);

    const openModal = () => {
        setOpen(true)
    }


    useEffect(() => {
        fetch(`${baseUrl}bannerinterna/otros`)
            .then(response => response.json())
            .then(response => {
                setBanner(response);
                //console.log('llenado',this.state.socio.banners);
            })

        const getProyecto = (slug) => {
            fetch(`${baseUrl}socios-proyectos/${slug}`)
                .then(response => response.json())
                .then(response => {
                    setProyecto(response);
                    //console.log('llenado',this.state.socio.banners);
                })
        }

        getProyecto(slug);
    }, [slug])


    
    
    return (
        

        <>
                <Header />
                <div className="page-content">
                <Banner title={proyecto.title} pagename={banner?.title} bgimage={banner.image}/>
                    
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">
                            <div className="project-detail-outer">
                                <div className="m-b0">
                                    <div className="row">
                                        {
                                            proyecto.images?.map((item, index) => (
                                                <div className="col-md-4 col-sm-4" key={index}>
                                                    <div className="project-detail-pic m-b30">
                                                        <div className="mt-media">
                                                            <img src={item.imagen} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        
                                    </div>
                                </div>
                                <div className="m-b30">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="product-block">
                                                <div className="row">
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Fecha</h4>
                                                        <p>{proyecto.date}</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Cliente</h4>
                                                        <p>{proyecto.customer}</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Categoria</h4>
                                                        <p>{proyecto.category}</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Lugar</h4>
                                                        <p>{proyecto.location}</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Año</h4>
                                                        <p>{proyecto.year}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="mt-box">
                                                <div className="mt-thum-bx mt-img-overlay1 mt-img-effect yt-thum-box">
                                                    <img src={proyecto.image} alt=""className="img_proy_interna" />
                                                    {
                                                        proyecto.video ? 
                                                        <>
                                                            <ModalVideo channel='youtube' isOpen={open} videoId={proyecto.video} onClose={() => setOpen(false)} />
                                                            <NavLink to={"#"} className="play-now" onClick={openModal}>
                                                                <i className="icon fa fa-play" />
                                                                <span className="ripple" />
                                                            </NavLink>
                                                        </>
                                                    : ''
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-detail-containt">
                                    <div className="bg-white text-black">
                                        <h3 className="font-weight-600">{proyecto.title}</h3>
                                        
                                        <p 
                                        dangerouslySetInnerHTML={{
                                            __html: proyecto.description
                                        }}>
                                        </p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END  */}
                    
                </div>

                <Footer />
            </>
    )
}
