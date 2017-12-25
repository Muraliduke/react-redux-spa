/* eslint-disable no-console */
import 'babel-polyfill';//needed as some ES6 features can't be transpiled by babl 
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';//provider binds redux store with react
import {Router ,browserHistory} from 'react-router';
import routes from './routes';
import {loadCourses} from './actions/courseAction'
//import './styles/styles.css'; //webpack cn import css lso
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const store = configureStore();//instance of store

//to get courses on page load
store.dispatch(loadCourses());
render(
    <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
