import React, {Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import Login from './Components/Login';


type Props = {};
export default class App extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <Login/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1
    }
})


