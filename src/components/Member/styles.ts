import { StyleSheet } from 'react-native';

import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 18
  },
  nameStatus: {
    color: theme.colors.highLight,
    fontFamily: theme.fonts.title700,
    fontSize: 13
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  bulletStatus: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 9
  }
});