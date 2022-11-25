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


import {chapterListData} from '../authorization/Auth';
import {
  addChapterList,
  addContinueData,
  setPopUpState,
} from '../redux/ThunkToolkit/ChaptersApi/CourseDataRedux';

import {continueApi} from '../authorization/Auth';
import {ContinuePopUp} from '../components/chaptes/ContinuePopUp';

export const ChaptersScreen = () => {


  const dispatch = useDispatch();
  const token = useSelector(state => state.userDetails.token);
  const data = useSelector(state => state.courseData.data);

  const apiCall = async () => {
    const chapterRes = await chapterListData(token, data?.courseId);
    dispatch(addChapterList(chapterRes));
    console.log('.....')
  };

  const continueCall = async () => {
    cont = await continueApi(token, data?.courseId);
    dispatch(addContinueData(cont));
  };

  const continueData = useSelector(state => state.courseData.continueData);

  const focus = useIsFocused();
  useEffect(() => {
    if (focus == true) {
      apiCall();
      continueCall();
    }
  }, [focus]);

  const duration = data?.courseDuration;
  const b = duration.split(':');
  const h = Number(b[0]);
  const m = b[1];
  const mins = m / 60;
  const totalHours = h + mins;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainView}>
          {!continueData ? (
            <>
              <View style={{marginTop: 29, marginBottom: 30}}>
                <ButtonComponent
                  text={'Continue Chapter 3 Lesson 21'}
                  onPress={() => {
                    dispatch(setPopUpState())
                    console.log('navigate to Contiue PopUp')
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
            {data?.chapterResponses.map(item => (
              <View key={item?.chapterId}>
                <ChapterList
                  number={item?.chapterNumber}
                  name={item?.chapterName}
                  chapterStatus={item?.chapterStatus}
                  completed={item?.chapterCompletedStatus}
                  id={item?.chapterId}
                />

                {item?.chapterStatus ? (
                  <View style={{alignSelf: 'center', justifyContent: 'center'}}>
                    {item?.lessonResponses.map(item => (
                      <View key={item?.lessonId}>
                        <LessonList
                          number={item?.lessonNumber}
                          name={item?.lessonName}
                          duration={item?.lessonDuration}
                          completed={item?.lessonCompletedStatus}
                          status={item?.lessonStatus}
                          id={item?.lessonId}
                          videoLink={item?.videoLink}
                        />
                      </View>
                    ))}
                  </View>
                ) : (
                  <></>
                )}

                {item?.lessonResponses.map(temp => {
                  if (temp?.completed == true) {
                    item.disableStatus = true;
                  } else {
                    item.disableStatus = false;
                  }
                })}

                {item?.chapterStatus ? (
                  <>
                    {item.testId ? (
                      <ModularTest
                        test={item?.testName}
                        duration={item?.testDuration}
                        questions={item?.questionCount}
                        rate={item?.chapterTestPercentage}
                        id={item?.testId}
                        disable={item?.disableStatus}
                        completed={item?.chapterCompletedStatus}
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

                <Text style={styles.percentText}>{data?.coursePercentage}</Text>

                <Text style={styles.aprrovalText}>approval rate</Text>

                <View style={styles.certificateTextView}>
                  <Text style={styles.courseText}>Course Certificate</Text>

                  <TouchableOpacity style={{width: 26}}>
                    <Icon name="download" size={24} color="white" />
                  </TouchableOpacity>
                </View>

                <View style={styles.certificateView}>
                  <Image
                    source={require('../assets/images/img_designcoursedetail1_bg.png')}
                    // source={{uri: courseCompletedStatus?.certificateUrl}}
                    style={styles.certificate}
                  />
                </View>
              </View>
            </View>
          </>
        ) : (
          <></>
        )}
      </ScrollView>

      {data?.enrolled ? (
        <></>
      ) : (
        <View style={{bottom: 0}}>
          <ButtonComponent
            text={'Join Course'}
            onPress={() => console.log('Join Course Pressed')}
          />
        </View>
      )}
      <ContinuePopUp />
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
    color: '#1EAB0D',
    fontFamily: 'Biko',
    fontSize: 74,
    lineHeight: 90,
    marginTop: 10,
  },
  aprrovalText: {
    height: 19,
    color: '#DDDDDD',
    fontFamily: 'Biko',
    fontSize: 16,
    lineHeight: 19,
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
  certificate: {
    height: 184,
    width: 327,
    marginTop: 16,
  },
});
