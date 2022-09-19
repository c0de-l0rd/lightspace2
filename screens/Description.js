import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import database from '@react-native-firebase/database'
import { getDatabase, ref, push, set } from "firebase/database";
import { getAuth } from "firebase/auth";

export default function Description() {

  const [therapyType, setTherapyType] = useState(null);
  const [description, setDescription] = useState(null);


  function writeUserData()
  {
// Create a new post reference with an auto-generated id
const db = getDatabase();
const auth = getAuth();
const myUserId = auth.currentUser.uid;
const postListRef = ref(db);
const newPostRef = push(postListRef);
set(newPostRef, {
    type: description,
    description: therapyType,
    user: myUserId,
});
}
  return (
    <View>
      <TextInput style={[styles.textInput1, styles.fontStyle]}
      onChangeText={setTherapyType}
      value={therapyType}
      placeholder="why this type of therapy?"
      multiline= {true}
      />
       <TextInput style={[styles.textInput1, styles.fontStyle]}
      onChangeText={setDescription}
      value={description}
      placeholder="tell us how you feel."
      multiline= {true}
      />


      

<Pressable
         style={({pressed}) => [
          {
      
              borderColor: pressed ? 'black' : '#1DA1F2'
            
          },
          styles.button,
        ]}
        onPress={writeUserData}>
        <Text style={styles.fontStyle}>Request therapist</Text>
      </Pressable>
       
    
    </View>
  )
}



const styles = StyleSheet.create({
  textInput1: {
    
    marginStart: 15,
    marginEnd: 15,
    marginTop: 50,
    borderRadius: 1,
    backgroundColor: '#1DA1F2',
    borderWidth: 30,
    borderColor:'#1DA1F2',

  },
  fontStyle: {
    color: 'white',
    fontSize:18
  },
  button: {
    height: 55,
    backgroundColor: '#010117',
    marginStart: 80,
    marginEnd: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 11,
    marginTop: 60,
    borderWidth: 2,
    
    elevation: 8,
  }
})