import React from 'react';
import Text from '../../components/text/text';
import Container from '../../components/container/container';
import Button from '../../components/button/button';
import Input from '../../components/input/input';

import {useTranslation} from 'react-i18next';

const Login = () => {
  const {t} = useTranslation();
  return (
    <Container>
      <Text type="headline">{t('login.title')}</Text>
      <Button value="PRIMARY" />
      <Button value="OUTLINE" outlined={true} color="black" />
      <Input label="Name" />
      <Input label="Name error" error="Nombre invalido" />
      <Input label="Password" />
    </Container>
  );
};

export default Login;
