import React from 'react';
import {
  AlertWrapper,
  AlertContent,
} from './Alert.styles';
import { AlertProps } from './Alert.d';

const Alert: React.FC<AlertProps> = ({
  text,
  variant,
  isShow = true,
}) => (
  <div>
    {isShow
          && (
          <AlertWrapper
            variant={variant}
          >
            <AlertContent>
              {text}
            </AlertContent>
          </AlertWrapper>
          )}
  </div>
);

export default Alert;
