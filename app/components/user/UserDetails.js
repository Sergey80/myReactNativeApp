import React, { Component } from 'react';

import { AppRegistry,  Text, View,
    Button,
    StyleSheet
} from 'react-native';

/**
 @flow
  */
export default class UserDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.user.name,
            email: this.props.user.email
        }
    }

    onPress() {
        this.props.navigator.push(
            {id: 'UserList'}
        )
    }

    render() {
        return (
            <View>
                <Text>{this.state.name}</Text>
                <Text>{this.state.email}</Text>
                <Button
                    onPress={this.onPress.bind(this)}
                    title="Go Back"
                />
            </View>
        );
    }
}

// App registration and rendering
AppRegistry.registerComponent('UserDetails', () => UserDetails);