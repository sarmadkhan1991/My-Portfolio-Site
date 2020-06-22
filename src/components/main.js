import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage/landingpage';
import Contact from './contact/contact';
import Projects from './projects/projects';


function Main () {
    return (
        <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/projects' component={Projects}/>
        </Switch>
    )
}

export default Main;