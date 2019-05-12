import React, { Component } from 'react';

import {
  View, StyleSheet, ImageBackground, Text, TouchableHighlight,
} from 'react-native';

// import { Container } from './styles';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    header: null,
  };

  state = {};

  login = () => {
    this.props.navigation.navigate('Login');
  };

  cadastrar = () => {
    this.props.navigation.navigate('Cadastro');
  };

  render() {
    return (
      <ImageBackground source={require('~/assets/images/fundo.jpg')} style={styles.bg}>
        <View style={styles.container}>
          <Text style={styles.title}>Fluxo de Caixa V.1.0.</Text>
          <View style={styles.buttonArea}>
            <TouchableHighlight
              underlayColor="#bfa100"
              style={styles.button}
              onPress={this.cadastrar}
            >
              <Text style={styles.btnText}>Cadastrar</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#bfa100" style={styles.button} onPress={this.login}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bg: {
    flex: 1,
    width: null,
  },
  title: {
    fontSize: 24,
    backgroundColor: 'transparent',
  },
  buttonArea: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#bfb300',
    margin: 10,
    height: 40,
    width: 200,
    justifyContent: 'center',
  },
  btnText: {
    color: '#FFF',
    textAlign: 'center',
  },
});
