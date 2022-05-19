import React from 'react';
import Header from './../../Common/Header';
import Footer from './../../Common/Footer';
import Banner from './../../Elements/Banner';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { baseUrl } from '../../../config';


class Noticia extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            noticia: [],
            banner: []
        };
    }

    componentDidMount() {

        const slug = this.props.match.params.noticia;
        fetch(`${baseUrl}noticias/${slug}`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    noticia: response
                });
            })   


        fetch(`${baseUrl}bannerinterna/otros`)
            .then(response => response.json())
            .then(response => {
                this.setState({banner: response});
                //console.log('llenado',this.state.socio.banners);
            })
        

    };

    render() {
        const options = {
            loop:true,
            autoplay:true,
            autoplayTimeout: 7000,
            margin:30,
            nav:true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            items:1,
            dots: false,
            animateOut:'fadeOut',
        };

        const {noticia} = this.state;
        return (
            <>

                <Header />
                <div className="page-content ">
                <Banner title={noticia.title} pagename="Noticia" bgimage={noticia.image}/>
                   
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 square_shape1 square_shape3 inner-page-padding">
                        <div className="container">
                            {/* BLOG START */}
                            <div className="blog-post date-style-3 blog-detail text-black">
                                <div className="mt-post-media">
                                    {/*Fade slider*/}
                                    
                                    {
                                        noticia.banner ? 
                                        <OwlCarousel className="owl-carousel owl-fade-slider-one owl-btn-vertical-center owl-dots-bottom-right m-b30" {...options}>
                                            {
                                                noticia.banner?.map((item, index) => (
                                                    <div className="item">
                                                        <div className="aon-thum-bx">
                                                            <img src={item.imagen} alt="" />
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </OwlCarousel>
                                        : ''
                                    }
                                </div>
                                
                                <div className="mt-post-title ">
                                <h2 className="post-title font-weight-600">{noticia.title}</h2>
                                </div>
                                <div className="mt-post-text">
                                    <p 
                                    dangerouslySetInnerHTML={{
                                        __html: noticia.description
                                    }}>
                                    </p>
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

export default Noticia;