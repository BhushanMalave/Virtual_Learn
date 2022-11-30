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
                  disabled={!item?.disable}
                  onPress={async () => {
                    {
                      if (item?.test === 'Final Test') {
                        const res = await FinalTest(token, item?.id);
                        dispatch(addFinalQuestionData(res));
                        item.navigation.navigate('FinalTestStack');
                      } else {
                        const res = await ModuleTest(token, item?.id);
                        dispatch(addQuestionData(res));
                        item.navigation.navigate('TestStack');
                      }
                    }
                  }}>
                  <Text style={styles.chapterText}>{item?.test}</Text>
                  <Text style={styles.chapterTime}>
                    {totalMinutes} mins | {item?.questions} Questions
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {item?.rate === -1 ? (
              <></>
            ) : (
              <>
                {item?.rate === 0 || item?.rate ? (
                  <View style={styles.rateView}>
                    <View style={styles.rateNumView}>
                      <Text style={styles.rateNum}>
                        {Number((item?.rate).toFixed(2))}
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
  },
});
