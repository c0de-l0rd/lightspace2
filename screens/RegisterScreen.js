import React, { useState } from 'react';
import { View, StyleSheet,Pressable, TextInput, Text, Image } from 'react-native'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {getDatabase, get, ref, set} from 'firebase/database';
import { UserName } from '../assesmentQuestionScreens/sharedVars';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('');
    const [myData, setMyData] = useState(null);
   

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
                //   navigation.navigate('Login');
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

      };

      


      const createChatUser = async () => {
        try {
          const database = getDatabase();
          //first check if the user registered before

          const findUser = async name => {
            const database = getDatabase();
        
            const mySnapshot = await get(ref(database, `users/${name}`));
        
            return mySnapshot.val();
          };
    
          const user = await findUser(name);
    
          //create a new user if not registered
          if (user) {
            setMyData(user);
          } else {
            const newUserObj = {
              username: name,
              avatar: 'https://i.pravatar.cc/150?u=' + Date.now(),
            };
    
            set(ref(database, `users/${name}`), newUserObj);
            setMyData(newUserObj);
          }

        } catch (error) {
            console.error(error);
          }

          
          clearInput();
        }

        const clearInput = ()=> {
            setEmail('');
            setPassword('');
            setName('');
        }
    

       

    return (
        <View style={styles.container}>

<Image style={styles.logo} source={require('../images/logs.png')}></Image>

            <TextInput style={styles.textInput}
                placeholder='Enter your user name'
                placeholderTextColor="#FF7518"
                label='Name'
                value={name}
                onChangeText={text => setName(text)}
            />
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
                value={password} onChangeText={text => setPassword(text)}
                secureTextEntry
            />
            <Pressable style={({pressed})=> [{
                borderColor: pressed ? '#1DA1F2' : '#f3f6f4'
            }, styles.button
        ]} 
        onPressIn={register}
        onPress={createChatUser}>
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
        marginTop: 40,
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
        margin: 15,
    },
    logo:{
        width:340,
        height:130,
        marginBottom: 30,
    }
});

export default Register;