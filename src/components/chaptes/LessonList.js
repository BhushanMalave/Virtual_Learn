import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';

const enrolled = true ;

export const LessonList = item => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        {enrolled ? (
          <View style={{marginRight: 10}}>
            {item.completed ? (
              <Image
                source={require('../../assets/images/icn_timeline_completed.png')}
              />
            ) : (
              <>
                {item.status ? (
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
            <Text style={styles.chapterNumber}>0{item.number}</Text>
            <View style={{width: '75%'}}>
              {/* <View > */}
              <Text style={styles.chapterText}>{item.name}</Text>
              <Text style={styles.chapterTime}>{item.duration} mins</Text>
            </View>
          </View>
{item.status?(<TouchableOpacity onPress={() => console.log(" don't set/dispatch status as false in lessons:status  and pressed play")}>
            <Image
              source={require('../../assets/images/icn_lessonplay_active.png')}
              style={styles.activePlay}
            />
          </TouchableOpacity>):(
            <TouchableOpacity onPress={() => console.log(' set/dispatch status as true in lessons:status  and pressed play')}>
            <Image
              source={require('../../assets/images/icn_lessonplay_inactive.png')}
              style={styles.activePlay}
            />
          </TouchableOpacity>
          )}
          
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Platform.OS === 'ios' ? '#F9F9F9': '#F9F9F9',
    paddingLeft: 16,
    paddingBottom: 16,
    paddingTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth:1,
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
    // borderWidth:1,
    width: 40,
  },
  chapterText: {
    color: '#042C5C',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 16,
    fontWeight:Platform.OS === 'ios' ? '600': '700',
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
  activePlay: {
    height: 24,
    width: 24,
  },
});
