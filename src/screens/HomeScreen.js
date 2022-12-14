import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  Platform,
  RefreshControl,
} from 'react-native';
import {CourseComponent} from '../components/CourseComponent';
import {CategoriesComponent} from '../components/CategoriesComponent';
import {useSelector, useDispatch} from 'react-redux';
import {hsTopHeaders} from '../redux/ThunkToolkit/HomeScreenApiCalls/homeScreenTopHeaders';
import {hsCategories} from '../redux/ThunkToolkit/HomeScreenApiCalls/homeScreenCategories';
import {newest, popular, all} from '../authorization/Auth';
import {hsTopCourses} from '../redux/ThunkToolkit/HomeScreenApiCalls/homeScreenTopCourses';
import {mpUserDetails} from '../redux/ThunkToolkit/MyProfileApiCall/myProfileUserDetails';
import {
  setAllData,
  setNewestData,
  setPopularData,
} from '../redux/ReduxPersist/ChoiceYourCourseSlice';
import {addChapterList} from '../redux/ThunkToolkit/ChaptersApi/ChapterScreenApi';
import {overViewData} from '../authorization/Auth';
import {addOverView} from '../redux/ThunkToolkit/ChaptersApi/CourseDataRedux';
import {cdsbasicCourse} from '../redux/ThunkToolkit/categoryDisplayScreenApi/BasicCoursesApi';
import {cdsAdvanceCourse} from '../redux/ThunkToolkit/categoryDisplayScreenApi/AdvanceCourseApi';
import {cdsAllCourseOfCategory} from '../redux/ThunkToolkit/categoryDisplayScreenApi/AllCourseOfCategoryApi';
import {cdsSubCategories} from '../redux/ThunkToolkit/categoryDisplayScreenApi/SubCategoriesApi';
import {csChapterResponse} from '../redux/ThunkToolkit/ChaptersApi/ChapterScreenApi';
import {OnGoing} from '../redux/ThunkToolkit/MyCourses/OnGoingApi';
import {OnGoingComponent} from '../components/OnGoingComponent';
import {getVerifiedKeys} from '../authorization/RefreshToken';
import {setToken} from '../redux/ReduxPersist/UserDetails';
import {ActivityIndicator} from 'react-native';
import {drawerDataApiCall} from '../redux/ThunkToolkit/DrawerDataApi/DrawerData';

export const HomeScreen = ({navigation}) => {
  const [clicked1, setClicked1] = useState(true);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector(state => state.userDetails.token);
  const userData = useSelector(state => state.userData.data);
  const data = useSelector(state => state.drawerData.data);
  const topHeaderData = useSelector(state => state.topHeader.value);
  const choiceYourCourse = useSelector(state => state.choiceYourCourse.data);

  const categoriesData = useSelector(state => state.categories.data);
  const topCoursesData = useSelector(state => state.topCourses.data);
  const ongoingdata = useSelector(state => state.ongoingcourse.data);
  const [refreshing, setRefreshing] = useState(false);

  const refreshToken = async token => {
    const key = await getVerifiedKeys(token);
    dispatch(setToken(key));
  };
  const allCourse = async () => {
    const data1 = await all(token);
    if (data1) {
      dispatch(setAllData(data1));
    }
  };
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    dispatch(hsTopHeaders(token));
    dispatch(hsCategories(token));
    dispatch(hsTopCourses(token));
    dispatch(mpUserDetails(token));
    dispatch(OnGoing(token));
    dispatch(drawerDataApiCall(token));
    setClicked1(true);
    setClicked2(false);
    setClicked3(false);
    allCourse();
    // refreshToken(token);
    setRefreshing(false);
  }, [refreshing]);

  useEffect(() => {
    dispatch(hsTopHeaders(token));
    dispatch(hsCategories(token));
    dispatch(hsTopCourses(token));
    dispatch(OnGoing(token));
    dispatch(mpUserDetails(token));
    dispatch(drawerDataApiCall(token));
    setClicked1(true);
    setClicked2(false);
    setClicked3(false);
    allCourse();
    // refreshToken(token);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.view}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={require('../assets/images/icn_hamburgermenu.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('HomeSearch')}>
            <Image
              source={require('../assets/images/icn_search-Search.png')}
              style={styles.search}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.toptext}>Hello!</Text>
        <Text style={styles.name}>{data?.fullName}</Text>
        <View>
          {topHeaderData &&
              <FlatList
              data={topHeaderData}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{marginStart: 25, paddingRight: 25}}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={async () => {
                    dispatch(addChapterList());
                    dispatch(csChapterResponse({token, id: item.courseId}));
                    const res = await overViewData(token, item.courseId);
                    dispatch(addOverView(res));
                    navigation.navigate('CourseScreen');
                  }}>
                  <View style={styles.itemContainer} key={item.id}>
                    <ImageBackground
                      source={{uri: item?.coursePhoto}}
                      style={{
                        height: 140,
                        width: 260,
                        borderRadius: 5,
                        overflow: 'hidden',
                      }}>
                      <View
                        style={{
                          height: 45,
                          marginTop: 90,
                          justifyContent: 'center',
                          margin: 13,
                        }}>
                        <Text style={styles.courseText}>{item?.courseName}</Text>
                      </View>
                    </ImageBackground>
                  </View>
                </TouchableOpacity>
              )}></FlatList>
          
          }
         
        </View>
        <View>
          <FlatList
            data={ongoingdata}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{marginStart: 25, paddingRight:25}}
            renderItem={({item}) => (
              <View style={styles.itemContainer2} key={item.id}>
                <OnGoingComponent
                  source={{uri: item?.coursePhoto}}
                  name={item?.courseName}
                  chapter={item?.completedChapter}
                  ctdchapter={item?.totalChapter}
                  onPress={async () => {
                    dispatch(addChapterList());
                    dispatch(csChapterResponse({token, id: item.courseId}));
                    const res = await overViewData(token, item.courseId);
                    dispatch(addOverView(res));
                    navigation.navigate('CourseScreen');
                  }}
                />
              </View>
            )}></FlatList>
        </View>

        {categoriesData && choiceYourCourse && topCoursesData ? (
          <></>
        ) : (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              marginTop: 50,
              justifyContent: 'center',
            }}>
            <ActivityIndicator
              animating={
                !categoriesData && !choiceYourCourse && !topCoursesData
              }
              size="small"
              color="#373737"
            />
          </View>
        )}
        <View style={{marginTop: 30}}>
          <View style={styles.categoryview}>
            <Text style={styles.category}>Categories</Text>
            <Pressable onPress={() => navigation.navigate('CategoriesScreen')}>
              <Text style={styles.all}>See All</Text>
            </Pressable>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                height: 104,
                width: '100%',
                flexDirection: 'column',
                flexWrap: 'wrap',
                display: 'flex',
                marginLeft: 20,
                marginTop: 10,
              }}>
              {categoriesData?.map(item => (
                <View key={item?.categoryId}>
                  <CategoriesComponent
                    id={item?.categoryId}
                    img={item?.categoryPhoto}
                    category={item?.categoryName}
                    onPress={() => {
                      dispatch(cdsbasicCourse({token, id: item?.categoryId}));
                      dispatch(cdsAdvanceCourse({token, id: item?.categoryId}));
                      dispatch(
                        cdsAllCourseOfCategory({token, id: item?.categoryId}),
                      );
                      dispatch(cdsSubCategories({token, id: item?.categoryId}));
                      navigation.navigate('CategoryDisplayScreen', {item});
                    }}
                  />
                </View>
              ))}
            </View>
          </ScrollView>
          <View style={styles.choiceview}>
            <View style={styles.categoryview}>
              <Text style={styles.category}>Choice your course</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('ChoiceCourse')}>
                <Text style={styles.all}>See All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttontabs}>
              <TouchableOpacity
                onPress={async () => {
                  setClicked1(true), setClicked2(false), setClicked3(false);
                  const data1 = await all(token);
                  if (data1) {
                    dispatch(setAllData(data1));
                  }
                }}>
                {clicked1 ? (
                  <View style={styles.buttonActiveview}>
                    <Text style={styles.buttonActive}>All</Text>
                  </View>
                ) : (
                  <View style={styles.buttonview}>
                    <Text style={styles.button}>All</Text>
                  </View>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                onPress={async () => {
                  setClicked2(true), setClicked1(false), setClicked3(false);
                  const data2 = await popular(token);
                  if (data2) {
                    dispatch(setPopularData(data2));
                  }
                }}>
                {clicked2 ? (
                  <View style={styles.buttonActiveview}>
                    <Text style={styles.buttonActive}>Popular</Text>
                  </View>
                ) : (
                  <View style={styles.buttonview}>
                    <Text style={styles.button}>Popular</Text>
                  </View>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                onPress={async () => {
                  setClicked3(true), setClicked2(false), setClicked1(false);
                  const data3 = await newest(token);
                  if (data3) {
                    dispatch(setNewestData(data3));
                  }
                }}>
                {clicked3 ? (
                  <View style={styles.buttonActiveview}>
                    <Text style={styles.buttonActive}>Newest</Text>
                  </View>
                ) : (
                  <View style={styles.buttonview}>
                    <Text style={styles.button}>Newest</Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>

            <FlatList
              data={choiceYourCourse}
              horizontal={true}
              contentContainerStyle={{
                marginStart: 25,
                paddingRight: 40,
                marginTop: 5,
              }}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <View style={styles.btmcourseview} key={item?.courseId}>
                  <TouchableOpacity
                    onPress={async () => {
                      dispatch(addChapterList());
                      dispatch(csChapterResponse({token, id: item.courseId}));
                      const res = await overViewData(token, item.courseId);
                      dispatch(addOverView(res));
                      navigation.navigate('CourseScreen');
                    }}>
                    <ImageBackground
                      source={{uri: item?.coursePhoto}}
                      style={styles.imgview}>
                      <View style={styles.designview}>
                        <Text style={styles.design}>{item?.categoryName}</Text>
                      </View>
                    </ImageBackground>
                    <View style={styles.btmitemContainer}>
                      <View>
                        <Text style={styles.btmcourseText} ellipsizeMode="tail">
                          {item?.courseName}
                        </Text>
                        <Text style={styles.ChoiseCourseChapterNum}>
                          {item?.chapterCount} Chapter
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )}></FlatList>
          </View>
        </View>

        {topCoursesData?.map(item => (
          <CourseComponent
            nav={navigation}
            header={item?.categoryName}
            data={item?.popularCourseInEachCategoryList}
            onPress={() => {
              dispatch(cdsbasicCourse({token, id: item?.categoryId}));
              dispatch(cdsAdvanceCourse({token, id: item?.categoryId}));
              dispatch(cdsAllCourseOfCategory({token, id: item?.categoryId}));
              dispatch(cdsSubCategories({token, id: item?.categoryId}));
              navigation.navigate('CategoryDisplayScreen', {item});
            }}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 35 : 10,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    marginLeft: 25,
  },
  search: {
    height: 16.5,
    border: 0.5,
    color: '#373737',
    marginRight: 20,
  },
  toptext: {
    height: 20,
    color: '#7A7A7A',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: 20,
    marginTop: 25,
    marginLeft: 25,
  },
  name: {
    height: 35,
    color: '#042C5C',
    fontWeight: Platform.OS == 'ios' ? 'bold' : 'normal',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
    fontSize: 20,
    letterSpacing: 0,
    lineHeight: 35,
    marginLeft: 25,
  },

  itemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    height: 140,
    width: 260,
    // justifyContent: 'space-between',
    marginRight: 20,
    marginTop: 20,
    // marginEnd:10,
    // marginStart:25,
    // marginLeft:25
  },
  itemContainer2: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    height: 140,
    // width:"75%",
    // justifyContent: 'space-between',

    marginTop: 20,
    flex: 1,
    width: 345,
    // marginHorizontal:40,
    // marginEnd:20,
    marginRight: 20,
  },

  courseText: {
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  categoryview: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    height: 22,

    color: '#2B2B2B',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? '600' : 'normal',
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: 22,
    marginLeft: 25,
  },
  all: {
    height: 15,
    width: 37,
    color: '#7A7A7A',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 15,
    marginRight: 20,
  },
  categorycontainer: {
    borderRadius: 6,

    margin: 5,
    borderWidth: 1,
    height: 30,

    padding: 5,
    borderColor: '#D3D3D3',
    flexDirection: 'row',
  },
  designview: {
    height: 12,
    borderRadius: 3,
    backgroundColor: '#FCBE4B',
    marginTop:67,
    marginRight:3,
    paddingLeft:5,
    paddingRight:5,
    justifyContent:"center"

 

  },
  design: {
    height:9,
    color: '#373737',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? '500':'normal',
    fontSize: 8,
    letterSpacing: 0,
    lineHeight: 9,
    textAlign: 'center',
  },
  categorytext: {
    height: 15,
    color: '#2B2B2B',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? 'bold' : 'normal',
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 15,
  },
  choiceview: {
    height: 223,
    width: '100%',
  },
  buttontabs: {
    flexDirection: 'row',
    height: 26,
    width: 172,
    justifyContent: 'space-between',
    marginLeft: 18,
  },
  buttonActiveview: {
    height: 26,
    width: 50,
    backgroundColor: '#DFE7F5',
    borderRadius: 6,

    margin: 10,
  },
  buttonActive: {
    height: 26,
    width: 50,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? '500' : 'normal',
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 15,
    color: '#042C5C',
    marginTop: 5,
  },
  buttonview: {
    height: 26,
    width: 50,

    margin: 10,
  },
  button: {
    height: 26,
    width: 50,
    borderRadius: 6,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? '500' : 'normal',
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 15,
    marginTop: 5,
    color: '#7A7A7A',
  },
  btmcourseview: {
    height: 138,
    // width: 142,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginTop: 25,
    //  marginHorizontal:10
    // marginStart:25,
    marginRight: 14,
  },
  imgview: {
    width: 142,
    height: 86,
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
    overflow: 'hidden',
    alignItems:'flex-end'
  },
  btmitemContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    height: 57,
    width: 142,
    justifyContent: 'space-between',

    padding: 10,

    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    flexWrap: 'wrap',
    display: 'flex',
  },
  btmcourseText: {
    width: 120,
    fontFamily: 'Proxima Nova',
    fontSize: 10,
    color: '#2B2B2B',
  },
  ChoiseCourseChapterNum: {
    height: 9,
    color: '#7A7A7A',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? '500' : 'normal',
    fontSize: 8,
    lineHeight: 9,
    marginTop:3
  },
  businessContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    height: 134,
    width: 288,
    justifyContent: 'space-between',
    marginLeft: 25,
    padding: 10,

    borderWidth: 1,
    marginTop: 20,
  },
  businessview: {
    height: 223,
    width: '100%',

    marginTop: 25,
  },
  busnesstext: {
    marginLeft: 25,
    margin: 3,
    fontWeight: '300',
    letterSpacing: 0,
    lineHeight: 20,
  },
  busnesschapter: {
    fontSize: 12,
    color: '#7A7A7A',
    fontWeight: '300',
  },
});
