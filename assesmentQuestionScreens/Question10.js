import React, {useState} from 'react'
import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native'
import { QuestionAnswers } from './sharedVars'
import { getDatabase, ref, push, set } from "firebase/database";
import { getAuth } from "firebase/auth";

export default function Question10({navigation}) {

    const [answer, setAnswer] = useState(null)

    function writeUserData()
  {
// Create a new post reference with an auto-generated id
const db = getDatabase();
const auth = getAuth();
const myUserId = auth.currentUser.uid;
const postListRef = ref(db);
const newPostRef = push(postListRef);
set(ref(db, 'users/' + myUserId), {
  user: myUserId,
  QuestionAnswers: QuestionAnswers});
}

    const f10 = () => {
      QuestionAnswers['Q10'] = answer;
      console.log(QuestionAnswers['Q10']);
      navigation.navigate('Tab');
      writeUserData();
      }

return (
    <View style={styles.container}>
        <Text style={styles.text}>What are the goals you want to accomplish in therapy?</Text>
        <TextInput style={[styles.textInput1, styles.TextInputFontStyle]}
        onChangeText={(answer)=>setAnswer(answer)}
        value={answer}
        multiline={true}/>

        <Pressable style={styles.button}
        onPress={f10}>
          <Text style={styles.next}>Submit</Text>
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