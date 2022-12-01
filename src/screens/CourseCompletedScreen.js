import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
export const CourseCompletedScreen = ({navigation}) => {
  const testpercentage = useSelector(
    state => state.finaltestdata.testPercentage,
  );
  const finalresult = useSelector(state => state.finaltestdata.finalresult);
  const data = finalresult;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <TouchableOpacity
          style={{width: 18}}
          onPress={() => {
            navigation.navigate('CourseScreen');
          }}>
          <Image
            source={require('../assets/images/icn_close_filter.png')}
            style={styles.closeIcon}
          />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 100,
          }}>
          <Image
            source={require('../assets/images/img_course_complete_illustratipon.png')}
            style={styles.image}
          />

          <Text style={styles.congratulationText}>Congratulations</Text>

          <View>
            <Text style={styles.text}>
              You have completed the course:{' '}
              <Text style={{color: 'black'}}>
                {finalresult?.congratulations}
              </Text>{' '}
              with
            </Text>
          </View>

          <Text style={styles.percentText}>
            {(finalresult?.approvalRate).toFixed(1)}%
          </Text>
          <Text style={styles.approvalText}>approval rate</Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CertificateScreen', {data});
            }}>
            <Text style={styles.viewCetificateButton}>View Certificate</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    marginHorizontal: 24,
    marginTop: 30,
  },
  closeIcon: {
    tintColor: 'black',
    height: 14.5,
    width: 14.5,
  },
  image: {
    height: 201,
    width: 293,
  },
  congratulationText: {
    height: 35,
    color: '#2B2B2B',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
    fontSize: 32,
    fontWeight: Platform.OS == 'ios'? 'bold': 'normal',
    lineHeight: 35,
    textAlign: 'center',
    marginTop: 54,
  },
  text: {
    height: 44,
    color: '#7A7A7A',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 10,
  },
  percentText: {
    height: 90,
    color: '#1EAB0D',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Regular',
    fontSize: 74,
    lineHeight: 90,
    marginTop: 30,
  },
  approvalText: {
    height: 19,
    color: '#7A7A7A',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Regular',
    fontSize: 16,
    marginTop: -10,
    marginBottom: 74,
  },
  viewCetificateButton: {
    height: 20,
    color: '#EE5C4D',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.4,
    lineHeight: 20,
    textAlign: 'center',
  },
});
