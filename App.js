import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PokemonScreen from './src/screens/Pokemon/index';

const App = ()=> {
  return(
    <NavigationContainer>
      <PokemonScreen />
    </NavigationContainer>
  )
}

export default App