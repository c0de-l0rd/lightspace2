import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const QuestionAnswers = {
    Q1: '',
    Q2: '',
    Q3: '',
    Q4: '',
    Q5: '',
    Q6: '',
    Q7: '',
    Q8: '',
    Q9: '',
    Q10: '',

}

const sharedVars = (props) => {
    QuestionAnswers[`${props.values.Q}`] = answer;
    console.log(QuestionAnswers[`${props.values.Q}`]);
    navigation.navigate(`${props.values.navigate}`);
    }


export {sharedVars, QuestionAnswers}

const styles = StyleSheet.create({})