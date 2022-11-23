import {TabRouter} from '@react-navigation/native';
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
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {number} from 'yup';
import {CourseComponent} from '../components/CourseComponent';
import {CategoriesComponent} from '../components/CategoriesComponent';
import {useSelector, useDispatch} from 'react-redux';
import {hsTopHeaders} from '../redux/ThunkToolkit/HomeScreenApiCalls/homeScreenTopHeaders';
import {hsCategories} from '../redux/ThunkToolkit/HomeScreenApiCalls/homeScreenCategories';
import {newest, popular, all} from '../authorization/Auth';
import {hsTopCourses} from '../redux/ThunkToolkit/HomeScreenApiCalls/homeScreenTopCourses';
import { mpUserDetails } from '../redux/ThunkToolkit/MyProfileApiCall/myProfileUserDetails';
import {
  setAllData,
  setNewestData,
  setPopularData,
} from '../redux/ReduxPersist/ChoiceYourCourseSlice';
import OverView from '../redux/ThunkToolkit/CourseJoinApi/OverView';
import {overViewData} from '../authorization/Auth';

export const HomeScreen = ({navigation}) => {
  const [clicked1, setClicked1] = useState(true);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const dispatch = useDispatch();

  const token = useSelector(state => state.userDetails.token);
  const userData = useSelector(state => state.userData.data);

  const allCourse = async () => {
    const data1 = await all(token);
    if (data1) {
      dispatch(setAllData(data1));
    }
  };
  useEffect(() => {
    dispatch(hsTopHeaders(token));
    dispatch(hsCategories(token));
    dispatch(hsTopCourses(token));
    dispatch(mpUserDetails(token));
    setClicked1(true);
    setClicked2(false);
    setClicked3(false);
    allCourse();
  }, []);

  const topHeaderData = useSelector(state => state.topHeader.value);
  // console.log(topHeaderData)
  const choiceYourCourse = useSelector(state => state.choiceYourCourse.data);
  const categoriesData = useSelector(state => state.categories.data);
  const topCoursesData = useSelector(state => state.topCourses.data);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.view}>
          <Pressable onPress={() => navigation.openDrawer()}>
            <Image source={require('../assets/images/icn_hamburgermenu.png')} />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('HomeSearch')}>
            <Image
              source={require('../assets/images/icn_search-Search.png')}
              style={styles.search}
            />
          </Pressable>
        </View>
        <Text style={styles.toptext}>Hello!</Text>
        <Text style={styles.name}>{userData?.fullName}</Text>
        <View>
          <FlatList
            data={topHeaderData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.itemContainer}>
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
            )}></FlatList>
        </View>



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
                      navigation.navigate('CategoryDisplayScreen');
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
                  // console.log('popular===', data2);
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
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <View style={styles.btmcourseview}>
                  <TouchableOpacity
                    onPress={() => {
                      // const objBody = {
                      //   courseId: 3,
                      // };
                      // console.log(objBody);
                      // const res = await overViewData(token, objBody);
                      // console.log(res);
                      navigation.navigate('CourseScreen');
                    }}>
                    <Image
                      source={{uri: item?.coursePhoto}}
                      style={styles.imgview}
                    />

                    <View style={styles.btmitemContainer}>
                      <View>
                        <Text
                          style={styles.btmcourseText}
                          // numberOfLines={2}
                          ellipsizeMode="tail">
                          {item?.courseName}
                        </Text>
                        <Text style={styles.ChoiseCourseChapterNum}>
                          Chapter {item?.chapterCount}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )}></FlatList>

            {/* </View> */}
          </View>
        </View>

        {topCoursesData?.map(item => (
          <CourseComponent
            header={item?.categoryName}
            data={item?.popularCourseInEachCategoryList}
            onPress={() => {
              navigation.navigate('ChoiceCourse');
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
    marginTop: 35,

    // borderWidth:1
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
    color: '#7A7A7As',
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
    fontFamily: 'Biko',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0,
    lineHeight: 35,
    marginLeft: 25,
  },

  itemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    height: 140,
    width: 260,
    justifyContent: 'space-between',
    marginLeft: 25,
    marginTop: 20,
  },

  courseText: {
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 16,
    textAlign: 'center',
    // lineHeight: 35,
    // borderWidth:1,
  },
  categoryview: {
    // height: 104,
    width: '100%',
    // borderWidth: 1,
    // marginLeft:25,
    // marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    height: 22,
    // width: 167,
    color: '#2B2B2B',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 18,
    fontWeight: '600',
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
    marginRight: 25,
  },
  categorycontainer: {
    // backgroundColor:"pink",
    borderRadius: 6,
    // justifyContent:'space-between',
    // marginStart:10,
    margin: 5,
    borderWidth: 1,
    height: 30,
    // width:83,
    padding: 5,
    borderColor: '#D3D3D3',
    flexDirection: 'row',

    // borderColor:"#7A7A7A",
    // opacity:0.2,
  },
  categorytext: {
    height: 15,
    color: '#2B2B2B',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0,
    lineHeight: 15,
  },
  choiceview: {
    height: 223,
    width: '100%',
    // borderWidth:1,
    // marginLeft:25
    // paddingLeft:
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
    // marginLeft:25,
    margin: 10,
  },
  buttonActive: {
    height: 26,
    width: 50,
    // borderWidth:1,
    // borderRadius:20,
    // backgroundColor:"#DFE7F5",
    textAlign: 'center',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 15,
    color: '#042C5C',
    marginTop: 5,
  },
  buttonview: {
    height: 26,
    width: 50,
    // marginLeft:25,
    margin: 10,
  },
  button: {
    height: 26,
    width: 50,
    // borderWidth:1,
    borderRadius: 6,
    // backgroundColor:"#DFE7F5"
    textAlign: 'center',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 15,
    marginTop: 5,
    color: '#7A7A7A',
  },
  btmcourseview: {
    height: 138,
    width: 142,
    borderRadius: 5,
    flexDirection: 'row',
    // backgroundColor: 'pink',

    flexDirection: 'column',
    marginTop: 25,
    margin: 6,
  },
  imgview: {
    width: 142,
    height: 82,
  },
  btmitemContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    height: 63,
    width: 142,
    justifyContent: 'space-between',

    padding: 10,
    // elevation: 5,
    // marginLeft: 10,
    // borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    flexWrap: 'wrap',
    display: 'flex',
  },
  btmcourseText: {
    // height: 25,
    width: 120,
    fontFamily: 'Proxima Nova',
    fontSize: 10,
    color: '#2B2B2B',
    // borderWidth: 1,
  },
  ChoiseCourseChapterNum: {
    height: 9,
    width: 35,
    color: '#7A7A7A',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 8,
    fontWeight: '500',
    lineHeight: 9,
  },
  businessContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    height: 134,
    width: 288,
    justifyContent: 'space-between',
    marginLeft: 25,
    padding: 10,
    // elevation: 5,
    // marginLeft: 10,
    borderWidth: 1,
    marginTop: 20,
  },
  businessview: {
    height: 223,
    width: '100%',
    // borderWidth:1,
    // marginLeft:25,
    // paddingLeft:
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
