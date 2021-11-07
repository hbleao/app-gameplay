import { StyleSheet } from 'react-native';

import { theme } from './../../styles/theme/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
    marginBottom: 4
  },
  owner: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highLight,
    fontSize: 13,
    marginBottom: 12
  }
})