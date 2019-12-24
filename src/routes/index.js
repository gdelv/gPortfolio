import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Container from '../Container'

export class Routes extends React.Component {
    render () {
    return (
        <Switch>
            <Route exact path ='/' component={Container} /> 
        </Switch>
    )}
}

export default Routes