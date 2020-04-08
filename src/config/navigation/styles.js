import {hasNotch} from 'react-native-device-info';
import DefaultTheme from '../themes/default';
import {Platform} from 'react-native';

const height = () => {
  if (Platform.OS === 'ios' && hasNotch()) {
    return 100;
  }
  return 50;
};

export const emptyHeader = () => ({
  title: '',
  headerStyle: {
    backgroundColor: DefaultTheme.background,
    shadowColor: 'transparent',
    elevation: 0,
    borderBottomWidth: 0,
    height: height(),
  },
});

export default emptyHeader;
