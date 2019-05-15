import { StyleSheet } from 'react-native';
import { colors, metrics, text } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    color: colors.darker,
    fontSize: 25,
    fontWeight: 'bold',
  },
  valor: {
    textAlign: 'center',
    color: colors.dark,
    fontSize: 36,
    fontWeight: 'bold',
  },
  form: {
    paddingTop: metrics.basePadding,
    paddingBottom: metrics.basePadding,
  },
  history: {
    flex: 1,
  },
  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: metrics.basePadding,
    paddingBottom: metrics.basePadding,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
  },
  buttonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
export default styles;
