import React from 'react';
// redux
import {useSelector} from 'react-redux';

// navigation imp
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './navigation/AuthSack';
import MainNavigation from './navigation/MainStack';

// local imp

const AppIn = () => {
  // var init
  const isLogin = useSelector(state => state.userReducer.isLogin);

  return (
    <>
      <NavigationContainer>
        {isLogin ? <MainNavigation /> : <AuthStack />}
      </NavigationContainer>
    </>
  );
};

export default AppIn;
