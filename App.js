import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PokemonScreen from './src/screens/Pokemon/index';
import MoveScreen from './src/screens/Moves/index';
import PokemonScreenIcon from './assets/images/pokemon-icon-active.png'
import MoveScreenIcon from './assets/images/type-icon-active.png'
import { Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BackgroundColor } from './src/common/constants';

const Tab = createBottomTabNavigator()

const tabBarIconOptions = (route, focused) => {
  let icon
  switch (route.name) {
    case "PokemonScreen":
      icon = PokemonScreenIcon
      break
    case "MoveScreen":
      icon = MoveScreenIcon
      break
  }
  return <Image source={icon} style={{ opacity: focused ? 1 : 0.5 }} />
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="PokemonScreen"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            return tabBarIconOptions(route, focused)
          },
        })}
        tabBarOptions={{
          activeTintColor: "black",
        }}
      >
        <Tab.Screen
          name="PokemonScreen"
          component={PokemonScreen}
          options={() => ({
            title: "Pokemons",
          })}
        />
        <Tab.Screen
          name="MoveScreen"
          component={MoveScreen}
          options={() => ({
            title: "Moves"
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App