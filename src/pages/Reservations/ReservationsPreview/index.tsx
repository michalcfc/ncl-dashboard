import React, { useState, useEffect } from 'react';

import { Reservations } from '@components/Reservations';
import { fetchAPI } from '@lib/api';
// import { reservations } from '../../../lib/data/db.json';

const ReservationsPreview: React.FC = () => {
  const [reservations, setReservations] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchAPI('inbox/9223');
      setReservations(response);
    };

    fetchData();
  }, []);

  if (!reservations) {
    return <>loading</>;
  }

  return (
    <Reservations
      reservations={reservations.conversations}
    />
  );
};

export default ReservationsPreview;
