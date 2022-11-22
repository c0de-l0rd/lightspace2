import React from 'react';
import {StyleSheet, TextInput, View, Image, Pressable, Text} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';


export default function Login({onLogin, username, setUsername, navigation}) {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='User Name...'
        placeholderTextColor="#FF7518"
        onChangeText={setUsername}
        value={username}
      />
      <Pressable style={({pressed})=> [{
                borderColor: pressed ? '#1DA1F2' : '#f3f6f4'
            }, styles.button
        ]} 
        onPressIn = {onLogin}>
                <Text style={styles.text}>chatroom
                 <SimpleLineIcons name="arrow-right" size={18} color="white" />
                 </Text>
            </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '22%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    height: 40,
    marginBottom: 20,
    borderRadius: 30,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#FF7518",
  },
button: {
  width: 120,
  height: 38,
  marginTop: 18,
  backgroundColor: "#FF7518",
  borderRadius: 30,
  borderWidth: 2,
},
text:{
        
  fontSize: 18,
  color: 'white',
  padding: 4,
  alignSelf: 'center',
  justifyContent: 'center'
},
});
