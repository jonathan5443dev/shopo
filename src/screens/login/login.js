import React from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';

const Login = () => {
  const {t} = useTranslation();
  return (
    <View>
      <Text>{t('login.title')}</Text>
    </View>
  );
};

export default Login;
