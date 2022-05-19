import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../assets/styles/carousel.css';

import Slider from "react-slick";
import { Link, NavLink } from 'react-router-dom';
import { baseUrl } from '../../../config';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Carousel() {

    const [Banners, setBanners] = useState([])

    useEffect(() => {
        obtenerDatos();
    }, [])


    const obtenerDatos = () =>{
        fetch(`${baseUrl}banners`)
         .then(response => response.json())
         .then(response => setBanners(response))
    }

    var settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };


    
    console.log('ssssssssss',Banners);
    return (
        
        <>
           
            <Slider {...settings}>
                {
                    Banners.map((item, index) => {
                        return (
                            <div className="" key={index}>
                                <div className="p-relative">
                                    <img src={item.image} alt="" className="carousel_img" />
                                    <div className="app_slider">
                                        <h2 className="title_slider">{item.title}</h2>
                                        <h5 className="subtitle_slider">{item.subtitle}</h5>
                                        <Link className="site-button btn-effect arrow-animation" to={item.link}>
                                            Ver más
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                
            </Slider> 
        </>
    )
}
