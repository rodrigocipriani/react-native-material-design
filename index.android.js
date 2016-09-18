/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    DrawerLayoutAndroid
} from 'react-native';

class mobile extends Component {
  render() {
    return (
        <Text>TEste android</Text>
    );
  }
}

AppRegistry.registerComponent('mobile', () => mobile);
