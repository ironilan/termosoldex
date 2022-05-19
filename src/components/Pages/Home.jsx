import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import About from './../Elements/About';
import OurValue from './../Elements/OurValue';
import OurMission from './../Elements/OurMission';

import OurProject from './../Elements/OurProject';
import Blogs from './../Elements/Blogs';

import Socios from '../Elements/Socios';
import Carousel from '../Elements/nuevo/Carousel';
import { baseUrl } from '../../config';

class Home extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            grupo: {
                //banners:{}
            }
        }   
    }

    componentDidMount() {
        
        fetch(`${baseUrl}grupo`)
            .then(response => response.json())
            .then(response => {
                this.setState({grupo: response});
                
            })
    }

    render() {
        const {grupo} = this.state;
        return (
            <>
                <Header />
                <div className="page-content">
                    <Carousel />
                    <Socios datos={grupo}/>
                    <About datos={grupo}/>
                    <OurValue datos={grupo} />
                    <OurMission datos={grupo} />
                    
                    <Blogs datos={grupo} />
                    <OurProject datos={grupo} />
                    
                </div>
                <Footer />
            </>
        );
    };
};

export default Home;