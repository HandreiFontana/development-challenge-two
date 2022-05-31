import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './route'
import SignIn from '../pages/authentication/sign-in'

import { CustomersList, Home, DoctorsList, ExamsList } from 'pages/operation'
import CustomerForm from 'pages/operation/customers/form'


const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SignIn} />

        <Route path="/home" exact component={Home} isPrivate />
        <Route path="/customers" exact component={CustomersList} isPrivate />
        <Route path="/customers/new" exact component={CustomerForm} isPrivate />
        <Route path="/customers/edit/:id" exact component={CustomerForm} isPrivate />
        <Route path="/doctors" exact component={DoctorsList} isPrivate />
        <Route path="/exams" exact component={ExamsList} isPrivate />
    </Switch>
)

export default Routes