import React from 'react';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';

import validationSchema from './schema.js';

import Text from '../../components/text/text';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import Container from '../../components/container/container';

import profileSettingsActions from '../../redux/reducers/profile-settings';

const ProfileSettings = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  return (
    <Container>
      <Text>Personal information</Text>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          fullname: '',
          password: '',
          birthdate: '',
          oldpassword: '',
          newpassword: '',
        }}
        onSubmit={values =>
          dispatch(
            profileSettingsActions.updateUserInformation(Object.values(values)),
          )
        }>
        {({handleChange, errors, touched, handleSubmit, values}) => (
          <>
            <Input
              onChangeText={handleChange('fullname')}
              value={values.fullname}
              error={touched.fullname && errors.fullname}
              label="Full name"
            />
            <Input
              onChangeText={handleChange('birthdate')}
              value={values.birthdate}
              error={touched.birthdate && errors.birthdate}
              label="Date of birth"
            />
            <Text>Change password</Text>
            <Input
              onChangeText={handleChange('oldpassword')}
              value={values.oldpassword}
              secureTextEntry={true}
              error={touched.oldpassword && errors.oldpassword}
              label="oldpassword"
            />
            <Input
              onChangeText={handleChange('password')}
              value={values.password}
              secureTextEntry={true}
              error={touched.password && errors.password}
              label="Password"
            />
            <Input
              onChangeText={handleChange('newpassword')}
              value={values.newpassword}
              secureTextEntry={true}
              error={touched.newpassword && errors.newpassword}
              label="newpassword"
            />
            <Button value={t('login.submit')} onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Container>
  );
};

export default ProfileSettings;
