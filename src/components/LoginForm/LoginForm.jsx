import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { HiEyeOff, HiEye } from 'react-icons/hi';
import { userLogin } from 'redux/auth/authOperation';
import schema from 'helpers';
import Logo from 'components/Logo';
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
  const [isHidePassword, setIsHidePassword] = useState(true);

  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(userLogin(values));
    resetForm();
  };

  return (
    <FormWrap>
      <LogoWrap>
        <Logo />
      </LogoWrap>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema.login}
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
              <Input
                type={isHidePassword ? 'password' : 'text'}
                name="password"
                placeholder="Password"
              />
              {isHidePassword ? (
                <HiEye onClick={() => setIsHidePassword(false)} />
              ) : (
                <HiEyeOff onClick={() => setIsHidePassword(true)} />
              )}
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
