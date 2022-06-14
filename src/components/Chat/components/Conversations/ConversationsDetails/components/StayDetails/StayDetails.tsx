import React from 'react';
import { formatTerm } from '@utils/date';
import {
  faBed, faCalendarAlt, faUsers, faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import { SPACING } from '@utils/styles/spacing';
import { FONT_SIZES } from '@utils/styles/fontSizes';

// components
import { Text } from '@components/ui/Text';
import { FlexBox } from '@components/ui/FlexBox';
import {
  StayDetailsD,
} from './StayDetails.d';

const StayDetails = ({
  dateTo,
  dateFrom,
  nbAdults,
  nbChildren,
  nbOfNights,
}: StayDetailsD) => {
  const stayDetails = [
    {
      id: 1, icon: faCalendarAlt, label: 'Termin', text: `${formatTerm(dateFrom, dateTo)} (${nbOfNights})`,
    },
    {
      id: 2,
      icon: faUsers,
      label: 'Liczba gości',
      text: `${nbAdults} dorosłych ${nbChildren
        ? `${nbChildren} dzieci`
        : ''
      }`,
    },
    {
      id: 3, icon: faBed, label: 'Pokoje', text: nbChildren,
    },
    {
      id: 4, icon: faUtensils, label: 'Wyżywienie', text: nbChildren,
    },
  ];

  return (
    <div>
      {stayDetails.map((detail) => (
        <FlexBox key={detail.id} mb={SPACING.sm} alignItems="center">
          <FlexBox flexDirection="column">
            <Text muted fontSize={FONT_SIZES.xs} text={`${detail.label}:`} />
            <Text text={detail.text} />
          </FlexBox>
        </FlexBox>
      ))}
    </div>

  );
};

export default StayDetails;
