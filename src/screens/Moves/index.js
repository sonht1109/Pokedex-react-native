import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MoveList from './MoveList';
import MoveDetail from './MoveDetail';

const Stack = createStackNavigator()

const MoveScreen = ()=> {
    return(
        <Stack.Navigator
        screenOptions={{headerShown: false}}>
            <Stack.Screen name="MoveList" component={MoveList} />
            <Stack.Screen name="MoveDetail" component={MoveDetail} />
        </Stack.Navigator>
    )
}

export default MoveScreen