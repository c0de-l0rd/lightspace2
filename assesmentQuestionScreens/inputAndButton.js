import React, {Component, useState} from 'react'
import { View, StyleSheet, Text, TextInput, Pressable,Alert } from 'react-native'


function InputAndButton () {
  return (
    <View>
       <TextInput style={[styles.textInput1, styles.TextInputFontStyle]}
        onChangeText={(answer)=>setAnswer(answer)}
        value={answer}
        multiline={true}/>

        <Pressable style={styles.button}
        onPress={
          f1
         }>
          <Text style={styles.next}>Next</Text>
        </Pressable>
    </View>
  )
}

export default InputAndButton

const styles = StyleSheet.create({   
    textInput1: {
    marginStart: 15,
    marginEnd: 15,
    marginTop: 20,
    borderRadius: 1,
    backgroundColor: '#1DA1F2',
    borderWidth: 1,
    borderColor:"#FF7518",

  },
  TextInputFontStyle: {
    color: 'white',
    fontSize:18
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