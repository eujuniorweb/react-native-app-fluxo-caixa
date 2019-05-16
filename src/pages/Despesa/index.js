import React, { Component } from 'react';
import firebase from '~/services/Firebase';

import {
  View, Text, TextInput, TouchableOpacity,
} from 'react-native';
import styles from './styles';

export default class Despesa extends Component {
  static navigationOptions = {
    title: 'Adicionar Despesa',
  };

  state = {
    valor: '',
  };

  retirar = () => {
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
        type: 'despesa',
        valor: parseFloat(valor),
      });
      user.once('value').then((snapshot) => {
        let { saldo } = snapshot.val();
        saldo -= parseFloat(valor);
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
          <Text style={styles.title}>Quanto você quer retirar?</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={valor}
            onChangeText={text => this.setState({ valor: text })}
            autoFocus
          />
          <TouchableOpacity style={styles.button} onPress={this.retirar}>
            <Text style={styles.buttonText}>Retirar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
