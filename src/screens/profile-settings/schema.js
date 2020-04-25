import i18next from 'i18next';
import * as yup from 'yup';

export default yup.object().shape({
  fullname: yup.string().required(i18next.t('login.validations.required')),
  birthdate: yup.string().required(i18next.t('login.validations.required')),
  oldpassword: yup.string().required(i18next.t('login.validations.required')),
  password: yup.string().required(i18next.t('login.validations.required')),
  newpassword: yup.string().required(i18next.t('login.validations.required')),
});
