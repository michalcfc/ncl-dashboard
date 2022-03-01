import React from 'react';
import { Chat } from '@components/Chat';
import { reservations } from '../../../lib/data/db.json';

const ReservationsDetails: React.FC = () => {
  console.log(reservations);
  return (

    <Chat
      conversations={reservations.conversations}
    />
  );
};

export default ReservationsDetails;
