import React from 'react';

import { Heading } from '@components/ui/Heading';
import { useQuery } from 'react-query';
import { fetchAPI } from '@lib/api';

const ChatPage: React.FC = () => {
  const { data } = useQuery('conversations', () => fetchAPI('inbox/539602/preview'));

  console.log(data);

  return (

    <>
      <Heading type="h4" mb={3}>
        Chat page
      </Heading>
      {/* <Chat */}
      {/*  conversations={reservations.conversations} */}
      {/* /> */}
    </>
  );
};

export default ChatPage;
