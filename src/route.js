import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Header from './includes/header';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Header/>
                <Switch>
                    <ScrollToTop>
                        <Route exact path="/" component={Home} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/about" component={About} />
                    </ScrollToTop>
                </Switch>
            </Router>
        );
    }
}

export default AppRouter;