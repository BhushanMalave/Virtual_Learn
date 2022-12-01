import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';

import {useDispatch} from 'react-redux';
import {changeChapterListStatus} from '../../redux/ThunkToolkit/ChaptersApi/ChapterScreenApi';

export const ChapterList = item => {
  const dispatch = useDispatch();
  return (
    <View style={styles.chapterList}>
      {item?.completed ? (
        <View style={styles.chapterNameContainer}>
          <Text style={styles.chapterNameCompleted}>
            Chapter {item?.number} - {item?.name}
          </Text>
        </View>
      ) : (
        <View style={styles.chapterNameContainer}>
          <Text style={styles.chapterName}>
            Chapter {item?.number} - {item?.name}
          </Text>
        </View>
      )}
      <View style={styles.iconContainer}>
        {item.chapterStatus ? (
          <>
            <TouchableOpacity
              onPress={() => {
                console.log(
                  'set/disaptch status as false in chapterlist:status and close',
                );
                dispatch(changeChapterListStatus({id: item.chapterId}));
              }}
              style={{padding: 3}}>
              <Image
                source={require('../../assets/images/icn_chapter_minimise.png')}
              />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              onPress={() => {
                console.log(
                  'set/disaptch status as true in chapterlist:status and expanded',
                );
                dispatch(changeChapterListStatus({id: item.chapterId}));
              }}
              style={{padding: 2}}>
              <Image
                source={require('../../assets/images/icn_chapter_maximise.png')}
                style={{
                  tintColor: '#EE5C4D',
                }}
              />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  chapterNameContainer: {
    width: '95%'
  },
  iconContainer: {
    marginLeft: 4,
  },
  chapterList: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: Platform.OS == 'ios' ? 18 : 20,
  },
  chapterName: {
    color: '#373737',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 12,
    fontWeight: Platform.OS == 'ios' ? '500' : '600',
    lineHeight: 15,
  },
  chapterNameCompleted: {
    color: '#1EAB0D',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 15,
  },
  chapterNumber: {
    marginRight: 12,
    height: 38,
    color: '#373737',
    fontWeight:  Platform.OS == 'ios' ? 'bold': 'normal',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
    fontSize: 32,
    lineHeight: 38,
    width: '13%',
  },
  chapterText: {
    color: '#042C5C',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 16,
    fontWeight: 'bold',
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
});
