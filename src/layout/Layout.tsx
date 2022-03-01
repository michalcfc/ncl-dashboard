import React, { useState } from 'react';

import { AsideLeft } from '@layout/AsideLeft';
import { Main } from './Main';
import { Header } from './Header';
import { Footer } from './Footer';
import { Wrapper } from './Wrapper';
import { LayoutProps } from './Layout.d';

const Layout: React.FC<LayoutProps> = ({
  theme,
  toggleTheme,
  children,
}) => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <Wrapper view="withLeftAside">
      <Header
        theme={theme}
        links={[]}
        toggleTheme={toggleTheme}
        setSidebarOpen={setSidebarOpen}
      />
      <AsideLeft
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
