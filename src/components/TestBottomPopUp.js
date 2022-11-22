import {iteratorSymbol} from 'immer/dist/internal';
import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, Platform} from 'react-native';
import { Modal } from 'react-native';
import { setMockstate } from '../redux/ReduxPersist/FilterSlice';
import { useDispatch,useSelector } from 'react-redux';

const results = [
  {
    questionId: 1,
    questionName: 'What is your name?',
    options: ['aaa', 'bbb', 'ccc', 'ddd'],
    correctAnswer: 'ccc',
    userAnswer: 'ccc',
    userAnswerStatus: '1',
  },
  {
    questionId: 2,
    questionName: 'What is your name?',
    options: ['aaa', 'bbb', 'ccc', 'ddd'],
    correctAnswer: 'ddd',
    userAnswer: 'ccc',
    userAnswerStatus: '1',
  },
  {
    questionId: 3,
    questionName: 'What is your name',
    options: ['aaa', 'bbb', 'ccc', 'ddd'],
    correctAnswer: 'hhh',
    userAnswer: 'hhh',
    userAnswerStatus: '1',
  },
  {
    questionId: 4,
    questionName: 'What is your name',
    options: ['aaa', 'bbb', 'ccc', 'ddd'],
    correctAnswer: 'lll',
    userAnswer: 'LLL',
    userAnswerStatus: '1',
  },
  {
    questionId: 5,
    questionName: 'What is your name',
    options: ['aaa', 'bbb', 'ccc', 'ddd'],
    correctAnswer: 'ppp',
    userAnswer: 'PPP',
    userAnswerStatus: '1',
  },
];

export const TestBottomPopUp = () => {
  let correctAnswer = results[0]['correctAnswer'];
  let wrongAnswer = results[0]['userAnswer'];
  console.log(correctAnswer);
  console.log(wrongAnswer);

  const dispatch=useDispatch()
  const mockState = useSelector(state => state.filterState.mockState);

  return (
    
    <Modal
    animationType="fade"
    transparent={true}
    visible={mockState}
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
      {dispatch(setMockstate())}
    }}>
      <View style={styles.container} >

     
    <View style={styles.modalContainer}>
      <View style={{flexDirection:"row", marginLeft:60}}>
      <Text style={styles.questionid}>Question{results[0].questionId}</Text>
      <TouchableOpacity onPress={() => {dispatch(setMockstate())}}>
      <Image source={require('../assets/images/icn_close_filter.png')} style={styles.image}/>
      </TouchableOpacity>
      </View>
      <Text style={styles.questionname}>{results[0].questionName}</Text>

      {results[0]?.options.map(option => (
        <View>
          {correctAnswer == option ? (
          
            <View style={styles.optioncheckCorrectView}>
              <Image
                source={require('../assets/images/icn_optionchecked.png')}
                style={styles.IconChecked}
              />
              <Text style={styles.optionCheck}>{option}</Text>
            </View>
          ) : (
            <>
              {wrongAnswer === option ? (
                <View style={styles.optionCheckView}>
                  <Image
                    source={require('../assets/images/icn_optionwrong.png')}
                    style={styles.IconChecked}
                  />
                  <Text style={styles.optionCheck}>{option}</Text>
                </View>
              ) : (
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
      {results[0].userAnswerStatus=== '1' ? (
        <View>
          <Text style={styles.status}>Correct Answer</Text>
          </View>
      ):(
        <View>
        
        <Text style={styles.status}>Wrong Answer</Text>
        </View>

      )}
   
    </View>
    </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor: '#000000AA',
    
  },
  modalContainer:{
    height: 612,
    borderRadius: 20,
    backgroundColor:"#FFFFFF",
    marginTop:Platform.OS==='ios'?350:280,
  
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
    marginHorizontal:20
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
    marginHorizontal:20
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
    backgroundColor: '#1EAB0D',

    marginBottom: 20,
    marginRight: 10,
    flexDirection: 'row',
    marginHorizontal:20,
  
  },
  questionid:{

    height: 22,
    color: '#2B2B2B',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0,
    lineHeight: 22,
    marginTop: 50,
    marginLeft:70
   
  },
  questionname:{
    height: 44,
    color: '#2B2B2B',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0,
    lineHeight: 22,
    marginTop: 35,
    marginLeft:25,
    marginBottom:20
 
   
  },
  image:{
    marginTop:50,
    marginLeft:140
  },
  status:{
    height:17,
    color: '#1EAB0D',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0,
    lineHeight:17,
    marginLeft:20
  }
});
