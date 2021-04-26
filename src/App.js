// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RoutesComponent from './Components/RoutesComponent';
import HomeComponent from './Components/HomeComponent';
import ProtectedComponent from './Components/ProtectedComponent';
import UnprotectedComponent from './Components/UnprotectedComponent';
import GuardedRouteComponent from './Components/GuardedRouteComponent';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function login() {
    setIsAuthenticated(true);
  }

  function logout() {
    setIsAuthenticated(false);
  }

  useEffect(() => {
    //Firebase is logeed in ??
    console.log("App has started");
  }, [])

  return (
    <Router>
      <RoutesComponent />
      <br />
      <span>{`User is logged in: ${isAuthenticated}`}</span>
      <br />
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      <Switch>
        <Route exact path='/' component={HomeComponent} />
        <GuardedRouteComponent path='/protected' component={ProtectedComponent} auth={isAuthenticated} />
        <Route path='/unprotected' component={UnprotectedComponent} />
      </Switch>
    </Router >
  );
}

export default App;
