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