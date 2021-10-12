import {Fragment, React} from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import NavbarI from '../components/NavbarI'
import StartHome from '../subPages/StartHome'
import Login from '../subPages/Login'
import Register from '../subPages/Register'

const StartView = () =>{

    let { path } = useRouteMatch();

    return(
        <Fragment>
            <NavbarI />
            <div className = 'container-fluid vh-100 p-0 m-0'>
                <Switch>
                    <Route exact path = {`${path}/`} component = {StartHome} />
                    <Route path = {`${path}Login`} component = {Login} />
                    <Route path = {`${path}Register`} component = {Register} />
                </Switch>
            </div>
        </Fragment>
    )

};

export default StartView;