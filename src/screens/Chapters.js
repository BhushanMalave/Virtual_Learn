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
    name: 'Chapter 1 - Introduction to the course',
  },
  {
    id: 2,
    name: 'Chapter 2 - Learning the Figma Interface',
  },
  {
    id: 3,
    name: 'Chapter 3 - Setting up a new project',
  },
  {
    id: 4,
    name: 'Chapter 4 - Adding and Editing Content',
  },
  {
    id: 5,
    name: 'Chapter 5 - Completing the Design',
  },
  {
    id: 6,
    name: 'Chapter 6 - Prototyping, Sharing and Exporting',
  },
  {
    id: 7,
    name: 'Chapter 7 - Conclusion',
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
<<<<<<< HEAD
        <View  style={{flex:1}}>
=======
        <View  style={{flex:1,borderWidth:1}}>
>>>>>>> a136fdbd339d6052a64b7939ebb56a0f8238bfbf
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
                <Text style={styles.chapterName}>{item.name}</Text>
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
<<<<<<< HEAD
   
=======
    borderWidth: 1,
>>>>>>> a136fdbd339d6052a64b7939ebb56a0f8238bfbf
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
