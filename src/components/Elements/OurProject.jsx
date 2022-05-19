import React from 'react';
import { NavLink } from 'react-router-dom';
import { baseUrl } from '../../config';



class OurProject extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            categorias: [],
            proyectos: []
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
        

    };

    
    render() {
        const {proyectos, categorias} = this.state;

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
            
            fetch(`${baseUrl}proyectos`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    proyectos: response
                });
            })
        }

        return (
            <>
                <div className="section-full mobile-page-padding p-t80 p-b30 square_shape2____ ">
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-left">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Nuestros</span> Proyectos</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content">
                            <div className="portfolio-wrap___ row mfp-gallery product-stamp clearfix">
                                {/* COLUMNS 1 */}
                                <div className="stamp col-md-3 col-sm-6 m-b30">
                                    <div className="bg-gray p-a30">
                                        <div className="filter-wrap">
                                            <ul className="filter-navigation  text-uppercase">
                                                <li className="active" onClick={() => getProyectos()}><NavLink to={"#"} data-filter="*" data-hover="All">All</NavLink></li>
                                                {categorias?.map((item, index) => (
                                                    <li key={index} onClick={() => filtrarCategoria(item.id)}><NavLink to={"#"} data-filter={item.id} data-hover={item.name}>{item.name}</NavLink></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* COLUMNS 2 */}
                                {proyectos?.map((item, index) => (
                                   <div key={index} className={` masonry-item col-md-3 col-sm-6 m-b30`}>
                                        <div className="mt-box   image-hover-block">
                                            <div className="mt-thum-bx app_height">
                                                <img src={item.image} alt=""/>
                                            </div>
                                            <div className="mt-info  p-t20 text-white">
                                                <h4 className="mt-tilte m-b10 m-t0">{item.title}</h4>
                                                <p className="m-b0">{item.subtitle}</p>
                                            </div>
                                            <NavLink to={"/proyectos/"+item.slug}></NavLink>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
                        <strong>Proyectos</strong>
                    </div>
                </div>
            </>
        );
    }
};

export default OurProject;