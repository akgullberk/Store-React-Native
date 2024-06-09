import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  appname: {
    marginLeft: windowWidth * 0.04,
    marginTop: windowHeight * 0.01,
  },

  search: {
    width: windowWidth * 0.98,
    height: windowHeight * 0.07,
    backgroundColor: '#eceff1',
    borderRadius: windowWidth * 0.03,
    marginLeft: windowWidth * 0.01,
    justifyContent: 'center',
    marginTop: windowHeight * 0.01,
    marginBottom: windowHeight * 0.01,
  },

  container: {
    marginBottom: windowHeight * 0.4,
  },
});
