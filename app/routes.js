import React from 'react';
import Welcome from './components/Welcome/Welcome';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';

const Routes = () => (
    <BrowserRouter >
        <Switch>
            <Route exact path="/" component={Welcome}/>
            
        </Switch>
    </BrowserRouter>
  );

export default Routes;