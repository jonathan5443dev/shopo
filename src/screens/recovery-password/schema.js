import i18next from 'i18next';
import * as yup from 'yup';

export default yup.object().shape({
  email: yup
    .string()
    .email(i18next.t('login.validations.invalid'))
    .required(i18next.t('login.validations.required')),
});
