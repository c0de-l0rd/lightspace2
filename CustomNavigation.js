import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Description from './screens/Description';
import physicalTherapyTypes from './screens/physicalTherapyTypes';
import Location from './screens/Location';
import Location2 from './screens/Location2';
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
            name='groupTherapy'
            component={physicalTherapyTypes}
            options={{headerShown:false}}
            />

            <Stack.Screen
            name='locations'
            component={Location}
            options={{headerShown:false}}
            />

            <Stack.Screen
            name='description'
            component={Description}
            options={{headerShown:false}}
            />
          
        </Stack.Navigator>

  )
}

export default CustomNavigation

const styles = StyleSheet.create({})