import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieStack from './MovieStack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} >
                <Stack.Screen 
                    name="MovieStack"
                    component={MovieStack}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
