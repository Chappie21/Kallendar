import { Fragment, React } from 'react'

import logo from '../img/logo.svg'
import '../styles/fondo.css'

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
                    <img src = {logo} alt = '' className = 'start-50'/>
                </div>
                {/* Cubos de fondo animados con CSS */}
                <div className = 'cube'></div>
                <div className = 'cube'></div>
                <div className = 'cube'></div>
                <div className = 'cube'></div>
                <div className = 'cube'></div>
                <div className = 'cube'></div>
            </div>
            <div className = "container-fluid">
                asd
            </div>
        </Fragment>
    )

};

export default StartHome;