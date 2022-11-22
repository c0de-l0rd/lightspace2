import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AgeSex from './AgeSex'
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
        name='1 of 11'
        component={AgeSex}/>
        <Stack.Screen
        name='2 of 11'
        component={Question1}/>
        <Stack.Screen
        name='3 of 11'
        component={Question2}/>
        <Stack.Screen
        name='4 of 11'
        component={Question3}/>
        <Stack.Screen
        name='5 of 11'
        component={Question4}/>
        <Stack.Screen
        name='6 of 11'
        component={Question5}/>
        <Stack.Screen
        name='7 of 11'
        component={Question6}/>
        <Stack.Screen
        name='8 of 11'
        component={Question7}/>
        <Stack.Screen
        name='9 of 11'
        component={Question8}/>
        <Stack.Screen
        name='10 of 11'
        component={Question9}/>
        <Stack.Screen
        name='11 of 11'
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