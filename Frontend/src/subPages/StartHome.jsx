import { Fragment, React } from 'react'

import logo from '../img/logo.svg'
import calendar from '../img/calendar1.svg'
import '../styles/fondo.css'
import '../styles/circleSeparator.css'

const StartHome = () => {

    return (
        <Fragment>
            <div className="container-fluid vh-100 bg-primary p-0 m-0 position-relative">
                <div className='container position-absolute top-50 start-50 w-50 h-50 translate-middle text-center text-white'>
                    <header className='display-5 font-monospace'>
                        Eventos semanales al alcance de tu día a día
                    </header>
                    <p className = 'h5 font-monospace mt-3'>
                        Kallendar es más que un solo canlendario.
                    </p>
                    <img src = {logo} alt = '' className = 'img-fluid' width = '250rem'/>
                </div>
                {/* Cubos de fondo animados con CSS */}
                <div className = 'cube'></div>
                <div className = 'cube'></div>
                <div className = 'cube'></div>
                <div className = 'cube'></div>
                <div className = 'cube'></div>
                <div className = 'cube'></div>
            </div>
            {/* <div className = 'container-fluid text-center'>
             <div className = 'separator'>a</div>
            </div> */}
            <div className = "container-fluid p-0 mt-5">
                <div className = 'container p-5'>
                    <div className = 'row row-cols-2 align-items-center'>
                        <div className = 'col-lg-5 col-md-auto col-sm-auto'>
                            <img src = {calendar} alt = '' className = 'img-fluid' width = '350rem'/>   
                        </div>
                        <div className = 'col-lg-7 col-md-auto col-sm-auto'>
                            <h2 className = 'text-primary'>
                                Ten más de un calendario para todas tus ocupaciones
                            </h2>
                            <p className = 'text-wrap h5 mt-3'>
                                Kallendar permite a sus usuarios organizar su tiempo en
                                distintos enfoques o oficios, de manera que todas sus
                                actividades o fechas importantes no se vean afectadas
                                o combinadas. 
                                <br/><br/>
                                Gracias a ello es posible tener una vista más plena 
                                de todo lo que viene.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

};

export default StartHome;