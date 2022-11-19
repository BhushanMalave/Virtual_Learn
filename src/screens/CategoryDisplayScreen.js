import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Platform,
  Text,
  ScrollView,
  Pressable,
  SafeAreaView,
} from 'react-native';
import {CategoryDisplayCourseComponent} from '../components/CategoryDisplayCourseComponent';
import {SearchFoundComponent} from '../components/SearchFoundComponent';
import {CategoriesComponents} from '../components/CategoryDisplayCourseComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';

const categories = [
  {
    id: 1,
    source: require('../assets/images/icn_back_header.png'),
    category: 'Design',
  },
  {
    id: 2,
    source: require('../assets/images/icn_back_header.png'),
    category: 'Finance',
  },
  {
    id: 3,
    source: require('../assets/images/icn_back_header.png'),
    category: 'Development',
  },
  {
    id: 4,
    source: require('../assets/images/icn_back_header.png'),
    category: 'Health & Fitness',
  },
  {
    id: 5,
    source: require('../assets/images/icn_back_header.png'),
    category: 'Business',
  },
  {
    id: 6,
    source: require('../assets/images/icn_back_header.png'),
    category: 'IT & Software',
  },
  {
    id: 7,
    source: require('../assets/images/icn_back_header.png'),
    category: 'Music',
  },
];

const course = [
  {
    id: 1,
    courseName: 'fhAdobe Illustrator CC - Essential Training Course',
    chapters: 30,
    category: 'Design',
    source: require('../assets/images/img_course_all_course1.png'),
  },
  {
    id: 2,
    courseName: 'Leadership: Practical Leadership Skills',
    chapters: 10,
    category: 'Business',
    source: require('../assets/images/img_course_all_course1.png'),
  },
  {
    id: 3,
    courseName: '2021 Complete Python Bootcamp From Zero to Hero',
    chapters: 5,
    category: 'Development',
    source: require('../assets/images/img_course_all_course1.png'),
  },
  {
    id: 4,
    courseName: 'The Ultimate Drawing Course - Beginner to Advanced',
    chapters: 20,
    category: 'Design',
    source: require('../assets/images/img_course_all_course1.png'),
  },
  {
    id: 5,
    courseName: '[New] Ultimate AWS Certified Cloud Practitioner - 2021',
    chapters: 30,
    category: 'IT & Software',
    source: require('../assets/images/img_course_all_course1.png'),
  },
  {
    id: 6,
    courseName: '[New] Ultimate AWS Certified Cloud Practitioner - 2021',
    chapters: 30,
    category: 'IT & Software',
    source: require('../assets/images/img_course_all_course1.png'),
  },
  {
    id: 7,
    courseName: '[New] Ultimate AWS Certified Cloud Practitioner - 2021',
    chapters: 30,
    category: 'IT & Software',
    source: require('../assets/images/img_course_all_course1.png'),
  },
  {
    id: 8,
    courseName: '[New] Ultimate AWS Certified Cloud Practitioner - 2021',
    chapters: 30,
    category: 'IT & Software',
    source: require('../assets/images/img_course_all_course1.png'),
  },
];

export const CategoryDisplayScreen = ({navigation}) => {
  return (
    <View style={styles.body}>
      <ScrollView    showsHorizontalScrollIndicator={false}>
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
        <Text style={styles.text1}>Design</Text>
        <View style={styles.view1}>
          <Text style={styles.text2}> Courses to get you started</Text>
          <View>
            <CategoryDisplayCourseComponent />
          </View>
        </View>
        <View style={styles.view1}>
          <Text style={styles.text2}>Featured courses</Text>
          <View>
            <CategoryDisplayCourseComponent />
          </View>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text2}>Subcategories</Text>
         
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
                 <View style={styles.viewcatin}>
              {categories.map(item => (
                <CategoriesComponents category={item.category} />
              ))}
              </View>
            </ScrollView>
        
        </View>
        <View style={{marginRight: 34}}>
          <Text style={styles.text2}>All courses</Text>
          {course.map(item => (
            <View key={item.id}>
              <SearchFoundComponent
                name={item.courseName}
                chapter={item.chapters}
                category={item.category}
                source={item.source}
                key={item.id}
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
    marginLeft: 24,
  },
  topbar: {
    marginTop: Platform.OS === 'ios' ? 80 : 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
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
  },

  text1: {
    fontSize: 26,
    fontFamily: 'Biko',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#2B2B2B',
    marginTop: 30,
  },
  text2: {
    fontSize: 18,
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'PromimaNova',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#2B2B2B',
    marginTop: 30,
  },
});
