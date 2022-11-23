import React, {useState} from 'react'
import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native'
import { QuestionAnswers, sharedVars } from './sharedVars'

export default function Question6({navigation}) {

    const [answer, setAnswer] = useState(null)
    
    const f6 = () => {
      QuestionAnswers['Q6'] = answer;
      console.log(QuestionAnswers['Q6']);
      navigation.navigate('8 of 11');
      }

return (
    <View style={styles.container}>
        <Text style={styles.text}>Are you having thoughts of killing or harming people,
         or have you had thoughts of killing or harming people in the past month?</Text>
        <TextInput style={[styles.textInput1, styles.TextInputFontStyle]}
        onChangeText={(answer)=>setAnswer(answer)}
        value={answer}
        maxLength={560}
        multiline={true}/>

        <Pressable style={styles.button}
        onPress={f6}>
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

