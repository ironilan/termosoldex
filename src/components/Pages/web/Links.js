import React, { useEffect, useState } from 'react'
import Header from './../../Common/Header';
import Footer from './../../Common/Footer';
import Banner from './../../Elements/Banner';
import { baseUrl } from '../../../config';



export default function Links() {
    const [data, setData] = useState(null)
    const [banner, setBanner] = useState(null)

    useEffect(() => {
        fetch(`${baseUrl}links`)
            .then(response => response.json())
            .then(response => {
                setData(response);
        })


        fetch(`${baseUrl}bannerinterna/otros`)
            .then(response => response.json())
            .then(response => {
                setBanner(response);
                //console.log('llenado',this.state.socio.banners);
            })


    }, [])

    //const { title, subtitle, links} = data;

    console.log(banner);

    return (
        <>

            <Header />
            <div className="page-content">
                <Banner title={data?.title} pagename={data?.subtitle} bgimage={banner?.image}/>
                
                <section className="app_links">
                    <div className="container">
                        <ul className="row list_link">
                            {
                                data?.links.map((item, index) => (
                                <li className="mb-4 col-lg-4 app_he_link" key={index}>
                                    <i className="fa fa-check"></i>
                                    <div>
                                    <h4 className="mb-3px">{item.title}</h4>
                                    <a href={item.link} target="_blank">{item.link}</a>
                                    </div>
                                </li>
                            ))}
                            
                        </ul>
                    </div>
                </section>
            </div>

            <Footer />

        </>
    )
}
