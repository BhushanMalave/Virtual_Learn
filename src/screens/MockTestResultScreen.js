import React, {useEffect} from 'react';
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
import {setToken} from '../redux/ReduxPersist/UserDetails';
import {getVerifiedKeys} from '../authorization/RefreshToken';

export const MockTestResultScreen = ({navigation}) => {
  const resultheader = useSelector(state => state.testdata.resultHeader);

  const resultanswers = useSelector(state => state.testdata.resultAnswers);

  const testpercentage = useSelector(state => state.testdata.testPercentage);

  const dispatch = useDispatch();

  const refreshToken = async token => {
    const key = await getVerifiedKeys(token);
    dispatch(setToken(key));
  };

  useEffect(() => {
    //refreshToken(token);
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
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
              {testpercentage?.chapterTestPercentage.toFixed(0)}
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
              opacity: 0.4,
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
         
              opacity: 0.4,
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
        <View style={{marginTop: Platform.OS === 'ios'?5:5}}>
          <Text style={styles.textlist}>List of Questions</Text>
        </View>
        <View style={{marginTop: 20}}>
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
    height: Platform.OS === 'ios'?314:280,
    // borderWidth: 1,
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
    // alignItems: 'center',
    justifyContent:"center",
    borderRadius:4
  },
  box: {
    backgroundColor: '#FFFFFF',
    height: 80,
    marginHorizontal: 24,
    borderRadius: 6,
    shadowOpacity: 0.2,
    marginTop: Platform.OS === 'ios' ? 65 : 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 3,
    elevation: 6,
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
    textAlign:"center",
  },
  textchaptername: {
    fontSize: 26,
    fontWeight: Platform.OS == 'ios' ? 'bold' : 'normal',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
    marginTop: 10,
    color: '#FFFFFF',
    marginLeft: 20,
    textAlign: 'left',
    width: '55%',
  },
  textcoursename: {
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? 'bold' : 'normal',
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
    fontWeight: Platform.OS == 'ios' ? '500' : 'normal',
  },
  text2: {
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    color: '#2BB5F4',
    textAlign: 'center',
    fontWeight: Platform.OS == 'ios' ? '500' : 'normal',
    marginTop: 10,
  },
  textlist: {
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    color: Platform.OS === 'ios' ? '#7A7A7A' : '#7A7A7A',
    fontWeight: Platform.OS == 'ios' ? '500' : 'normal',
  },
  imgcross: {
    marginTop: Platform.OS === 'ios' ? 60 : 20,
    marginLeft: 24,
  },
});
