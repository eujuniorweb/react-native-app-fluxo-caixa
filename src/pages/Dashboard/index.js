import React, { Component } from 'react';
import firebase from '~/services/Firebase';

import {
  View, Text, FlatList, TouchableOpacity,
} from 'react-native';
import HistoryItem from '~/components/HistoryItem';
import styles from './styles';

export default class Dashboard extends Component {
  static navigationOptions = {
    title: 'Dashboard',
    header: null,
  };

  state = {
    saldo: 0,
    history: [],
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

  addReceita = () => {
    const { navigation } = this.props;
    navigation.navigate('Receita');
  };

  addDespesa = () => {};

  logout = () => {
    firebase.auth().signOut();
  };

  render() {
    const { saldo, history } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.title}>Saldo R$</Text>
          <Text style={styles.valor}>{saldo}</Text>
        </View>
        <FlatList
          style={styles.history}
          data={history}
          renderItem={item => <HistoryItem data={item} />}
        />
        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={this.addReceita}>
            <Text style={styles.buttonText}>+ Receita</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.addDespesa}>
            <Text style={styles.buttonText}>+ Despesa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.logout}>
            <Text style={styles.buttonText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
