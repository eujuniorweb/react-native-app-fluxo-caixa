import React, { Component } from 'react';

import { View, Text } from 'react-native';

import styles from './styles';

export default class HistoryItem extends Component {
  state = {};

  render() {
    const { type, valor } = this.props.data;
    return (
      <View style={styles.container}>
        <Text style={styles.subtitle}>{type}</Text>
        <Text style={styles.subtitle}>
          R$
          {parseFloat(valor).toFixed(2)}
        </Text>
      </View>
    );
  }
}
