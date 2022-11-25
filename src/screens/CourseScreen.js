import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import TopTabNav from '../navigation/TopTabNav';
import { useSelector } from 'react-redux';

export const CourseScreen = ({navigation}) => {


  const coursedata = useSelector(state => state.courseData.overview);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={require('../assets/images/img_designcoursedetail1_bg.png')}
          style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/images/icn_close_white.png')}
              style={styles.image}
            />
          </TouchableOpacity>

          <Text style={styles.maintext}>
            {coursedata.courseName}
          </Text>
          <View style={styles.text}>
            <View style={styles.designview}>
              <Text style={styles.design}>{coursedata.categoryName}</Text>
            </View>
            <Text style={styles.chapter}>{coursedata.chapterCount} Chapters | {coursedata.lessonCount} Lessons</Text>
          </View>
        </ImageBackground>
      </View>
      <TopTabNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
  header: {
    height: 213,
    borderWidth: 1,
  },
  maintext: {
    marginTop: 18,
    marginLeft: 20,
    color: '#FFFFFF',
    fontFamily: 'Biko',
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 0,
    lineHeight: 35,
  },
  text: {
    marginLeft: 20,
    flexDirection: 'row',
  },
  designview: {
    height: 20,
    width: 60,
    borderRadius: 3,
    backgroundColor: '#FCBE4B',
    marginTop: 10,
  },
  design: {
    height: 12,

    color: '#373737',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 10,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 9,
    alignSelf: 'center',
    marginTop: 5,
  },
  chapter: {
    color: '#FFFFFF',
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 17,
    marginTop: 10,
    marginLeft: 10,
  },
  image: {
    marginTop: 70,
    marginLeft: 20,
  },
});
