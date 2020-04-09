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
  ForgotPassword,
  SocialButtonImage,
  ForgotPasswordLink,
  ForgotPasswordArrow,
} from './styles';
import {useTranslation} from 'react-i18next';
import FacebookIcon from '../../assets/images/facebook.png';
import GoogleIcon from '../../assets/images/google.png';

const SingUp = () => {
  const {t} = useTranslation();
  return (
    <Container>
      <Text type="headline">{t('singUp.title')}</Text>
      <Form>
        <Formik
          validationSchema={validationSchema}
          initialValues={{email: '', password: '', username: ''}}
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
                onChangeText={handleChange('username')}
                value={values.username}
                error={touched.username && errors.username}
                label="Username"
              />
              <Input
                onChangeText={handleChange('email')}
                value={values.email}
                error={touched.email && errors.email}
                label="Email"
              />
              <Input
                onChangeText={handleChange('password')}
                value={values.password}
                secureTextEntry={true}
                error={touched.password && errors.password}
                label="Password"
              />
              <ForgotPasswordLink>
                <ForgotPassword>
                  {t('singUp.haveAccount')}
                </ForgotPassword>
                <ForgotPasswordArrow>&#8594;</ForgotPasswordArrow>
              </ForgotPasswordLink>
              <Button
                value={t('singUp.submit')}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
      </Form>
      <SocialCopy>{t('singUp.socialCopy')}</SocialCopy>
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

export default SingUp;
