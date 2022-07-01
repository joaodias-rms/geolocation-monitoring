import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components/native';

import {Home} from './src/screens/Home';

import {Routes} from './src/routes';

import theme from './src/global/theme/theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
