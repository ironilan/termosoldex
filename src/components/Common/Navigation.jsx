import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {

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
        return (
            <>
                <div className={(this.props.bgcolor !== '') ? `header-nav navbar-collapse collapse ${this.props.bgcolor}` : 'header-nav navbar-collapse collapse'}>
                    <ul className="nav navbar-nav">
                        <li>
                        <NavLink to={"/consorcio"} activeClassName="nav-active">Consorcio</NavLink>
                        </li>
                        {/* <li>
                        <NavLink to={"/unidades-negocio"}>Unidades de negocio</NavLink>
                        </li> */}
                        <li>
                        <NavLink to={"/socios-comerciales"} activeClassName="nav-active">Socios comerciales</NavLink>
                        </li>
                        <li>
                        <NavLink to={"/proyectos"} activeClassName="nav-active">Proyectos</NavLink>
                        </li>
                        {/*<li>
                        <NavLink to={"/services"}>Noticias</NavLink>
                        </li> */}
                        <li>
                        <NavLink to={"/contacto"} activeClassName="nav-active">Contáctanos</NavLink>
                        </li>
                    </ul>
                </div>
            </>
        );
    };
};

export default Navigation;