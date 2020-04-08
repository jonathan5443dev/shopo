import React from 'react';
import Text from '../../components/text/text';
import Container from '../../components/container/container';

import {useTranslation} from 'react-i18next';

const Login = () => {
  const {t} = useTranslation();
  return (
    <Container>
      <Text type="headline">{t('login.title')}</Text>
    </Container>
  );
};

export default Login;
