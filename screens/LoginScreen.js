import React, { useState } from 'react';
import {View, StyleSheet, Pressable, Text, TextInput, Image} from 'react-native'
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, child, get } from "firebase/database";



const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const db = getDatabase();
    

    const openRegisterScreen = () => {
      navigation.navigate('Register');
    };


    const signin = () => {
      signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
       
      const userId = auth.currentUser.uid;
      const dbRef = ref(getDatabase());
      get(child(dbRef, `users/${userId}`)).then((snapshot) => {
        if (snapshot.exists()) {
          navigation.navigate('Tab')
        } else {
           
          navigation.navigate('Questions')
        }
      }).catch((error) => {
        console.error(error);
      });
            
    };

    const clearInput = ()=> {
        setEmail('');
        setPassword('');
    }


    return (

        <View style={styles.container}>

            <Image style={styles.logo} source={require('../images/logs.png')}></Image>

            <TextInput style={styles.textInput}
                placeholder='Enter your email'
                placeholderTextColor="#FF7518"
                label='Email'
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput style={styles.textInput}
                placeholder='Enter your password'
                placeholderTextColor="#FF7518"
                label='Password'
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />
            <Pressable style={({pressed})=> [{
                borderColor: pressed ? '#1DA1F2' : '#f3f6f4'
            }, styles.button
        ]} onPress={clearInput}
            onPressIn={signin} >
                <Text style={styles.text}>Log In</Text>
            </Pressable>

            <Pressable style={styles.signUp}
            onPress={clearInput}
            onPressIn={openRegisterScreen} >
               <Text>Don't have an account? <Text style={{color:"#FF7518" }}>Sign Up</Text></Text> 
            </Pressable>
           
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
    },
    button: {
        width: 100,
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
        
    },
    textInput:{
        borderColor: "#FF7518",
        borderWidth: 1,
        borderRadius: 30,
        width: 270,
        height: 40,
        margin: 10,
        padding: 10,
    },
    textSignUpColor: {
        color: "#FF7518",
    },
    signUp:{
        marginTop: 280,
    },
    logo:{
        width:340,
        height:130,
        marginBottom: 60,
    }
});

export  {LoginScreen};