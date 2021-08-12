import React from 'react';

import { Provider } from 'react-redux';
import store from './utils/store';

import AddNote from './pages/AddNote';
import ViewNotes from './pages/View-Notes'

export default function App() {

    return (
        <div>
            <header><h1>Redux Counter</h1></header>

            <Provider store={store}>
                <AddNote />
                <ViewNotes/>
            </Provider>

        </div>
    )
}