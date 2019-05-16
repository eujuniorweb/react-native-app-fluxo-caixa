import { StyleSheet } from 'react-native';
import { colors, metrics, text } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.basePadding,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subtitle: {
    color: colors.dark,
    fontSize: text.subtitle,
  },
});
export default styles;
