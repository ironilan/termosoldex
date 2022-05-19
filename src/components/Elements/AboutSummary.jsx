import React from 'react';

var img1 = require('./../../images/background/bg-6.png');
var img2 = require('./../../images/background/line.png');

class AboutSummary extends React.Component {
    componentDidMount(){
        function loadScript(src) {
           
          return new Promise(function(resolve, reject){
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
        const {trayectorias} = this.props.datos;
        return (
            <>
                <div className="section-full p-t80 p-b80 bg-dark bg-repeat square_shape2 inner-page-padding" style={{ backgroundImage: 'url(' + img1.default + ')' }}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-left">
                                <div className="mt-separator text-white">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Nuestra</span> Trayectoria</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content our-story">
                            {
                                trayectorias?.map((item, index) => {
                                    return (
                                        <>
                                        
                                            {
                                                index%2 ? 
                                                <div className="row" key={index}>
                                                <div className="col-md-4 col-sm-6">
                                                    <div className="our-story-pic-block">
                                                        <div className="mt-media our-story-pic">
                                                            <img src={item.image} alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 col-sm-6">
                                                    <div className="mt-box our-story-detail bg-moving bg-cover" style={{ backgroundImage: 'url(' + img2.default + ')' }}>
                                                        <h4 className="text-uppercase m-b20">{item.date}</h4>
                                                         <h4 className="m-b20">{item.title}</h4>
                                                        <p>{item.resume} </p>
                                                    </div>
                                                </div>
                                            </div>
                                                : 
                                            
                                            <div className="row" key={index}>
                                                <div className="col-md-4 col-sm-6">
                                                    <div className="our-story-pic-block">
                                                        <div className="mt-media our-story-pic">
                                                            <img src={item.image} alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 col-sm-6">
                                                    <div className="mt-box our-story-detail bg-moving bg-cover"  style={{ backgroundImage: 'url(' + img2.default + ')' }}>
                                                        <h4 className="text-uppercase m-b20">{item.date}</h4>
                                                        <h4 className="m-b20">{item.title}</h4>
                                                        <p>{item.resume} </p>
                                                    </div>
                                                </div>
                                            </div>
                                            }
                                        </>
                                        )
                                })
                            }
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default AboutSummary;