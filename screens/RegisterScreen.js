import React, { useState } from 'react';
import { View, StyleSheet,Pressable, Text } from 'react-native'
import { Input, Button } from 'react-native-elements';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('');

    const register = ({navigation}) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Registered
              const user = userCredential.user;
              updateProfile(user, {
                  displayName: name,
                  photoURL: avatar ? avatar : 'https://gravatar.com/avatar/94d45dbdba988afacf30d916e7aaad69?s=200&d=mp&r=x',
              })
              .then(() => {
                  alert('Registered, please login.');
                  navigation.navigate('Login');
              })
              .catch((error) => {
                  alert(error.message);
              })
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              alert(errorMessage);
          });
      }

    return (
        <View style={styles.container}>
            <Input
                placeholder='Enter your name'
                label='Name'
                value={name}
                onChangeText={text => setName(text)}
            />
            <Input
                placeholder='Enter your email'
                label='Email'
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Input
                placeholder='Enter your password'
                label='Password'
                value={password} onChangeText={text => setPassword(text)}
                secureTextEntry
            />
            <Input
                placeholder='Enter your image url'
                label='Profile Picture'
                value = {avatar}
                onChangeText={text => setAvatar(text)}
            />
            <Pressable style={({pressed})=> [{
                borderColor: pressed ? '#1DA1F2' : '#f3f6f4'
            }, styles.button
        ]} 
        onPressIn={register} >
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

export default Register;