import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import { CSSTransition } from 'react-transition-group';
import NotFound from '../pages/NotFound';
import '../styles.scss';
import Details from '../pages/Details';

const Header = () => {
    const [inProp, setInProp] = useState(false);
    return (
        <CSSTransition in={inProp} timeout={300} className="header">
            <Router>
                <header className="header">
                    <nav>
                        <ul className="nav-list">
                            <li className="nav-item">
                                <Link to="/" onClick={() => setInProp(true)}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" onClick={() => setInProp(true)}>
                                    About
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/details/:id">
                        <Details />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </CSSTransition>
    );
};

export default Header;
