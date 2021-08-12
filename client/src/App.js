import React from 'react';

import { Provider } from 'react-redux';
import store from './utils/store';

import AddNote from './pages/AddNote';

export default function App() {

    return (
        <div>
            <header><h1>Redux Counter</h1></header>

            <Provider store={store}>
                <AddNote />
            </Provider>

        </div>
    )
}