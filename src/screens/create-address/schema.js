import i18next from 'i18next';
import * as yup from 'yup';

export default yup.object().shape({
  name: yup.string().required(i18next.t('login.validations.required')),
  city: yup.string().required(i18next.t('login.validations.required')),
  address: yup.string().required(i18next.t('login.validations.required')),
  country: yup.string().required(i18next.t('login.validations.required')),
});
