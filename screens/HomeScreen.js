import { StyleSheet, Text, Pressable, Image,ScrollView } from 'react-native'
import React from 'react'
import { TherapyRequest } from '../assesmentQuestionScreens/sharedVars'


const HomeScreen = ({navigation}) => {
  
  
  return (
    <ScrollView>

    
      <Pressable
        style={({pressed}) => [
          {
      
            backgroundColor: pressed ? '#fff2d9' : '#fffaf0'
            
          },
          styles.card,
        ]}

      onPress={() => {navigation.navigate('description')
        TherapyRequest['mode'] = 'Online Therapy'; console.log['mode']}}
      
      > 
<Image style={styles.image2} source={require('../online-therapy3.jpg')}></Image>
<Text style={styles.font2}> Online therapy</Text>
      </Pressable>

      <Pressable
      style={({pressed}) => [
        {
    
          backgroundColor: pressed ? '#fff2d9' : '#fffaf0'
          
        },
        styles.card,
      ]}
      onPress={() => {navigation.navigate('description')
    TherapyRequest['mode'] = 'Physical therapy'; console.log['mode']}}
      >
        <Image style={styles.image} source={require('../physical-therapy.jpg')}></Image>
        <Text style={styles.font}> Physical therapy </Text>
      </Pressable>

      <Pressable
      style={({pressed}) => [
          {
      
            backgroundColor: pressed ? '#fff2d9' : '#fffaf0'
            
          },
          styles.card,
        ]}
      onPress={() =>{ navigation.navigate('groupTherapy')
    TherapyRequest['mode'] = 'Group physical therapy'; console.log['mode']}}
      >
        <Image style={styles.image} source={require('../group-therapy.jpg')}></Image>
        <Text style={styles.font}> Group physical therapy</Text>
      </Pressable>
      </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
              marginTop:1
    },
    item: {
        justifyContent: 'center',
        backgroundColor: '#8000FF',
        padding:30,
        marginVertical: 0.3,
    },
    font:{
      fontSize: 25,
      
    },
    font2:{
      fontSize: 25,
      backgroundColor: '#fffaf0',
      position: 'absolute',
      top: 144,
      width:320,
    },
    card:{
      marginLeft:20,
      marginTop: 30,
      borderRadius: 11,
      height: 200,
      width: 320,
     
      elevation: 6,
    },
    image:{
      width:320,
      height:140,
    },
    image2:{
      width:320,
      height:170,
      
    }
})