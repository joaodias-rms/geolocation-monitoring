import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';

import {Home} from './src/screens/Home';

import theme from './src/global/theme/theme';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
