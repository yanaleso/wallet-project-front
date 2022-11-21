import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import shema from 'helpers';
import { StyledForm } from './RegistrationForm.styled';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
};

const RegisterForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
  };

  return (
    <div>
      <h1>LOGO</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={shema.register}
      >
        <Form>
          <label>
            Em:
            <Field type="email" name="email" placeholder="E-mail" />
          </label>
          <label>
            Pas:
            <Field type="password" name="password" placeholder="Password" />
          </label>
          <label>
            CP:
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
            />
          </label>
          <label>
            Ne:
            <Field type="text" name="name" placeholder="First name" />
          </label>
          <button type="submit">register</button>
        </Form>
      </Formik>
      <Link to="/login">log in</Link>
    </div>
  );
};

export default RegisterForm;
