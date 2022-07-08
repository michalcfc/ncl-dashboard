import React, { useState } from 'react';

// components
import { Grid } from '@components/ui/Grid';
import { Heading } from '@components/ui/Heading';
import { LoginForm } from '@components/auth/LoginForm';
import { CardNews } from '@components/ui/Card/CardNews';
import { CardThumb } from '@components/ui/Card/CardThumb';
import { CardConversations } from '@components/ui/Card/CardConversations';
import { CardRates } from '@components/ui/Card/CardRates';
import { CardTotalEarnings } from '@components/ui/Card/CardTotalEarnings';

const Home: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  if (!setIsAuthenticated) {
    return <LoginForm isAuthenticated={isAuthenticated} />;
  }
  return (
    <div>
      <Heading
        mb={4}
        muted
        type="h4"
        text="Home page"
      />
      <Grid
        gridGap={[2, 4]}
        height="100%"
        gridTemplateColumns={[
          '1fr',
          'repeat(12,1fr)',
        ]}
      >
        <CardThumb />
        <CardTotalEarnings />
        <CardNews />
        <CardConversations />
        <CardRates />
      </Grid>
    </div>
  );
};

export default Home;
