import React, { useState } from 'react';
import {View, StyleSheet, Pressable, Text } from 'react-native'
import { Input, Button } from 'react-native-elements';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const openRegisterScreen = () => {
      navigation.navigate('Register');
    };

    const signin = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
         navigation.navigate('Questions')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    };

    const clearInput = ()=> {
        setEmail('');
        setPassword('');
    }

    return (
        <View style={styles.container}>
            <Input
                placeholder='Enter your email'
                label='Email'
                leftIcon={{ type: 'material', name: 'email' }}
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Input
                placeholder='Enter your password'
                label='Password'
                leftIcon={{ type: 'material', name: 'lock' }}
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

            <Pressable style={({pressed})=> [{
                borderColor: pressed ? '#1DA1F2' : '#f3f6f4'
            }, styles.button
        ]} onPress={clearInput}
            onPressIn={openRegisterScreen} >
                <Text style={styles.text}>Sign Up</Text>
            </Pressable>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        marginTop: 100,
    },
    button: {
        width: 280,
        height: 38,
        marginTop: 18,
        backgroundColor: '#1DA1F2',
        borderRadius: 11,
        borderWidth: 2,
    },
    text:{
        
        fontSize: 18,
        color: 'white',
        padding: 4,
        alignSelf: 'center',
        
    }
});

export  {LoginScreen};