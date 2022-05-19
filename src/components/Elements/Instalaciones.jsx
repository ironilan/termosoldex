import React from 'react';


class Instalaciones extends React.Component {
    componentDidMount() {
        // function loadScript(src) {

        //     return new Promise(function (resolve, reject) {
        //         var script = document.createElement('script');
        //         script.src = src;
        //         script.addEventListener('load', function () {
        //             resolve();
        //         });
        //         script.addEventListener('error', function (e) {
        //             reject(e);
        //         });
        //         document.body.appendChild(script);
        //         document.body.removeChild(script);
        //     })
        // };

        // loadScript('./assets/js/masonary.js');

    };
    render() {
        const {instalaciones} = this.props.datos;
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-gray mobile-page-padding">
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="mt-separator-outer separator-center">
                                    <div className="mt-separator">
                                        <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Nuestras</span> Instalaciones</h2>
                                    </div>
                                </div>
                            </div>
                            
                            <div className=" mfp-gallery work-grid row clearfix">
                                {instalaciones?.map((item, index) => (
                                    <div key={index} className={` masonry-item col-md-4 col-sm-6 m-b30`}>
                                        <div className="image-effect-two hover-shadow">
                                            <img src={item.image} alt="" />
                                            <div className="figcaption">
                                                <h4 className="mt-tilte">{item.title}</h4>
                                                <p>{item.resume}</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* GALLERY CONTENT END */}
                            {/* <div className="m-t50 text-center">
                                <NavLink to={"#"} className="site-button btn-effect">Load More</NavLink>
                            </div> */}
                        </div>
                    </div>    
            </>
        );
    }
};

export default Instalaciones;