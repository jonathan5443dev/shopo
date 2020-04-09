import i18next from 'i18next';
import * as yup from 'yup';

export default yup.object().shape({
  username: yup.string().required(i18next.t('login.validations.required')),
  email: yup
    .string()
    .email(i18next.t('login.validations.invalid'))
    .required(i18next.t('login.validations.required')),
  password: yup.string().required(i18next.t('login.validations.required')),
});
