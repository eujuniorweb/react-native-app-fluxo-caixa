import React, { Component } from 'react';

import {
  View, ImageBackground, Text, TouchableHighlight,
} from 'react-native';

import styles from './styles';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    header: null,
  };

  state = {};

  login = () => {
    const { navigation } = this.props;
    navigation.navigate('Login');
  };

  cadastrar = () => {
    const { navigation } = this.props;
    navigation.navigate('Cadastro');
  };

  render() {
    return (
      <ImageBackground source={require('~/assets/images/fundo.jpg')} style={styles.bg}>
        <View style={styles.container}>
          <Text style={styles.title}>Fluxo de Caixa V.1.0.</Text>
          <View style={styles.form}>
            <TouchableHighlight
              underlayColor="#bfa100"
              style={styles.button}
              onPress={this.cadastrar}
            >
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#bfa100" style={styles.button} onPress={this.login}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
