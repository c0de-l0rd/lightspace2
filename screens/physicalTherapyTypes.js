import { StyleSheet, Text, Pressable, Image,ScrollView } from 'react-native'
import React from 'react'


const physicalTherapyTypes = ({navigation}) => {
  
  
  return (
    <ScrollView>

    

      <Pressable
      style={({pressed}) => [
        {
    
          backgroundColor: pressed ? '#fff2d9' : '#fffaf0'
          
        },
        styles.card,
      ]}
      onPress={() => navigation.navigate('locations')}
      >
        <Image style={styles.image} source={require('../images/Beer.jpg')}></Image>
        <Text style={styles.font}> Alchoholics Anonnymous </Text>
      </Pressable>

      <Pressable
      style={({pressed}) => [
          {
      
            backgroundColor: pressed ? '#fff2d9' : '#fffaf0'
            
          },
          styles.card,
        ]}
      onPress={() => navigation.navigate('locations')}
      >
        <Image style={styles.image} source={require('../images/gbv.jpg')}></Image>
        <Text style={styles.font}> Gender Based Violence</Text>
      </Pressable>
      </ScrollView>
  )
}

export default physicalTherapyTypes;

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