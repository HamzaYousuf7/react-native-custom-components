import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useDispatch} from 'react-redux';

//local import
import {logout} from '../../store/action/user';
import styles from './styles';
import {images, icons} from '../../constant/assets';

const Index = ({...props}) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
      <Text onPress={() => dispatch(logout())}>Logout</Text>
    </SafeAreaView>
  );
};

export default Index;
