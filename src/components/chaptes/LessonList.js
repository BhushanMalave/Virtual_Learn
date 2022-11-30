import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {setPopUpState} from '../../redux/ThunkToolkit/ChaptersApi/ChapterScreenApi';

export const LessonList = item => {
  const video = item => {
    item.nav.navigate('LessonVideoPlayer', {item});
  };
  const [totalMinutes, setTotalMinutes] = useState(0);

  useEffect(() => {
    if (item?.duration) {
      const duration = item?.duration;
      const b = duration.split(':');
      const h = Number(b[0] * 60);
      const m = Number(b[1]);
      const mins = h + m;
      const sec = b[2] / 100;
      const totalmin = (mins + sec).toFixed(2);
      setTotalMinutes(totalmin);
    }
  }, [item?.duration]);
  const data = useSelector(state => state.chapterResponse.data);
  const continueData = useSelector(state => state.chapterResponse.continueData);
  const dispatch = useDispatch();
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        {data?.enrolled ? (
          <View style={{marginRight: 10}}>
            {item?.completed ? (
              <Image
                source={require('../../assets/images/icn_timeline_completed.png')}
              />
            ) : (
              <>
                {item?.status ? (
                  <Image
                    source={require('../../assets/images/icn_timeline_active.png')}
                  />
                ) : (
                  <Image
                    source={require('../../assets/images/icn_timeline_inactive.png')}
                  />
                )}
              </>
            )}
          </View>
        ) : (
          <></>
        )}

        <View style={styles.container}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.chapterNumber}>0{item?.number}</Text>
            <View style={{width: '75%'}}>
              <Text style={styles.chapterText}>{item?.lessonName}</Text>
              <Text style={styles.chapterTime}>{totalMinutes} mins</Text>
            </View>
          </View>

          {item?.status ? (
            <TouchableOpacity
              disabled={!item?.status}
              onPress={() => {
                {
                  continueData
                    ? (console.log(
                        'navigate to model page by sendind vedio link, Pause time and lesson id',
                      ),
                      dispatch(setPopUpState()))
                    : video(item);
                }
              }}>
              <View style={{marginLeft: -5}}>
                <Image
                  source={require('../../assets/images/icn_lessonplay_active.png')}
                  style={styles.activePlay}
                />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              disabled={!item?.status}
              onPress={() => {
                console.log(
                  ' set/dispatch status as true in lessons:status  and pressed play',
                  item?.videoLink,
                );
              }}>
              <View style={{marginLeft: -5}}>
                <Image
                  source={require('../../assets/images/icn_lessonplay_inactive.png')}
                  style={styles.activePlay}
                />
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Platform.OS === 'ios' ? '#F9F9F9' : '#F9F9F9',
    paddingLeft: 16,
    paddingBottom: 16,
    paddingTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 6,
    width: '91%',
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
  chapterNumber: {
    marginRight: 6,
    height: 38,
    color: '#373737',
    fontFamily: 'Biko',
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 38,
    width: 40,
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
  activePlay: {
    height: 24,
    width: 24,
  },
});
