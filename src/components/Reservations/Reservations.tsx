import React from 'react';

import { ReservationsList } from './ReservationsList';

import {
  ReservationsProps,
} from './Reservations.d';

const Reservations: React.FC<ReservationsProps> = ({
  reservations,
}) => (
  <ReservationsList reservations={reservations} />
);

export default Reservations;
