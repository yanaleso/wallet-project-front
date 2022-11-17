import { Link } from 'react-router-dom';
import { StyledForm } from './RegistrationForm.styled';

const RegisterForm = () => {
  return (
    <div>
      <StyledForm>
        <input type="emuil" />
        <input type="password" />
        <input type="password" />
        <input type="text" />
        <button type="submit">Register</button>
        <Link to="/login">Login</Link>
      </StyledForm>
    </div>
  );
};

export default RegisterForm;
