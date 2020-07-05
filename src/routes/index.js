import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/header';
import routes from './routes';

const Routing = () => (
  <Router>
    <Header />
    <div>
      {
                    Object.keys(routes).map((route, key) => (
                      <Route {...routes[route]} key={key + 1} />
                    ))
                }
    </div>
  </Router>
);

export default Routing;
