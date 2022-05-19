import React from 'react';
import Header from './../../Common/Header';
import Footer from './../../Common/Footer';
import Banner from './../../Elements/Banner';

import OurServices3 from '../../Elements/OurServices3';
import { baseUrl } from '../../../config';
import Unidad from '../../Elements/nuevo/Unidad';


var bnrimg = require('./../../../images/bgabout.jpg');

class UnidadesNegocio extends React.Component {
    constructor() {
        super()
        this.state = {
            unidades: []
        }
    }

    componentDidMount()
    {

        //api
        fetch(`${baseUrl}unidades`)
         .then(response => response.json())
         .then(response => {
            this.setState({
                unidades: response
            });
            
            //console.log(this.state.socios)
        })

        
    }
    render() {
        const {unidades} = this.state;
        return (
            <>

                <Header />
                <div className="page-content">
                    <Banner title="UNIDADES DE NEGOCIO" pagename="Unidades de negocio" bgimage={bnrimg.default}/>
                   
                    <Unidad datos={unidades}/>
                    
                    
                    <Footer />
                    
                </div>

                
               

            </>
        );
    };
};

export default UnidadesNegocio;