import React, {useEffect, useState} from 'react';

import {View, Text, Modal, StyleSheet} from 'react-native';

import {ButtonComponent} from '../Buttons';
import {ButtonComponent4} from '../Buttons';
import {useSelector, useDispatch} from 'react-redux';
import {setPopUpState} from '../../redux/ThunkToolkit/ChaptersApi/ChapterScreenApi';
import {useIsFocused} from '@react-navigation/native';

export const ContinuePopUp = ({navigation}) => {
  const continueData = useSelector(state => state.chapterResponse.continueData);
  const filterState = useSelector(state => state.chapterResponse.popUpState);
  const [updatedTime, setUpdatedTime] = useState(0);
  const video = (item) => {
    navigation.navigate('LessonVideoPlayer', {item});
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (continueData?.pauseTime) {
      const time = continueData?.pauseTime.split(':');
      let time1 = [];

      for (i = 0; i < time.length; i++) {
        time1[i] = time[i] * 1;
      }
      let updateTime = '';
      let i = 0;
      let j = time.length;
      let k = 0;
      if (time1[0] == 0 && time1[1] == 0) {
        updateTime = 0 + '.' + time1[2];
        setUpdatedTime(updateTime);
      } else if (time1[0] == 0) {
        updateTime = 0 + '.' + time1[1] + '.' + time1[2];
        setUpdatedTime(updateTime);
      } else {
        if (time1[1] == 0) {
          str = toString(time1[2]);
          updateTime = time1[0] + '.00.' + time1[2];
          setUpdatedTime(updateTime);
        } else {
          updateTime = time1[0] + '.' + time1[1] + '.' + time1[2];
          setUpdatedTime(updateTime);
        }
      }
    }
  }, [continueData?.pauseTime]);

  
  return (
    <Modal transparent={true} visible={filterState}>
      <View style={styles.container}>
        <View style={styles.containerView}>
          <View style={styles.messageContainer}>
            <View style={styles.textView}>
              <Text style={styles.textStyle}>
                Your Lesson paused at {updatedTime}
              </Text>
              <Text style={styles.textStyle}>
                Do you want to continue watching?
              </Text>
            </View>

            <View style={styles.buttonView}>
              <ButtonComponent
                text={'Continue Watching'}
                onPress={() => {
                  dispatch(setPopUpState());
                  const body = {
                    chapterId: continueData.chapterId,
                    chapterNumber: continueData.chapterNumber,
                    lessonId: continueData.lessonId,
                    lessonName: continueData.lessonName,
                    lessonNumber: continueData.lessonNumber,
                    pauseTime: continueData?.pauseTime,
                    videoLink: continueData.videoLink,
                  };
                  video(body);
                }}
              />
            </View>
            <View style={styles.buttonView}>
              <ButtonComponent4
                text={'Watch From Beginning'}
                onPress={() => {
                  dispatch(setPopUpState());
                  const body = {
                    chapterId: continueData.chapterId,
                    chapterNumber: continueData.chapterNumber,
                    lessonId: continueData.lessonId,
                    lessonName: continueData.lessonName,
                    lessonNumber: continueData.lessonNumber,
                    pauseTime: 0,
                    videoLink: continueData.videoLink,
                  };
                  video(body);
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000AA',
  },
  containerView: {
    backgroundColor: 'rgba(255,255,255,0.82)',
    height: 243,
    width: 297,
    borderRadius: 15.4,
  },
  messageContainer: {
    marginHorizontal: 24,
  },
  textView: {
    marginTop: 39.3,
    marginBottom: 7.5,
  },
  textStyle: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 12,
    letterSpacing: -0.07,
    //   fontFamily: 'SF Pro Text',
    lineHeight: 17.6,
  },
  buttonView: {
    marginTop: 14,
  },
});
