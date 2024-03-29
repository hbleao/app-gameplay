import { StyleSheet } from 'react-native';

import { theme } from './../../styles/theme/index';

export const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.heading,
    borderRadius: 8,
    fontFamily: theme.fonts.text400,
    marginRight: 4,
    textAlign: 'center',
    borderColor: theme.colors.secondary50,
    borderWidth: 2,
  }
})

