import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import { min } from 'react-native-reanimated';
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

export const Test = ({navigation}) => {
  const data1 = useSelector(state => state.testdata.question);
  
  const token = useSelector(state => state.userDetails.token);
  const testid = useSelector(state => state.testdata.testId);
  const userAnswers = useSelector(state => state.testdata.userAnswers);
  console.log("+++",userAnswers)
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

let [ START_MINUTES , setStartMinutes] = useState(0);
let [ START_SECOND, setStartSeconds] = useState(0);


useEffect(()=>{
if(data1?.testDuration)
{
  const dur = data1?.testDuration;
  const time = dur.split(':');

  const mins = time[1];
  const secs = time[2];
  START_MINUTES = mins;
  START_SECOND = secs;
}
},[data1?.testDuration])


  const START_DERATION = 10;

  const [currentMinutes, setMinutes] = useState(START_MINUTES);
  const [currentSeconds, setSeconds] = useState(START_SECOND);
  const [isStop, setIsStop] = useState(false);
  const [duration, setDuration] = useState(START_DERATION);
  const [isRunning, setIsRunning] = useState(false);

  let [submit, setSubmit] = useState(true);

  const startHandler = () => {
    setDuration(parseInt(START_SECOND, 10) + 60 * parseInt(START_MINUTES, 10));

    setIsRunning(true);
  };

  const stopHandler = () => {
    // stop timer
    setIsStop(true);
    setIsRunning(false);
  };
  const resetHandler = () => {
    setMinutes(START_MINUTES);
    setSeconds(START_SECOND);
    setIsRunning(false);
    setIsStop(false);
    setDuration(START_DERATION);
  };

  const resumeHandler = () => {
    let newDuration =
      parseInt(currentMinutes, 10) * 60 + parseInt(currentSeconds, 10);
    setDuration(newDuration);

    setIsRunning(true);
    setIsStop(false);
  };

  useEffect(() => {
    startHandler();
  }, [submit]);

  useEffect(() => {
    if (isRunning === true) {
      let timer = duration;
      var minutes, seconds;
      const interval = setInterval(function () {
        if (--timer == -1) {
          stopHandler();
          timeOver();
        } else {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);

          minutes = minutes < 10 ? '0' + minutes : minutes;
          seconds = seconds < 10 ? '0' + seconds : seconds;

          setMinutes(minutes);
          setSeconds(seconds);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const createTwoButtonAlert = () =>
    Alert.alert('', 'Are you sure you want to quit the exam?', [
      {
        text: 'Cancel',
        onPress: () => {
          resumeHandler();
        },
      },
      {
        text: 'Quit',
        style: {fontWeight: 'bold'},
        onPress: () => {
          dispatch(removeAll());
          navigation.goBack();

        },
      },
    ]);
  const handleSubmit = () =>
    Alert.alert(
      'Do you want to end the test?\n',

      'You still have ' +
        currentMinutes +
        ':' +
        currentSeconds +
        ' seconds remaining\n\n If you want to check your answer again, press cancel button. If you want to end the test and submit your answers you can press submit \n button',

      [
        {
          text: 'Cancel',
          onPress: () => {
            resumeHandler();
            setSubmit(true);
          },
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
              dispatch(removeAll());
              navigation.navigate('CongratulationScreen');
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
            console.log(userAnswers)
            const res = await SubmitTest(token, body);
            console.log(res)
            dispatch(setTestPercentage(res));
            if (res) {
              dispatch(removeAll());
              navigation.navigate('CongratulationScreen');
            }
          },
        },
      ],
    );

  return (
    <View style={styles.maincontainer}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              stopHandler();
              createTwoButtonAlert();
            }}>
            <Image
              source={require('../assets/images/icn_close_filter.png')}
              style={styles.back}
            />
          </TouchableOpacity>
          <Text style={styles.testname}>{data1?.testName}</Text>
          <View style={{flexDirection: 'row', marginLeft: 185, marginTop: Platform.OS==='ios'?20:0}}>
            <Image
              source={require('../assets/images/icn_testduration.png')}
              style={{marginTop: 9}}
            />

            <Text style={styles.countdown}>
              {' '}
              {currentMinutes}:{currentSeconds} secs remaining
      
            </Text>
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
            <Text style={styles.chapter}>Chapter {data1?.chapterNumber}</Text>
            <Text style={styles.topic}>{data1?.chapterName}</Text>
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
                  (submit = false), stopHandler(), handleSubmit({navigation});
                  // console.log(submit)
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
    backgroundColor:"white"
  },
  container: {
    margin: 25,

    height: 700,
  },
  testname: {
    // height: 35,
    color: '#2B2B2B',
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
    fontSize: 26,
    letterSpacing: 0,
    lineHeight: 25,
    marginTop: Platform.OS==='ios'?50:35,
  },
  middlecontainer: {
    marginLeft: 20,
    marginTop: 60,
  },
  bottomview: {
    height: 95,
    flexDirection: 'row',

    backgroundColor: '#2BB5F4',
    marginTop:Platform.OS==='ios'?0:-90
  },
  innerbtm: {
    flexDirection: 'column',

    width: '60%',
    marginLeft: 25,
  },
  chapter: {
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
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
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontSize: 16,
    fontWeight: Platform.OS == 'ios' ? '600':'normal',
    letterSpacing: 0,
    lineHeight: 20,
    alignSelf: 'center',
    marginTop: 8,
  },
  questionnumber: {
    height: 17,
    color: '#7A7A7A',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontSize: 14,
    fontWeight: Platform.OS == 'ios' ? '500':'normal',
    letterSpacing: 0,
    lineHeight: 17,
  },
  question: {
    height: 52,
    color: '#2B2B2B',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontSize: 18,
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
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
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontSize: 14,
    fontWeight: Platform.OS == 'ios' ? '500':'normal',
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
    fontSize: 14,
    fontWeight: Platform.OS == 'ios' ? '500':'normal',
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
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontSize: 14,
    fontWeight: Platform.OS == 'ios' ? '600':'normal',
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
    marginTop:Platform.OS==='ios'?40:0,
  },
});
