import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    ListView,
} from 'react-native';

import styles from '../styles';



export default class Home extends Component {
    render() { 
        return ( 
            <View style={styles.container}>
                <View style={styles.header}>
					<Text>Home Header</Text>
				</View>
                <View style={styles.body}>
					< Text > Home Body </Text>
				</View>
            </View>
         );
    }
}
