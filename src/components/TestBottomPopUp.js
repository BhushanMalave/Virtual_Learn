import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Modal} from 'react-native';
import {setMockstate} from '../redux/ReduxPersist/FilterSlice';
import {useDispatch, useSelector} from 'react-redux';

const data = {
  questionId: 1,
  questionName: 'What is your name',
  option_1: 'aaa',
  option_2: 'bbb',
  option_3: 'ccc',
  option_4: 'ddd',
  options: ['aaa', 'bbb', 'ccc', 'ddd'],
  correctAnswer: 'ccc',
  userAnswer: 'ccc',
  userAnswerStatus: '1',
};
export const TestBottomPopUp = () => {
  let correctAnswer = data.correctAnswer;
  let wrongAnswer = data.userAnswer;
  console.log(correctAnswer);
  console.log(wrongAnswer);

  const dispatch = useDispatch();
  const mockState = useSelector(state => state.filterState.mockState);
  const data2 = useSelector(state => state.testdata.correctAnswers);
  console.log(data2);

  const resultanswers = useSelector(state => state.testdata.resultAnswers);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={mockState}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        {
          dispatch(setMockstate());
        }
      }}>
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <View style={{flexDirection: 'row', marginLeft: 60}}>
            <Text style={styles.questionid}>Question{data2?.questionId}</Text>
            <TouchableOpacity
              onPress={() => {
                dispatch(setMockstate());
              }}>
              <Image
                source={require('../assets/images/icn_close_filter.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.questionname}>{data2?.questionName}</Text>

          <View>
            {data2?.correctAnswer === data2?.option_1 ? (
              <View style={styles.optioncheckCorrectView}>
                <Image
                  source={require('../assets/images/icn_optionchecked.png')}
                  style={styles.IconChecked}
                />
                <Text style={styles.optionCheck}>{data2?.option_1}</Text>
              </View>
            ) : (
              <>
                {data2?.userAnswer === data2?.option_1 ? (
                  <View style={styles.optionCheckView}>
                    <Image
                      source={require('../assets/images/icn_optionwrong.png')}
                      style={styles.IconChecked}
                    />
                    <Text style={styles.optionCheck}>{data2?.option_1}</Text>
                  </View>
                ) : (
                  <View style={styles.optionUncheckView}>
                    <Image
                      source={require('../assets/images/icn_optionunchecked.png')}
                      style={styles.IconUnchecked}
                    />
                    <Text style={styles.optionUncheck}>{data2?.option_1}</Text>
                  </View>
                )}
              </>
            )}
          </View>

          <View>
            {data2?.correctAnswer === data2?.option_2 ? (
              <View style={styles.optioncheckCorrectView}>
                <Image
                  source={require('../assets/images/icn_optionchecked.png')}
                  style={styles.IconChecked}
                />
                <Text style={styles.optionCheck}>{data2?.option_2}</Text>
              </View>
            ) : (
              <>
                {data2?.userAnswer === data2?.option_2 ? (
                  <View style={styles.optionCheckView}>
                    <Image
                      source={require('../assets/images/icn_optionwrong.png')}
                      style={styles.IconChecked}
                    />
                    <Text style={styles.optionCheck}>{data2?.option_2}</Text>
                  </View>
                ) : (
                  <View style={styles.optionUncheckView}>
                    <Image
                      source={require('../assets/images/icn_optionunchecked.png')}
                      style={styles.IconUnchecked}
                    />
                    <Text style={styles.optionUncheck}>{data2?.option_2}</Text>
                  </View>
                )}
              </>
            )}
          </View>

          <View>
            {data2?.correctAnswer === data2?.option_3 ? (
              <View style={styles.optioncheckCorrectView}>
                <Image
                  source={require('../assets/images/icn_optionchecked.png')}
                  style={styles.IconChecked}
                />
                <Text style={styles.optionCheck}>{data2?.option_3}</Text>
              </View>
            ) : (
              <>
                {data2?.userAnswer === data2?.option_3 ? (
                  <View style={styles.optionCheckView}>
                    <Image
                      source={require('../assets/images/icn_optionwrong.png')}
                      style={styles.IconChecked}
                    />
                    <Text style={styles.optionCheck}>{data2?.option_3}</Text>
                  </View>
                ) : (
                  <View style={styles.optionUncheckView}>
                    <Image
                      source={require('../assets/images/icn_optionunchecked.png')}
                      style={styles.IconUnchecked}
                    />
                    <Text style={styles.optionUncheck}>{data2?.option_3}</Text>
                  </View>
                )}
              </>
            )}
          </View>

          <View>
            {data2?.correctAnswer === data2?.option_4 ? (
              <View style={styles.optioncheckCorrectView}>
                <Image
                  source={require('../assets/images/icn_optionchecked.png')}
                  style={styles.IconChecked}
                />
                <Text style={styles.optionCheck}>{data2?.option_4}</Text>
              </View>
            ) : (
              <>
                {data2?.userAnswer === data2?.option_4 ? (
                  <View style={styles.optionCheckView}>
                    <Image
                      source={require('../assets/images/icn_optionwrong.png')}
                      style={styles.IconChecked}
                    />
                    <Text style={styles.optionCheck}>{data2?.option_4}</Text>
                  </View>
                ) : (
                  <View style={styles.optionUncheckView}>
                    <Image
                      source={require('../assets/images/icn_optionunchecked.png')}
                      style={styles.IconUnchecked}
                    />
                    <Text style={styles.optionUncheck}>{data2?.option_4}</Text>
                  </View>
                )}
              </>
            )}
          </View>

          {data2?.userAnswerStatus === '1' ? (
            <View>
              <Text style={styles.status}>Correct Answer</Text>
            </View>
          ) : (
            <View>
              <Text style={styles.statusred}>Wrong Answer</Text>
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
  modalContainer: {
    height: 612,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginTop: Platform.OS === 'ios' ? 350 : 280,
  },
  optionUncheck: {
    height: 20,
    color: '#373737',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? '500':'normal',
    fontSize: 14,
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
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? '500':'normal',
    fontSize: 14,
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
    marginHorizontal: 20,
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
    marginHorizontal: 20,
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
    marginHorizontal: 20,
  },
  questionid: {
    height: 22,
    color: '#2B2B2B',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? '600':'normal',
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: 22,
    marginTop: 50,
    marginLeft: 70,
  },
  questionname: {
    height: 44,
    color: '#2B2B2B',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: 22,
    marginTop: 35,
    marginLeft: 25,
    marginBottom: 20,
  },
  image: {
    marginTop: 50,
    marginLeft: 140,
  },
  status: {
    height: 17,
    color: '#1EAB0D',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 17,
    marginLeft: 20,
  },
  statusred: {
    height: 17,
    color: 'red',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 17,
    marginLeft: 20,
  },
});
