import React from 'react';
import Header from './../../Common/Header';
import Footer from './../../Common/Footer';
import Banner from './../../Elements/Banner';
import About4 from './../../Elements/About4';
import Specialization4 from './../../Elements/Specialization4';


import AboutSummary from './../../Elements/AboutSummary';
import Instalaciones from './../../Elements/Instalaciones';
import { baseUrl } from '../../../config';


class Consorcio extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            consorcio: {
                //banners:{}
            }
        }   
    }

    componentDidMount() {
        
        fetch(`${baseUrl}consorcio`)
            .then(response => response.json())
            .then(response => {
                this.setState({consorcio: response});
                
            })
    }

    render() {
        const {consorcio} = this.state;
       // console.log('llenado',consorcio);
        return (
            <>

                <Header />
                <div className="page-content">
                    <Banner title={consorcio.banner?.title} pagename={consorcio.banner?.subtitle} bgimage={consorcio.banner?.image}/>
                    <About4 datos={consorcio}/>
                    <Specialization4 datos={consorcio} />
                    <Instalaciones datos={consorcio}/>
                    <AboutSummary datos={consorcio} />

                </div>

                <Footer />

            </>
        );
    };
};

export default Consorcio;