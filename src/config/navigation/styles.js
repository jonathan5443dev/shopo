import DefaultTheme from '../themes/default';

export const emptyHeader = () => ({
  title: '',
  headerStyle: {
    backgroundColor: DefaultTheme.background,
    shadowColor: 'transparent',
    elevation: 0,
    borderBottomWidth: 0,
    height: 100,
  },
});

export default emptyHeader;
