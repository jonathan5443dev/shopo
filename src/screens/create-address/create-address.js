import React from 'react';
import {useTranslation} from 'react-i18next';
import Container from '../../components/container/container';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import validationSchema from './schema.js';
import {Form, Spacer} from './styles.js';
import {Formik} from 'formik';

const Addresses = () => {
  const {t} = useTranslation();
  return (
    <Container>
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
                onChangeText={handleChange('name')}
                value={values.name}
                error={touched.name && errors.name}
                label={t('createAddress.name')}
              />
              <Spacer />
              <Input
                onChangeText={handleChange('address')}
                value={values.address}
                error={touched.address && errors.address}
                label={t('createAddress.address')}
              />
              <Spacer />
              <Input
                onChangeText={handleChange('city')}
                value={values.city}
                error={touched.city && errors.city}
                label={t('createAddress.city')}
              />
              <Spacer />
              <Input
                onChangeText={handleChange('state')}
                value={values.state}
                error={touched.state && errors.state}
                label={t('createAddress.state')}
              />
              <Spacer />
              <Input
                onChangeText={handleChange('country')}
                value={values.country}
                error={touched.country && errors.country}
                label={t('createAddress.country')}
              />
              <Spacer />
              <Spacer />
              <Button
                value={t('createAddress.saveAddress')}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
      </Form>
    </Container>
  );
};

export default Addresses;
