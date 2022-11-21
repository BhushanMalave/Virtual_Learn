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
    question: "What's the biggest planet in our solar system?",
    options: ['Jupiter', 'Saturn', 'Neptune', 'Mercury'],
    correctAnswer: 'Jupiter',
  },
  {
    questionId: 2,
    question: 'What attraction in India is one of the famus in the world?',
    options: ['Jupiter', 'Saturn', 'Neptune', 'Mercury'],
    correctAnswer: 'Taj mahal',
  },
  {
    questionId: 3,
    question: 'What land animal can open its mouth the widest?',
    options: ['Jupiter', 'Saturn', 'Neptune', 'Mercury'],
    correctAnswer: 'hippo',
  },
  {
    questionId: 4,
    question: 'What is the largest animal on Earth?',
    options: ['Jupiter', 'Saturn', 'Neptune', 'Mercury'],
    correctAnswer: 'elephant',
  },
  {
    questionId: 5,
    question: 'What is the only flying mammal?',
    options: ['Jupiter', 'Saturn', 'Neptune', 'Mercury'],
    correctAnswer: 'frog',
  },
];
export const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctAnswer,setCorrectAnswer]=useState(null);
  const[score,setScore]=useState(0)
  const [clicked,setClicked]=useState(false)

  const handleNextButtonCLick = () => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
  };
  const handlePreviousClick=()=>{
    const PreviousQuestion = currentQuestion - 1;
    setCurrentQuestion(PreviousQuestion);
  }

  const nextQuestion = currentQuestion + 1;

  const validateAnswer=(selectedOption)=>{
    let correctAnswer = data[currentQuestion]['correctAnswer'];
    setCurrentOptionSelected(currentOptionSelected);
    setCorrectAnswer(correctAnswer)

    if(selectedOption==correctAnswer){
      setScore(score+1)

    }
    
  }
  return (
    <View style={styles.maincontainer}>
      <ScrollView>
        <View style={styles.container}>
          <Image />
          <Text style={styles.testname}>Model Test</Text>

          <View style={styles.middlecontainer}>
            <Text style={styles.questionnumber}>
              Question {nextQuestion} of {data.length}
            </Text>

            <View>
              <Text style={styles.question}>
                {data[currentQuestion].question}
              </Text>
              <View style={{marginTop:40}}>

              {data[currentQuestion]?.options.map(option => (
                  
                 <View>
                     <TouchableOpacity
                     key={option.questionId}
                     onPress={()=>validateAnswer(option)}>
                         <View style={styles.option}>
                       <Text>{option}</Text>
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
                     </TouchableOpacity>
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
              <TouchableOpacity >
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
    borderWidth: 1,
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
    borderWidth: 1,
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
  option:{
    height:46,
    borderRadius:6,
    backgroundColor:"white",
    borderWidth:1,
    marginBottom:20,
    marginRight:10,

   
  },
  optionClicked:{
    height:46,
    borderRadius:6,
    backgroundColor:"pink",
    borderWidth:1,
   
    marginRight:10,
  }
});
