import React, { useEffect } from 'react';
import { Chat } from '@components/Chat';
import { useQuery } from 'react-query';
import { fetchAPI } from '@lib/api';
import { useAppDispatch } from '@store/hooks';
import { fetchData } from '@store/Reservations/reservetionsSlice';
import { reservations } from '../../../lib/data/db.json';

const ReservationsDetails: React.FC = () => {
  const { data, isLoading } = useQuery('conversations', () => fetchAPI('inbox/9223'));

  const dispatch = useAppDispatch();
  dispatch(fetchData(data));
  useEffect(() => {
  }, [data]);

  if (isLoading) {
    return <>loading</>;
  }

  return (
    <Chat
      conversations={reservations.conversations}
    />
  );
};

export default ReservationsDetails;
