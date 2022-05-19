import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../index.css'
import { baseUrl } from '../../config/';

var bnr1 = require('./../../images/background/bg-5.png');

class Socios extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            socios: []
        };
    }

    componentDidMount()
    {

        //api
        fetch(`${baseUrl}socios`)
         .then(response => response.json())
         .then(response => {
            this.setState({
                socios: response
            });
            
            //console.log(this.state.socios)
        })

        
    }

    render() {

        const {socios} = this.state;
        const grupo = this.props.datos;
        return (
            <>
                <div className="section-full mobile-page-padding bg-white p-t80 p-b30 bg-repeat square_shape1" style={{backgroundImage:"url(" + bnr1.default + ")"}}>
                    <div className="container">
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="row">
                                
                                {
                                    socios.socios?.map((item, index) => {
                                        return (
                                            <div className="col-lg-3 col-md-4  col-sm-6 m-b30" key={index}>
                                                <div className="image-effect-one hover-shadow">
                                                    <img className="h-10" src={item.image} alt={item.name} />
                                                    <div className="figcaption">
                                                        <h4>{item.name}</h4>
                                                        <NavLink to={`/${item.slug}`} ><i className="link-plus bg-primary" /></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <div className="col-lg-3 col-md-4  col-sm-6 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img className="h-10" src={grupo.logo_term_es} alt="" />
                                        <div className="figcaption bg-dark">
                                            <h4>{grupo.label_term_es}</h4>
                                            <a href={grupo.link_term_es} target="_blank" ><i className="link-plus bg-primary" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4  col-sm-6 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img className="h-10" src={grupo.logo_tcx} alt="" />
                                        <div className="figcaption bg-dark">
                                            <h4>{grupo.label_tcx}</h4>
                                            <a href={grupo.link_tcx} target="_blank" ><i className="link-plus bg-primary" /></a>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <div className="col-lg-3 col-md-4  col-sm-6 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img className="h-10" src={require('../../images/unidades/termosoldex.png').default} alt="" />
                                        <div className="figcaption bg-dark">
                                            <h4>TERMOSOLDEX</h4>
                                            <NavLink to="/termosoldex" ><i className="link-plus bg-primary" /></NavLink>
                                        </div>
                                    </div>
                                </div> */}
                                
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-right p-r50 text-uppercase text-pop-up-top">
                        <strong>Socios comerciales</strong>
                    </div>
                </div>
            </>
        );
    }
};

export default Socios;