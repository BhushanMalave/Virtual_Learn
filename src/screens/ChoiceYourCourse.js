import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native';
import {CategoriesComponent} from '../components/CategoriesComponent';
import {SearchFoundComponent} from '../components/SearchFoundComponent';
import {BottomPopup} from '../components/BottomPopup';
import {setFilterState} from '../redux/ReduxPersist/FilterSlice';
import {hsCategories} from '../redux/ThunkToolkit/HomeScreenApiCalls/homeScreenCategories';
import {all} from '../authorization/Auth';
import {setAllData} from '../redux/ReduxPersist/ChoiceYourCourseSlice';
import {cdsbasicCourse} from '../redux/ThunkToolkit/categoryDisplayScreenApi/BasicCoursesApi';
import {cdsAdvanceCourse} from '../redux/ThunkToolkit/categoryDisplayScreenApi/AdvanceCourseApi';
import {cdsAllCourseOfCategory} from '../redux/ThunkToolkit/categoryDisplayScreenApi/AllCourseOfCategoryApi';
import {cdsSubCategories} from '../redux/ThunkToolkit/categoryDisplayScreenApi/SubCategoriesApi';
import {overViewData} from '../authorization/Auth';
import {addOverView} from '../redux/ThunkToolkit/ChaptersApi/CourseDataRedux';
import {csChapterResponse} from '../redux/ThunkToolkit/ChaptersApi/ChapterScreenApi';
import {setComponentRender} from '../redux/ReduxPersist/searchDataSlice';
import {setSearchData} from '../redux/ReduxPersist/searchDataSlice';
import {searchData} from '../authorization/Auth';
import {searchDataKeyword} from '../authorization/Auth';
import { setToken } from '../redux/ReduxPersist/UserDetails';
import { getVerifiedKeys } from '../authorization/RefreshToken';
import {useSelector, useDispatch} from 'react-redux';

export const ChoiceYourCourse = ({navigation}) => {
  const filterState = useSelector(state => state.filterState.state);
  const token = useSelector(state => state.userDetails.token);
  const categoriesData = useSelector(state => state.categories.data);
  const choiceYourCourse = useSelector(state => state.choiceYourCourse.data);
  const data = useSelector(state => state.searchData.data);
  const [text, setText] = useState(' ');
  const componentrender = useSelector(
    state => state.searchData.componentRender,
  );
  const dispatch = useDispatch();

  const refreshToken = async token => {
    const key = await getVerifiedKeys(token);
    dispatch(setToken(key));
  };
  const handleText = async string => {
    setText(string);
    if (text === '') {
      dispatch(setComponentRender(1));
      dispatch(setSearchData(null));
    } else {
      const res = await searchData(token, text);
      if (res) {
        dispatch(setComponentRender(2));
        dispatch(setSearchData(res));
      } else {
        dispatch(setComponentRender(3));
      }
    }
  };
  const allCourse = async () => {
    const data1 = await all(token);
    if (data1) {
      dispatch(setAllData(data1));
    }
  };

  useEffect(() => {
    dispatch(setComponentRender(1));
    dispatch(hsCategories(token));
    allCourse();
   // refreshToken(token);
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/images/icn_back_header.png')}
            style={styles.image}
          />
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.headerText}>Choice your course</Text>
        </View>

        <View style={styles.searchview}>
          <View style={styles.searchviewin}>
            <Image
              source={require('../assets/images/icn_search_course.png')}
              style={styles.imgsearch}
            />
            <TextInput
              name="text"
              placeholder="Search"
              placeholderTextColor={'#7A7A7A'}
              style={styles.textInput}
              onChangeText={handleText}
            />
          </View>
          <Pressable
            onPress={() => {
              dispatch(setFilterState());
            }}>
            <Image
              source={require('../assets/images/icn_filter_search.png')}
              style={styles.imgfilter}
            />
          </Pressable>
        </View>
        {componentrender === 1 && (
          <>
            <Text style={styles.categoryText}>Categories</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
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
                        dispatch(
                          cdsAdvanceCourse({token, id: item?.categoryId}),
                        );
                        dispatch(
                          cdsAllCourseOfCategory({token, id: item?.categoryId}),
                        );
                        dispatch(
                          cdsSubCategories({token, id: item?.categoryId}),
                        );
                        navigation.navigate('CategoryDisplayScreen', {item});
                      }}
                    />
                  </View>
                ))}
              </View>
            </ScrollView>
            <View style={styles.CourseView}>
              <Text style={styles.courseHeader}>All Courses</Text>
              <View style={{marginTop: 10}}>
                {choiceYourCourse?.map(item => (
                  <SearchFoundComponent
                    coursePhoto={item?.coursePhoto}
                    courseName={item?.courseName}
                    chapterCount={item?.chapterCount}
                    categoryName={item?.categoryName}
                    key={item?.courseId}
                    id={item?.courseId}
                    onPress={async () => {
                      const obj = {
                        courseId: item.courseId,
                      };
                      dispatch(csChapterResponse({token, id: item.courseId}));
                      const res = await overViewData(token, item.courseId);
                      dispatch(addOverView(res));
                      navigation.navigate('CourseScreen');
                    }}
                  />
                ))}
              </View>
            </View>
          </>
        )}
        {componentrender == 2 && (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{marginTop: 30, marginLeft: 24}}>
              {data?.map(item => (
                <SearchFoundComponent
                  coursePhoto={item?.coursePhoto}
                  courseName={item?.courseName}
                  chapterCount={item?.chapterCount}
                  categoryName={item?.categoryName}
                  key={item?.courseId}
                  id={item?.courseId}
                  onPress={async () => {
                    const obj = {
                      courseId: item.courseId,
                    };
                    const msg = await searchDataKeyword(token, obj);

                    dispatch(csChapterResponse({token, id: item.courseId}));
                    const res = await overViewData(token, item.courseId);
                    dispatch(addOverView(res));
                    navigation.navigate('CourseScreen');
                  }}
                />
              ))}
            </View>
          </ScrollView>
        )}

        {componentrender == 3 && (
          <View style={{marginTop: 30}}>
            <Image
              source={require('../assets/images/img_searchnoresult.png')}
              style={styles.imgnosearch}
            />
            <Text style={styles.text1}>No matching course</Text>
            <Text style={styles.text2}>
              Try a different search browse categories
            </Text>
            <View style={styles.searchCatView1}>
              <Text style={styles.texttopsearch}>Search From Categories</Text>
              <View style={styles.viewcatin}>
                {categoriesData?.map(item => (
                  <View key={item?.categoryId}>
                    <CategoriesComponent
                      id={item?.categoryId}
                      img={item?.categoryPhoto}
                      category={item?.categoryName}
                      onPress={() => {
                        dispatch(cdsbasicCourse({token, id: item?.categoryId}));
                        dispatch(
                          cdsAdvanceCourse({token, id: item?.categoryId}),
                        );
                        dispatch(
                          cdsAllCourseOfCategory({token, id: item?.categoryId}),
                        );
                        dispatch(
                          cdsSubCategories({token, id: item?.categoryId}),
                        );
                        navigation.navigate('CategoryDisplayScreen', {item});
                      }}
                    />
                  </View>
                ))}
              </View>
            </View>
          </View>
        )}
      </ScrollView>
      <BottomPopup show={filterState} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    marginLeft: 24,
    height: 14,
    width: 22,
    marginTop: Platform.OS == 'ios' ? 30 : 30,
    tintColor: '#373737',
  },
  header: {
    marginTop: Platform.OS == 'ios' ? 20 : 15,
    marginLeft: 24,
    marginBottom: Platform.OS == 'ios' ? 20 : 15,
  },
  headerText: {
    height: 35,
    color: '#2B2B2B',
    fontSize: 26,
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
    lineHeight: 35,
  },
  searchCatView1: {
    marginTop: 60,
  },
  viewcatin: {
    marginTop: 15,
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: 24,
  },
  searchview: {
    marginHorizontal: 24,
    height: 40,
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
  },
  searchviewin: {
    height: 40,
    borderWidth: 1,
    borderRadius: 0.6,
    borderColor: '7A7A7A',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    width: '84%',
  },
  textInput: {
    color: '#373737',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? '600':'normal',
    fontSize: 16,
    letterSpacing: 0.31,
    lineHeight: 20,
    // borderWidth:1,
    width: '86%',
  },
  texttopsearch: {
    fontSize: 18,
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    color: '#2B2B2B',
    marginLeft: 24,
  },
  text1: {
    fontSize: 18,
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    color: '#2B2B2B',
    textAlign: 'center',
    marginTop: 20,
  },
  text2: {
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    color: '#7A7A7A',
    textAlign: 'center',
    marginTop: 10,
  },

  imgsearch: {
    height: 16,
    width: 16,
    marginHorizontal: 10,
  },
  imgnosearch: {
    height: 228,
    width: 200,
    marginTop: 50,
    marginLeft: 110,
  },
  imgfilter: {
    marginLeft: 15,
  },
  categoryText: {
    height: 22,
    color: '#2B2B2B',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? '600':'normal',
    fontSize: 18,
    lineHeight: 22,
    marginLeft: 24,
    marginTop: Platform.OS == 'ios' ? 30 : 30,
  },
  CourseView: {
    marginLeft: 24,
    marginRight: 24,
  },
  courseHeader: {
    height: 22,
    color: '#2B2B2B',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? '600':'normal',
    fontSize: 18,
    lineHeight: 22,
    marginBottom: Platform.OS == 'ios' ? 0 : 0,
  },
});
