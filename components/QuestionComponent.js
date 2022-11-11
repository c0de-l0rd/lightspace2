import { View, StyleSheet, Text, TextInput, Pressable} from 'react-native'
import React from 'react'
import Question1 from '../assesmentQuestionScreens/Question1'

const QuestionComponent = (props) => {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>{props.question}</Text>
    <TextInput style={[styles.textInput1, styles.TextInputFontStyle]}
    onChangeText={(answer)=>setAnswer(answer)}
    value={Question1.answer}
    multiline={true}/>

    <Pressable style={styles.button}
    onPress={
      Question1.f1
     }>
      <Text style={styles.next}>Next</Text>
    </Pressable>


    

</View>
  )
}

export default QuestionComponent

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
      fontSize:18,
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