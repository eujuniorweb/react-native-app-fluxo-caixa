import React, { Component } from 'react';
import firebase from '~/services/Firebase';

import {
  View, Text, TextInput, TouchableOpacity,
} from 'react-native';
import styles from './styles';

export default class Receita extends Component {
  static navigationOptions = {
    title: 'Adicionar Receita',
  };

  state = {
    valor: '',
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((authUser) => {
      const { navigation } = this.props;
      if (authUser) {
        const { uid } = authUser;
        firebase
          .database()
          .ref('users')
          .child(uid)
          .on('value', (snapshot) => {
            const { state } = this;
            state.saldo = snapshot.val().saldo;
            this.setState(state);
          });
      } else {
        navigation.navigate('Home');
      }
    });
  }

  adicionar = () => {
    if (this.valor !== '') {
      const { navigation } = this.props;
      const { valor } = this.state;
      const history = firebase
        .database()
        .ref('history')
        .child(firebase.auth().currentUser.uid);
      const user = firebase
        .database()
        .ref('users')
        .child(firebase.auth().currentUser.uid);

      const { key } = history.push();
      history.child(key).set({
        type: 'receita',
        valor,
      });
      user.once('value').then((snapshot) => {
        let { saldo } = snapshot.val();
        saldo += parseFloat(valor);
        user.set({
          saldo,
        });
        navigation.goBack();
      });
    }
  };

  render() {
    const { valor } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.title}>Quanto você quer adicionar?</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={valor}
            onChangeText={text => this.setState({ valor: text })}
            autoFocus
          />
          <TouchableOpacity style={styles.button} onPress={this.adicionar}>
            <Text style={styles.buttonText}>Adiconar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
