import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Question5 from './Question5';
import Question6 from './Question6';
import Question7 from './Question7';
import Question8 from './Question8';
import Question9 from './Question9';
import Question10 from './Question10';
import AssesmentQuest from '../screens/AssesmentQuest';
import CustomNavTab from '../CustomNavTab';
import Description from '../screens/Description';

const Stack = createStackNavigator();

export default function QuestionScreensStackNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name='Question1'
        component={Question1}/>
        <Stack.Screen
        name='Question2'
        component={Question2}/>
        <Stack.Screen
        name='Question3'
        component={Question3}/>
        <Stack.Screen
        name='Question4'
        component={Question4}/>
        <Stack.Screen
        name='Question5'
        component={Question5}/>
        <Stack.Screen
        name='Question6'
        component={Question6}/>
        <Stack.Screen
        name='Question7'
        component={Question7}/>
        <Stack.Screen
        name='Question8'
        component={Question8}/>
        <Stack.Screen
        name='Question9'
        component={Question9}/>
        <Stack.Screen
        name='Question10'
        component={Question10}/>
        <Stack.Screen
        name='Tab'
        component={CustomNavTab}
        options={{headerShown: false}}/>
        <Stack.Screen
        name='AssesmentQuest'
        component={Description}/>
    </Stack.Navigator>
  )
}


const styles = StyleSheet.create({})