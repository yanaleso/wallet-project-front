import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import shema from 'helpers';
import { userLogin } from 'redux/auth/authOperation';
import {
  FormWrap,
  LogoWrap,
  StyledForm,
  Label,
  Input,
  ErrorMsg,
  SubmitBtn,
  StyledNavLink,
} from './LoginForm.styled';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(userLogin(values));
    // resetForm();
  };

  return (
    <FormWrap>
      <LogoWrap>LOGO</LogoWrap>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={shema.login}
      >
        {({ isValid, dirty }) => (
          <StyledForm autoComplete="off">
            <Label>
              SVG
              <Input type="email" name="email" placeholder="E-mail" />
              <ErrorMessage
                name="email"
                render={msg => <ErrorMsg>{msg}</ErrorMsg>}
              />
            </Label>
            <Label>
              SVG
              <Input type="password" name="password" placeholder="Password" />
              <ErrorMessage
                name="password"
                render={msg => <ErrorMsg>{msg}</ErrorMsg>}
              />
            </Label>
            <SubmitBtn type="submit" disabled={!(isValid && dirty)}>
              log in
            </SubmitBtn>
          </StyledForm>
        )}
      </Formik>
      <StyledNavLink to="/register">register</StyledNavLink>
    </FormWrap>
  );
};

export default LoginForm;
