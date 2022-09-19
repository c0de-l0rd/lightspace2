import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LoginScreen} from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen'
import CustomNavTab from './CustomNavTab';
import QuestionScreensStackNavigator from './assesmentQuestionScreens/QuestionScreensStackNavigator';


const Stack = createNativeStackNavigator();

export default function App() {

 

return (
    <NavigationContainer>

 

   <Stack.Navigator>
     <Stack.Screen name='Login' component={LoginScreen}/>
     <Stack.Screen name='Register' component={RegisterScreen}/>
     <Stack.Screen name='Tab' options={{headerShown: false}} component={CustomNavTab}/>
     <Stack.Screen name='Questions' options={{headerShown: false}} component={QuestionScreensStackNavigator}/>
   </Stack.Navigator>
   </NavigationContainer>
  )}
  
;


  
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

