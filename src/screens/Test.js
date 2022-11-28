import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {TimerComponent} from '../components/TimerComponent';
import CountDown from 'react-native-countdown-component';
import {useDispatch, useSelector} from 'react-redux';
import {SubmitTest} from '../authorization/Auth';
import {
  setStatus1,
  setStatus2,
  setStatus3,
  setStatus4,
  addAnswerData,
  addTestId,
  removeAll,
  setTestPercentage,
} from '../redux/ReduxPersist/TestSlice';
import {timing} from 'react-native-reanimated';
const data = {
  courseName: 'bcbd',
  chapterNumber: 2,
  chapterName: 'bdjhbh',
  testId: 1,
};

export const Test = ({navigation}) => {
  const data1 = useSelector(state => state.testdata.question);

  const token = useSelector(state => state.userDetails.token);
  const testid = useSelector(state => state.testdata.testId);
  const userAnswers = useSelector(state => state.testdata.userAnswers);
  const dispatch = useDispatch();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const [previousQuestion, setPreviousQuestion] = useState();

  const handleNextButtonCLick = () => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
  };

  const handlePreviousClick = () => {
    const PreviousQuestion = currentQuestion - 1;
    setCurrentQuestion(PreviousQuestion);
  };

  const nextQuestion = currentQuestion + 1;
  const PreviousQuestion = currentQuestion - 1;
  const [back, setBack] = useState(false);
  const [submit, setSubmit] = useState(false);
  const createTwoButtonAlert = () =>
    Alert.alert('', 'Are you sure you want to quit the exam?', [
      {
        text: 'Cancel',
        onPress: () => {setBack(false),
        navigation.navigate('ChapterScreen')},
      },
      {
        text: 'Quit',
        style: {fontWeight: 'bold'},
        onPress: () => {
          dispatch(removeAll());
          console.log('hweyyy', userAnswers);
          navigation.navigate('CourseScreen')
        },
      },
    ]);
  const handleSubmit = () =>
    Alert.alert(
      'Do you want to end the test?\n',

      'You still have 50 second remaining \n\n If you want to check your answer again, press cancel button. If you want to end the test and submit your answers you can press submit \n button',

      [
        {
          text: 'Cancel',
          onPress: () => setSubmit(false),
        },
        {
          text: 'Submit',
          style: {fontWeight: 'bold'},
          onPress: async () => {
            const body = {
              testId: testid,
              userAnswers: userAnswers,
            };
            const res = await SubmitTest(token, body);
            dispatch(setTestPercentage(res));
            if (res) {
              navigation.navigate('CongratulationScreen', data);
              dispatch(removeAll());
            }
          },
        },
      ],
    );

  const timeOver = () =>
    Alert.alert(
      'Time is up!',
      'Click on Submit to Submit the Test',

      [
        {
          text: 'Submit',
          style: {fontWeight: 'bold'},
          onPress: async () => {
            const body = {
              testId: testid,
              userAnswers: userAnswers,
            };
            const res = await SubmitTest(token, body);
            console.log(res);
            if (res) {
              navigation.navigate('CongratulationScreen', data);
              dispatch(removeAll());
            }
          },
        },
      ],
    );
  const timimg = () => {
    const duration = data1?.testDuration;
    const time = duration.split(':');

    const hours = Number(time[0]);
    const m = time[1];

    const mins = m / 60;

    const total_hours = hours + mins;
    console.log(total_hours);

    return Number(total_hours);
  };

  return (
    <View style={styles.maincontainer}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              setBack(!back);
              createTwoButtonAlert();
            }}>
            <Image
              source={require('../assets/images/icn_close_filter.png')}
              style={styles.back}
            />
          </TouchableOpacity>
          <Text style={styles.testname}>Model Test {data1?.testId}</Text>
          <View style={{flexDirection: 'row', marginLeft: 160, marginTop: 20}}>
            <Image
              source={require('../assets/images/icn_testduration.png')}
              style={{marginTop: 9}}
            />
            <View>
              <CountDown
                until={60 * 30 + 0}
                size={14}
                onFinish={() => timeOver()}
                digitStyle={{backgroundColor: 'transparent'}}
                digitTxtStyle={{color: '#2BB5F4'}}
                timeToShow={['M', 'S']}
                timeLabels={{m: null, s: null}}
                showSeparator
                separatorStyle={{color: '#2BB5F4'}}
                running={back || submit ? false : true}
              />
            </View>
            <Text style={styles.countdown}>secs remaining</Text>
          </View>

          <View style={styles.middlecontainer}>
            <Text style={styles.questionnumber}>
              Question {nextQuestion} of {data1?.questions.length}
            </Text>

            <View>
              <Text style={styles.question}>
                {data1?.questions[currentQuestion].questionName}
              </Text>

              <View style={{marginTop: 40}}>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(
                        setStatus1(
                          data1?.questions[currentQuestion].questionId,
                        ),
                      );
                      const body = {
                        questionId:
                          data1?.questions[currentQuestion].questionId,
                        correctAnswer:
                          data1?.questions[currentQuestion].option_1,
                      };
                      dispatch(addAnswerData(body));
                      dispatch(addTestId(data1.testId));
                    }}>
                    {!data1?.questions[currentQuestion].state1 ? (
                      <View style={styles.optionUncheckView}>
                        <Image
                          source={require('../assets/images/icn_optionunchecked.png')}
                          style={styles.IconUnchecked}
                        />
                        <Text style={styles.optionUncheck}>
                          {data1?.questions[currentQuestion]?.option_1}
                        </Text>
                      </View>
                    ) : (
                      <View style={styles.optionCheckView}>
                        <Image
                          source={require('../assets/images/Simle.png')}
                          style={styles.IconChecked}
                        />
                        <Text style={styles.optionCheck}>
                          {data1?.questions[currentQuestion]?.option_1}
                        </Text>
                      </View>
                    )}
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      dispatch(
                        setStatus2(
                          data1?.questions[currentQuestion].questionId,
                        ),
                      );
                      const body = {
                        questionId:
                          data1?.questions[currentQuestion].questionId,
                        correctAnswer:
                          data1?.questions[currentQuestion].option_2,
                      };
                      dispatch(addAnswerData(body));
                      dispatch(addTestId(data1.testId));
                    }}>
                    {!data1?.questions[currentQuestion]?.state2 ? (
                      <View style={styles.optionUncheckView}>
                        <Image
                          source={require('../assets/images/icn_optionunchecked.png')}
                          style={styles.IconUnchecked}
                        />
                        <Text style={styles.optionUncheck}>
                          {data1?.questions[currentQuestion]?.option_2}
                        </Text>
                      </View>
                    ) : (
                      <View style={styles.optionCheckView}>
                        <Image
                          source={require('../assets/images/Simle.png')}
                          style={styles.IconChecked}
                        />
                        <Text style={styles.optionCheck}>
                          {data1?.questions[currentQuestion]?.option_2}
                        </Text>
                      </View>
                    )}
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      dispatch(
                        setStatus3(
                          data1?.questions[currentQuestion].questionId,
                        ),
                      );
                      const body = {
                        questionId:
                          data1?.questions[currentQuestion].questionId,
                        correctAnswer:
                          data1?.questions[currentQuestion].option_3,
                      };
                      dispatch(addAnswerData(body));
                      dispatch(addTestId(data1.testId));
                    }}>
                    {!data1?.questions[currentQuestion]?.state3 ? (
                      <View style={styles.optionUncheckView}>
                        <Image
                          source={require('../assets/images/icn_optionunchecked.png')}
                          style={styles.IconUnchecked}
                        />
                        <Text style={styles.optionUncheck}>
                          {data1?.questions[currentQuestion]?.option_3}
                        </Text>
                      </View>
                    ) : (
                      <View style={styles.optionCheckView}>
                        <Image
                          source={require('../assets/images/Simle.png')}
                          style={styles.IconChecked}
                        />
                        <Text style={styles.optionCheck}>
                          {data1?.questions[currentQuestion]?.option_3}
                        </Text>
                      </View>
                    )}
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      dispatch(
                        setStatus4(
                          data1?.questions[currentQuestion].questionId,
                        ),
                      );
                      const body = {
                        questionId:
                          data1?.questions[currentQuestion].questionId,
                        correctAnswer:
                          data1?.questions[currentQuestion].option_4,
                      };
                      dispatch(addAnswerData(body));
                      dispatch(addTestId(data1.testId));
                    }}>
                    {!data1?.questions[currentQuestion]?.state4 ? (
                      <View style={styles.optionUncheckView}>
                        <Image
                          source={require('../assets/images/icn_optionunchecked.png')}
                          style={styles.IconUnchecked}
                        />
                        <Text style={styles.optionUncheck}>
                          {data1?.questions[currentQuestion]?.option_4}
                        </Text>
                      </View>
                    ) : (
                      <View style={styles.optionCheckView}>
                        <Image
                          source={require('../assets/images/Simle.png')}
                          style={styles.IconChecked}
                        />
                        <Text style={styles.optionCheck}>
                          {data1?.questions[currentQuestion]?.option_4}
                        </Text>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.bottomview}>
          <View style={styles.innerbtm}>
            <Text style={styles.chapter}>Chapter 3</Text>
            <Text style={styles.topic}>Setting up a new project</Text>
          </View>

          {PreviousQuestion === -1 ? (
            <>
              <View style={{marginLeft: 33}}></View>
            </>
          ) : (
            <>
              <TouchableOpacity
                onPress={handlePreviousClick}
                style={styles.left}>
                <Image source={require('../assets/images/Left.png')} />
              </TouchableOpacity>
            </>
          )}

          {nextQuestion < data1?.questions.length ? (
            <>
              <TouchableOpacity
                onPress={handleNextButtonCLick}
                style={styles.right}>
                <Image source={require('../assets/images/Right.png')} />
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => {
                  setSubmit(!submit);
                  handleSubmit({navigation});
                  // navigation.navigate('CongratulationScreen')
                }}>
                <View style={styles.buttonview}>
                  <Text style={styles.button}>Submit</Text>
                </View>
              </TouchableOpacity>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
  container: {
    margin: 25,

    height: 700,
  },
  testname: {
    height: 35,
    color: '#2B2B2B',
    fontFamily: 'Biko',
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 0,
    lineHeight: 25,
    marginTop: 50,
  },
  middlecontainer: {
    marginLeft: 20,
    marginTop: 60,
  },
  bottomview: {
    height: 95,
    flexDirection: 'row',

    backgroundColor: '#2BB5F4',
  },
  innerbtm: {
    flexDirection: 'column',

    width: '60%',
    marginLeft: 25,
  },
  chapter: {
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 20,
  },
  topic: {
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    color: '#FFFFFF',
    fontSize: 12,
  },
  left: {
    height: 25,
    marginTop: 30,
    marginLeft: 5,
    padding: 5,
  },
  right: {
    height: 25,
    marginLeft: 35,
    marginTop: 30,
    padding: 5,
  },
  buttonContainer: {
    height: 35,
    marginTop: 26,
    width: 78,
    marginLeft: 5,
  },
  buttonview: {
    height: 36,
    width: 78,
    backgroundColor: '#EE5C4D',
    borderRadius: 4.8,
  },

  button: {
    height: 21,
    color: '#FFFFFF',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0,
    lineHeight: 20,
    alignSelf: 'center',
    marginTop: 8,
  },
  questionnumber: {
    height: 17,
    color: '#7A7A7A',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 17,
  },
  question: {
    height: 52,
    color: '#2B2B2B',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0,
    lineHeight: 26,
    marginTop: 15,
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
    backgroundColor: '#EE5C4D',

    marginBottom: 20,
    marginRight: 10,
    flexDirection: 'row',
  },
  countdown: {
    height: 20,
    color: '#2BB5F4',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0,
    lineHeight: 20,
    marginTop: 8,
  },
  leftlast: {
    marginTop: 35,
    marginLeft: 10,
    opacity: 0.5,
  },
  back: {
    marginTop: 40,
  },
});
