import { Formik } from 'formik';
import shema from 'helpers';
import {
  FormWrap,
  LogoWrap,
  StyledForm,
  Label,
  Input,
  SubmitBtn,
  StyledNavLink,
} from './LoginForm.styled';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
  };

  return (
    <FormWrap>
      <LogoWrap>LOGO</LogoWrap>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={shema.login}
      >
        <StyledForm>
          <Label>
            SVG
            <Input type="email" name="email" placeholder="E-mail" />
          </Label>
          <Label>
            SVG
            <Input type="password" name="password" placeholder="Password" />
          </Label>
          <SubmitBtn type="submit">log in</SubmitBtn>
        </StyledForm>
      </Formik>
      <StyledNavLink to="/register">register</StyledNavLink>
    </FormWrap>
  );
};

export default LoginForm;
