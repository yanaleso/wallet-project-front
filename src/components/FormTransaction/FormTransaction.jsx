import moment from 'moment';
import Select from 'react-select';
import { Formik } from 'formik';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

import { useDispatch } from 'react-redux';
import { ReactComponent as Plus } from '../../images/plus.svg';
import { ReactComponent as Minus } from '../../images/minus.svg';
import { ReactComponent as Calendar } from '../../images/calender.svg';

import { options } from 'helpers/formAddTransaction/options';
import { getYear } from 'helpers/formAddTransaction/getYear';
import { getMonth } from 'helpers/formAddTransaction/getMonth';
import {
  addTransaction,
  toggleModalAdd,
} from 'redux/transactions/transactionsSlice';

import {
  ButtonAdd,
  ButtonCancel,
  CheckBox,
  CheckBoxLabel,
  CheckBoxWrapper,
  CommentWrapper,
  DatetimeInput,
  DateWrapper,
  ErrorAmount,
  ErrorComment,
  FormWrapper,
  IconWrapper,
  ImputsWrapper,
  InputComment,
  InputSum,
  LabelComment,
  LabelSum,
  Switch,
  TextExpense,
  TextIncome,
  Title,
  TransactionForm,
} from './FormTransaction.styled';
import { selectStyles } from 'helpers/formAddTransaction/selectStyles';
import { transactionShema } from 'helpers/formAddTransaction/transactionShema';
import { checksFutureDate } from 'helpers/formAddTransaction/checksFutureDate';

const FormTransaction = () => {
  const dispatch = useDispatch();

  const initialValues = {
    comment: '',
    amount: '',
    category: '',
    typeOperation: false,
    date: moment().format('YYYY-MM-DD'),
  };

  const currentDate = moment().format('DD.MM.YYYY');

  const onChangeType = value => {
    switch (value) {
      case true:
        return 'income';

      case false:
        return 'expense';

      default:
        console.log('No such operation');
    }
  };

  const onCancelClick = () => {
    dispatch(toggleModalAdd(false));
  };

  return (
    <FormWrapper>
      <Title>Add transaction</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          const typeOperation = onChangeType(values.typeOperation);

          const month = getMonth(values.date);
          const year = getYear(values.date);

          const transaction = {
            ...values,
            typeOperation,
            month,
            year,
          };

          dispatch(addTransaction(transaction));
          // console.log('onFormAddSubmit ~ transaction', transaction);
          dispatch(toggleModalAdd(false));
        }}
        validationSchema={transactionShema}
      >
        {({ handleSubmit, handleChange, setFieldValue, values }) => (
          <TransactionForm onSubmit={handleSubmit}>
            <ImputsWrapper>
              <CheckBoxWrapper>
                <TextIncome isChecked={values.typeOperation}>Income</TextIncome>

                <CheckBoxLabel>
                  <CheckBox
                    type="checkbox"
                    name="typeOperation"
                    role="switch"
                    checked={values.typeOperation}
                    onChange={handleChange}
                  />

                  <Switch isChecked={values.typeOperation}>
                    {values.typeOperation ? <Plus /> : <Minus />}
                  </Switch>
                </CheckBoxLabel>

                <TextExpense isChecked={values.typeOperation}>
                  Expense
                </TextExpense>
              </CheckBoxWrapper>

              {!values.typeOperation && (
                <Select
                  name="category"
                  options={options}
                  isClearable
                  isSearchable
                  placeholder="Select a category"
                  onChange={data => setFieldValue('category', data?.label)}
                  styles={selectStyles}
                />
              )}

              <DateWrapper>
                <LabelSum>
                  <InputSum
                    type="text"
                    name="amount"
                    placeholder="0.00"
                    onChange={handleChange}
                  />
                </LabelSum>
                <ErrorAmount component="div" name="amount" />

                <IconWrapper>
                  <Datetime
                    renderInput={props => <DatetimeInput {...props} />}
                    name="date"
                    closeOnSelect
                    initialValue={currentDate}
                    dateFormat="DD.MM.YYYY"
                    timeFormat={false}
                    onChange={e =>
                      setFieldValue('date', e.format('YYYY-MM-DD'))
                    }
                    isValidDate={checksFutureDate}
                    inputProps={{
                      onKeyDown: e => {
                        e.preventDefault();
                      },
                    }}
                  />

                  <Calendar />
                </IconWrapper>
              </DateWrapper>

              <CommentWrapper>
                <LabelComment>
                  <InputComment
                    type="text"
                    name="comment"
                    placeholder="Comment"
                    onChange={handleChange}
                  />
                </LabelComment>
                <ErrorComment component="div" name="comment" />
              </CommentWrapper>
            </ImputsWrapper>

            <div style={{ width: '300px', margin: '0 auto' }}>
              <ButtonAdd type="submit">Add</ButtonAdd>

              <ButtonCancel type="button" onClick={onCancelClick}>
                Cancel
              </ButtonCancel>
            </div>
          </TransactionForm>
        )}
      </Formik>
    </FormWrapper>
  );
};

export default FormTransaction;
