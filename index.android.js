/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// -- redux --

import {Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'

import reducer from './app/reducers'

const loggerMiddleware = createLogger({predicate: (getState, action) => {__DEV__}});

function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
        )
    );
    return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

// ---

import UserList from './app/components/user/UserList'
import UserDetails from './app/components/user/UserDetails'

import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator,
} from 'react-native';

export default class UsersSearch extends Component {

    renderScene(route, navigator) {
        switch (route.id) {
            case 'UserList' :
                return (<UserList navigator={navigator} title="UserList" />);
            case 'UserDetails' :
                return (<UserDetails user={route.user} navigator={navigator} title="UserDetails" />);
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{id: "UserList"}}
                renderScene={this.renderScene}
                configureScreen={
                    (route, routeStack) => Navigator.SceneConfigs.FloatFromBottom
                }
            />
        );
    }
}

const App = ()=> (     // it is a root for our app, and it connects us to redux
    <Provider store={store}>
        <UsersSearch/>
    </Provider>
);

AppRegistry.registerComponent('myReactNativeApp', () => App);
