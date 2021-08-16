import {Fragment, React} from 'react'
import { Link } from 'react-router-dom'

import logo from '../img/logo.svg'

const NavbarI = () =>{

    return(
        <Fragment>
            <div className = 'container-fluid p-0 m-0'>
                <nav className = 'navbar fixed-top navbar-expand-lg justify-content-between ps-4 pe-4'>
                    <Link className = 'navbar-brand text-white d-flex align-items-center' to = '/'>
                        <img src = {logo} alt = '' width = '50rem'/>
                        <span className = "display-5 ms-2">Kallendar</span>
                    </Link>
                    <div className = "d-flex me-2">
                        <Link className = 'btn btn-outline-light me-3'>
                            Login
                        </Link>
                        <Link className = 'btn btn-light text-primary'>
                            Sign Up
                        </Link>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}

export default NavbarI;