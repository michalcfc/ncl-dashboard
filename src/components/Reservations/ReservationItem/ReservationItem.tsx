import React from 'react';

// helpers
import {
  createdAt,
  formatStayTerm,
  reservationVariantBadge,
} from '@components/Reservations/helpers';

// utils
import { SPACING } from '@utils/styles/spacing';
import { BORDER_RADIUS } from '@utils/styles/borderRadius';

// components
import { Box } from '@components/ui/Box';
import { Link } from '@components/ui/Link';
import { Image } from '@components/ui/Image';
import { Text } from '@components/ui/Text';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { COLORS } from '@utils/styles/colors';
import { FONT_SIZES } from '@utils/styles/fontSizes';
import { ReservationItemProps } from './ReservationItem.d';

const ReservationItem: React.FC<ReservationItemProps> = ({
  id,
  host,
  guest,
  dateFrom,
  dateTo,
  status,
  statusName,
  firstMessageTime,
}) => (
  <Link
    key={id}
    href={`/reservations/${id}`}
  >
    <Box
      hoverEffect
      p={SPACING.md}
      my={SPACING.md}
      background="white"
      display="flex"
      alignItems="center"
      borderRadius={BORDER_RADIUS.default}
    >
      <Box
        flex={1}
        display="flex"
        alignItems="center"
      >
        <Image
          width="3rem"
          height="3rem"
          alt={host.name}
          borderRadius={BORDER_RADIUS.default}
          src="/img/properties/apart.jpg"
        />
        <Box
          ml={3}
          display="flex"
          flexDirection="column"
        >
          <Text
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            text={host.name}
          />
          <Text
            muted
            text={`#${id}`}
            fontSize={FONT_SIZES.sm}
          />
        </Box>
      </Box>
      <Box flex={1}>
        {createdAt(firstMessageTime)}
      </Box>
      <Box flex={1}>
        {guest.name}
      </Box>
      <Box flex={1}>
        {formatStayTerm(
          dateFrom,
          dateTo,
        )}
      </Box>
      <Box flex={1}>
        <Text
          ml={3}
          overflow="hidden"
          text={statusName}
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          color={COLORS[reservationVariantBadge(status)]}
        />
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
      >
        <FontAwesomeIcon
          size="lg"
          color={COLORS.gray}
          icon={faChevronRight}
        />
      </Box>
    </Box>
  </Link>
);

export default ReservationItem;
