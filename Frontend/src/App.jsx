import {React, Fragment} from "react";
import {BrowserRouter, Route} from 'react-router-dom'
import StartView from './Pages/StartView'

const App = () =>{

    return(
        <Fragment>
            <BrowserRouter>
                <Route path = '/' component = {StartView} />
            </BrowserRouter>
        </Fragment>
    )
}

export default App;
