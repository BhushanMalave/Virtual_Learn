import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {ResultHeader} from '../authorization/Auth';
import {ResultAnswer} from '../authorization/Auth';
import {useSelector, useDispatch} from 'react-redux';

import {FinalTestResult} from '../authorization/Auth';
import {setFilterState} from '../redux/ReduxPersist/FilterSlice';
import {setFinalResult} from '../redux/ReduxPersist/FinalTestSlice';

export const FinalCongratulationScreen = ({navigation, route}) => {
  console.log(route.params);
  const dispatch = useDispatch();
  const token = useSelector(state => state.userDetails.token);
  const data1 = useSelector(state => state.finaltestdata.questionData);
  const testpercentage = useSelector(
    state => state.finaltestdata.testPercentage,
  );

  testName = 'Module Test';
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Chapters');
        }}>
        <Image
          source={require('../assets/images/icn_close_filter.png')}
          style={styles.backImg}
        />
      </TouchableOpacity>
      <Image
        source={require('../assets/images/img_moduletest_success_illustration.png')}
        style={styles.image}
      />
      <Text style={styles.congratulation}>Congratulations!</Text>
      <Text style={styles.coursename}>You have completed Chapter <Text style={{color:"#5A5A5A",fontWeight:"bold"}}>{testpercentage?.chapterNumber}<Text> - </Text>{testpercentage?.chapterName}</Text> from Course <Text style={{color:"#5A5A5A",fontWeight:"bold"}}>{testpercentage?.courseName}</Text></Text>
      <TouchableOpacity
        onPress={async () => {
          const res = await FinalTestResult(token, data1.testId);
          console.log('()())', res);

          dispatch(setFinalResult(res));
          if (res) {
            navigation.navigate('CourseCompletedScreen');
          }
        }}>
        <Text style={styles.result}>Result</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
  },
  backImg: {
    marginTop: Platform.OS === 'ios'?70:30,
    height: 14.5,
    width: 14.5,
  },
  image: {
    alignSelf: 'center',
    marginTop: 150,
  },
  congratulation: {
    height: 35,
    color: '#2B2B2B',
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
    fontSize: 32,
    letterSpacing: 0,
    lineHeight: 35,
    textAlign: 'center',
    marginTop: 30,
  },
  coursename: {
    color: '#7A7A7A',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 16,

    letterSpacing: 0,
    lineHeight: 20,
    textAlign: 'center',
    textAlign: 'center',
    marginTop: 10,
  },
  result: {
    color: '#EE5C4D',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    fontSize: 16,
    letterSpacing: 0.4,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 160,
  },
});
