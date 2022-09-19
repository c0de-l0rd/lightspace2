import React, {useState} from 'react'
import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native'
import {ProgressDots} from './ProgressDots'
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
set(newPostRef, {
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
          <Text style={styles.next}>Next</Text>
        </Pressable>

    <ProgressDots></ProgressDots>
        
    
    </View>
)

}


const styles = StyleSheet.create({
    textInput1: {
    
        marginStart: 15,
        marginEnd: 15,
        marginTop: 20,
        borderRadius: 1,
        backgroundColor: '#1DA1F2',
        borderWidth: 30,
        borderColor:'#1DA1F2',
    
      },
      TextInputFontStyle: {
        color: 'white',
        fontSize:18
      },

      next:{
        color: 'white',
        fontSize: 18,
      },

      text:{
        marginTop: 40,
        marginStart: 14,
        marginStart: 20,
        fontSize: 16,
      },
      dots:{
        backgroundColor: '#1DA1F2',
        height: 18,
        width: 18,
        borderRadius: 9,
        marginStart: 36,
        position: 'absolute',
        bottom:36
      },
      dots1:{
        backgroundColor: '#D3D3D3',
        height: 18,
        width: 18,
        borderRadius: 9,
        position: 'absolute',
        bottom:36
      },
      container1:{
        flex:1,
        flexDirection: 'row',
        
      },
      container:{
        flex:1,
      },

      button:{
        backgroundColor: '#1DA1F2',
        height: 40,
        width:70,
        borderRadius: 11,
        margin: 50,
        padding: 8,
      }
})


