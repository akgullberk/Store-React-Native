import {FlatList, Text, TextInput, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {AppName, Search} from '../../components/index';
import product from '../../../product.json';
import ProductCard from '../../components/ProductCard/ProductCard';

const app = () => {
  const renderProduct = ({item}) => <ProductCard products={item} />;
  return (
    <View>
      <View style={styles.appname}>
        <AppName appname="BERKSTORE" />
      </View>
      <View style={styles.search}>
        <TextInput placeholder="Ara.." placeholderTextColor={'#cacccf'} />
      </View>
      <View style={styles.container}>
        <FlatList data={product} renderItem={renderProduct} numColumns={2} />
      </View>
    </View>
  );
};

export default app;
