import * as yup from 'yup';

const schema = {
  register: yup.object().shape({
    email: yup.string().email('Invalid email').required(),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .max(12, 'Password must be maximum 12 characters')
      .required('Required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Password do not match')
      .required(),
    name: yup
      .string()
      .min(1, 'Name must be at least 1 characters')
      .max(12, 'Name must be maximum 12 characters')
      .required('Required'),
  }),
  login: yup.object().shape({
    email: yup.string().email('Invalid email').required(),
    password: yup.string().min().max().required('Required'),
  }),
};

export default schema;
