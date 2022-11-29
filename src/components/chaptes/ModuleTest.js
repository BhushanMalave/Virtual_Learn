import React,{useState,useEffect} from 'react';

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
import { addQuestionData } from '../../redux/ReduxPersist/TestSlice';
import {addFinalQuestionData} from '../../redux/ReduxPersist/FinalTestSlice'
import { TestStack } from '../../navigation/TestStack';
import { Test } from '../../screens/Test';
const completed = false;
const START_MINUTES = '00';
const START_SECOND = '15';
const START_DERATION = 10;
export const ModularTest = (item) => {
  // const data = useSelector(state => state.courseData.data);
const data = useSelector(state => state.chapterResponse.data);
const token = useSelector(state => state.userDetails.token);
const dispatch = useDispatch()




const [currentMinutes, setMinutes] = useState(START_MINUTES);
const [currentSeconds, setSeconds] = useState(START_SECOND);
const [isStop, setIsStop] = useState(false);
const [duration, setDuration] = useState(START_DERATION);
const [isRunning, setIsRunning] = useState(false);


const startHandler = () => {
  setDuration(parseInt(START_SECOND, 10) + 60 * parseInt(START_MINUTES, 10));
  // setMinutes(60 * 5);
  // setSeconds(0);
  setIsRunning(true);
};

const stopHandler = () => {
  // stop timer
  setIsStop(true);
  setIsRunning(false);
};
const resetHandler = () => {
  setMinutes(START_MINUTES);
  setSeconds(START_SECOND);
  setIsRunning(false);
  setIsStop(false);
  setDuration(START_DERATION);
};

const resumeHandler = () => {
  let newDuration =
    parseInt(currentMinutes, 10) * 60 + parseInt(currentSeconds, 10);
  setDuration(newDuration);

  setIsRunning(true);
  setIsStop(false);
};


useEffect(() => {
  if (isRunning === true) {
    let timer = duration;
    var minutes, seconds;
    const interval = setInterval(function () {
      if (--timer == -1) {
        alert('timer over');
        stopHandler()
      } else {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
    return () => clearInterval(interval);
  }
}, [isRunning]);
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
                  disabled={!!item?.disable}
                  onPress={async () => {
                    {if(item?.test ==='Final Test')
                  {
                    const res = await FinalTest(token,item?.id);
                    dispatch(addFinalQuestionData(res));
                    item.navigation.navigate('FinalTestStack')
                  }else {
                    const res = await ModuleTest(token,item?.id);
                    dispatch(addQuestionData(res));
                    item.navigation.navigate('TestStack');
                  }
                
                
                } 
                startHandler()
                
                    
                  }}>
                  <Text style={styles.chapterText}>{item?.test}</Text>
                  <Text style={styles.chapterTime}>
                    {item?.duration} mins | {item?.questions} Questions
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
                     <Text style={styles.rateNum}>{item?.rate}</Text>
                     <Text style={styles.ratePercent}>%</Text>
                   </View>
                   <Text style={styles.rateText}>Approval Rate</Text>
                 </View>
                )

                 :
                 (<></>)}
                <>

                 
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
