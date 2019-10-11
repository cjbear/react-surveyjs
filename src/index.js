import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import firebase from 'firebase';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbBackPocket from './Config/Firebase';
import axios from 'axios';
import thunk from 'redux-thunk';


import './index.css';
import App from './Components/App';
import reducers from './Reducers';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp(fbBackPocket)

const rrfConfig = { userProfile: 'users' } 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    compose(
        reactReduxFirebase(firebase, rrfConfig),
        composeEnhancers(applyMiddleware(thunk.withExtraArgument(getFirebase)))
    )
);

axios.defaults.baseURL = 'https://react-reflections.firebaseio.com/';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log(request);
    // Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    // Edit request config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});



ReactDOM.render(
    <Provider store ={ store }>
        <App />
    </Provider>,
document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
