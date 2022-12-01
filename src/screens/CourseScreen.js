import React from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import TopTabNav from '../navigation/TopTabNav';
import {useDispatch, useSelector} from 'react-redux';
import {addChapterList} from '../redux/ThunkToolkit/ChaptersApi/ChapterScreenApi';

export const CourseScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const coursedata = useSelector(state => state.courseData.overview);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={{uri: coursedata?.coursePhoto}}
          style={styles.header}>
          <TouchableOpacity onPress={() =>{ 
            dispatch(addChapterList());
            // navigation.navigate('HomeScreen')
            navigation.goBack()
          }}
            >
            <Image
              source={require('../assets/images/icn_close_white.png')}
              style={styles.image}
            />
          </TouchableOpacity>
            <View style={{marginTop:20}}>

          <Text style={styles.maintext}>
            {coursedata?.courseName}
          </Text>
            </View>
          <View style={styles.text}>
            <View style={styles.designview}>
              <Text style={styles.design}>{coursedata?.categoryName}</Text>
            </View>
            <Text style={styles.chapter}>
              {coursedata?.chapterCount} Chapters | {coursedata?.lessonCount}{' '}
              Lessons
            </Text>
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

  },
  header: {
    height: 213,
   
  },
  maintext: {
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
    position:"absolute",
    marginTop:Platform.OS ==='ios'?175:175
  },
  designview: {
    height: 20,
    width: 62,
    borderRadius: 3,
    backgroundColor: '#FCBE4B',
    marginTop:8,
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
    marginTop: Platform.OS ==='ios'?70:50,
    marginLeft: 20,
  },
});
