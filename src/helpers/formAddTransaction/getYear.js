import moment from 'moment';

export const getYear = date => {
  return moment(date).format('YYYY');
};
