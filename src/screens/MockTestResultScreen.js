import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Platform,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {QuestionListComponent} from '../components/QuestionListComponent';
import {TestBottomPopUp} from '../components/TestBottomPopUp';
import {setMockstate} from '../redux/ReduxPersist/FilterSlice';
import {useDispatch, useSelector} from 'react-redux';
import {
  removeAnswers,
  setCorrectAnswers,
} from '../redux/ReduxPersist/TestSlice';

export const MockTestResultScreen = ({navigation}) => {
  const resultheader = useSelector(state => state.testdata.resultHeader);
  console.log(resultheader);

  const resultanswers = useSelector(state => state.testdata.resultAnswers);
  console.log(resultanswers);
  const testpercentage = useSelector(state => state.testdata.testPercentage);

  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <View style={styles.bodytop}>
        <TouchableOpacity
          onPress={() => {
            res = dispatch(removeAnswers());
            navigation.navigate('Chapters');
          }}>
          <Image
            source={require('../assets/images/icn_close_white.png')}
            style={styles.imgcross}
          />
        </TouchableOpacity>
        <View style={styles.bodytopin}>
          <View style={styles.bodytopinbox}>
            <Text style={styles.textno}>
              {testpercentage?.chapterTestPercentage}
            </Text>
          </View>
          <View>
            <Text style={styles.textchaptername}>
              Chapter {resultheader?.chapterNumber}: {resultheader?.chapterName}
            </Text>
          </View>
        </View>
        <Text style={styles.textcoursename} numberOfLines={2}>
          Course: {resultheader?.courseName}
        </Text>
        <View style={styles.box}>
          <View style={styles.boxin}>
            <Text style={styles.text1}>Passing Grade</Text>
            <Text style={styles.text2}>{resultheader?.passingGrade}/100</Text>
          </View>
          <View
            style={{
              height: 40,
              backgroundColor: '#7A7A7A',
              width: 1,
              borderWidth: 1,
              opacity: 0.2,
              marginTop: 20,
            }}
          />

          <View style={styles.boxin}>
            <Text style={styles.text1}>Correct</Text>
            <Text style={styles.text2}>
              {resultheader?.correctAnswers}/
              {resultheader?.totalNumberOfQuestions}
            </Text>
          </View>
          <View
            style={{
              height: 40,
              backgroundColor: '#7A7A7A',
              width: 1,
              borderWidth: 1,
              opacity: 0.2,
              marginTop: 20,
            }}
          />
          <View style={styles.boxin}>
            <Text style={styles.text1}>Wrong</Text>
            <Text style={styles.text2}>
              {resultheader?.wrongAnswers}/
              {resultheader?.totalNumberOfQuestions}
            </Text>
          </View>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginTop: 70, marginHorizontal: 24}}>
        <Text style={styles.textlist}>List of Questions</Text>
        <View style={{marginTop: 30}}>
          {resultanswers?.map(item => (
            <View key={item.id}>
            <QuestionListComponent
              questionId={item.questionId}
              state={item.userAnswerStatus}
              onPress={() => {
                dispatch(setCorrectAnswers(item));
                dispatch(setMockstate());
              }}
            />
            </View>
          ))}
        </View>
      </ScrollView>
      <TestBottomPopUp />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  bodytop: {
    height: 315,
    borderWidth: 1,
    backgroundColor: '#042C5C',
  },
  bodytopin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 24,
  },
  bodytopinbox: {
    height: 68,
    width: 68,
    backgroundColor: '#FCBE4B',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#FFFFFF',
    height: 80,
    marginHorizontal: 24,
    borderRadius: 6,
    shadowOpacity: 0.5,
    marginTop: Platform.OS === 'ios' ? 50 : 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxin: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  textno: {
    fontSize: 42,
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Regular',
    marginTop: Platform.OS === 'ios' ? 17 : 5,
    color: '#FFFFFF',
  },
  textchaptername: {
    fontSize: 26,
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
    marginTop: 10,
    color: '#FFFFFF',
    marginLeft: 20,
    textAlign: 'left',
    width: '60%',
  },
  textcoursename: {
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    marginTop: 10,
    color: '#FFFFFF',
    marginHorizontal: 24,
    marginTop: 30,
    textAlign: 'left',
  },
  text1: {
    fontSize: 12,
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    color: '#373737',
    textAlign: 'center',
    fontWeight: Platform.OS == 'ios' ? '500':'normal',
  },
  text2: {
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    color: '#2BB5F4',
    textAlign: 'center',
    fontWeight: Platform.OS == 'ios' ? '500':'normal',
    marginTop: 10,
  },
  textlist: {
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    color: '#7A7A7A',
  },
  imgcross: {
    marginTop: Platform.OS === 'ios' ? 60 : 20,
    marginLeft: 24,
  },
});
