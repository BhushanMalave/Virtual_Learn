import React, {useEffect, useState} from 'react';
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
import {cdsbasicCourse} from '../redux/ThunkToolkit/categoryDisplayScreenApi/BasicCoursesApi';
import {cdsAdvanceCourse} from '../redux/ThunkToolkit/categoryDisplayScreenApi/AdvanceCourseApi';
import {cdsAllCourseOfCategory} from '../redux/ThunkToolkit/categoryDisplayScreenApi/AllCourseOfCategoryApi';
import {cdsSubCategories} from '../redux/ThunkToolkit/categoryDisplayScreenApi/SubCategoriesApi';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {Dimensions} from 'react-native';

export const SubCategoryDisplayScreen = ({navigation, route}) => {
  const basicCourse = useSelector(state => state.basicCourse.data);
  const featuredCourse = useSelector(state => state.advanceCourse.data);
  const subCategories = useSelector(state => state.subCategories.data);
  const allcourse = useSelector(state => state.allCourseOfSubCategory.data);
  const token = useSelector(state => state.userDetails.token);
  const id = route.params.id;
  const item = route.params.item;
  const dispatch = useDispatch();
  const [portrait, setPortrait] = useState(true);
  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };
  const refreshToken = async token => {
    const key = await getVerifiedKeys(token);
    dispatch(setToken(key));
  };
  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      setPortrait(isPortrait());
    });
   // refreshToken(token);
  }, []);

  return (
    <View style={styles.body}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.topbar}>
          <TouchableOpacity
            onPress={() => {
              dispatch(cdsbasicCourse({token, id: item?.categoryId}));
              dispatch(cdsAdvanceCourse({token, id: item?.categoryId}));
              dispatch(cdsAllCourseOfCategory({token, id: item?.categoryId}));
              dispatch(cdsSubCategories({token, id: item?.categoryId}));
              navigation.navigate('CategoryDisplayScreen', {item});
            }}>
            <Image
              source={require('../assets/images/icn_back_header.png')}
             
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
            // marginTop: 50,
            justifyContent: 'center',
          }}>
          {/* <ActivityIndicator
            animating={
              !basicCourse && !allcourse && !featuredCourse
            }
            size="small"
            color="#373737"
          /> */}
        </View>
        <Text style={styles.text1}>{route.params.item.categoryName}</Text>
        {!basicCourse && !allcourse && !featuredCourse ? (
          <>
            {portrait ? (
              <>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '35%',
                  }}>
                  <Text style={{color: 'black'}}>No courses found!</Text>
                </View>
              </>
            ) : (
              <>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '5%',
                  }}>
                  <Text style={{color: 'black'}}>No courses found!</Text>
                </View>
              </>
            )}
          </>
        ) : (
          <></>
        )}
        {basicCourse ? (
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
                    />
                  </View>
                )}></FlatList>
            </View>
          </>
        ) : (
          <></>
        )}

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
                    />
                  </View>
                )}></FlatList>
            </View>
          </View>
        )}
        {allcourse ? (
          <>
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
                  />
                </View>
              ))}
            </View>
          </>
        ) : (
          <></>
        )}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    // marginLeft: 24,
  },
  topbar: {
    marginTop: Platform.OS === 'ios' ? 80 : 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 24,
  },
  view1: {
    marginTop: 0,
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
    fontWeight: Platform.OS == 'ios' ? 'bold' : 'normal',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
    textAlign: 'left',
    color: '#2B2B2B',
    marginTop: 30,
    marginHorizontal: 24,
  },
  text2: {
    fontSize: 18,
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? 'bold' : 'normal',
    textAlign: 'left',
    color: '#2B2B2B',
    marginTop: 30,
    marginHorizontal: 24,
  },
});
