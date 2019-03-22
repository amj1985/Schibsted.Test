import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './redux/createStore';
import { App } from './containers/index';
localStorage.clear();
const store = createStore();
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);