import React, { useState } from 'react';

// utils
import { COLORS } from '@utils/styles/colors';
import { FONT_WEIGHTS } from '@utils/styles/fontWeights';

// components
import { Text } from '@components/Text';
import { Box } from '@components/Box';
import { Avatar } from '@components/Avatar';
import { Button } from '@components/Button';
import { Tooltip } from '@components/Tooltip';
import { NewProposalModal } from '@components/Reservations/NewProposalModal';
import { ConversationsDetailsHeaderProps } from './ConversationsDetailsHeader.d';

const ConversationsDetailsHeader: React.FC<ConversationsDetailsHeaderProps> = () => {
  const [isNewProposalModalOpen, setNewProposalModalOpen] = useState<boolean>(false);

  return (
    <>

      <Box
        px={3}
      >
        <Box
          display="flex"
          alignItems="center"
        >
          <Avatar
            mr={2}
            size="lg"
            alt="user_name"
            uri="/img/users/user2.jpg"
          />
          <Box>
            <span>Iliash Hossain</span>
            <Text muted as="p">online</Text>
          </Box>
        </Box>

        <Box
          my={3}
        >
          <Button
            name="Zaakceptuj"
            onClick={() => console.log('click')}
          />
          <Button
            ml={3}
            name="Odrzuć"
            variant="danger"
            onClick={() => console.log('click')}
          />
          <Box
            mt={2}
          >
            <Button
              onClick={() => setNewProposalModalOpen(true)}
              name="Zaproponuj inne warunki"
              variant="link"
            />
          </Box>
        </Box>

        <Box
          my={3}
        >
          <Text
            muted
            mb={3}
          >
            Termin
            {' '}
            <strong>17 - 19 lut, 2022</strong>
            {' '}
            pozostanie zablokowany do rezerwacji do czasu akceptacji lub odrzucenia rezerwacji.
          </Text>
          <Text
            muted
          >
            Odpowiedz w ciągu
            {' '}
            <Text
              color={COLORS.red}
              fontWeight={FONT_WEIGHTS.bold}
            >
              07:19:23
            </Text>
            ,
            {' '}
            aby utrzymać
            {' '}
            <Tooltip
              text="wskaźnik odpowiedzi"
              label="Na podstawie otrzymanych przez Ciebie rezerwacji, obliczamy procent tych, na które zareagowałeś.
              Staraj się odpowiadać na każdą nową rezerwację, używając przycisku “Zaakceptuj”, “Odrzuć” lub
              “Zaproponuj inne warunki”.
               Nie pozostawiaj gości bez odpowiedzi. Pamiętaj, że sama odpowiedź w formie wiadomości tekstowej nie jest
               brana pod uwagę do wyliczania tego wskaźnika.
                Jeśli otrzymasz nową rezerwację, ale potrzebujesz dodatkowych informacji od gościa, jak najszybciej
                prześlij do niego wiadomość.
                Dzięki temu, po odpowiedzi gościa, szybciej zdecydujesz czy zaakceptować czy odrzucić rezerwację."
            />
            {' '}
            na wysokim poziomie.
          </Text>
        </Box>

      </Box>

      <NewProposalModal
        setNewProposalModalOpen={setNewProposalModalOpen}
        isNewProposalModalOpen={isNewProposalModalOpen}
      />
    </>
  );
};

export default ConversationsDetailsHeader;
