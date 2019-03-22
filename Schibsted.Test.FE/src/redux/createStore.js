import { createStore as _createStore, applyMiddleware } from 'redux';
import promiseMiddleware from './middleware/promiseMiddleware';
import { createLogger } from 'redux-logger';
import rootReducer from './modules/root';
import thunkMiddleware from 'redux-thunk';
const loggerMiddleware = createLogger();

export default function createStore(initialState) {
    const { compose } = require('redux');
    const finalCreateStore = compose(
        applyMiddleware(thunkMiddleware, promiseMiddleware)
    )(_createStore);
    const store = finalCreateStore(rootReducer, initialState);
    return store;
}

