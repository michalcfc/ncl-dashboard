import moment from 'moment';
// import { ReservationStatus } from '../../types/reservations';

export const formatStayTerm = (dateFrom, dateTo) => {
  const from = moment(dateFrom);
  const to = moment(dateTo);
  const months = moment.monthsShort();
  return `${from.date()} - ${to.date()}, ${months[to.month()]} ${from.year()}`;
};

export const createdAt = (date) => moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD');

export const reservationVariantBadge = (status: string) => {
  switch (status) {
    case 'new_inquiry':
      return 'warning';
    case 'rejected_by_user':
      return 'danger';
    case 'rejected_by_user_after_paid':
      return 'danger';
    case 'reject_by_host':
      return 'danger';
    case 'wait_for_payment':
      return 'warning';
    case 'new':
      return 'warning';
    case 'expired':
      return 'danger';
    case 'rejected':
      return 'danger';
    case 'accepted':
      return 'success';
    case 'paid':
      return 'success';
    default:
      return 'success';
  }
};
