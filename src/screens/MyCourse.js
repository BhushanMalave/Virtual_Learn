import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Pressable,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {CompletedComponent} from '../components/CompletedComponent';
import {OnGoingComponent} from '../components/OnGoingComponent';
import {SearchComponent} from '../components/SearchFoundComponent';
import {MyCourseEmptyScreen} from './MyCourseEmptyScreen';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {MyCourseData, overViewData} from '../authorization/Auth';
import {myCourses} from '../redux/ThunkToolkit/MyCourses/MyCourseApi';
import {OnGoing} from '../redux/ThunkToolkit/MyCourses/OnGoingApi';
import {Completed} from '../redux/ThunkToolkit/MyCourses/CompletedApi';

import {addOverView} from '../redux/ThunkToolkit/ChaptersApi/CourseDataRedux';
import {chapterListData} from '../authorization/Auth';
import {addChapterList} from '../redux/ThunkToolkit/ChaptersApi/CourseDataRedux';

export const MyCourse = ({navigation}) => {
  const [clicked1, setClicked1] = useState(true);
  const [clicked2, setClicked2] = useState(false);

  const [initial, setInitial] = useState(1);
  const token = useSelector(state => state.userDetails.token);

  const mycoursestatus = useSelector(state => state.courses.status);
  const ongoingdata = useSelector(state => state.ongoingcourse.data);
  const completeddata = useSelector(state => state.completedcourse.data);

  const coursedata = useSelector(state => state.courseData.overview);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(myCourses(token));
    dispatch(OnGoing(token));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require('../assets/images/icn_hamburgermenu.png')} />
        </Pressable>
        <TouchableOpacity onPress={() => navigation.navigate('HomeSearch')}>
          <Image
            source={require('../assets/images/icn_search-Search.png')}
            style={styles.search}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.header}>My Course</Text>

      {mycoursestatus? (
        <>
          <View style={styles.buttontabs}>
            <TouchableOpacity
              onPress={() => {
                setClicked1(true), setClicked2(false);
              }}>
              {clicked1 ? (
                <View style={styles.buttonActiveview}>
                  <Text style={styles.buttonActive}>Ongoing</Text>
                </View>
              ) : (
                <View style={styles.buttonview}>
                  <Text style={styles.button}>Ongoing</Text>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setClicked2(true), setClicked1(false);
                dispatch(Completed(token));
              }}>
              {clicked2 ? (
                <View style={styles.buttonActiveview}>
                  <Text style={styles.buttonActive}>Completed</Text>
                </View>
              ) : (
                <View style={styles.buttonview}>
                  <Text style={styles.button}>Completed</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
          {clicked1 ? (
            <>
              <FlatList
                data={ongoingdata}
                renderItem={({item}) => (
                  <OnGoingComponent
                    source={{uri: item?.coursePhoto}}
                    name={item?.courseName}
                    chapter={item?.completedChapter}
                    ctdchapter={item?.totalChapter}
                    onPress={async () => {
                      navigation.navigate('CourseScreen');
                      const res = await overViewData(token, item.courseId);
                      dispatch(addOverView(res));
                      const chapterRes = await chapterListData(
                        token,
                        item.courseId,
                      );
                      dispatch(addChapterList(chapterRes));
                      
                    }}
                  />
                )}></FlatList>
            </>
          ) : (
            <></>
          )}
          {clicked2 ? (
            <>
              <FlatList
                data={completeddata}
                renderItem={({item}) => (
                  <CompletedComponent
                    source={{uri: item?.coursePhoto}}
                    name={item?.courseName}
                    percentage={item?.coursePercentage}
                    onPress={async () => {
                      const res = await overViewData(token, item.courseId);
                      dispatch(addOverView(res));
                      const chapterRes = await chapterListData(
                        token,
                        item.courseId,
                      );

                      dispatch(addChapterList(chapterRes));
                      navigation.navigate('CourseScreen');
                    }}
                  />
                )}></FlatList>
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          <MyCourseEmptyScreen navigation={navigation}/>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 25 : 15,
    // borderWidth: 1,
    marginHorizontal: 24,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    // marginLeft: 25,
  },
  search: {
    height: 16.5,
    border: 0.5,
    color: '#373737',
    marginRight: 20,
  },
  header: {
    height: 35,
    color: '#2B2B2B',
    fontFamily: 'Biko',
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 0,
    lineHeight: 35,
    marginTop: 25,
    marginBottom: 20,
  },
  buttontabs: {
    flexDirection: 'row',
    height: 26,
    width: 156,
    justifyContent: 'space-between',
    marginBottom: 27,
  },
  buttonActiveview: {
    height: 26,
    width: 75,
    backgroundColor: '#042C5C',
    borderRadius: 6,
    // marginLeft:25,
  },
  buttonActive: {
    height: 15,
    alignSelf: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 15,
    color: '#FFFFFF',
    marginTop: 5,
  },
  buttonview: {
    height: 26,

    // marginLeft:25,
    margin: 5,
  },
  button: {
    height: 26,
    // borderWidth:1,
    borderRadius: 6,
    // backgroundColor:"#DFE7F5"
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 15,

    color: '#7A7A7A',
  },
});
