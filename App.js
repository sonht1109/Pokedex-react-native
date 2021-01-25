import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PokemonScreen from './src/screens/Pokemon/index';
import {createDrawerNavigator} from '@react-navigation/drawer'
import MoveScreen from './src/screens/Moves/index';

const Drawer = createDrawerNavigator()

const App = ()=> {
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="PokemonScreen">
        <Drawer.Screen name="PokemonScreen" component={PokemonScreen} />
        <Drawer.Screen name="MoveScreen" component={MoveScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App