/**
 * Boilerplate React App stuff
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/**
 * Routing stuff
 */
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

/**
 * Material UI stuff
 */
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

/**
 * Custom components
 */
import Dogs from './components/Dogs';
import Users from './components/Users';
import Contact from './components/Contact';
import Starfish from './components/Starfish';
import Baboon from './components/Baboon';
import Meerkat from './components/Meerkat';

import Footer from './components/shared/Footer';
import GlobalFooter from './components/shared/GlobalFooter';
import GlobalHeader from './components/shared/GlobalHeader';

import NotFound from './components/errors/NotFound';
import { DogsWithHooks } from './components/DogsWithHooks';

/**
 * Set the page title (shows up in browser tab)
 */
document.title = 'Pet Store Default Title';

/**
 * Override Material UI default theme here
 * https://material-ui.com/customization/themes/#createmuitheme-options-theme
 */
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#00ff00', // overwrite secondary.main to green
    },
  },
});

const routing = (
  // https://reactjs.org/docs/fragments.html
  <React.Fragment>
    {/* https://material-ui.com/components/css-baseline/ */}
    <CssBaseline />
    {/* https://material-ui.com/customization/themes/#theme-provider */}
    <MuiThemeProvider theme={theme}>
      <Router>
        <div>
          <Switch>
            <Route path='/' component={GlobalHeader} />
          </Switch>
          <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/dogs' component={Dogs} />
            <Route exact path='/dogswithhooks' component={DogsWithHooks} />

            <Route exact path='/dogs/:breed' component={Dogs} />
            <Route exact path='/users' component={Users} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/starfish' component={Starfish} />
            <Route exact path='/baboon' component={Baboon} />
            <Route exact path='/meerkat' component={Meerkat} />
            <Route component={NotFound} />
          </Switch>
          <Switch>
            <Route exact path='/' component={Footer} title='Home' />
          </Switch>
          <Switch>
            <Route path='/' component={GlobalFooter} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  </React.Fragment>
);
ReactDOM.render(routing, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
