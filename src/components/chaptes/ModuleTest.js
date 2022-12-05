import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FinalTest, ModuleTest} from '../../authorization/Auth';
import {addQuestionData} from '../../redux/ReduxPersist/TestSlice';
import {addFinalQuestionData} from '../../redux/ReduxPersist/FinalTestSlice';
const completed = false;
const START_MINUTES = '00';
const START_SECOND = '15';
const START_DERATION = 10;
export const ModularTest = item => {
  const data = useSelector(state => state.chapterResponse.data);
  const token = useSelector(state => state.userDetails.token);
  const dispatch = useDispatch();

  const [totalMinutes, setTotalMinutes] = useState(0);
  useEffect(() => {
    if (item?.duration) {
      const duration = item?.duration;
      const b = duration.split(':');
      const h = Number(b[0] * 60);
      const m = Number(b[1]);
      const mins = h + m;
      const sec = Number((b[2] / 100).toFixed(2));
      const totalmin = (mins + sec).toFixed(2);
      setTotalMinutes(totalmin);
    }
  }, [item?.duration]);

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
            <>
              <View style={{marginRight: 10}}>
                {item?.completed ? (
                  <Image
                    source={require('../../assets/images/icn_timeline_completed.png')}
                  />
                ) : (
                  <Image
                    source={require('../../assets/images/icn_timeline_inactive.png')}
                  />
                )}
              </View>


              <View style={styles.container}>
              {item?.completed ? <>
                <TouchableOpacity
                  disabled={true}
                  >
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View style={{width: 40, marginLeft: 5}}>
                      <Image
                        source={require('../../assets/images/icn_moduletest.png')}
                        style={styles.image}
                      />
                    </View>

                    <View style={styles.testNameContainer}>
                      <Text style={styles.chapterText}>{item?.test}</Text>
                      <Text style={styles.chapterTime}>
                        {totalMinutes} mins | {item?.questions} Questions
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>

              
              </> : <>
              <TouchableOpacity
                  disabled={!item?.disable}
                  onPress={async () => {
                    {
                      if (item?.test === 'Final Test') {
                        const res = await FinalTest(token, item?.id);
                        dispatch(addFinalQuestionData(res));
                        if (res) {
                          item.navigation.navigate('FinalTestStack');
                        }
                      } else {
                        const res = await ModuleTest(token, item?.id);
                        dispatch(addQuestionData(res));
                        if (res) {
                          item.navigation.navigate('TestStack');
                        }
                      }
                    }
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View style={{width: 40, marginLeft: 5}}>
                      <Image
                        source={require('../../assets/images/icn_moduletest.png')}
                        style={styles.image}
                      />
                    </View>

                    <View style={styles.testNameContainer}>
                      <Text style={styles.chapterText}>{item?.test}</Text>
                      <Text style={styles.chapterTime}>
                        {totalMinutes} mins | {item?.questions} Questions
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </>}


               

                {item?.rate === -1 ? (
                  <></>
                ) : (
                  <>
                    {item?.rate === 0 || item?.rate ? (
                      <View style={styles.rateView}>
                        <View style={styles.rateNumView}>
                          <Text style={styles.rateNum}>
                            {Number((item?.rate).toFixed(1))}
                          </Text>
                          <Text style={styles.ratePercent}>%</Text>
                        </View>
                        <Text style={styles.rateText}>Approval Rate</Text>
                      </View>
                    ) : (
                      <></>
                    )}
                    <></>
                  </>
                )}
              </View>
            </>
          ) : (
            <>
              <View style={styles.container2}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{width: 40, marginLeft: 5}}>
                    <Image
                      source={require('../../assets/images/icn_moduletest.png')}
                      style={styles.image}
                    />
                  </View>

                  <View style={styles.testNameContainer2}>
                    {/* <View > */}
                    <TouchableOpacity
                    disabled={true}
                    >
                      <Text style={styles.chapterText}>{item?.test}</Text>
                      <Text style={styles.chapterTime}>
                        {totalMinutes} mins | {item?.questions} Questions
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </>
          )}
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
    borderRadius: 6,
    width: '91%',
    height: 72,
    justifyContent: 'space-between',
  },
  image: {
    marginRight: 6,
    height: 34,
    width: 24,
  },
  testNameContainer: {
    width: '70%',
    marginRight: -30,
  },
  chapterText: {
    color: '#042C5C',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? '600':'normal',
    fontSize: 16,
    // lineHeight: 20,
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
  },
  rateNumView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: Platform.OS === 'ios' ? 0 : -5,
  },
  rateNum: {
    color: '#1EAB0D',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Regular',
    fontSize: 38,
  },
  ratePercent: {
    marginTop: Platform.OS === 'ios' ? 5 : 15,
    fontSize: 8,
    color: '#1EAB0D',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Regular',
  },
  rateText: {
    color: '#7A7A7A',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Regular',

    fontSize: 8,
    marginTop: Platform.OS === 'ios' ? -3 : 5,
  },
  container2: {
    backgroundColor: Platform.OS === 'ios' ? '#F9F9F9' : '#F9F9F9',
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderRadius: 6,
  },
  testNameContainer2: {
    width: '80%',
  },
});
