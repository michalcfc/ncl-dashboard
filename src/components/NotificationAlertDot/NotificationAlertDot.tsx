import React from 'react';

import { Box } from '@components/ui/Box';
import { COLORS } from '@utils/styles/colors';
import { NotificationAlertDotProps } from './NotificationAlertDot.d';

const NotificationAlertDot: React.FC<NotificationAlertDotProps> = ({
  isShow = true,
  isAbsolute,
  variant,
}) => {
  const renderBackgroundColor = () => {
    switch (variant) {
      case 'danger':
        return COLORS.red;
      case 'warning':
        return COLORS.orange;
      case 'info':
        return COLORS.blue;
      case 'success':
        return COLORS.brand;
      default:
        return COLORS.brand;
    }
  };

  const backgroundColor = renderBackgroundColor();

  return (
    <div>
      {isShow && (
        <Box
          background={backgroundColor}
          top="-3px"
          border={`2px solid ${COLORS.white}`}
          right="-2px"
          width=".625rem"
          height=".625rem"
          borderRadius="50%"
          position={isAbsolute ? 'absolute' : null}
        />
      )}
    </div>
  );
};

export default NotificationAlertDot;
