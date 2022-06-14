import moment from 'moment';

export const formatTerm = (dateFrom, dateTo) => {
  const from = moment(dateFrom);
  const to = moment(dateTo);
  let equalYears = false;
  let equalMonth = false;
  if (from.get('y') === to.get('y')) {
    equalYears = true;
  }
  if (from.get('M') === to.get('M')) {
    equalMonth = true;
  }
  const months = moment.monthsShort();
  if (equalYears && equalMonth) {
    return `${from.get('D')} - ${to.get('D')} ${months[from.get('M')]}, ${from.get('year')}`;
  } if (equalYears) {
    return `${from.get('D')} ${months[from.get('M')]} - ${to.get('D')} ${months[to.get('M')]}, ${from.get('y')}`;
  }
  return `${from.get('D')} ${months[from.get('M')]}, ${from.get('y')} - ${to.get('D')} ${months[to.get('M')]}, ${to.get('y')}`;
};

export const calculateNbDays = (dateFrom, dateTo) => {
  const from = moment(dateFrom);
  const to = moment(dateTo);
  return to.diff(from, 'days');
};

export const getDateRangeDaysArray = (start, end, weekDays = null) => {
  const arr = [];
  let st = moment(start);

  while (st <= end) {
    if (!weekDays || (Array.isArray(weekDays) && weekDays.indexOf(st.day())) !== -1) {
      arr.push(st.clone());
    }
    st = st.add(1, 'day');
  }
  const formattedArr = arr.map((el) => el.format('YYYY-MM-DD'));
  return formattedArr;
};
