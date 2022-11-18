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
import {ScrollView} from 'react-native-gesture-handler';
import {ButtonComponent} from '../components/Buttons';
const chapterList = [
  {
    id: 1,
    number:1,
    name: 'Introduction to the course',
    lessons:[
      {
        id: 1,
        number: 1,
        name: 'Introduction',
        duration: 0.34,
      },
      {
        id: 2,
        number: 2,
        name: 'Using the Exercise Files',
        duration: 1.06,
      },
      
    ],
status:true
  },
  {
    id: 2,
    number:1,
    name: 'Learning the Figma Interface',
  },
  {
    id: 3,
    number:1,
    name: 'Setting up a new project',
  },
  {
    id: 4,
    number:1,
    name: 'Adding and Editing Content',
  },
  {
    id: 5,
    number:1,
    name: 'Completing the Design',
  },
  {
    id: 6,
    number:1,
    name: 'Prototyping, Sharing and Exporting',
  },
  {
    id: 7,
    number:1,
    name: 'Conclusion',
  },
];
const content = [
  {
    id: 1,
    number: 1,
    name: 'Introduction',
    duration: 0.34,
  },
  {
    id: 2,
    number: 2,
    name: 'Using the Exercise Files',
    duration: 1.06,
  },
];
export const Chapters = () => {
  const [view, setView] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex:1,marginHorizontal:24,}}>
        <View  style={{flex:1,borderWidth:1}}>
        <Text style={styles.contentText}>Course Content</Text>

        <View style={styles.contentDetailsView}>
          <Text style={styles.contentDetailsText}>
            7 chapters | 46 lessons | 6 Assignment Test | 3.5h total length
          </Text>
        </View>

        <View style={styles.chapterListContainer}>
          {chapterList.map(item => (
            <View key={item.id}>
              <View style={styles.chapterList}>
                <Text style={styles.chapterName}>Chapter {item.id} - {item.name}</Text>
                <View style={{marginLeft: 4}}>
                  {!view ? (
                    <TouchableOpacity
                      onPress={() => {
                        setView(true);
                      }}>
                      <Image
                        source={require('../assets/images/icn_chapter_maximise.png')}
                        style={{
                          tintColor: '#EE5C4D',
                        }}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        setView(false);
                      }}>
                      <Image
                        source={require('../assets/images/icn_chapter_minimise.png')}
                      />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          ))}
          {content.map(item => (
            <View key={item.id}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#F9F9F9',
                  padding: 16,
                  width: '100%',
                }}>
                <Text style={styles.chapterNumber}>0{item.number}</Text>
                <View style={{width: '75%'}}>
                  <Text style={styles.chapterText}>{item.name}</Text>
                  <Text style={styles.chapterTime}>{item.duration} mins</Text>
                </View>
                <TouchableOpacity onPress={()=>console.log('pressed play')}>
                  <Image
                    source={require('../assets/images/icn_lessonplay_active.png')}
                    style={styles.activePlay}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        </View>
        
      </ScrollView>
      <View style={{bottom: 0}} >
        <ButtonComponent text={'Join Course'} onPress={()=>console.log('Join Course Pressed')}/>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    // margin: 24,
    flex: 1,
    borderWidth: 1,
  },
  contentText: {
    color: '#2B2B2B',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 18,
    fontWeight: '600',
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
    fontWeight: '500',
    lineHeight: 15,
  },
  chapterListContainer: {
    marginTop: Platform.OS == 'ios' ? 36 : 36,
    // borderWidth: 1,
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
    // borderWidth: 1,
    width: '95%',
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
  activePlay: {
    height: 24,
    width: 24,
  },
});
