import React from 'react';
import { LoginForm } from '@components/LoginForm';
import { Heading } from '@components/Heading';

const Login: React.FC = () => (
  <>
    <Heading
      mb={3}
      muted
      type="h4"
      text="Login page"
    />
    <LoginForm isAuthenticated={false} />
  </>
);

export default Login;
