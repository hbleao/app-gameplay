import { StyleSheet } from 'react-native';

import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  category: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    marginLeft: 24,
    marginTop: 36,
    marginBottom: 18
  },
  guildName: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  label: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    marginBottom: 8
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 32
  },
  select: {
    flexDirection: 'row',
    width: '100%',
    height: 68,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    paddingRight: 25,
    overflow: 'hidden'
  },
  selectBody: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: 64,
    height: 68,
    backgroundColor: theme.colors.secondary50,
    borderRadius: 8
  },
  field: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    marginRight: 4,
    fontSize: 15,
    fontFamily: theme.fonts.text500,
    color: theme.colors.highLight
  },
  textareaContainer : {
    marginTop: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  charactersLimit: {
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.highLight,
  },
  footer: {
    marginVertical: 30,
    marginBottom: 56
  }
})