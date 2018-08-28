import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider }  from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom';
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import reducers from './main/reducers'
import AuthOrApp from './main/AuthOrApp';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <AuthOrApp />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
