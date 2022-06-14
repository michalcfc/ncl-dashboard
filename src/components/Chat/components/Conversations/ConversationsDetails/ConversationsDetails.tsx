import React from 'react';

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from '@components/ui/Accordion';
import {
  StayDetails,
  ContactDetails,
  CostOfStayDetails,
  AdditionalPaymentsDetails, ProcessDetails,
} from './components';
import { ConversationsDetailsD } from './ConversationsDetails.d';
import { ConversationsDetailsWrapper } from './ConversationsDetails.styles';

const ConversationsDetails = ({
  conversationDetails,
}: ConversationsDetailsD) => {
  const accordionItems = [
    {
      id: 1,
      title: 'Szczczegóły pobytu',
      content: <StayDetails
        dateTo={conversationDetails?.dateTo}
        dateFrom={conversationDetails?.dateFrom}
        nbAdults={conversationDetails?.nbAdults}
        nbChildren={conversationDetails?.nbChildren}
        nbOfNights={conversationDetails?.daysBetweenTermText}
      />,
    },
    { id: 2, title: 'Koszty pobytu', content: <CostOfStayDetails /> },
    { id: 3, title: 'Możliwe dodatkowe opłaty', content: <AdditionalPaymentsDetails /> },
    { id: 4, title: 'Dane kontaktowe', content: <ContactDetails /> },
  ];

  console.log(conversationDetails);

  return (

    <ConversationsDetailsWrapper>
      <Accordion>
        {accordionItems.map((accordionItem) => (
          <AccordionItem key={accordionItem.id}>
            <AccordionButton title={accordionItem.title} />
            <AccordionPanel>
              {accordionItem.content}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <ProcessDetails />
    </ConversationsDetailsWrapper>
  );
};

export default ConversationsDetails;
