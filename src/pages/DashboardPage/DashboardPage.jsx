import SharedLayout from 'components/SharedLayout';
import Currency from 'components/Currency';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <SharedLayout>
      <Header />
      <main
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-evenly',
          background: '#E7EAF2',
        }}
      >
        <div>
          <Navigation />
          <h2>Balanse 24 000</h2>
          <Currency />
        </div>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </SharedLayout>
  );
};

export default DashboardPage;
