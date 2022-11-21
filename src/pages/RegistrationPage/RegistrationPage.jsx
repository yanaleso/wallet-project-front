import {
  Section,
  Container,
  Frame,
  ImageContainer,
  FormContainer,
  Wrapper,
  Blur,
  Text,
} from '../LoginPage/LoginPage.styled';
import RegistrationForm from 'components/RegistrationForm';
import SharedLayout from 'components/SharedLayout';
import { useMedia } from 'react-use';
import frame from '../../images/frame.png';
import frameBig from '../../images/frameBig.png';

const RegistrationPage = () => {
  const isWideMobie = useMedia('(max-width: 767px)');
  const isWideTablet = useMedia('(min-width: 768px) and (max-width: 1279px)');
  const isWideСomputer = useMedia('(min-width: 1280px)');

  return (
    <SharedLayout>
      <Section>
        {isWideMobie ? (
          <Container>
            <Wrapper>
              <RegistrationForm />
            </Wrapper>
          </Container>
        ) : null}
        {isWideTablet ? (
          <Container>
            <Wrapper>
              <ImageContainer>
                <Frame src={frame} alt="customer orders goods" />
                <Text>Finance App</Text>
              </ImageContainer>
              <FormContainer>
                <RegistrationForm />
              </FormContainer>
            </Wrapper>
          </Container>
        ) : null}
        {isWideСomputer ? (
          <Blur>
            <Container>
              <Wrapper>
                <ImageContainer>
                  <Frame src={frameBig} alt="customer orders goods" />
                  <Text>Finance App</Text>
                </ImageContainer>

                <FormContainer>
                  <RegistrationForm />
                </FormContainer>
              </Wrapper>
            </Container>
          </Blur>
        ) : null}
      </Section>
    </SharedLayout>
  );
};

export default RegistrationPage;
