import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function AssesmentQuest({navigation}) {
  return (
    <View style={styles.app}>
      <Text style={styles.card}>
        <Text style={styles.font}> the following set of therapy assesment questions will help
             us connect you to the right therapist for your problem. You can cancel at any time.
             This is a once off.</Text>
      </Text>
      <Pressable style={styles.button}>
        <Text style={{color:'white'}}>Cancel</Text>
      </Pressable>
      <Pressable style={styles.button2}
        onPress={()=> navigation.navigate('Question1')}
      >
        <Text style={{color:'white'}}>Proceed</Text>
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
    app:{
        backgroundColor: '#fffef8',
        flex: 1,
 
// Set content's vertical alignment.
justifyContent: 'center',
 
// Set content's horizontal alignment.
alignItems: 'center',
    },
    card:{
        marginLeft:20,
        marginTop: 30,
        borderRadius: 11,
        height: 200,
        width: 290,
        backgroundColor: '#fdfdfd',
        elevation: 6,
        padding: 20,
        
      },

      font:{
        fontSize: 15,
      },

      button:{
        backgroundColor: '#1DA1F2',
        position: 'absolute',
        width: 90,
        height:35,
        borderRadius: 11,
        top: 420,
        right: 210,
        justifyContent:'center',
        alignItems: 'center',
        elevation: 3,
      },

      button2:{
        backgroundColor: '#1DA1F2',
        position: 'absolute',
        width: 90,
        height:35,
        borderRadius: 11,
        top: 420,
        right: 65,
        justifyContent:'center',
        alignItems: 'center',
        elevation: 3,
      },
})