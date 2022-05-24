import React from 'react';

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from '@components/Accordion';
import { ConversationsDetailsHeader } from '@components/Chat/ConversationsDetails/ConversationDetailsHeader';
import { ConversationsDetailsProps } from './ConversationsDetails.d';
import { ConversationsDetailsWrapper } from './ConversationsDetails.styles';

const ConversationsDetails: React.FC<ConversationsDetailsProps> = () => (
  <ConversationsDetailsWrapper>

    <ConversationsDetailsHeader />

    <Accordion>
      <AccordionItem>
        <AccordionButton title="Szczegóły pobytu" />
        <AccordionPanel>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </div>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton title="Koszty pobytu" />
        <AccordionPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton title="Możliwe dodatkowe opłaty" />
        <AccordionPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton title="Dane kontaktowe" />
        <AccordionPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  </ConversationsDetailsWrapper>
);

export default ConversationsDetails;
