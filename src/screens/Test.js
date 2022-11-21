import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const data = [
  {
    questionId: 1,
    question: "What's the biggest planet in our solar system?",status:false,
    options: [
      {
        option1: 'Jupiter',
        option2: 'Saturn',
        option3: 'Neptune',
        option4: 'Mercury',
      },
    ],

    correctAnswer: 'Jupiter',
  },
  {
    questionId: 2,
    question: 'What attraction in India is one of the famus in the world?',status:false,
    options: [
      {
        option1: 'Jupiter',
        option2: 'Saturn',
        option3: 'Neptune',
        option4: 'Mercury',
      },
    ],
    correctAnswer: 'Taj mahal',
  },
  {
    questionId: 3,
    question: 'What land animal can open its mouth the widest?',status:false,
    options: [
      {
        option1: 'Jupiter',
        option2: 'Saturn',
        option3: 'Neptune',
        option4: 'Mercury',
      },
    ],
    correctAnswer: 'hippo',
  },
  {
    questionId: 4,
    question: 'What is the largest animal on Earth?',status:false,
    options: [
      {
        option1: 'Jupiter',
        option2: 'Saturn',
        option3: 'Neptune',
        option4: 'Mercury',
      },
    ],
    correctAnswer: 'elephant',
  },
  {
    questionId: 5,
    question: 'What is the only flying mammal?',
    status:false,
    options: [
      {
        option1: 'Jupiter',
        option2: 'Saturn',
        option3: 'Neptune',
        option4: 'Mercury',
      },
    ],
    correctAnswer: 'frog',
  },
];
export const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);

  const [nextClick,setNextClick]=useState();


 
  const handleNextButtonCLick = () => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    setClicked1(false);
    setClicked2(false);
    setClicked3(false);
    setClicked4(false);
  };

  const handlePreviousClick = () => {
      const PreviousQuestion = currentQuestion - 1;
      setCurrentQuestion(PreviousQuestion);
    
  }

   const nextQuestion = currentQuestion + 1;

  // const validateAnswer=(selectedOption)=>{
  //   let correctAnswer = data[currentQuestion]['correctAnswer'];
  //   setCurrentOptionSelected(currentOptionSelected);
  //   setCorrectAnswer(correctAnswer)

  //   if(selectedOption==correctAnswer){
  //     setScore(score+1)

  //   }

  // }
  return (
    <View style={styles.maincontainer}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.testname}>Model Test</Text>

          <View style={styles.middlecontainer}>
            <Text style={styles.questionnumber}>
              Question {nextQuestion} of {data.length}
            </Text>

            <View>
              <Text style={styles.question}>
                {data[currentQuestion].question}
              </Text>
              <View style={{marginTop: 40}}>

                

      
                {data[currentQuestion].options.map(item => (
              
          

                  <View>
                    {/* <TouchableOpacity
                     key={option.questionId}
                     onPress={()=>validateAnswer(option)}>
                         <View style={styles.option}>
                         <Image source={require('../assets/images/icn_optionunchecked.png')} style={styles.IconUnchecked}/>
                       <Text style={styles.optionUncheck}>{option}</Text>
                       {option==currentOptionSelected?(
                        <>
                          <View style={styles.optionClicked}>
                          <Text>{option}</Text>
                          </View>
                        </>
                       ):(
                        <></>
                       )
                       
                    }
                       </View>
                     </TouchableOpacity> */}


                   

                    <TouchableOpacity
                      onPress={() => {
                        setClicked1(true),setClicked2(false),setClicked3(false),setClicked4(false)
                        console.log(item.option1)
                        // {data[currentQuestion].status===option1}
                        console.log(data[currentQuestion].status)
                      }}>
                      {!clicked1 ? (
                        <View style={styles.optionUncheckView}>
                          <Image
                            source={require('../assets/images/icn_optionunchecked.png')}
                            style={styles.IconUnchecked}
                          />
                          <Text style={styles.optionUncheck}>
                            {item.option1}
                          </Text>
                        </View>
                      ) : (
                        <View style={styles.optionCheckView}>
                          <Image
                            source={require('../assets/images/Simle.png')}
                            style={styles.IconChecked}
                          />
                          <Text style={styles.optionCheck}>{item.option1}</Text>
                        </View>
                      )}
                    </TouchableOpacity>


                    <TouchableOpacity
                      onPress={() => {
                        setClicked1(false),setClicked2(true),setClicked3(false),setClicked4(false)
                        console.log(item.option2)
                      }}>
                      {!clicked2 ? (
                        <View style={styles.optionUncheckView}>
                          <Image
                            source={require('../assets/images/icn_optionunchecked.png')}
                            style={styles.IconUnchecked}
                          />
                          <Text style={styles.optionUncheck}>
                            {item.option2}
                          </Text>
                        </View>
                      ) : (
                        <View style={styles.optionCheckView}>
                          <Image
                            source={require('../assets/images/Simle.png')}
                            style={styles.IconChecked}
                          />
                          <Text style={styles.optionCheck}>{item.option2}</Text>
                        </View>
                      )}
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => {
                        setClicked1(false),setClicked2(false),setClicked3(true),setClicked4(false)
                        console.log(item.option3)
                      }}>
                      {!clicked3 ? (
                        <View style={styles.optionUncheckView}>
                          <Image
                            source={require('../assets/images/icn_optionunchecked.png')}
                            style={styles.IconUnchecked}
                          />
                          <Text style={styles.optionUncheck}>
                            {item.option3}
                          </Text>
                        </View>
                      ) : (
                        <View style={styles.optionCheckView}>
                          <Image
                            source={require('../assets/images/Simle.png')}
                            style={styles.IconChecked}
                          />
                          <Text style={styles.optionCheck}>{item.option3}</Text>
                        </View>
                      )}
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => {
                        setClicked1(false),setClicked2(false),setClicked3(false),setClicked4(true)
                        console.log(item.option4)
                      }}>
                      {!clicked4 ? (
                        <View style={styles.optionUncheckView}>
                          <Image
                            source={require('../assets/images/icn_optionunchecked.png')}
                            style={styles.IconUnchecked}
                          />
                          <Text style={styles.optionUncheck}>
                            {item.option4}
                          </Text>
                        </View>
                      ) : (
                        <View style={styles.optionCheckView}>
                          <Image
                            source={require('../assets/images/Simle.png')}
                            style={styles.IconChecked}
                          />
                          <Text style={styles.optionCheck}>{item.option4}</Text>
                        </View>
                      )}
                    </TouchableOpacity>

                    {/* <TouchableOpacity>
                     <View style={styles.optionCheckView}>
                         <Image source={require('../assets/images/Simle.png')} style={styles.IconChecked}/>
                         <Text style={styles.optionCheck}>{option}</Text>
                      </View>
                     </TouchableOpacity> */}
                  </View>
               
                ))}
              </View>
            </View>
          </View>
        </View>

        <View style={styles.bottomview}>
          <View style={styles.innerbtm}>
            <Text style={styles.chapter}>Chapter 3</Text>
            <Text style={styles.topic}>Setting up a new project</Text>
          </View>
          <TouchableOpacity onPress={handlePreviousClick}>
            <Image
              source={require('../assets/images/Left.png')}
              style={styles.left}
            />
          </TouchableOpacity>

          {nextQuestion < data.length ? (
            <>
              <TouchableOpacity onPress={handleNextButtonCLick}>
                <Image
                  source={require('../assets/images/Right.png')}
                  style={styles.right}
                />
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity>
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
    marginTop: 80,
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
    marginTop: 35,
    marginLeft: 10,
  },
  right: {
    marginTop: 35,
    marginLeft: 40,
  },
  buttonview: {
    height: 36,
    width: 78,
    backgroundColor: '#EE5C4D',
    borderRadius: 4.8,
    marginTop: 25,
    marginLeft: 10,
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
});
