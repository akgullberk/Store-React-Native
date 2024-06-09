import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  appname: {
    fontSize: windowWidth * 0.1,
    fontWeight: 'bold',
    color: '#800080',
    textAlign: 'left',
  },
});
