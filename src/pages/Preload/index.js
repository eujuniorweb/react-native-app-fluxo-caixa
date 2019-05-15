import React, { Component } from 'react';
import firebase from '~/services/Firebase';

import {
  View, ImageBackground, Text, TouchableHighlight,
} from 'react-native';

import styles from './styles';

export default class Preload extends Component {
  static navigationOptions = {
    title: 'null',
    header: null,
  };

  state = {};

  componentDidMount() {
    firebase.auth().onAuthStateChanged((authUser) => {
      const { navigation } = this.props;
      if (authUser) {
        navigation.navigate('Dashboard');
      } else {
        navigation.navigate('Home');
      }
    });
  }

  render() {
    return (
      <ImageBackground source={require('~/assets/images/fundo.jpg')} style={styles.bg}>
        <View style={styles.container}>
          <Text style={styles.title}>Fluxo de Caixa V.1.0.</Text>
        </View>
      </ImageBackground>
    );
  }
}
