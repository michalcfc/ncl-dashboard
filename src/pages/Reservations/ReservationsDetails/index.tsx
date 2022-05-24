import React from 'react';
import { Chat } from '@components/Chat';
import { reservations } from '../../../lib/data/db.json';

const ReservationsDetails: React.FC = () => (
  <Chat
    conversations={reservations.conversations}
  />
);

export default ReservationsDetails;
