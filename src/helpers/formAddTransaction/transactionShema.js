import * as Yup from 'yup';

export const transactionShema = Yup.object().shape({
  category: Yup.string(),
  amount: Yup.number()
    .typeError('You need to enter a number')
    .positive('Only positive value')
    .required('This field is required'),

  comment: Yup.string()
    .min(2, 'Must be longer than 2 latters')
    .max(20, 'Must be shorter than 20 latters')
    .required('This field is required'),
});
