import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Platform,
  Text,
  Pressable,
  SafeAreaView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setCatData} from '../redux/ReduxPersist/searchDataSlice';
import {searchCategoriesdata} from '../authorization/Auth';
import {cdsbasicCourse} from '../redux/ThunkToolkit/categoryDisplayScreenApi/BasicCoursesApi';
import {cdsAdvanceCourse} from '../redux/ThunkToolkit/categoryDisplayScreenApi/AdvanceCourseApi';
import {cdsAllCourseOfCategory} from '../redux/ThunkToolkit/categoryDisplayScreenApi/AllCourseOfCategoryApi';
import {cdsSubCategories} from '../redux/ThunkToolkit/categoryDisplayScreenApi/SubCategoriesApi';

export const CategoriesScreen = ({navigation}) => {
  const token = useSelector(state => state.userDetails.token);
  const catData1 = useSelector(state => state.categories.data);

  const call = async () => {
    const categories = await searchCategoriesdata(token);
    dispatch(setCatData(categories));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    call();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainheader}>
        <Pressable onPress={() => navigation.navigate('HomeScreen')}>
          <Image source={require('../assets/images/icn_back_header.png')} />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('HomeSearch')}>
          <Image source={require('../assets/images/icn_search-Search.png')} />
        </Pressable>
      </View>
      <Text style={styles.name}>Categories</Text>
      <Text style={styles.description}>
        Please choose a topic on which you want to start a course.
      </Text>

      <View style={styles.middlecontainer}>
        {catData1.map(item => (
          <Pressable
            onPress={() => {
              dispatch(cdsbasicCourse({token, id: item?.categoryId}));
              dispatch(cdsAdvanceCourse({token, id: item?.categoryId}));
              dispatch(cdsAllCourseOfCategory({token, id: item?.categoryId}));
              dispatch(cdsSubCategories({token, id: item?.categoryId}));
              navigation.navigate('CategoryDisplayScreen', {item});
            }}>
            <View style={styles.categorycontainer} key={item.categoryId}>
              <Image source={{uri: item?.categoryPhoto}} style={styles.icon} />
              <Text style={styles.categorytext}>{item.categoryName}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
  },
  mainheader: {
    marginTop: Platform.OS === 'ios' ? 25 : 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    height: 35,
    color: '#2B2B2B',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
    fontSize: 26,
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
    letterSpacing: 0,
    lineHeight: 35,
    marginTop: 15,
    marginBottom: 10,
  },
  description: {
    height: 40,
    width: 327,
    color: '#7A7A7A',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 20,
  },
  categorycontainer: {
    borderRadius: 6,
    margin: 6,
    borderWidth: 0.5,
    height: 80,
    width: 100,
    borderColor: '#D3D3D3',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categorytext: {
    height: 15,
    color: '#2B2B2B',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? '500':'normal',
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 15,
  },
  middlecontainer: {
    flexDirection: 'row',
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 25,
  },
  icon: {
    height: 38,
    width: 38,
    marginBottom: 10,
  },
});
