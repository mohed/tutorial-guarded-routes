import React from 'react';
import { Link } from 'react-router-dom';

function RoutesComponent() {

    const routes = [{
        text: "Link to Home Page",
        url: "/"
    }, {
        text: "Link to Protected page",
        url: "/protected"
    },
    {
        text: "Link to Unprotected page",
        url: '/unprotected'
    }];

    const routesElementComponent = (route, idx) => {
        return (
            <li key={idx}>
                <Link to={route.url}>{route.text}</Link>
            </li>
        );
    };

    return (
        <div className='main-content'>
            <ul>
                {routes.map((route, idx) => routesElementComponent(route, idx))}
            </ul>
        </div>
    );
}

export default RoutesComponent;
