import { StyleSheet } from 'react-native';

import { theme } from './../../styles/theme/index';

export const styles = StyleSheet.create({
  container: {
    width: 62,
    height: 66,
    borderRadius: 8,
    backgroundColor: theme.colors.discord,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 24,
    overflow: 'hidden'
  },
  image: {
    width: 64,
    height: 66,
  },
});