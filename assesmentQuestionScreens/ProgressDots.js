import React from 'react'
import {Text, StyleSheet, View} from 'react-native'


  function ProgressDots(){


    return(
        <View style={styles.container1}>
        <Text style={[styles.dots]}></Text>
        <Text style={[styles.dots1, {marginStart:70}]}></Text>
        <Text style={[styles.dots1, {marginStart:100}]}></Text>
        <Text style={[styles.dots1, {marginStart:130}]}></Text>
        <Text style={[styles.dots1, {marginStart:160}]}></Text>
        <Text style={[styles.dots1, {marginStart:190}]}></Text>
        <Text style={[styles.dots1, {marginStart:220}]}></Text>
        <Text style={[styles.dots1, {marginStart:250}]}></Text>
        <Text style={[styles.dots1, {marginStart:280}]}></Text>
        <Text style={[styles.dots1, {marginStart:310}]}></Text>
    </View>
    )
}

const styles = StyleSheet.create({
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
})

export {ProgressDots}