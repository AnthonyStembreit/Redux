import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './utils/store';

import AddNote from './pages/AddNote';
import ViewNotes from './pages/View-Notes';
import NavBar from './components/Nav-Bar';
import './style.css';

export default function App() {

    return (
        <HashRouter>
            <header>
                <h1>Redux Note-Taker</h1>
                <NavBar/>
            </header>
            <div id="component-body">
                <Provider store={store}>
                    <Switch>
                        <Route exact path="/" component={AddNote} />
                        <Route path="/view-notes" component={ViewNotes} />
                        <Route path="/add-notes" component={AddNote} />
                    </Switch>
                </Provider>
            </div>
        </HashRouter>
    )
}