import { iteratorSymbol } from 'immer/dist/internal';
import React,{useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';


const results=[
    {
    questionId: 1,
    questionName: "What is your name",
    options:["aaa","bbb","ccc","ddd"],
    correctAnswer: "ccc",
    userAnswer: "ccc",
    userAnswerStatus: "1"
    },
    {
    questionId: 2,
    questionName: "What is your name",
    options:["aaa","bbb","ccc","ddd"],
    correctAnswer: "ddd",
    userAnswer: "ccc",
    userAnswerStatus: "1"
    },
    {
    questionId: 3,
    questionName: "What is your name",
    options:["aaa","bbb","ccc","ddd"],
    correctAnswer: "hhh",
    userAnswer: "hhh",
    userAnswerStatus: "1"
    },
    {
    questionId: 4,
    questionName: "What is your name",
    options:["aaa","bbb","ccc","ddd"],
    correctAnswer: "lll",
    userAnswer: "LLL",
    userAnswerStatus: "1"
    },
    {
    questionId: 5,
    questionName: "What is your name",
    options:["aaa","bbb","ccc","ddd"],
    correctAnswer: "ppp",
    userAnswer: "PPP",
    userAnswerStatus: "1"
    },
    
    ]

export const TestBtm =()=>{



  
          let correctAnswer = results[1]['correctAnswer'];
          let wrongAnswer=results[1]['userAnswer'];
          console.log(correctAnswer)
          console.log(wrongAnswer)
    
     

    
        
    return(
        <View style={styles.container}>
            
            <Text>Question{results[1].questionId}</Text>
            <Text>{results[1].questionName}</Text>
        
            {results[1]?.options.map(option=>(


                <View>
                {correctAnswer == option ? (
                      <View style={styles.optioncheckCorrectView}>
                      <Image
                        source={require('../assets/images/icn_optionchecked.png')}
                        style={styles.IconChecked}
                      />
                      <Text style={styles.optionCheck}>{option}</Text>
                    </View>
                ):(
                    <>
                    
                    {wrongAnswer === option ? (
                        <View style={styles.optionCheckView}>
                        <Image
                          source={require('../assets/images/icn_optionwrong.png')}
                          style={styles.IconChecked}
                        />
                        <Text style={styles.optionCheck}>{option}</Text>
                      </View>
                    ):(

                    <View style={styles.optionUncheckView}>
                    <Image
                      source={require('../assets/images/icn_optionunchecked.png')}
                      style={styles.IconUnchecked}
                    />
                    <Text style={styles.optionUncheck}>{option}</Text>
                  </View>
                    )}
                    </>

                
                
                )}

              
               </View>
            
            ))}
           
           
      



           
                
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        height: 612,
        borderRadius: 20,
        borderWidth: 1,
        margin: 30,
      },
      optionUncheck: {
        height: 20,
        color: '#373737',
        fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
        fontSize: 14,
        fontWeight: '500',
        letterSpacing: 0,
        lineHeight: 20,
        marginTop: 10,
      },
      IconUnchecked: {
        height: 20,
        borderRadius: 1,
        margin: 10,
      },
      optionCheck: {
        height: 20,
        color: '#373737',
        fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
        fontSize: 14,
        fontWeight: '500',
        letterSpacing: 0,
        lineHeight: 20,
        marginTop: 10,
      },
      IconChecked: {
        height: 20,
        borderRadius: 1,
        margin: 10,
      },
      optionCheckView: {
        height: 46,
        borderRadius: 6,
        backgroundColor: 'red',
    
        marginBottom: 20,
        marginRight: 10,
        flexDirection: 'row',
      },
      optionUncheckView: {
        height: 46,
        borderRadius: 6,
        backgroundColor: 'white',
    
        marginBottom: 20,
        marginRight: 10,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 5,
      },
      optionClicked: {
        height: 46,
        borderRadius: 6,
        backgroundColor: 'pink',
    
        marginRight: 10,
      },
      optioncheckCorrectView: {
        height: 46,
        borderRadius: 6,
        backgroundColor: 'green',
    
        marginBottom: 20,
        marginRight: 10,
        flexDirection: 'row',
      },
})