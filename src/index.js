import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider }  from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom';
import promise from 'redux-promise'

import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
