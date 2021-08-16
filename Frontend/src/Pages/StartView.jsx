import {Fragment, React} from 'react'
import NavbarI from '../components/NavbarI'

const StartView = () =>{

    return(
        <Fragment>
            <div className = 'container-fluid bg-primary vh-100'>
                <NavbarI />
            </div>
        </Fragment>
    )

};

export default StartView;