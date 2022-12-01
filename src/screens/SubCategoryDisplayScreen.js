import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Platform,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import {CategoryDisplayCourseComponent} from '../components/CategoryDisplayCourseComponent';
import {SearchFoundComponent} from '../components/SearchFoundComponent';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector,useDispatch} from 'react-redux';

export const SubCategoryDisplayScreen = ({navigation, route}) => {
  const basicCourse = useSelector(state => state.basicCourse.data);
  const featuredCourse = useSelector(state => state.advanceCourse.data);
  const subCategories = useSelector(state => state.subCategories.data);
  const allcourse = useSelector(state => state.allCourseOfCategory.data);
  const token = useSelector(state => state.userDetails.token);
  const dispatch =useDispatch();

  return (
    <View style={styles.body}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.topbar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/images/icn_back_header.png')}
              style={styles.imgback}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('HomeSearch')}>
            <Image
              source={require('../assets/images/icn_search-Search.png')}
              style={{marginRight: 20}}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.text1}>{route.params.item.categoryName}</Text>
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
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
    textAlign: 'left',
    color: '#2B2B2B',
    marginTop: 30,
    marginHorizontal: 24,
  },
  text2: {
    fontSize: 18,
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'PromimaNova',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#2B2B2B',
    marginTop: 30,
    marginHorizontal: 24,
  },
});
