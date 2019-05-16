import { StyleSheet } from 'react-native';
import { colors, metrics, text } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.basePadding * 2,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  title: {
    color: colors.regular,
    fontSize: text.title,
  },
  input: {
    backgroundColor: colors.lighter,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: metrics.basePadding,
    marginTop: metrics.baseMargin,
    marginBottom: 10,
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
