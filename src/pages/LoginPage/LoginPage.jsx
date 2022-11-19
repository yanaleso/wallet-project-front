import LoginForm from 'components/LoginForm';
import {
  Section,
  Container,
  Frame,
  RedСircle,
  RedСircleText,
  VioletСircle,
  ImageContainer,
  FormContainer,
  VioletСircleText,
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
                  <LoginForm />
                </Container>
              )}
              {matches.medium && (
                <Container>
                  <Frame src={frame} alt="customer orders goods" />
                  <LoginForm />
                  <RedСircle>
                    <RedСircleText>Finance App</RedСircleText>
                  </RedСircle>
                  <VioletСircle></VioletСircle>
                </Container>
              )}
              {matches.large && (
                <>
                  <ImageContainer>
                    <Frame src={frameBig} alt="customer orders goods" />
                    <VioletСircle>
                      <VioletСircleText>Finance App</VioletСircleText>
                    </VioletСircle>
                  </ImageContainer>
                  <FormContainer>
                    <LoginForm />
                    <RedСircle></RedСircle>
                  </FormContainer>
                </>
              )}
            </Fragment>
          )}
        </Media>
      </Section>
    </SharedLayout>
  );
};

export default LoginPage;