import React, { Component } from 'react';
import firebase from '~/services/Firebase';

import {
  View, Text, TextInput, TouchableOpacity,
} from 'react-native';

import styles from './styles';

export default class Login extends Component {
  static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: '#ffff00',
    },
    headerTintColor: '#000000',
  };

  state = {
    email: '',
    senha: '',
  };

  componentDidMount() {
    return firebase.auth().signOut();
  }

  entrar = () => {
    if (this.email !== '' && this.senha !== '') {
      const { email, senha } = this.state;
      firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          const { uid } = authUser;
          firebase
            .database()
            .ref('users')
            .child(uid)
            .set({
              saldo: 0,
            });
          const { navigation } = this.props;
          navigation.navigate('Dashboard');
        }
      });
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, senha)
        .catch((error) => {
          alert(error.code);
        });
    }
  };

  render() {
    const { email, senha } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu Email"
            underlineColorAndroid="transparent"
            value={email}
            onChangeText={text => this.setState({ email: text })}
          />
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite a senha"
            underlineColorAndroid="transparent"
            value={senha}
            secureTextEntry
            onChangeText={text => this.setState({ senha: text })}
          />
          <TouchableOpacity style={styles.button} onPress={this.entrar}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
