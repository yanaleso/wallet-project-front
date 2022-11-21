import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { userRegistration } from 'redux/auth/authOperation';
import shema from 'helpers';
import {
  FormWrap,
  LogoWrap,
  StyledForm,
  Label,
  Input,
  ErrorMsg,
  SubmitBtn,
  StyledNavLink,
} from './RegistrationForm.styled';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
};

const RegisterForm = () => {
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
      <LogoWrap>LOGO</LogoWrap>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={shema.register}
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
            <Label>
              SVG
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
              />
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
