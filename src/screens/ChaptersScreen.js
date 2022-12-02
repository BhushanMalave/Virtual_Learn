import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import RNFetchBlob from 'rn-fetch-blob';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  RefreshControl,
} from 'react-native';

import {useDispatch} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import {ButtonComponent} from '../components/Buttons';
import {ChapterList} from '../components/chaptes/ChapterList';
import {overViewData} from '../authorization/Auth';
import {addOverView} from '../redux/ThunkToolkit/ChaptersApi/CourseDataRedux';

import {LessonList} from '../components/chaptes/LessonList';
import {ModularTest} from '../components/chaptes/ModuleTest';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';

import {continueApi} from '../authorization/Auth';
import {ContinuePopUp} from '../components/chaptes/ContinuePopUp';
import {
  addDisabilityStatusFalse,
  addDisabilityStatusTrue,
  csChapterResponse,
} from '../redux/ThunkToolkit/ChaptersApi/ChapterScreenApi';
import {joinCourse} from '../authorization/Auth';
import {
  setPopUpState,
  addContinueData,
} from '../redux/ThunkToolkit/ChaptersApi/ChapterScreenApi';
import {ActivityIndicator} from 'react-native';

import {CertificateDownload} from '../authorization/Auth';

export const ChaptersScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.userDetails.token);
  const coursedata = useSelector(state => state.courseData.overview);
  const data = useSelector(state => state.chapterResponse.data);
  const courseId = useSelector(state => state.chapterResponse.courseId);
  const [refreshing, setRefreshing] = useState(false);
  const continueData = useSelector(state => state.chapterResponse.continueData);

  let disableTest = false;
  const continueCall = async () => {
    const cont = await continueApi(token, coursedata?.courseId);
    dispatch(addContinueData(cont));
  };

  const focus = useIsFocused();

  useLayoutEffect(() => {
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

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    continueCall();
    setRefreshing(false);
  }, [refreshing]);

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

  let [url, setUrl] = useState('');

  const checkPremission = async () => {
    if (Platform.OS === 'ios') {
      downloadImage();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permissions Requires',
            Message: 'App needs access to your storage to download Photos',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Storage Permissions Granted');
          downloadImage();
        } else {
          alert('storage Permission Not Granted');
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const downloadImage = () => {
    const {config, fs} = RNFetchBlob;
    const isIOS = Platform.OS === 'ios';
    let date = new Date();
    let PictureDir =
      Platform.OS === 'ios' ? fs.dirs.DocumentDir : fs.dirs.DownloadDir;
    var ext = 'pdf';
    var file_ex = `certificate_${Math.floor(
      date.getTime() + date.getSeconds() / 2,
    )}.pdf`;
    const fPath = `${PictureDir}/${file_ex}`;

    const configOptons = Platform.select({
      ios: {
        fileCache: true,
        path: fPath,
        appendEXt: ext,
      },

      android: {
        fileCache: false,
        appendEXt: ext,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: false,
          path:
            PictureDir +
            '/me_' +
            Math.floor(date.getTime() + date.getSeconds() / 2) +
            file_ex,
          description: 'Downloading File.',
        },
      },
    });

    if (isIOS) {
      RNFetchBlob.config(configOptons)
        .fetch('GET', url)
        .then(res => {
          RNFetchBlob.ios.previewDocument('file://' + res.path());
        });
      return;
    } else {
      config(configOptons)
        .fetch('GET', url)
        .progress((received, total) => {})
        .then(res => {
          RNFetchBlob.android.actionViewIntent(res.path());
        })
        .catch(errorMessage => {
          console.log('error with downloading file  ', errorMessage);
        });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.mainView}>
          {continueData ? (
            <>
              <View style={styles.continueButton}>
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
          {data ? (
            <></>
          ) : (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                marginTop: 50,
                justifyContent: 'center',
              }}>
              <ActivityIndicator
                animating={!data}
                size="small"
                color="#373737"
              />
            </View>
          )}

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
                    <View
                      style={{alignSelf: 'center', justifyContent: 'center'}}>
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
                  if (temp?.lessonCompletedStatus === true) {
                    disableTest = true;
                  } else {
                    disableTest = false;
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
                        disable={disableTest}
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
            <View style={styles.completedView}>
              <View style={styles.completedView2}>
                <Text style={styles.courseText}>Course Result</Text>

                <Text style={styles.percentText}>
                  {Number((data?.coursePercentage).toFixed(2))}%
                </Text>

                <Text style={styles.aprrovalText}>approval rate</Text>

                <View>
                  <View style={styles.box}>
                    <View style={styles.boxin}>
                      <Text style={styles.text1}>Joined</Text>
                      <Text style={styles.text2}>{data?.joinedDate}</Text>
                    </View>
                    <View style={styles.lineView} />

                    <View style={styles.boxin}>
                      <Text style={styles.text1}>Completed</Text>
                      <Text style={styles.text2}>{data?.completedDate}</Text>
                    </View>
                    <View style={styles.lineView} />
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

                  <TouchableOpacity
                    style={{width: 26}}
                    onPress={async () => {
                      const response = await CertificateDownload(
                        token,
                        data?.courseId,
                      );
                      console.log(response);
                      url = response.certificate;
                      checkPremission();
                    }}>
                    <Icon name="download" size={24} color="white" />
                  </TouchableOpacity>
                </View>

                <View style={styles.certificateView}>
                  <TouchableOpacity
                    style={styles.certificateOnPress}
                    onPress={() => {
                      navigation.navigate('CertificateScreen', {data});
                    }}>
                    <Image
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
                courseId: coursedata?.courseId,
              };
              const res = await joinCourse(token, objBody);
              const response = await overViewData(token, coursedata?.courseId);
              dispatch(addOverView(response));
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
  },
  continueButton: {
    marginTop: 29,
    marginBottom: 30,
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
    width: '100%',
  },
  completedView: {
    backgroundColor: '#042C5C',
  },
  completedView2: {
    margin: 24,
    marginTop: Platform.OS == 'ios' ? 30 : 30,
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
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Regular',
    fontSize: 74,
    lineHeight: 90,
    marginTop: 10,
  },
  aprrovalText: {
    height: 19,
    color: '#DDDDDD',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Regular',
    fontSize: 16,
    lineHeight: 19,
    marginTop: Platform.OS == 'ios' ? -15 : -10,
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
  },
  box: {
    backgroundColor: '#FFFFFF',
    height: Platform.OS === 'ios' ? 80 : 83,
    borderRadius: 6,
    marginTop: Platform.OS === 'ios' ? 50 : 50,
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
  lineView: {
    height: 34,
    backgroundColor: '#7A7A7A',
    width: 1,
    borderWidth: 1,
    opacity: 0.2,
    alignSelf: 'center',
  },
});
