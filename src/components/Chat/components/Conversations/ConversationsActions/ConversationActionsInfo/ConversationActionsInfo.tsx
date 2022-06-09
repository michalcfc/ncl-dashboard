import React from 'react';

// utils
import { COLORS } from '@utils/styles/colors';
import { FONT_WEIGHTS } from '@utils/styles/fontWeights';

// components
import { Box } from '@components/ui/Box';
import { Text } from '@components/ui/Text';
import { Tooltip } from '@components/ui/Tooltip';
import { ConversationActionsInfoD } from './ConversationActionsInfo.d';

// components

const ConversationActionsInfo: React.FC<ConversationActionsInfoD> = () => (

  <Box
    my={3}
  >
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
);

export default ConversationActionsInfo;
