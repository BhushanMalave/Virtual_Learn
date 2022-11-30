import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {ResultHeader} from '../authorization/Auth';
import {ResultAnswer} from '../authorization/Auth';
import {useSelector, useDispatch} from 'react-redux';
import {setResultHeader} from '../redux/ReduxPersist/TestSlice';
import {setResultAnswers} from '../redux/ReduxPersist/TestSlice';

export const CongratulationScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.userDetails.token);
  const data1 = useSelector(state => state.testdata.question);
  const testpercentage = useSelector(state => state.testdata.testPercentage);

  testName = 'Module Test';
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CourseScreen');
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
      <Text style={styles.coursename}>{testpercentage?.congratulations}</Text>
      <TouchableOpacity
        onPress={async () => {
          const res = await ResultHeader(token, data1?.testId);

          const res2 = await ResultAnswer(token, data1?.testId);
          console.log(res);
          dispatch(setResultHeader(res));
          dispatch(setResultAnswers(res2));

          navigation.navigate('MockTestResultScreen');
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
    marginTop: 70,
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
    fontFamily: 'Biko',
    fontSize: 32,
    fontWeight: 'bold',
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
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.4,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 160,
  },
});
