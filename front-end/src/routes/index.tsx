import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './route'
import SignIn from '../pages/authentication/sign-in'
import ClientList from '../pages/operation/client/list'


const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SignIn} />

        <Route path="/dashboard" exact component={ClientList} isPrivate />
    </Switch>
)

export default Routes