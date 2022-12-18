import { StyleSheet } from 'react-native';
import { colors } from './Colors';

export const ImageFormStyle = StyleSheet.create({
  body: {
    height: '100%',
    marginHorizontal: 3,
    backgroundColor: colors.backgroundColor,
    padding: 3,
  },
  saveButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
