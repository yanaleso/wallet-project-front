import { useRef } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useMedia } from 'react-use';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { refreshUser } from 'redux/auth/authOperation';
import { getNextPage } from 'redux/transactions/transactionsSlice';
import { getAllTransactions } from 'redux/transactions/transactionOperations';

import Chart from './Chart';
import HomeTab from './HomeTab';
import Currency from './Currency';
import DiagramTab from './DiagramTab';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import ModalAddTransaction from './ModalAddTransaction';
import ButtonAddTransactions from './ButtonAddTransactions';
import FormTransaction from './FormTransaction/FormTransaction';
import { nightTheme, dayTheme } from '../theme';

import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import NotFoundPage from 'pages/NotFoundPage';

export const App = () => {
  const isMobie = useMedia('(max-width: 767px)');

  const dispatch = useDispatch();
  const { isDarkTheme } = useSelector(store => store.theme);
  const { isRefreshingUser, isLoggedIn } = useSelector(state => state.auth);
  const { 
    pageNum, 
    transactions, 
    isModalAddOpen,
    hasNextPage } = useSelector(state => state.transactions);

  const observer = useRef(null);

  const lastElement = useCallback(item => {

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasNextPage) {
        observer.current.unobserve(entries[0].target);
        dispatch(getNextPage());
      }
      }, { rootMargin: '5px', threshold: 1});

      if (item) observer.current.observe(item);
    },
    [dispatch, hasNextPage]
  );

  useEffect(() => {
    if (isLoggedIn) dispatch(getAllTransactions(pageNum));
  }, [dispatch, isLoggedIn, pageNum]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (transactions.length < 0) return null;

  return isRefreshingUser ? (
    <div>LOADER</div>
  ) : (
    <ThemeProvider theme={isDarkTheme ? dayTheme : nightTheme}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route
          path="/login"
          element={
            <PublicRoute restricted navigateTo="/home">
              <LoginPage />
            </PublicRoute>}
        />
        <Route
          path="/register"
          element={
            <PublicRoute restricted navigateTo="/home">
              <LoginPage />
            </PublicRoute>}
        />

        <Route path="/" element={<DashboardPage />}>
          <Route
            path="home"
            element={
              <PrivateRoute>
                <HomeTab data={transactions} ref={lastElement} />
                <ButtonAddTransactions />
              </PrivateRoute>}
          />

          <Route
            path="statistic"
            element={
              <PrivateRoute>
                <Chart />
                <DiagramTab />
              </PrivateRoute>}
          />

          <Route
            path="currency"
            element={
              <PrivateRoute>
                {isMobie 
                ? <Currency />
                : <div>
                    <HomeTab />
                    <ButtonAddTransactions />
                  </div>}
              </PrivateRoute>}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {isModalAddOpen && <ModalAddTransaction><FormTransaction /></ModalAddTransaction>}
      <ToastContainer autoClose={2500} theme="colored"/>
    </ThemeProvider>
  );
};
