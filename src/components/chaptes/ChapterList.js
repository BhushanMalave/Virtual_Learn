import React, {useState} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';

import { useDispatch } from 'react-redux';
import { changeChapterListStatus } from '../../redux/ThunkToolkit/ChaptersApi/ChapterScreenApi';

export const ChapterList = (item) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.chapterList}>
      {item?.completed ? (
        <View style={{width:'95%'}}>
        <Text style={styles.chapterNameCompleted}>
          Chapter {item?.number} - {item?.name}
        </Text>
        </View>
      ) : (
        <View style={{ width:'95%'}}>
        <Text style={styles.chapterName}>
          Chapter {item?.number} - {item?.name}
        </Text>
        </View>
      )}
{item?.completed ? (<>
  <View style={{marginLeft: 4}}>
        {item?.chapterStatus ? (
          <>
          <TouchableOpacity
            onPress={() => {
            
              dispatch(changeChapterListStatus({id: item?.chapterId}))
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
              dispatch(changeChapterListStatus({id : item?.chapterId}))
            }}
>
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
</>):<>
<View style={{marginLeft: 4}}>
        {item.chapterStatus ? (
          <>
          <TouchableOpacity
            onPress={() => {
              console.log('set/disaptch status as false in chapterlist:status and close');
              dispatch(changeChapterListStatus({id: item.chapterId}))
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
              console.log('set/disaptch status as true in chapterlist:status and expanded');
              dispatch(changeChapterListStatus({id : item.chapterId}))
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
</>}

     
    </View>
  );
};
const styles = StyleSheet.create({
  chapterList: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: Platform.OS == 'ios' ? 18 : 14,
  },
  chapterName: {
    color: '#373737',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 12,
    fontWeight:Platform.OS == 'ios' ? '500':'600',
    lineHeight: 15,
    // width: '95%',
  },
  chapterNameCompleted: {
    color: '#1EAB0D',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 15,
    // borderWidth: 1,
    // width: '95%',
  },
  chapterNumber: {
    marginRight: 12,
    height: 38,
    color: '#373737',
    fontFamily: 'Biko',
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 38,
    // borderWidth:1,
    width: '13%',
  },
  chapterText: {
    color: '#042C5C',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 16,
    fontWeight: '600',
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
