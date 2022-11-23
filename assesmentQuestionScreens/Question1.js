import React, {useState} from 'react'
import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native'
import { QuestionAnswers } from './sharedVars'


export default function Question1({navigation}) {

    const [answer, setAnswer] = useState(null)

  
   const f1 = () => {
    QuestionAnswers['Q1'] = answer;
    console.log(QuestionAnswers['Q1']);
    navigation.navigate('3 of 11');
    }

   

return (
    <View style={styles.container}>
        <Text style={styles.text}>why are you seeking therapy?</Text>
        <TextInput style={[styles.textInput1, styles.TextInputFontStyle]}
        onChangeText={(answer)=>setAnswer(answer)}
        value={answer}
        maxLength={560}
        multiline={true}/>

        <Pressable style={styles.button}
        onPress={
          f1
         }>
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


