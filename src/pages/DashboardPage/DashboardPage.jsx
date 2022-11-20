import SharedLayout from 'components/SharedLayout';
import Currency from 'components/Currency';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Media from 'react-media';
import { Suspense, Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Section, Blur, Container, Wrapper } from './Dashboard.styled';

const DashboardPage = () => {
  return (
    <SharedLayout>
      <Header />
      <main>
        <Section>
          <Media
            queries={{
              small: '(max-width: 767px)',
              medium: '(min-width: 768px) and (max-width: 1279px)',
              large: '(min-width: 1280px)',
            }}
     
            {matches => (
              <Fragment>
                {matches.small && (
                  <Container>
                    <Wrapper>
                      <Navigation />
                      <h2>Balanse 24 000</h2>
                      <Suspense fallback={null}>
                        <Outlet />
                      </Suspense>
                    </Wrapper>
                  </Container>
                )}
                {matches.medium && (
                  <Blur>
                    <Container>
                      <Wrapper>
                        <div>
                          <Navigation />
                          <h2>Balanse 24 000</h2>
                        </div>
                        <Currency />
                      </Wrapper>
                      <Suspense fallback={null}>
                        <Outlet />
                      </Suspense>
                    </Container>
                  </Blur>
                )}
                {matches.large && (
                  <Blur>
                    <Container>
                      <Wrapper>
                        <div>
                          <Navigation />
                          <h2>Balanse 24 000</h2>
                          <Currency />
                        </div>
                        <Suspense fallback={null}>
                          <Outlet />
                        </Suspense>
                      </Wrapper>
                    </Container>
                  </Blur>
                )}
              </Fragment>
            )}
          </Media>
        </Section>
      </main>
    </SharedLayout>
  );
};

export default DashboardPage;
