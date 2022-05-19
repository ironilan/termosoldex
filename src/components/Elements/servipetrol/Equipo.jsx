import React from 'react';


class Equipo extends React.Component {
    
    render() {
        const {equipos} = this.props.datos;
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-white inner-page-padding">
                    <div className="container">
                        <div className="section-head">
                            <div className="mt-separator-outer separator-center servipetrol">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary colorservipetrol">Nuestro</span> Equipo</h2>
                                </div>
                            </div>
                        </div>
                        <div className="section-content">
                            <div className="row">
                                {equipos?.map((item, index) => (
                                    <div key={index} className="col-md-4 col-sm-6 col-xs-6 col-xs-100pc m-b30   ">
                                        <div className="our-team-1 hover-animation-1">
                                            <div className="profile-image scale-in-center">
                                                <img src={item.imagen} alt={item.name} />
                                            </div>
                                            <div className="figcaption">
                                                <h4>{item.name}</h4>
                                                <p>{item.resume}</p>
                                                
                                            </div>
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

export default Equipo;