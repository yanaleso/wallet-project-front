import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { userRegistration } from 'redux/auth/authOperation';
import { useState } from 'react';
import { HiEyeOff, HiEye } from 'react-icons/hi';
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
  PasswordIndicator,
} from './RegistrationForm.styled';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
};

const RegisterForm = () => {
  const [isHideFirstPass, setIsHideFirstPass] = useState(true);
  const [isHideSecondPass, setIsHideSecondPass] = useState(true);

  const dispatch = useDispatch();
  const handleSubmit = (
    { email, password, name: firstName },
    { resetForm }
  ) => {
    dispatch(userRegistration({ email, password, firstName }));
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
        validationSchema={schema.register}
      >
        {({ isValid, dirty, values }) => (
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
                type={isHideFirstPass ? 'password' : 'text'}
                name="password"
                placeholder="Password"
              />
              {isHideFirstPass ? (
                <HiEye onClick={() => setIsHideFirstPass(false)} />
              ) : (
                <HiEyeOff onClick={() => setIsHideFirstPass(true)} />
              )}
              {values.password && <PasswordIndicator lenth={values.password} />}
              <ErrorMessage
                name="password"
                render={msg => <ErrorMsg>{msg}</ErrorMsg>}
              />
            </Label>
            <Label>
              SVG
              <Input
                type={isHideSecondPass ? 'password' : 'text'}
                name="confirmPassword"
                placeholder="Confirm password"
              />
              {isHideSecondPass ? (
                <HiEye onClick={() => setIsHideSecondPass(false)} />
              ) : (
                <HiEyeOff onClick={() => setIsHideSecondPass(true)} />
              )}
              {values.confirmPassword && (
                <PasswordIndicator lenth={values.confirmPassword} />
              )}
              <ErrorMessage
                name="confirmPassword"
                render={msg => <ErrorMsg>{msg}</ErrorMsg>}
              />
            </Label>
            <Label>
              SVG
              <Input type="text" name="name" placeholder="First name" />
              <ErrorMessage
                name="name"
                render={msg => <ErrorMsg>{msg}</ErrorMsg>}
              />
            </Label>
            <SubmitBtn type="submit" disabled={!(isValid && dirty)}>
              register
            </SubmitBtn>
          </StyledForm>
        )}
      </Formik>
      <StyledNavLink to="/login">log in</StyledNavLink>
    </FormWrap>
  );
};

export default RegisterForm;
