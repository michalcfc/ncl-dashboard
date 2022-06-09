import React, { useState, useEffect } from 'react';

import { Reservations } from '@components/Reservations';
import { Heading } from '@components/ui/Heading';
import { reservations } from '../lib/data/db.json';

const InboxPage: React.FC = () => {
  const [inboxData, setData] = useState(null);

  useEffect(() => {
  //   const data = callApi('/inbox');
    if (inboxData) {
      setData(reservations);
    }
  }, [reservations]);

  return (
    <>
      <Heading
        mb={3}
        muted
        type="h4"
        text="Inbox"
      />
      <Reservations
        reservations={reservations.conversations}
      />
    </>
  );
};

export default InboxPage;
