import React from 'react';
import { Redirect, Route } from 'react-router-dom'

function GuardedRouteComponent({ component: Component, auth, ...rest }) {
    return (
        <Route {...rest} render={(props) => (
            auth === true ?
                <Component {...props} /> :
                <Redirect to="/" />
        )} />
    )
}

export default GuardedRouteComponent;