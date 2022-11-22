import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import database from '@react-native-firebase/database'
import { getDatabase, ref, push, set, child, get, remove } from "firebase/database";
import { getAuth } from "firebase/auth";
import { TherapyRequest } from '../assesmentQuestionScreens/sharedVars';
import { UserName } from '../assesmentQuestionScreens/sharedVars';

export default function Description() {

  const [therapyType, setTherapyType] = useState(null);
  const [description, setDescription] = useState(null);


  function writeUserData()
  {
// Create a new post reference with an auto-generated id
const db = getDatabase();
const auth = getAuth();
const myUserId = auth.currentUser.uid;
const dbRef = ref(db);
TherapyRequest['userEmail']  = auth.currentUser.email;

get(child(dbRef, `therapyRequests/${myUserId}`)).then((snapshot) => {
  if (snapshot.exists()) {
    Alert.alert(
      "Double Request",
      "You have already requested for a therapist. "
       ,
     
      [{ text: "OK" }]
    )
  } else {
     
    set(ref(db, 'therapyRequests/' + myUserId), {
      TherapyRequest: TherapyRequest,});
      
     alert();
  }
}).catch((error) => {
  console.error(error);
});


}

const requestTherapist = () => {
  TherapyRequest['description'] = description;
  console.log(TherapyRequest);
  writeUserData();
  }

const alert = () =>
    Alert.alert(
      "Request",
      "you have requested for a therapy session, we will connect "+
       "you to a therapist, you will receive an email when you are connected and will be able "+ 
       "to communicate with the therapist through chat.",
     
      [{ text: "OK" }]
    )

    //cancel a therapist request if it has been made.

    function deleteData()
  {
// Create a new post reference with an auto-generated id
const db = getDatabase();
const auth = getAuth();
const myUserId = auth.currentUser.uid;
const dbRef = ref(db);
TherapyRequest['userEmail']  = auth.currentUser.email;

get(child(dbRef, `therapyRequests/${myUserId}`)).then((snapshot) => {
  if (snapshot.exists()) {
    const del = ref(db, `therapyRequests/${myUserId}`)
    remove(del)

  } else {
    Alert.alert(
      "No Requests",
      "You have not made any request for a therapist. "
       ,
     
      [{ text: "OK" }]
    )
    
  }
}).catch((error) => {
  console.error(error);
});


}

    const clearInput = () => setDescription('');

  return (
    <View>
      <TextInput style={[styles.textInput1, styles.TextInputFontStyle]}
      onChangeText={(description)=>setDescription(description)}
      value={description}
      placeholder="why have you chosen this type of therapy?"
      multiline= {true}
      />
      

<Pressable
         style={({pressed}) => [
          {
      
              borderColor: pressed ? '#1DA1F2' : '#FF7518'
            
          },
          styles.button,
        ]}
        onPressIn={requestTherapist}
        onPress={clearInput}>
        <Text style={styles.fontStyle}>Request therapist</Text>
      </Pressable>


      <Pressable
         style={({pressed}) => [
          {
      
              borderColor: pressed ? '#1DA1F2' : '#FF7518'
            
          },
          styles.button2,
        ]}
        onPress={deleteData}>
        <Text style={styles.fontStyle}>Cancel Request</Text>
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
  fontStyle: {
    color: 'white',
    fontSize:18
  },
  TextInputFontStyle: {
    color: "#FF7518",
    fontSize:16,
    padding: 4,
  },
  button: {
    height: 40,
    backgroundColor: '#FF7518',
    marginStart: 80,
    marginEnd: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 36,
    marginTop: 60,
    borderWidth: 2,
    elevation: 3,
  },
  button2: {
    height: 40,
    backgroundColor: '#FF7518',
    marginStart: 80,
    marginEnd: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 36,
    marginTop: 25,
    borderWidth: 2,
    elevation: 3,
  }
})