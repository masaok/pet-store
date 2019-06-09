import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Dogs from './components/Dogs'
import Users from './components/Users'
import Contact from './components/Contact'

import Footer from './components/shared/Footer'
import GlobalFooter from './components/shared/GlobalFooter'
import GlobalHeader from './components/shared/GlobalHeader'

import NotFound from './components/errors/NotFound'

const routing = (
  <Router>
    <div>
      <Switch>
        <Route path="/" component={GlobalHeader} />
      </Switch>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/dogs" component={Dogs} />
        <Route exact path="/dogs/:breed" component={Dogs} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/starfish" component={Starfish} />
        <Route component={NotFound} />
      </Switch>
      <Switch>
        <Route exact path="/" component={Footer} title="Home" />
      </Switch>
      <Switch>
        <Route path="/" component={GlobalFooter} />
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
