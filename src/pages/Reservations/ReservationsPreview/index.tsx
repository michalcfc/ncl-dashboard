import React from 'react';
import { useQuery } from 'react-query';

import { fetchAPI } from '@lib/api';
import { useAppDispatch } from '@store/hooks';
import { Reservations } from '@components/Reservations';
import { fetchData } from '@store/Reservations/reservetionsSlice';

const ReservationsPreview: React.FC = () => {
  const { data, isLoading } = useQuery('conversations', () => fetchAPI('inbox/9223'));

  const dispatch = useAppDispatch();
  dispatch(fetchData(data));

  if (isLoading) {
    return <>loading</>;
  }

  return (
    <Reservations
      reservations={data.conversations}
    />
  );
};

export default ReservationsPreview;
