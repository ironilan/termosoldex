import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../../Common/Header';
import Footer from './../../Common/Footer';
import Banner from './../../Elements/Banner';
import { baseUrl } from "../../../config/";





class Proyectos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categorias: [],
            proyectos: [],
            banner: []
        };
    }
    
    componentDidMount() {

        fetch(`${baseUrl}categorias`)
         .then(response => response.json())
         .then(response => {
            this.setState({
                categorias: response
            });
        })


        fetch(`${baseUrl}proyectos`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    proyectos: response
                });
            })   


        fetch(`${baseUrl}bannerinterna/proyectos`)
            .then(response => response.json())
            .then(response => {
                this.setState({banner: response});
                //console.log('llenado',this.state.socio.banners);
            })
        

    };

        
    render() {
        const categorias = this.state.categorias;
        const {proyectos, banner} = this.state;
        //const {banner} = this.state;

        const filtrarCategoria = id => {
            fetch(`${baseUrl}categorias/${id}`)
                .then(response => response.json())
                .then(response => {
                    this.setState({
                        proyectos: response
                    });
            })
        }

        const getProyectos = () => {
            console.log('ddd');
            fetch(`${baseUrl}proyectos`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    proyectos: response
                });
            })
        }
        //console.log(categorias);
        return (
            <>
                <Header />
                <div className="page-content">
                <Banner title={banner.title} pagename={banner.subtitle} bgimage={banner.image}/>
                <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">
                            {/* PAGINATION START */}
                            {
                                categorias ?
                                <div className="filter-wrap p-b30 text-center">
                                <ul className="filter-navigation inline-navigation  link-style  text-uppercase">
                                    <li  onClick={() => getProyectos()}><NavLink to={"#"} data-hover="Todos">Todos</NavLink></li>
                                    {categorias?.map((item, index) => (
                                    <li key={index} onClick={() => filtrarCategoria(item.id)}><NavLink to={"#"} data-filter={`.cat-${item.id}`} data-hover={item.name}>{item.name}</NavLink></li>
                                    ))} 
                                </ul>
                            </div>
                            : ''
                            }
                            {/* PAGINATION END */}
                            {/* GALLERY CONTENT START */}
                            {
                                proyectos ?
                                <div className="portfolio-wrap___ mfp-gallery work-grid row clearfix">
                                {proyectos?.map((item, index) => (
                                    <div key={index} className={`cat-${item.categoria_id} masonry-item col-md-4 col-sm-6 m-b30`}>
                                        <div className="image-effect-two hover-shadow">
                                            <img src={item.image} alt="" />
                                            <div className="figcaption">
                                                <h4 className="mt-tilte">{item.title}</h4>
                                                <p>{item.subtitle}</p>
                                                <NavLink to={"/proyectos/"+item.slug} className="read-more site-button btn-effect">Ver más</NavLink>
                                                <a className="mfp-link" href={item.image}>
                                                    <i className="fa fa-arrows-alt" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                
                            </div>
                            : ''
                            }
                            {/* GALLERY CONTENT END */}
                            {/* <div className="m-t50 text-center">
                                <NavLink to={"/noticias/"+item.slug} className="site-button btn-effect">Load More</NavLink>
                            </div> */}
                        </div>
                    </div>                  
                    
                </div>

                <Footer />
            </>
        );
    };
};

export default Proyectos;