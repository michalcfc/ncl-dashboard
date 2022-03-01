import React, { useState, useEffect } from 'react';

import { Reservations } from '@components/Reservations';
import { reservations } from '../../../lib/data/db.json';

const ReservationsPreview: React.FC = () => {
  const [inboxData, setData] = useState(null);

  useEffect(() => {
    //   const data = fetchInboxData();
    if (inboxData) {
      setData(reservations);
    }
  }, [reservations]);

  return (
    <Reservations
      reservations={reservations.conversations}
    />
  );
};

export default ReservationsPreview;
