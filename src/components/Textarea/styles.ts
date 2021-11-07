import { StyleSheet } from 'react-native';

import { theme } from '../../styles/theme/index';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 95,
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.heading,
    borderRadius: 8,
    fontFamily: theme.fonts.text400,
    marginRight: 4,
    borderColor: theme.colors.secondary50,
    borderWidth: 2,
    paddingHorizontal: 16,
    paddingTop: 16,
    textAlignVertical: 'top',
  }
})

