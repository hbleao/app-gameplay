import { StyleSheet } from 'react-native';

import { theme } from '../../styles/theme/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100
  },
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
  },
  bar: {
    width: 39,
    height: 2,
    borderRadius: 2,
    backgroundColor: theme.colors.secondary40,
    alignSelf: 'center',
    marginTop: 13,
  }
})