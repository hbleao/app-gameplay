import { StyleSheet } from 'react-native';

import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 360,
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50
  },
  title: {
    color: theme.colors.heading,
    fontSize: 40,
    textAlign: 'center',
    lineHeight: 40,
    marginBottom: 16,
    fontFamily: theme.fonts.title700
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 64,
    fontFamily: theme.fonts.title500,
    lineHeight: 25,
  },
  wrapperContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.line,
    borderRightWidth: 1
  },
  icon: {
    width: 24,
    height: 18,
  },
  buttonText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: theme.colors.heading,
    fontSize: 15,
    fontWeight: '700'
  }
})