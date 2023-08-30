import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootNavigation from './src/navigation/rootNavigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

export default App;
