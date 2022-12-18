import { StyleSheet } from 'react-native';
import { colors } from './Colors';

export const ImageScreenStyle = StyleSheet.create({
  body: {
    height: '100%',
    marginHorizontal: 3,
    backgroundColor: colors.backgroundColor,
    padding: 3,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    color: '#4a473d',
  },
  text: {
    color: '#474642',
    textAlign: 'justify',
  },
  image: {
    resizeMode: 'contain',
    height: 300,
    backgroundColor: 'white',
  },
  buttons: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    bottom: 0,
    right: 0,
  },
});
