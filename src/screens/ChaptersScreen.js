import {createEntityAdapter} from '@reduxjs/toolkit';
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
import {ChapterList} from '../components/chaptes/ChapterList';

import {LessonList} from '../components/chaptes/LessonList';
import {ModularTest} from '../components/chaptes/ModuleTest';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';

export const ChaptersScreen = () => {
  const data = useSelector(state => state.chapterList.data);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainView}>
          <Text style={styles.contentText}>Course Content</Text>

          <View style={styles.contentDetailsView}>
            <Text style={styles.contentDetailsText}>
              {data.chapterNum} chapters | {data.lessonNum} lessons |{' '}
              {data.assignmentNum} Assignment Test | {data.totalLength}h total
              length
            </Text>
          </View>

          <View style={styles.chapterListContainer}>
            {data.chapterList.map(item => (
              <View key={item.id}>
                <ChapterList
                  number={item.number}
                  name={item.name}
                  status={item.status}
                  completed={item.completed}
                  id={item.id}
                />

                {item.status ? (
                  <View style={{alignSelf: 'center', justifyContent: 'center'}}>
                    {item.lessons.map(item => (
                      <View key={item.id}>
                        <LessonList
                          number={item.number}
                          name={item.name}
                          duration={item.duration}
                          completed={item.completed}
                          status={item.status}
                          id={item.id}
                          url={item.url}
                        />
                      </View>
                    ))}
                  </View>
                ) : (
                  <></>
                )}

                {item.lessons.map(temp => {
                  if (temp.completed == true) {
                    item.disabled = true;
                  } else {
                    item.disabled = false;
                  }
                })}

                {item.status ? (
                  <>
                    {item.modularTest ? (
                      <ModularTest
                        test={item.modularTest.name}
                        duration={item.modularTest.duration}
                        questions={item.modularTest.questions}
                        rate={item.modularTest.rate}
                        id={item.modularTest.id}
                        disable={item.disabled}
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
        {data.courseCompletedStatus ? (
          <>
            <View style={{backgroundColor: '#042C5C'}}>
              <View style={{margin: 24, marginTop: 30}}>
                <Text style={styles.courseText}>Course Result</Text>

                <Text style={styles.percentText}>90%</Text>

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

      {data.enrolled ? (
        <></>
      ) : (
        <View style={{bottom: 0}}>
          <ButtonComponent
            text={'Join Course'}
            onPress={() => console.log('Join Course Pressed')}
          />
        </View>
      )}
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
