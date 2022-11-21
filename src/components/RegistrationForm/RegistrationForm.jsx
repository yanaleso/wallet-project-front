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
} from './RegistrationForm.styled';

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
    <FormWrap>
      <LogoWrap>LOGO</LogoWrap>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={shema.register}
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
          <Label>
            SVG
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
            />
          </Label>
          <Label>
            SVG
            <Input type="text" name="name" placeholder="First name" />
          </Label>
          <SubmitBtn type="submit">register</SubmitBtn>
        </StyledForm>
      </Formik>
      <StyledNavLink to="/login">log in</StyledNavLink>
    </FormWrap>
  );
};

export default RegisterForm;
