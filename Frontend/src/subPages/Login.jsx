import { React, Fragment } from 'react'
import {Link} from 'react-router-dom'

import '../styles/fondo.css'

// Pagina de login
const Login = () => {


    // Realizar login
    const handleLogin = e =>{
        e.preventDefault();
    }

    return (
        <Fragment>
            <div className='container-fluid bg-primary p-0 m-0' style = {{overflow: 'hidden'}}>
                <div className='row vh-100 justify-content-center align-items-center p-5'>
                    <div className='col-6 col-md-6 d-none d-md-block d-xs-block'>
                        <h3 className='display-5 text-center text-white'>
                            ¡Bienvenido Nuevamente!
                        </h3>
                    </div>
                    <div className='col-12 col-md-5 col-sm-12'>
                        <div className="border border-3 rounded rounded-3 p-5">
                            <form onSubmit = {handleLogin}>
                                <div class="mb-5">
                                    <input 
                                        type="text" 
                                        class="form-control"
                                        placeholder = 'Usuario o correo electronico'
                                        style={{ height: '3rem' }}
                                    />
                                </div>
                                <div class="mb-5">
                                    <input 
                                        type="password" 
                                        class="form-control"  
                                        placeholder = 'contraseña'
                                        style={{ height: '3rem' }}
                                    />
                                </div>
                                <div className = 'd-grid'>
                                    <button className='btn btn-light text-primary' style={{ height: '3rem' }}>
                                        Iniciar sesión
                                    </button>
                                </div>
                            </form>
                            <p className = 'text-center text-white mt-5'>
                                ¿No tiene cuenta? <Link className = 'text-white'>Registrarse</Link>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Cubos de fondo animados con CSS */}
                <div className='cube'></div>
                <div className='cube'></div>
                <div className='cube'></div>
                <div className='cube'></div>
                <div className='cube'></div>
                <div className='cube'></div>
            </div>
        </Fragment>
    )

}

export default Login;