import React, {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';

import {useDispatch} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import {ButtonComponent} from '../components/Buttons';
import {ChapterList} from '../components/chaptes/ChapterList';

import {LessonList} from '../components/chaptes/LessonList';
import {ModularTest} from '../components/chaptes/ModuleTest';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';

import {continueApi} from '../authorization/Auth';
import {ContinuePopUp} from '../components/chaptes/ContinuePopUp';
import {csChapterResponse} from '../redux/ThunkToolkit/ChaptersApi/ChapterScreenApi';
import { joinCourse } from '../authorization/Auth';
import {
  setPopUpState,
  addContinueData,
} from '../redux/ThunkToolkit/ChaptersApi/ChapterScreenApi';

export const ChaptersScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.userDetails.token);
  const coursedata = useSelector(state => state.courseData.overview);
  const data = useSelector(state => state.chapterResponse.data);
  const courseId = useSelector(state => state.chapterResponse.courseId);

  const continueData = useSelector(state => state.chapterResponse.continueData);

  const continueCall = async () => {
    const cont = await continueApi(token, coursedata?.courseId);
    dispatch(addContinueData(cont));
  };

  const focus = useIsFocused();
  useEffect(() => {
    if (focus == true) {
      dispatch(csChapterResponse({token, id: coursedata?.courseId}));
      continueCall();
      time();
      continueCall();
    }
  }, [focus]);

  const [totalHours, setTotalHours] = useState(0);
  const time = () => {
    if (coursedata?.courseDuration) {
      const duration = coursedata?.courseDuration;
      const b = duration.split(':');
      const h = Number(b[0]);
      const m = b[1];
      const mins = Number((m / 60).toFixed(2));
      const totalHour = h + mins;
      setTotalHours(totalHour);
    }
  };

  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    if (data?.courseCompletedStatus) {
      const duration1 = data?.totalDuration;
      const b1 = duration1.split(':');
      const h1 = b1[0];
      const m1 = b1[1];
      setMinutes(m1);
      setHours(h1);
    }
  }, [data?.courseCompletedStatus]);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainView}>
          {continueData ? (
            <>
              <View style={{marginTop: 29, marginBottom: 30}}>
                <ButtonComponent
                  text={`Continue Chapter ${continueData?.chapterNumber} Lesson ${continueData?.lessonNumber}`}
                  onPress={() => {
                    dispatch(setPopUpState());
                    console.log('navigate to Contiue PopUp');
                  }}
                />
              </View>
            </>
          ) : (
            <></>
          )}

          <Text style={styles.contentText}>Course Content</Text>

          <View style={styles.contentDetailsView}>
            <Text style={styles.contentDetailsText}>
              {data?.chapterCount} chapters | {data?.lessonCount} lessons |{' '}
              {data?.testCount} Assignment Test | {totalHours} h total length
            </Text>
          </View>

          <View style={styles.chapterListContainer}>
            {data?.chapterResponses.map(item1 => (
              <View key={item1?.chapterId}>
                <ChapterList
                  chapterId={item1?.chapterId}
                  number={item1?.chapterNumber}
                  name={item1?.chapterName}
                  chapterStatus={item1?.chapterStatus}
                  completed={item1?.chapterCompletedStatus}
                  id={item1?.chapterId}
                />
<View>
                {item1?.chapterStatus ? (
                  <View style={{alignSelf: 'center', justifyContent: 'center'}}>
                    {item1?.lessonResponses.map(item => (
                      <View key={item?.lessonId}>
                        <LessonList
                          number={item?.lessonNumber}
                          lessonName={item?.lessonName}
                          duration={item?.lessonDuration}
                          completed={item?.lessonCompletedStatus}
                          status={item?.lessonStatus}
                          lessonId={item?.lessonId}
                          videoLink={item?.videoLink}
                          nav={navigation}
                          chapterId={item1?.chapterId}
                        />
                      </View>
                    ))}
                  </View>
                ) : (
                  <></>
                )}
                </View>

                {item1?.lessonResponses.map(temp => {
                  if (temp?.completed == true) {
                    item1.disableStatus = true;
                  } else {
                    item1.disableStatus = false;
                  }
                })}

                {item1?.chapterStatus ? (
                  <>
                    {item1?.testId ? (
                      <ModularTest
                        test={item1?.testName}
                        duration={item1?.testDuration}
                        questions={item1?.questionCount}
                        rate={item1?.chapterTestPercentage}
                        id={item1?.testId}
                        disable={item1?.disableStatus}
                        completed={item1?.chapterCompletedStatus}
                        navigation={navigation}
                      />
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </View>
            ))}
          </View>
        </View>
        {data?.courseCompletedStatus ? (
          <>
            <View style={{backgroundColor: '#042C5C'}}>
              <View style={{margin: 24, marginTop: 30}}>
                <Text style={styles.courseText}>Course Result</Text>

                <Text style={styles.percentText}>
                  {data?.coursePercentage}%
                </Text>

                <Text style={styles.aprrovalText}>approval rate</Text>

                <View>
                  <View style={styles.box}>
                    <View style={styles.boxin}>
                      <Text style={styles.text1}>Joined</Text>
                      <Text style={styles.text2}>{data?.joinedDate}</Text>
                    </View>
                    <View
                      style={{
                        height: 34,
                        backgroundColor: '#7A7A7A',
                        width: 1,
                        borderWidth: 1,
                        opacity: 0.2,
                        alignSelf: 'center',
                      }}
                    />

                    <View style={styles.boxin}>
                      <Text style={styles.text1}>Completed</Text>
                      <Text style={styles.text2}>{data?.completedDate}</Text>
                    </View>
                    <View
                      style={{
                        height: 34,
                        backgroundColor: '#7A7A7A',
                        width: 1,
                        borderWidth: 1,
                        opacity: 0.2,
                        alignSelf: 'center',
                      }}
                    />
                    <View style={[styles.boxin]}>
                      <Text style={styles.text1}>Duration</Text>
                      <Text style={styles.text2}>
                        {hours}h {minutes}m
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={styles.certificateTextView}>
                  <Text style={styles.courseText}>Course Certificate</Text>

                  <TouchableOpacity style={{width: 26}}>
                    <Icon name="download" size={24} color="white" />
                  </TouchableOpacity>
                </View>

                <View style={styles.certificateView}>
                  <TouchableOpacity style={styles.certificateOnPress}
                  onPress={ ()=> {
                    navigation.navigate('CertificateScreen',{data})
                  }}
                  >
                    <Image
                      // source={require('../assets/images/img_designcoursedetail1_bg.png')}
                      source={{uri: data?.certificateUrl}}
                      style={styles.certificate}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </>
        ) : (
          <></>
        )}
      </ScrollView>

      {coursedata?.enrolled ? (
        <></>
      ) : (
        <View style={{bottom: 0}}>
          <ButtonComponent
            text={'Join Course'}
            onPress={async () => {
              const objBody = {
                courseId: coursedata?.courseId
              };
              const res = await joinCourse(token, objBody);
              console.log(res);
            }}
          />
        </View>
      )}
      <ContinuePopUp navigation={navigation} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    marginHorizontal: 24,
    // borderWidth: 1,
  },
  contentText: {
    color: '#2B2B2B',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 18,
    fontWeight: Platform.OS === 'ios' ? '600' : '700',
    lineHeight: 22,
  },
  contentDetailsView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentDetailsText: {
    color: '#2B2B2B',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 12,
    fontWeight: Platform.OS === 'ios' ? '400' : '500',
    lineHeight: 15,
  },
  chapterListContainer: {
    marginTop: Platform.OS == 'ios' ? 36 : 36,
    // borderWidth: 1,
    width: '100%',
  },
  courseText: {
    height: 22,
    color: '#FFFFFF',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 22,
  },
  percentText: {
    height: 90,
    // borderWidth:1,
    color: '#1EAB0D',
    fontFamily: 'Biko',
    fontSize: 74,
    lineHeight: 90,
    marginTop: 10,
  },
  aprrovalText: {
    height: 19,
    // borderWidth:1,
    color: '#DDDDDD',
    fontFamily: 'Biko',
    fontSize: 16,
    lineHeight: 19,
    marginTop: -15,
  },
  certificateTextView: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  downloadIcon: {
    height: 24,
    width: 24,
  },
  certificateView: {
    alignItems: 'center',
  },
  certificateOnPress: {
    borderWidth: 1,
    width: 327,
    height: 184,
    marginTop: 16,
  },
  certificate: {
    height: 184,
    width: 327,
    // marginTop: 16,
  },
  box: {
    backgroundColor: '#FFFFFF',
    height: 80,
    borderRadius: 6,
    marginTop: Platform.OS === 'ios' ? 50 : 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxin: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  text1: {
    fontSize: 12,
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    color: '#373737',
    textAlign: 'center',
    lineHeight: 16,
    fontWeight: '500',
  },
  text2: {
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    color: '#2BB5F4',
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 8,
    lineHeight: 20,
  },
});
