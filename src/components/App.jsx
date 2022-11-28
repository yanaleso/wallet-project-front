import { useRef } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useMedia } from 'react-use';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refreshUser } from 'redux/auth/authOperation';
import { getNextPage } from 'redux/transactions/transactionsSlice';
import { getAllTransactions } from 'redux/transactions/transactionOperations';

import HomeTab from './HomeTab';
import Currency from './Currency';
import DiagramTab from './DiagramTab';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import ModalAddTransaction from './ModalAddTransaction';
import ButtonAddTransactions from './ButtonAddTransactions';
import FormTransaction from './FormTransaction/FormTransaction';
import { nightTheme, dayTheme } from '../theme';
import Spinner from './Spinner';

import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import NotFoundPage from 'pages/NotFoundPage';

export const App = () => {
  const isMobie = useMedia('(max-width: 767px)');

  const dispatch = useDispatch();
  const isDarkTheme = useSelector(store => store.theme.isNightTheme);
  const { isModalAddOpen } = useSelector(state => state.transactions);
  const { pageNum } = useSelector(state => state.transactions);
  const { transactions } = useSelector(state => state.transactions);
  const { hasNextPage } = useSelector(state => state.transactions);
  const { isLoggedIn, isError, isRefreshingUser } = useSelector(
    state => state.auth
  );

  const observer = useRef(null);

  const lastElement = useCallback(
    item => {
      const options = {
        rootMargin: '5px',
        threshold: 1,
      };

      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasNextPage) {
          observer.current.unobserve(entries[0].target);
          dispatch(getNextPage());
        }
      }, options);

      if (item) {
        observer.current.observe(item);
      }
    },
    [dispatch, hasNextPage]
  );

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getAllTransactions(pageNum));
    }
  }, [dispatch, isLoggedIn, pageNum]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (transactions.length < 0) {
    return null;
  }

  if (isError) {
    Notify.failure(isError);
  }

  return isRefreshingUser ? (
    <Spinner />
  ) : (
    <ThemeProvider theme={isDarkTheme ? dayTheme : nightTheme}>
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
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route path="/" element={<DashboardPage />}>
          <Route
            path="home"
            element={
              <PrivateRoute>
                <HomeTab data={transactions} ref={lastElement} />
                <ButtonAddTransactions />
              </PrivateRoute>
            }
          />
          <Route
            path="statistic"
            element={
              <PrivateRoute>
                <DiagramTab />
              </PrivateRoute>
            }
          />

          <Route
            path="currency"
            element={
              <PrivateRoute>
                {isMobie ? (
                  <Currency />
                ) : (
                  <div>
                    <HomeTab
                      data={[
                        {
                          id: 1,
                          date: '04.01.2022',
                          type: '+',
                          category: 'Other',
                          comment: 'Gift for you',
                          sum: '300.00',
                          balance: '6900.00',
                        },
                        {
                          id: 2,
                          date: '07.01.2022',
                          type: '-',
                          category: 'Car',
                          comment: 'Repair',
                          sum: '700.00',
                          balance: '6200.00',
                        },
                        {
                          id: 3,
                          date: '02.01.2022',
                          type: '+',
                          category: 'Wages',
                          comment: 'Wages',
                          sum: '3000.00',
                          balance: '9200.00',
                        },
                        {
                          id: 4,
                          date: '08.11.2022',
                          type: '-',
                          category: 'Other',
                          comment: 'Sashas Birthday',
                          sum: '1000.00',
                          balance: '8200.00',
                        },
                        {
                          id: 5,
                          date: '01.01.2022',
                          type: '-',
                          category: 'Shopping',
                          comment: 'Silpo',
                          sum: '250.00',
                          balance: '7950.00',
                        },
                      ]}
                    />
                    <ButtonAddTransactions />
                  </div>
                )}
              </PrivateRoute>
            }
          ></Route>
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>

      {isModalAddOpen && (
        <ModalAddTransaction>
          <FormTransaction />
        </ModalAddTransaction>
      )}
    </ThemeProvider>
  );
};
