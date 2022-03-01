import React, { useState } from 'react';
import { Layout } from '@layout';
import { ThemeProvider } from 'styled-components';
import Pages from './pages';
import GlobalStyles from './styles/globalStyles';
import { lightTheme, darkTheme } from './themes';

const App: React.FC = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Layout toggleTheme={toggleTheme} theme={theme}>
        <Pages />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
