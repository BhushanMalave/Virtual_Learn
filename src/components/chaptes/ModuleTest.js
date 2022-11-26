import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';

let enrolledghhj = false;
const completed = false;
export const ModularTest = item => {
  // const data = useSelector(state => state.courseData.data);
const data = useSelector(state => state.chapterResponse.data);

  return (
    <>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 30,
          }}>
          {data?.enrolled ? (
            <View style={{marginRight: 10}}>
              {item.completed ? (
                <Image
                  source={require('../../assets/images/icn_timeline_completed.png')}
                />
              ) : (
                <Image
                  source={require('../../assets/images/icn_timeline_inactive.png')}
                />
              )}
            </View>
          ) : (
            <></>
          )}

          <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: 40, marginLeft: 5}}>
                <Image
                  source={require('../../assets/images/icn_moduletest.png')}
                  style={styles.image}
                />
              </View>

              <View style={{width: '70%'}}>
                {/* <View > */}
                <TouchableOpacity
                  disabled={!item.disable}
                  onPress={() => {console.log(item.disable)
                  {item.test == 'Final Test' ?(<>
                  {
                   console.log(enrolledghhj)
                  }
                   </>
                  ):(
                  // enrolledghhj = false,
                  console.log(enrolledghhj)
                  )}
                  }}>
                  <Text style={styles.chapterText}>{item.test}</Text>
                  <Text style={styles.chapterTime}>
                    {item.duration} mins | {item.questions} Questions
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {item.rate === -1 ? (
              <></>
            ) : (
              <>
                {item.rate === 0 || item.rate ? <></> : <></>}
                <>
                  {' '}
                  <View style={styles.rateView}>
                    <View style={styles.rateNumView}>
                      <Text style={styles.rateNum}>{item.rate}</Text>
                      <Text style={styles.ratePercent}>%</Text>
                    </View>
                    <Text style={styles.rateText}>Approval Rate</Text>
                  </View>
                </>
              </>
            )}
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    paddingLeft: 16,
    paddingBottom: 16,
    paddingTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth:1,
    borderRadius: 6,
    width: '91%',
    height: 72,
  },
  chapterList: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: Platform.OS == 'ios' ? 18 : 14,
  },
  chapterName: {
    color: '#373737',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 15,
  },
  image: {
    marginRight: 6,
    height: 34,
    width: 24,
  },
  chapterText: {
    color: '#042C5C',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 16,
    fontWeight: Platform.OS === 'ios' ? '600' : '700',
    lineHeight: 20,
    // width:'70%',
    // borderWidth:1,
  },
  chapterTime: {
    height: 15,
    marginTop: 6,
    color: '#7A7A7A',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 12,
    lineHeight: 15,
  },
  rateView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -5,
  },
  rateNumView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  rateNum: {
    color: '#1EAB0D',
    fontFamily: 'Biko',
    fontSize: 38,
    // lineHeight: 47,
  },
  ratePercent: {
    marginTop: Platform.OS === 'ios' ? 5 : 15,
    fontSize: 8,
    color: '#1EAB0D',
    fontFamily: 'Biko',
  },
  rateText: {
    color: '#7A7A7A',
    fontFamily: 'Biko',
    fontSize: 8,
    // lineHeight: 10,
  },
});
