import React from 'react';

import { ReservationItem } from '@components/Reservations/ReservationItem';
import {
  ReservationsProps,
} from '../Reservations.d';

const ReservationsList: React.FC<ReservationsProps> = ({
  reservations,
}) => (
  <>
    {reservations.map(({
      id,
      host,
      guest,
      context,
      statusName,
      firstMessageTime,
    }) => (
      <ReservationItem
        id={id}
        key={id}
        host={host}
        guest={guest}
        dateTo={context.dateTo}
        status={context.status}
        statusName={statusName}
        dateFrom={context.dateFrom}
        firstMessageTime={firstMessageTime}
      />
    ))}
  </>
);

export default ReservationsList;
