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
import Media from 'react-media';
import { Fragment } from 'react';
import SharedLayout from 'components/SharedLayout';

const LoginPage = () => {
  return (
    <SharedLayout>
      <Section>
        <Media
          queries={{
            small: '(max-width: 767px)',
            medium: '(min-width: 768px) and (max-width: 1279px)',
            large: '(min-width: 1280px)',
          }}
        >
          {matches => (
            <Fragment>
              {matches.small && (
                <Container>
                  <Wrapper>
                    <LoginForm />
                  </Wrapper>
                </Container>
              )}
              {matches.medium && (
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
              )}
              {matches.large && (
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
              )}
            </Fragment>
          )}
        </Media>
      </Section>
    </SharedLayout>
  );
};

export default LoginPage;
