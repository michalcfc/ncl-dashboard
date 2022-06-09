import React from 'react';
import { ResetPasswordFormWrapper } from './RegisterForm.styles';
import { ResetPasswordProps } from './ResetPasswordForm.d';

const ResetPasswordForm: React.FC<ResetPasswordProps> = ({
  children,
}) => (
  <ResetPasswordFormWrapper>
    {children}
  </ResetPasswordFormWrapper>
);

export default ResetPasswordForm;
