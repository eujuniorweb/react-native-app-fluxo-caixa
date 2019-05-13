import { StyleSheet } from 'react-native';
import { colors, metrics, text } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.basePadding * 2,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  label: {
    color: colors.regular,
    fontSize: text.subtitle,
  },
  input: {
    backgroundColor: colors.lighter,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: metrics.basePadding,
    marginBottom: 10,
  },
  error: {
    color: colors.danger,
    textAlign: 'center',
    marginTop: metrics.baseMargin,
  },
  form: {
    marginTop: metrics.baseMargin * 2,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    height: 44,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: text.button,
    fontWeight: 'bold',
  },
});
export default styles;
