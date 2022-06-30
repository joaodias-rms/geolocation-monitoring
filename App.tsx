import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components/native';

import {Home} from './src/screens/Home';

import {Routes} from './src/routes';

import theme from './src/global/theme/theme';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
