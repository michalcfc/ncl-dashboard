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
  children,
}) => (
  <div>
    {isShow
          && (
          <AlertWrapper
            variant={variant}
          >
            <AlertContent>
              {text || children}
            </AlertContent>
          </AlertWrapper>
          )}
  </div>
);

export default Alert;
