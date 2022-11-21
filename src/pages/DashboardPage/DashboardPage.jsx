import SharedLayout from 'components/SharedLayout';
import Currency from 'components/Currency';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Balance from 'components/Balance';
import Media from 'react-media';
import ModalLogout from 'components/ModalLogout';
import { Suspense, Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Section,
  Blur,
  Container,
  Wrapper,
  TabletWrapper,
  DesktopWrapper,
  Vector,
} from './Dashboard.styled';
import { useState } from 'react';

const DashboardPage = () => {
  const [openExitModal, setIsOpenExitModal] = useState(false);

  return (
    <SharedLayout>
      <Header setIsOpenExitModal={() => setIsOpenExitModal(true)} />
      <main>
        <Section>
          <ModalLogout
            openExitModal={openExitModal}
            setIsOpenExitModal={() => setIsOpenExitModal(false)}
          />
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
                      <Navigation />
                      <Balance />
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
                        <TabletWrapper>
                          <Navigation />
                          <Balance />
                        </TabletWrapper>
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
                        <DesktopWrapper>
                          <div>
                            <Navigation />
                            <Balance />
                            <Currency />
                          </div>
                          <Vector />
                        </DesktopWrapper>
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
