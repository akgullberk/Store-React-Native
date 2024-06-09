import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    margin: windowHeight * 0.007,
    borderRadius: windowHeight * 0.008,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  image: {
    width: windowWidth * 0.39,
    height: windowHeight * 0.25,
    borderRadius: windowHeight * 0.008,
  },
  title: {
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: windowHeight * 0.02,
    width: windowWidth * 0.4,
  },
  price: {
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
    marginLeft: windowHeight * 0.02,
    width: windowWidth * 0.4,
    marginBottom: windowHeight * 0.02,
  },
  textContainer: {
    width: windowWidth * 0.4,
    marginBottom: windowHeight * 0.01,
  },
  imageContainer: {
    padding: windowHeight * 0.02,
  },
  text: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: windowHeight * 0.025,
    marginRight: windowHeight * 0.02,
  },
});
