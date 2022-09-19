import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from './screens/ChatScreen'
import Appointments from './screens/Appointments';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CustomNavigation  from './CustomNavigation';

const Tab = createBottomTabNavigator();

const CustomNavTab = () => {
  return (
    
      <Tab.Navigator initialRouteName='Home'
       screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      }}>
        <Tab.Screen
        name='Home'
        component={CustomNavigation}
        options={{tabBarLabel:'Home',
          tabBarIcon: (tabInfo)=> {
            return (
              <MaterialIcons name="home" size={30} color={tabInfo.focused ? "#1DA1F2" : "#8e8e93"} />
            );
          },}}
        />

        <Tab.Screen
        name='Chat'
        component={ChatScreen}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: (tabInfo)=>{
            return (
              <MaterialCommunityIcons name="chat" size={30} color={tabInfo.focused ? "#1DA1F2" : "#8e8e93"} />
            );
          }
        }}
        />

<Tab.Screen
        name='Appointments'
        component={Appointments}
        options={{
          tabBarLabel: 'Appointments',
          
          tabBarIcon: (tabInfo)=>{
            return (
              <MaterialCommunityIcons name="calendar" size={30} color={tabInfo.focused ? "#1DA1F2" : "#8e8e93"}  />
            );
          }
        }}
        /> 
      </Tab.Navigator>
    
  
  )
}

export default CustomNavTab

const styles = StyleSheet.create({})