import React, { useState } from 'react';
import { COLORS } from '@utils/styles/colors';
import { SPACING } from '@utils/styles/spacing';
import { BORDER_RADIUS } from '@utils/styles/borderRadius';

// components
import { Grid } from '@components/Grid';
import { Box } from '@components/Box';
import { Text } from '@components/Text';
import { Link } from '@components/Link';
import { Heading } from '@components/Heading';
import { LoginForm } from '@components/LoginForm';
import { Image } from '@components/Image';
import { BOX_SHADOWS } from '@utils/styles/boxShadows';

const Home: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  if (!setIsAuthenticated) {
    return <LoginForm isAuthenticated={isAuthenticated} />;
  }
  return (
    <div>
      <Heading
        mb={3}
        muted
        type="h4"
        text="Home page"
      />
      <Grid
        gridGap={[2, 3]}
        height="100%"
        gridTemplateColumns="repeat(12,minmax(0,1fr))"
      >
        <Box
          p={SPACING.lg}
          gridColumn="span 12"
          background={COLORS.white}
          boxShadow={BOX_SHADOWS.default}
          borderRadius={BORDER_RADIUS.default}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <div>
              <Heading
                type="h1"
                text="Hey, Don't forget to update your calendar"
              />
              <Text
                as="p"
                muted
                mt={SPACING.md}
                text="Hurry up! Season 2022 is coming. "
              />
              <Link
                type="button"
                mt={SPACING.lg}
                href="/calendar"
                variant="success"
                name="Update calendar"
              />
            </div>
            <Box>
              <Image
                height="auto"
                width="360px"
                objectFit="cover"
                src="/img/hero.svg"
                alt="updated calendar"
              />
            </Box>
          </Box>
        </Box>
        <Box
          p={4}
          gridColumn="span 6"
          background={COLORS.white}
          boxShadow={BOX_SHADOWS.default}
          borderRadius={BORDER_RADIUS.default}
        >
          <Heading
            type="h2"
            text="Box 2"
          />
        </Box>
        <Box
          p={4}
          gridColumn="span 6"
          background={COLORS.white}
          boxShadow={BOX_SHADOWS.default}
          borderRadius={BORDER_RADIUS.default}
        >
          <Heading
            type="h2"
            text="Box 3"
          />
        </Box>
      </Grid>
    </div>
  );
};

export default Home;
