import {StyleSheet} from 'react-native';
import theme from '../../config/themes/default';

export default StyleSheet.create({
  tab: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 20,
    paddingBottom: 10,
    marginTop: 22,
  },
  scrollContainer: {
    paddingRight: 20,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: '#d2d2d2',
  },
  badgeBubble: {
    top: 10,
    right: 10,
    height: 20,
    width: 18,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  squareBadgeBubble: {
    top: 8,
    right: 10,
    height: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: theme.white,
    fontSize: 12,
    backgroundColor: 'transparent',
  },
});
