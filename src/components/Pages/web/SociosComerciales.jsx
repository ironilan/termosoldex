import React from 'react';
import Header from './../../Common/Header';
import Footer from './../../Common/Footer';
import Banner from './../../Elements/Banner';
import AboutCompany from '../../Elements/AboutCompany';

import Socios from '../../Elements/Socios';
import { baseUrl } from '../../../config';


class SociosComerciales extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            banner: [],
            grupo: [],
            socios: []

        }        
    }


    componentDidMount() {
        
        fetch(`${baseUrl}bannerinterna/socios`)
            .then(response => response.json())
            .then(response => {
                this.setState({banner: response});
                //console.log('llenado',this.state.socio.banners);
            })
        
        fetch(`${baseUrl}grupo`)
            .then(response => response.json())
            .then(response => {
                this.setState({grupo: response});
                
            })

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
        const {banner} = this.state;
        const {socios} = this.state;
        const {grupo} = this.state;
        //console.log('wtf', banner);
        return (
            <>

                <Header />
                <div className="page-content">
                    <Banner title={banner.title} pagename={banner.subtitle} bgimage={banner.image}/>
                    <AboutCompany datos={socios}/>
                    <Socios datos={grupo} />
                    
                   
                <Footer />
                    
                </div>

                
               

            </>
        );
    };
};

export default SociosComerciales;