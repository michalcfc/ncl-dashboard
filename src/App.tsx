import React, { useState } from 'react';
import { Layout } from '@layout';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import ConversationsModals from '@components/Chat/components/Conversations/ConversationsModals/ConversationsModals';
import Pages from './pages';
import GlobalStyles from './styles/globalStyles';
import { lightTheme, darkTheme } from './themes';
import { store } from './store/store';

const App: React.FC = () => {
  const [theme, setTheme] = useState('light');

  const queryClient = new QueryClient();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const displayNotification = () => {
    if (Notification.permission === 'granted') {
      navigator.serviceWorker.getRegistration().then((reg) => {
        reg.showNotification('Hello world!');
      });
    }
  };

  // function displayConfirmNotification() {
  //   if ('serviceWorker' in navigator) {
  //     const options = {
  //       body: 'You successfully subscribed to our Notification service!',
  //       icon: '/src/images/icons/app-icon-96x96.png',
  //       image: '/src/images/sf-boat.jpg',
  //       dir: 'ltr',
  //       lang: 'en-US', // BCP 47,
  //       vibrate: [100, 50, 200],
  //       badge: '/src/images/icons/app-icon-96x96.png',
  //       tag: 'confirm-notification',
  //       renotify: true,
  //       actions: [
  //         { action: 'confirm', title: 'Okay', icon: '/src/images/icons/app-icon-96x96.png' },
  //         { action: 'cancel', title: 'Cancel', icon: '/src/images/icons/app-icon-96x96.png' },
  //       ],
  //     };
  //
  //     navigator.serviceWorker.ready
  //       .then((swreg) => {
  //         swreg.showNotification('Successfully subscribed!');
  //       });
  //   }
  // }

  // function askForNotificationPermission() {
  //   Notification.requestPermission((result) => {
  //     console.log('User Choice', result);
  //     if (result !== 'granted') {
  //       console.log('No notification permission granted!');
  //     } else {
  //       // configurePushSub();
  //       displayConfirmNotification();
  //     }
  //   });
  // }

  displayNotification();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyles />
          <Layout toggleTheme={toggleTheme} theme={theme}>
            <ConversationsModals>
              <Pages />
            </ConversationsModals>
          </Layout>
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
