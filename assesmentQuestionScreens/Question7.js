import React, {useState} from 'react'
import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native'
import {ProgressDots} from './ProgressDots'
import { QuestionAnswers } from './sharedVars'

export default function Question7({navigation}) {

    const [answer, setAnswer] = useState(null)

    const f7 = () => {
      QuestionAnswers['Q7'] = answer;
      console.log(QuestionAnswers['Q7']);
      navigation.navigate('Question8');
      }

return (
    <View style={styles.container}>
        <Text style={styles.text}>Have you been in therapy before? What was that experience like?</Text>
        <TextInput style={[styles.textInput1, styles.TextInputFontStyle]}
        onChangeText={(answer)=>setAnswer(answer)}
        value={answer}
        multiline={true}/>

        <Pressable style={styles.button}
        onPress={f7}>
          <Text style={styles.next}>Next</Text>
        </Pressable>
        
    </View>
)

}


const styles = StyleSheet.create({
  textInput1: {
  
      marginStart: 15,
      marginEnd: 15,
      marginTop: 20,
      borderRadius: 1,
      borderRadius: 11,
      borderWidth: 1,
      borderColor:"#FF7518",
      
    },
    TextInputFontStyle: {
      color: "#FF7518",
      fontSize:16,
      padding: 4,
    },

    next:{
      color: 'white',
      fontSize: 18,
      padding: 1
    },

    text:{
      marginTop: 40,
      marginStart: 14,
      marginStart: 20,
      fontSize: 16,
   
    },

    button:{
      backgroundColor: "#FF7518",
      height: 40,
      width:70,
      borderRadius: 11,
      margin: 50,
      padding: 8,
    }
})