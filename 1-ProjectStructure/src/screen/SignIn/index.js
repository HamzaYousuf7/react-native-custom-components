import React from 'react';
import {SafeAreaView, Text} from 'react-native';

//local import

import styles from './styles';
import {images, icons} from '../../constant/assets';

const Index = ({...props}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Sign In</Text>
    </SafeAreaView>
  );
};

export default Index;
