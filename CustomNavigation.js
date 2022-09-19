import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Description from './screens/Description';

const Stack = createNativeStackNavigator();

const CustomNavigation = () => {
  return (
        <Stack.Navigator>
            <Stack.Screen
            name='Home1'
            component={HomeScreen}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name='Description'
            component={Description}
            />
          
        </Stack.Navigator>

  )
}

export default CustomNavigation

const styles = StyleSheet.create({})