import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootNavigation from './src/navigation/rootNavigation';
import TranscriptionScreen from './src/screens/transcriptionScreen';
import HomeScreen from './src/screens/homeScreen';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

export default App;
