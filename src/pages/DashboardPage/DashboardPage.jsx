import SharedLayout from 'components/SharedLayout';
import Currency from 'components/Currency';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Balance from 'components/Balance';
import { useMedia } from 'react-use';
import ModalLogout from 'components/ModalLogout';
import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Section,
  Blur,
  Container,
  Wrapper,
  TabletWrapper,
  DesktopWrapper,
  Separator,
  SideBar,
} from './Dashboard.styled';
import { useState } from 'react';
import { getStatistic } from '../../redux/statistic/statisticOperation';

const DashboardPage = () => {
  const isMobie = useMedia('(max-width: 767px)');
  const isTablet = useMedia('(min-width: 768px) and (max-width: 1279px)');
  const isDesktop = useMedia('(min-width: 1280px)');

  const [openExitModal, setIsOpenExitModal] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStatistic());
  }, [dispatch]);

  return (
    <SharedLayout>
      <Header setIsOpenExitModal={() => setIsOpenExitModal(true)} />
      <main>
        <Section>
          <ModalLogout
            openExitModal={openExitModal}
            setIsOpenExitModal={() => setIsOpenExitModal(false)}
          />
          {isMobie ? (
            <Blur>
              <Container>
                <Wrapper>
                  <Navigation />
                  <Balance />
                  <Suspense fallback={null}>
                    <Outlet />
                  </Suspense>
                </Wrapper>
              </Container>
            </Blur>
          ) : null}
          {isTablet ? (
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
          ) : null}
          {isDesktop ? (
            <Blur>
              <Container>
                <Wrapper>
                  <SideBar>
                    <Navigation />
                    <Balance />
                    <Currency />
                  </SideBar>
                  <Separator />
                  <DesktopWrapper>
                    <Suspense fallback={null}>
                      <Outlet />
                    </Suspense>
                  </DesktopWrapper>
                </Wrapper>
              </Container>
            </Blur>
          ) : null}
        </Section>
      </main>
    </SharedLayout>
  );
};

export default DashboardPage;
