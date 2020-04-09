import React from 'react';
import {Formik} from 'formik';
import validationSchema from './schema.js';
import Text from '../../components/text/text';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import Container from '../../components/container/container';
import {
  Form,
  SocialCopy,
  SocialLogin,
  SocialButton,
  SocialButtonImage,
  TextContainer,
} from './styles';
import {useTranslation} from 'react-i18next';
import FacebookIcon from '../../assets/images/facebook.png';
import GoogleIcon from '../../assets/images/google.png';

const RecoveryPassword = () => {
  const {t} = useTranslation();
  return (
    <Container>
      <Text type="headline">{t('recoveryPassword.title')}</Text>
      <TextContainer>
        <Text type="body">{t('recoveryPassword.message')}</Text>
      </TextContainer>
      <Form>
        <Formik
          validationSchema={validationSchema}
          initialValues={{email: '', password: ''}}
          onSubmit={values => console.log(values)}>
          {({
            handleChange,
            handleBlur,
            errors,
            touched,
            handleSubmit,
            values,
          }) => (
            <>
              <Input
                onChangeText={handleChange('email')}
                value={values.email}
                error={touched.email && errors.email}
                label="Email"
              />
              <Button
                value={t('recoveryPassword.submit')}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
      </Form>
      <SocialCopy>{t('login.socialCopy')}</SocialCopy>
      <SocialLogin>
        <SocialButton>
          <SocialButtonImage source={FacebookIcon} />
        </SocialButton>
        <SocialButton>
          <SocialButtonImage source={GoogleIcon} />
        </SocialButton>
      </SocialLogin>
    </Container>
  );
};

export default RecoveryPassword;
