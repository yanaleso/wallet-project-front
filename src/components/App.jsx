import DiagramTab from './DiagramTab';
import DashboardPage from '../pages/DashboardPage';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import HomeTab from './HomeTab';
import ButtonAddTransactions from './ButtonAddTransactions';
import { Navigate, Route, Routes } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { useSelector } from 'react-redux';
import ModalAddTransaction from './ModalAddTransaction';

export const App = () => {
  const { isModalAddOpen } = useSelector(state => state.transactions);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route
          path="/login"
          element={
            <PublicRoute restricted navigateTo="/home">
              <LoginPage />
              <HomeTab data={[{ id: 1, date: '04.01.2022', type: '+', category: 'Other', comment: 'Gift for you', sum: '300.00', balance: '6900.00' }, { id: 2, date: '07.01.2022', type: '-', category: 'Car', comment: 'Repair', sum: '700.00', balance: '6200.00' }, { id: 3, date: '02.01.2022', type: '+', category: 'Wages', comment: 'Wages', sum: '3000.00', balance: '9200.00' }, { id: 4, date: '08.11.2022', type: '-', category: 'Other', comment: 'Sashas Birthday', sum: '1000.00', balance: '8200.00' }, { id: 5, date: '01.01.2022', type: '-', category: 'Shopping', comment: 'Silpo', sum: '250.00', balance: "7950.00" }]} />

            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute restricted navigateTo="/home">
              <RegistrationPage />
            </PublicRoute>
          }
        />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <DashboardPage>
                <HomeTab />
                <ButtonAddTransactions />
              </DashboardPage>
            </PrivateRoute>
          }
        />

        <Route
          path="/diagram"
          element={
            <PrivateRoute>
              <DashboardPage>
                <DiagramTab />
              </DashboardPage>
            </PrivateRoute>
          }
        />
      </Routes>

      {isModalAddOpen && (
        <ModalAddTransaction>
          <h1>Modal</h1>
        </ModalAddTransaction>
      )}
    </>
  );
};
