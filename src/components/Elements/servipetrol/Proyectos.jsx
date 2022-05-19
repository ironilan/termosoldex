import React from 'react';
import { NavLink } from 'react-router-dom';



class Proyectos extends React.Component {

    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/masonary.js');

    };

    render() {
        const {proyectos} = this.props.datos;
        return (
            <>
                <div className="section-full mobile-page-padding p-t80 p-b30 square_shape2 ">
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-center servipetrol">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary colorservipetrol">Nuestros</span> Proyectos</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content">
                            <div className="portfolio-wrap___ row mfp-gallery product-stamp clearfix">
                                {/* COLUMNS 1 */}

                                {/* COLUMNS 2 */}
                                {proyectos?.map((item, index) => (
                                    <div key={index} className={` masonry-item col-md-3 col-sm-6 m-b30`}>
                                        <div className="mt-box   image-hover-block">
                                            <div className="mt-thum-bx">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="mt-info  p-t20 text-white">
                                                <h4 className="mt-tilte m-b10 m-t0">{item.title}</h4>
                                                <p className="m-b0">{item.subtitle}</p>
                                            </div>
                                            <NavLink to={"/socio-proyectos/" + item.slug}></NavLink>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </>
        );
    }
};

export default Proyectos;