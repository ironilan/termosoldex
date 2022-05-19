import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../../Common/Header';
import Footer from './../../Common/Footer';
import Banner from './../../Elements/Banner';
import { baseUrl } from '../../../config';


class Noticias extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            noticias: [],
            banner: []
        };
    }
    
    componentDidMount() {


        fetch(`${baseUrl}noticias`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    noticias: response
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
        const {noticias, banner} = this.state;
        return (
            <>
                <Header />
                <div className="page-content">
                <Banner title={banner.title} pagename={banner.subtitle} bgimage={banner.image}/>
                    
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">
                            
                            {/* GALLERY CONTENT START */}
                            <div className="portfolio-wrap mfp-gallery work-grid row clearfix">
                                {noticias?.map((item, index) => (
                                    <div key={index} className={`${item.filter} masonry-item col-md-4 col-sm-6 m-b30`}>
                                        <div className="image-effect-two hover-shadow">
                                            <img src={item.image} alt="" />
                                            <div className="figcaption">
                                                <h4 className="mt-tilte">{item.title}</h4>
                                                <p>{item.resume}</p>
                                                <NavLink to={"/noticias/"+item.slug} className="read-more site-button btn-effect">Ver más</NavLink>
                                                <a className="mfp-link" href={item.image}>
                                                    <i className="fa fa-arrows-alt" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                
                            </div>
                            {/* GALLERY CONTENT END */}
                            {/* <div className="m-t50 text-center">
                                <NavLink to={"/noticias/"+item.slug} className="site-button btn-effect">Load More</NavLink>
                            </div> */}
                        </div>
                    </div>
                    {/* SECTION CONTENT END  */}
                </div>

                <Footer />
            </>
        );
    };
};

export default Noticias;