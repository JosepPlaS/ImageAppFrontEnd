import { StyleSheet } from 'react-native';
import { colors } from './Colors';

export const HomeScreenStyle = StyleSheet.create({
  scroll: {
    minHeight: '100%',
    backgroundColor: colors.backgroundColor,
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    margin: 5,
  },
  imageButton: {
    resizeMode: 'cover',
    width: 90,
    height: 90,
    marginBottom: 8,
    backgroundColor: 'white',
  },
  addButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
