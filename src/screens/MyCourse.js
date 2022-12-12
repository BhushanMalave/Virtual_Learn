import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Pressable,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  Platform,
} from 'react-native';
import {CompletedComponent} from '../components/CompletedComponent';
import {OnGoingComponent} from '../components/OnGoingComponent';
import {MyCourseEmptyScreen} from './MyCourseEmptyScreen';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {overViewData} from '../authorization/Auth';
import {myCourses} from '../redux/ThunkToolkit/MyCourses/MyCourseApi';
import {OnGoing} from '../redux/ThunkToolkit/MyCourses/OnGoingApi';
import {Completed} from '../redux/ThunkToolkit/MyCourses/CompletedApi';
import {setToken} from '../redux/ReduxPersist/UserDetails';
import {addOverView} from '../redux/ThunkToolkit/ChaptersApi/CourseDataRedux';
import {csChapterResponse} from '../redux/ThunkToolkit/ChaptersApi/ChapterScreenApi';
import {getVerifiedKeys} from '../authorization/RefreshToken';
export const MyCourse = ({navigation}) => {
  const [clicked1, setClicked1] = useState(true);
  const [clicked2, setClicked2] = useState(false);
  const [initial, setInitial] = useState(1);
  const token = useSelector(state => state.userDetails.token);
  const mycoursestatus = useSelector(state => state.courses.data);
  console.log(mycoursestatus)
  const ongoingdata = useSelector(state => state.ongoingcourse.data);
  const completeddata = useSelector(state => state.completedcourse.data);

  const coursedata = useSelector(state => state.courseData.overview);
  const dispatch = useDispatch();
  const refreshToken = async () => {
    const key = await getVerifiedKeys(token);
    dispatch(setToken(key));
  };

  useEffect(() => {
    dispatch(myCourses(token));
    dispatch(OnGoing(token));
   // refreshToken();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Pressable onPress={() => navigation.openDrawer()}>
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

      {!mycoursestatus?.message == true? (
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
                      dispatch(csChapterResponse(token, {id: item.courseId}));
                      const res = await overViewData(token, item.courseId);
                      dispatch(addOverView(res));
                      navigation.navigate('CourseScreen');
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
                      dispatch(csChapterResponse(token, {id: item.courseId}));
                      const res = await overViewData(token, item.courseId);
                      dispatch(addOverView(res));
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
          <MyCourseEmptyScreen navigation={navigation} />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 25 : 15,
    marginHorizontal: 24,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
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
    fontWeight: Platform.OS == 'ios' ? 'bold' : 'normal',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
    fontSize: 26,
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
  },
  buttonActive: {
    height: 15,
    alignSelf: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontSize: 12,
    fontWeight: Platform.OS == 'ios' ? '500' : 'normal',
    letterSpacing: 0,
    lineHeight: 15,
    color: '#FFFFFF',
    marginTop: 5,
  },
  buttonview: {
    height: 26,
    margin: 5,
  },
  button: {
    height: 26,
    borderRadius: 6,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontSize: 12,
    fontWeight: Platform.OS == 'ios' ? '500' : 'normal',
    letterSpacing: 0,
    lineHeight: 15,
    color: '#7A7A7A',
  },
});
