import React from 'react'
import Register from './Login/Register';
import { Route, Switch } from 'react-router-dom'
import Login from './Login/Login';
import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Map from '../pages/Map'

const Routes = () => {
    return (
        <Switch>
            <Route path='/register' exact component={Register}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/map' component={Map}/>
        </Switch>
    )
}

export default Routes
