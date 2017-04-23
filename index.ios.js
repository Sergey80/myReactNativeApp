/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator
} from 'react-native';

// import Component1 from './app/components/Component1/Component1'
// import Component2 from './app/components/Component2/Component2'
// import Component3 from './app/components/Component3/Component3'
// import Component4 from './app/components/Component4/Component4'

import UserList from './app/components/user/UserList'
import UserDetails from './app/components/user/UserDetails'

export default class myReactNativeApp extends Component {

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

AppRegistry.registerComponent('myReactNativeApp', () => myReactNativeApp);
