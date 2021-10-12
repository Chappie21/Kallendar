import { Fragment, React, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

import logo from '../img/logo.svg'

import { IoMenu } from "react-icons/io5";

// NavBar de pagina inicial y responsivo (no login) 
const NavbarI = () => {

    // Estado del componente
    const [state, NewState] = useState({display: false})

    // Routeo con url
    let  { url } = useRouteMatch();

    // Evento desplegador de dropdown
    const handleDisplay = () =>{
        
        NewState({
            display: !state.display
        })
        
        if(state.display){
            document.getElementById('dropdown').classList.add('d-block')
        }else{
            document.getElementById('dropdown').classList.remove('d-block')
        }

    }

    return (
        <Fragment>
            <div className='container-fluid p-0 m-0'>
                <nav className='navbar fixed-top navbar-expand-lg justify-content-between ps-4 pe-4'>
                    <Link className='navbar-brand text-white d-flex align-items-center' to='/'>
                        <img src={logo} alt='' width='50rem' />
                        <span className="display-5 ms-2">Kallendar</span>
                    </Link>
                    <div className="d-flex me-2 d-none d-md-block d-lg-block">
                        <Link className='btn btn-outline-light me-3' to = {`${url}Login`}>
                            Login
                        </Link>
                        <Link className='btn btn-light text-primary'>
                            Sign Up
                        </Link>
                    </div>
                    {/* Boton para visualizacion de sidebar en vistas moviles */}
                    <div className="me-2 d-sm-none">
                        <div className = 'dropdown'>
                            <div className='btn-gruoup dropstart'>
                                <button 
                                    className='btn btn-primary' 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                    onClick = {handleDisplay}
                                >
                                    <IoMenu size={42} />
                                </button>
                            </div>
                            {/* Elementos del dropdown */}
                            <ul className='dropdown-menu' id = "dropdown" aria-labelledby="dropdownMenuButton1">
                                <li><Link className="dropdown-item" to = {`${url}Login`} onClick = {handleDisplay}>Login</Link></li>
                                <li><Link className="dropdown-item text-primary" onClick = {handleDisplay}>Sign Up</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}

export default NavbarI;