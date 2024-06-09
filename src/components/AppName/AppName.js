import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const AppName = props => {
  return (
    <View>
      <Text style={styles.appname}>{props.appname}</Text>
    </View>
  );
};

export default AppName;
