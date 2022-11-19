import moment from 'moment';

export const getMonth = date => {
  !date && Date.now();
  return moment(date).format('MMMM');
};
