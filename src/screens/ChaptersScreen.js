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

const enrolled = false;

const Chapter = {
  chapterNum: 7,
  lessonNum: 46,
  assignmentNum: 6,
  totalLength: 3.5,
  enrolled: false,
  courseCompletedStatus: false,
  chapterList: [
    {
      id: 1,
      number: 1,
      name: 'Introduction to the course',
      status: true,
      completed: false,
      lessons: [
        {
          id: 1,
          number: 1,
          name: 'Introduction',
          duration: 0.34,
          completed: false,
        },
        {
          id: 2,
          number: 2,
          name: 'Using the Exercise Files',
          duration: 1.06,
          completed: true,
        },
      ],
    },
    {
      id: 2,
      number: 2,
      name: 'Learning the Figma Interface',
      status: true,
      completed: false,
      lessons: [
        {
          id: 1,
          number: 1,
          name: 'Introduction',
          duration: 0.34,
          completed: false,
          status: false,
        },
        {
          id: 2,
          number: 2,
          name: 'Using the Exercise Files',
          duration: 1.06,
          completed: true,
          status: true,
        },
      ],
      modularTest: {
        id: 1,
        name: 'Modular Test 2',
        duration: '10',
        questions: 25,
        rate: 10,
      },
    },
    {
      id: 3,
      number: 3,
      name: 'Setting up a new project',
      status: false,
      completed: false,
      status: false,
      lessons: [
        {
          id: 1,
          number: 1,
          name: 'Introduction',
          duration: 0.34,
          completed: false,
          status: false,
        },
        {
          id: 2,
          number: 2,
          name: 'Using the Exercise Files',
          duration: 1.06,
          completed: false,
          status: false,
        },
      ],
      modularTest: {
        id: 1,
        name: 'Modular Test 2',
        duration: '10',
        questions: 25,
        rate: 10,
      },
    },
    {
      id: 4,
      number: 4,
      name: 'Adding and Editing Content',
      status: false,
      completed: false,
      lessons: [
        {
          id: 1,
          number: 1,
          name: 'Introduction',
          duration: 0.34,
          completed: false,
          status: false,
        },
        {
          id: 2,
          number: 2,
          name: 'Using the Exercise Files',
          duration: 1.06,
          completed: false,
          status: false,
        },
      ],
      modularTest: {
        id: 1,
        name: 'Modular Test 2',
        duration: '10',
        questions: 25,
        rate: 10,
      },
    },
    {
      id: 5,
      number: 4,
      name: 'Completing the Design',
      status: false,
      completed: false,
      lessons: [
        {
          id: 1,
          number: 1,
          name: 'Introduction',
          duration: 0.34,
          completed: false,
          status: false,
        },
        {
          id: 2,
          number: 2,
          name: 'Using the Exercise Files',
          duration: 1.06,
          completed: false,
          status: false,
        },
      ],
      modularTest: {
        id: 1,
        name: 'Modular Test 2',
        duration: '10',
        questions: 25,
        rate: 10,
      },
    },
    {
      id: 6,
      number: 6,
      name: 'Prototyping, Sharing and Exporting',
      status: false,
      completed: false,
      lessons: [
        {
          id: 1,
          number: 1,
          name: 'Introduction',
          duration: 0.34,
          completed: false,
          status: false,
        },
        {
          id: 2,
          number: 2,
          name: 'Using the Exercise Files',
          duration: 1.06,
          completed: false,
          status: false,
        },
      ],
      modularTest: {
        id: 1,
        name: 'Modular Test 2',
        duration: '10',
        questions: 25,
        rate: 10,
      },
    },
    {
      id: 7,
      number: 7,
      name: 'Conclusion',
      status: false,
      completed: false,
      lessons: [
        {
          id: 1,
          number: 1,
          name: 'Introduction',
          duration: 0.34,
          completed: false,
          status: false,
        },
        {
          id: 2,
          number: 2,
          name: 'Using the Exercise Files',
          duration: 1.06,
          completed: false,
          status: false,
        },
      ],
      modularTest: {
        id: 1,
        name: 'Modular Test 2',
        duration: '10',
        questions: 25,
        rate: 10,
      },
    },
  ],
};

export const ChaptersScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.mainView}>
          <Text style={styles.contentText}>Course Content</Text>

          <View style={styles.contentDetailsView}>
            <Text style={styles.contentDetailsText}>
              {Chapter.chapterNum} chapters | {Chapter.lessonNum} lessons |{' '}
              {Chapter.assignmentNum} Assignment Test | {Chapter.totalLength}h
              total length
            </Text>
          </View>

          <View style={styles.chapterListContainer}>
            {Chapter.chapterList.map(item => (
              <View key={item.id}>
                <ChapterList
                  number={item.number}
                  name={item.name}
                  status={item.status}
                  completed={item.completed}
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
                        />
                      </View>
                    ))}
                  </View>
                ) : (
                  <></>
                )}

                {item.status ? (
                  <>
                  {item.modularTest? (<ModularTest
                      test={item.modularTest.name}
                      duration={item.modularTest.duration}
                      questions={item.modularTest.questions}
                      rate={item.modularTest.rate}
                      id={item.modularTest.id}
                    />):(
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
      </ScrollView>

      {Chapter.enrolled ? (
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
    backgroundColor:'#FFFFFF'
  },
  scrollContainer: {
    flex: 1,
    marginHorizontal: 24,
  },
  mainView: {
    flex: 1,
    // borderWidth: 1,
  },
  contentText: {
    color: '#2B2B2B',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 18,
    fontWeight:Platform.OS === 'ios' ? '600': '700',
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
    fontWeight:Platform.OS === 'ios' ? '400': '500',
    lineHeight: 15,
  },
  chapterListContainer: {
    marginTop: Platform.OS == 'ios' ? 36 : 36,
    // borderWidth: 1,
    width: '100%',
  },
});
