import React, { Component } from 'react';

import { AppRegistry,
    Text,
    View,
    StyleSheet,
    ListView,
    TouchableHighlight
} from 'react-native';

const users = [
    {name: "user1"},
    {name: "user2"},
    {name: "user3"}
];

export default class UserList extends Component {

    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            userDataSource: ds
        };
    }

    componentWillMount() {
        this.fetchUsers();
    }

    fetchUsers() {

        fetch("http://jsonplaceholder.typicode.com/users")
            .then( (response) => response.json() )
            .then( (response) => {
                this.setState({
                    userDataSource: this.state.userDataSource.cloneWithRows(response)
                })
            });

    }

    onPress(user) {
        this.props.navigator.push(
            {
                id: 'UserDetails',
                user: user
            }
        );
        console.log(user.name);
    }

    renderRow(user, selectionId, rowId, highlightRow) {
        return(
         <TouchableHighlight onPress={ () => this.onPress(user) }>
            <View style={styles.row}>
                <Text>{user.name}</Text>
            </View>
         </TouchableHighlight>
        )
    }

    render() {
        return (
            <ListView
                dataSource={this.state.userDataSource}
                renderRow= { this.renderRow.bind(this) }
            />
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#f4f4f4',
        marginBottom: 3
    }
});

// App registration and rendering
AppRegistry.registerComponent('UserList', () => UserList);