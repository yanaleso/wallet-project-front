import LoginForm from 'components/LoginForm';
import {
  Section,
  Container,
  Frame,
  ImageContainer,
  FormContainer,
  Wrapper,
  Blur,
  Text,
} from './LoginPage.styled';
import frame from '../../images/frame.png';
import frameBig from '../../images/frameBig.png';

import { useMedia } from 'react-use';
import SharedLayout from 'components/SharedLayout';

const LoginPage = () => {
  const isWideMobie = useMedia('(max-width: 767px)');
  const isWideTablet = useMedia('(min-width: 768px) and (max-width: 1279px)');
  const isWideСomputer = useMedia('(min-width: 1280px)');

  return (
    <SharedLayout>
      <Section>
        {isWideMobie ? (
          <Container>
            <Wrapper>
              <LoginForm />
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
                <LoginForm />
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
                  <LoginForm />
                </FormContainer>
              </Wrapper>
            </Container>
          </Blur>
        ) : null}
      </Section>
    </SharedLayout>
  );
};

export default LoginPage;
