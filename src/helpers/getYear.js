import moment from 'moment';

export const getYear = date => {
  !date && Date.now();
  return moment(date).format('YYYY');
};
