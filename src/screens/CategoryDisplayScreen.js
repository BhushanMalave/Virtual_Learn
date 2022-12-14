import React,{useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Platform,
  Text,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {CategoryDisplayCourseComponent} from '../components/CategoryDisplayCourseComponent';
import {SearchFoundComponent} from '../components/SearchFoundComponent';
import {CategoriesComponents} from '../components/CategoryDisplayCourseComponent';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {cdsbasicCourse} from '../redux/ThunkToolkit/categoryDisplayScreenApi/BasicCoursesApi';
import {cdsAdvanceCourse} from '../redux/ThunkToolkit/categoryDisplayScreenApi/AdvanceCourseApi';
import { cdsAllCourseOfSubCategory } from '../redux/ThunkToolkit/categoryDisplayScreenApi/AllCourseOfSubCategories';
import {csChapterResponse} from '../redux/ThunkToolkit/ChaptersApi/ChapterScreenApi';
import {addOverView} from '../redux/ThunkToolkit/ChaptersApi/CourseDataRedux';
import {overViewData} from '../authorization/Auth';
import { setToken } from '../redux/ReduxPersist/UserDetails';
import { getVerifiedKeys } from '../authorization/RefreshToken';


export const CategoryDisplayScreen = ({navigation, route}) => {
  const basicCourse = useSelector(state => state.basicCourse.data);
  const featuredCourse = useSelector(state => state.advanceCourse.data);
  const subCategories = useSelector(state => state.subCategories.data);
  const allcourse = useSelector(state => state.allCourseOfCategory.data);
  const token = useSelector(state => state.userDetails.token);
  const id = route.params.item.categoryId;
  const dispatch = useDispatch();
  
  const refreshToken = async token => {
    const key = await getVerifiedKeys(token);
    dispatch(setToken(key));
  };
  useEffect(() => {
    //refreshToken(token);
  }, []);
  return (
    <View style={styles.body}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.topbar}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{padding:5}}>
            <Image
              source={require('../assets/images/icn_back_header.png')}
              style={styles.imgback}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('CategorySearch',{id})}>
            <Image
              source={require('../assets/images/icn_search-Search.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator
            animating={
              !basicCourse || !allcourse || !featuredCourse || !subCategories
            }
            size="small"
            color="#373737"
          />
        </View>
        <Text style={styles.text1}>{route.params.item.categoryName}</Text>
        {basicCourse?(
          <>
         <Text style={styles.text2}> Courses to get you started</Text>
        <View style={styles.view1}>
          <FlatList
            data={basicCourse}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View>
                <CategoryDisplayCourseComponent
                  courseName={item?.courseName}
                  chapterCount={item?.chapterCount}
                  courseDuration={item?.courseDuration}
                  courseId={item?.courseId}
                  coursePhoto={item?.coursePhoto}
                  previewVideo={item?.previewVideo}
                  nav={navigation}
                />
              </View>
            )}></FlatList>
        </View>
          </>
          
        ):(<></>)}

        {featuredCourse && (
          <View style={styles.view1}>
            <Text style={styles.text2}>Featured courses</Text>
            <View>
              <FlatList
                data={featuredCourse}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <View>
                    <CategoryDisplayCourseComponent
                      courseName={item?.courseName}
                      chapterCount={item?.chapterCount}
                      courseDuration={item?.courseDuration}
                      courseId={item?.courseId}
                      coursePhoto={item?.coursePhoto}
                      previewVideo={item?.previewVideo}
                      nav={navigation}
                    />
                  </View>
                )}></FlatList>
            </View>
          </View>
        )}

        <View>
          {subCategories ? (
            <>
              <Text style={styles.text2}>Subcategories</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.viewcatin}>
                  {subCategories?.map(item => (
                    <CategoriesComponents
                      category={item?.subCategoryName}
                      onPress={() => {
                        dispatch(
                          cdsbasicCourse({token, id: item?.subCategoryId}),
                        );
                        dispatch(
                          cdsAdvanceCourse({token, id: item?.subCategoryId}),
                        );
                        dispatch(
                          cdsAllCourseOfSubCategory({
                            token,
                            id: item?.subCategoryId,
                          }),
                        );
                        navigation.navigate('SubCategoryDisplayScreen', {
                          item,
                          id,
                        });
                      }}
                    />
                  ))}
                </View>
              </ScrollView>
            </>
          ) : (
            <></>
          )}
        </View>
        {allcourse?(<>
          <Text style={styles.text2}>All courses</Text>
        <View style={{marginHorizontal: 24}}>
          {allcourse?.map(item => (
            <View key={item?.courseId}>
              <SearchFoundComponent
                courseName={item?.courseName}
                chapterCount={item?.chapterCount}
                categoryName={item?.categoryName}
                coursePhoto={item?.coursePhoto}
                courseId={item?.courseId}
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
            </View>
          ))}
        </View>
        </>):(<></>)}
  
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  topbar: {
    marginTop: Platform.OS === 'ios' ? 80 : 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 24,
    // borderWidth:1
  },
  view1: {
    marginTop: 0,
  },
  imgback:{
    height: 14,
  width: 22,
  },
  viewcatin: {
    marginTop: 15,
    height: 80,
    width: '100%',
    flexDirection: 'column',
    flexWrap: 'wrap',
    display: 'flex',
    marginLeft: 20,
  },

  text1: {
    fontSize: 26,
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
    textAlign: 'left',
    color: '#2B2B2B',
    marginTop: Platform.OS == 'ios' ? 0 : -5,
    marginHorizontal: 24,
  },
  text2: {
    fontSize: 18,
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    textAlign: 'left',
    color: '#2B2B2B',
    marginTop: 30,
    marginHorizontal: 24,
  },
});
