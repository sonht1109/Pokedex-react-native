import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PokemonList from './PokemonList';
import PokemonDetail from './PokemonDetail';

const Stack = createStackNavigator()

const stackScreenOptions = {
    headerShown: false,
    gestureEnabled: true,
  };
  

const PokemonScreen = () => {
    return (
        <Stack.Navigator screenOptions={stackScreenOptions}>
            <Stack.Screen name="PokemonList" component={PokemonList} />
            <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
        </Stack.Navigator>
    )
}

export default PokemonScreen