import {iteratorSymbol} from 'immer/dist/internal';
import React, {useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Test} from '../screens/Test';

const data = [
  {
    questionId: 1,
    question: "What's the biggest planet in our solar system?",
    status: false,
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
    question: 'What attraction in India is one of the famus in the world?',
    status: false,
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
    question: 'What land animal can open its mouth the widest?',
    status: false,
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
    question: 'What is the largest animal on Earth?',
    status: false,
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
    status: false,
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
export const TestBottomPopUp = () => {
  const [clicked1, SetClicked1] = useState(1);
  const [correctAnswer1, setCorrectanswer1] = useState(1);
  const [userClicked1, SetUserClicked1] = useState(1);

  const [clicked2, SetClicked2] = useState(1);
  const [correctAnswer2, setCorrectanswer2] = useState(0);
  const [userClicked2, SetUserClicked2] = useState(0);

  const [clicked3, SetClicked3] = useState(1);
  const [correctAnswer3, setCorrectanswer3] = useState(0);
  const [userClicked3, SetUserClicked3] = useState(0);

  const [clicked4, SetClicked4] = useState(1);
  const [correctAnswer4, setCorrectanswer4] = useState(0);
  const [userClicked4, SetUserClicked4] = useState(0);

  return (
    <>
      <View style={styles.container}>
        <Text>Question{data[0].questionId}</Text>
        <Text>{data[0].question}</Text>
        {clicked1 == 1 ? (
          <View>
            {correctAnswer1 == 0 && userClicked1 == 0 ? (
              <View style={styles.optionUncheckView}>
                <Image
                  source={require('../assets/images/icn_optionunchecked.png')}
                  style={styles.IconUnchecked}
                />
                <Text style={styles.optionUncheck}>option1</Text>
              </View>
            ) : correctAnswer1 == 1 && userClicked1 == 0 ? (
              <View style={styles.optionCheckView}>
                <Image
                  source={require('../assets/images/icn_optionwrong.png')}
                  style={styles.IconChecked}
                />
                <Text style={styles.optionCheck}>option1</Text>
              </View>
            ) : (
              <View style={styles.optioncheckCorrectView}>
                <Image
                  source={require('../assets/images/icn_optionchecked.png')}
                  style={styles.IconChecked}
                />
                <Text style={styles.optionCheck}>option 1</Text>
              </View>
            )}
          </View>
        ) : (
          <></>
        )}

        {clicked2 == 1 ? (
          <View>
            {correctAnswer2 == 0 && userClicked2 == 0 ? (
              <View style={styles.optionUncheckView}>
                <Image
                  source={require('../assets/images/icn_optionunchecked.png')}
                  style={styles.IconUnchecked}
                />
                <Text style={styles.optionUncheck}>option1</Text>
              </View>
            ) : correctAnswer2 == 1 && userClicked2 == 0 ? (
              <View style={styles.optionCheckView}>
                <Image
                  source={require('../assets/images/icn_optionwrong.png')}
                  style={styles.IconChecked}
                />
                <Text style={styles.optionCheck}>option1</Text>
              </View>
            ) : (
              <View style={styles.optioncheckCorrectView}>
                <Image
                  source={require('../assets/images/icn_optionchecked.png')}
                  style={styles.IconChecked}
                />
                <Text style={styles.optionCheck}>option1</Text>
              </View>
            )}
          </View>
        ) : (
          <></>
        )}

        {clicked3 == 1 ? (
          <View>
            {correctAnswer3 == 0 && userClicked3 == 0 ? (
              <View style={styles.optionUncheckView}>
                <Image
                  source={require('../assets/images/icn_optionunchecked.png')}
                  style={styles.IconUnchecked}
                />
                <Text style={styles.optionUncheck}>option1</Text>
              </View>
            ) : correctAnswer3 == 1 && userClicked3 == 0 ? (
              <View style={styles.optionCheckView}>
                <Image
                  source={require('../assets/images/icn_optionwrong.png')}
                  style={styles.IconChecked}
                />
                <Text style={styles.optionCheck}>option1</Text>
              </View>
            ) : (
              <View style={styles.optioncheckCorrectView}>
                <Image
                  source={require('../assets/images/icn_optionchecked.png')}
                  style={styles.IconChecked}
                />
                <Text style={styles.optionCheck}>option1</Text>
              </View>
            )}
          </View>
        ) : (
          <></>
        )}

        {clicked4 == 1 ? (
          <View>
            {correctAnswer4 == 0 && userClicked4 == 0 ? (
              <View style={styles.optionUncheckView}>
                <Image
                  source={require('../assets/images/icn_optionunchecked.png')}
                  style={styles.IconUnchecked}
                />
                <Text style={styles.optionUncheck}>option1</Text>
              </View>
            ) : correctAnswer4 == 1 && userClicked4 == 0 ? (
              <View style={styles.optionCheckView}>
                <Image
                  source={require('../assets/images/icn_optionwrong.png')}
                  style={styles.IconChecked}
                />
                <Text style={styles.optionCheck}>option1</Text>
              </View>
            ) : (
              <View style={styles.optioncheckCorrectView}>
                <Image
                  source={require('../assets/images/icn_optionchecked.png')}
                  style={styles.IconChecked}
                />
                <Text style={styles.optionCheck}>option1</Text>
              </View>
            )}
          </View>
        ) : (
          <></>
        )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
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
});
