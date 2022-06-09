import React from 'react';
import { RegisterFormProps } from './RegisterForm.d';
import { RegisterFormWrapper } from './RegisterForm.styles';

const RegisterForm: React.FC<RegisterFormProps> = ({
  children,
}) => (
  <RegisterFormWrapper>
    {children}
  </RegisterFormWrapper>
);

export default RegisterForm;
