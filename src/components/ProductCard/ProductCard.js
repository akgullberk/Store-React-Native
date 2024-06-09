import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const ProductCard = props => {
  const renderText = () => {
    if (!props.products.inStock) {
      return <Text style={styles.text}>STOKTA YOK</Text>;
    }
    return null;
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{uri: props.products.imgURL}}></Image>
      </View>
      <Text style={styles.title}>{props.products.title}</Text>
      <Text style={styles.price}>{props.products.price}</Text>
      {renderText()}
    </View>
  );
};

export default ProductCard;
