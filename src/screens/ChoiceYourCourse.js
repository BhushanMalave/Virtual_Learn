import React, {useState} from 'react';

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
  FlatList,
  VirtualizedList,Modal, Pressable,
} from 'react-native';
import {CategoriesComponent} from '../components/CategoriesComponent';

import img_course_all_course1 from '../assets/images/img_course_all_course1.png';
import { SearchFoundComponent } from '../components/SearchFoundComponent';
import { BottomPopup } from '../components/BottomPopup';

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
    source: require('../assets/images/img_course_all_course1.png')
  },
  {
    id: 2,
    courseName: 'Leadership: Practical Leadership Skills',
    chapters: 10,
    category: 'Business',
    source: require('../assets/images/img_course_all_course1.png')
  },
  {
    id: 3,
    courseName: '2021 Complete Python Bootcamp From Zero to Hero',
    chapters: 5,
    category: 'Development',
    source: require('../assets/images/img_course_all_course1.png')
  },
  {
    id: 4,
    courseName: 'The Ultimate Drawing Course - Beginner to Advanced',
    chapters: 20,
    category: 'Design',
    source: require('../assets/images/img_course_all_course1.png')
  },
  {
    id: 5,
    courseName: '[New] Ultimate AWS Certified Cloud Practitioner - 2021',
    chapters: 30,
    category: 'IT & Software',
    source: require('../assets/images/img_course_all_course1.png')
  },
  {
    id: 6,
    courseName: '[New] Ultimate AWS Certified Cloud Practitioner - 2021',
    chapters: 30,
    category: 'IT & Software',
    source: require('../assets/images/img_course_all_course1.png')
  },
  {
    id: 7,
    courseName: '[New] Ultimate AWS Certified Cloud Practitioner - 2021',
    chapters: 30,
    category: 'IT & Software',
    source: require('../assets/images/img_course_all_course1.png')
  },
  {
    id: 8,
    courseName: '[New] Ultimate AWS Certified Cloud Practitioner - 2021',
    chapters: 30,
    category: 'IT & Software',
    source: require('../assets/images/img_course_all_course1.png')
  },
];
export const ChoiceYourCourse = ({navigation}) => {
  const [text, setText] = useState('');
  const [show,setShow] =useState(false)
  const handleText = async string => {
    setText(string);
    console.log(text);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}} >
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
          <Pressable onPress={() => setShow(true)}>
          <Image
            source={require('../assets/images/icn_filter_search.png')}
            style={styles.imgfilter}
          />
          </Pressable>
        </View>
        <Text style={styles.categoryText}>Categories</Text>

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
            {categories.map(item => (
              <CategoriesComponent img={item.source} category={item.category} />
            ))}
          </View>
        </ScrollView>
      


      <View style={styles.CourseView}>
        <Text style={styles.courseHeader}>All Courses</Text>
        {/* <FlatList
          data={course}
          scrollEnabled={false}
          renderItem={({item}) => (
            <SearchFoundComponent
              name={item.courseName}
              chapter={item.chapters}
              category={item.category}
              source={item.source}

            />
          )}/> */}
        {course.map(item => (
          <SearchFoundComponent
          name={item.courseName}
          chapter={item.chapters}
          category={item.category}
          source={item.source}
          key={item.id}
        />
        ))}
      </View>
{/* 
      <VirtualizedList
        data={course}
        initialNumToRender={4}
        renderItem={({ item }) => (
            <SearchFoundComponent
              name={item.courseName}
              chapter={item.chapters}
              category={item.category}
            />
          )}
        keyExtractor={item => item.key}
        getItemCount={course.length}
        getItem={course}
      /> */}

<BottomPopup show={show}/>
      </ScrollView>
      
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
    fontWeight: 'bold',
    fontFamily: 'Biko',
    lineHeight: 35,
  },
  searchview: {
    marginHorizontal: 24,
    height: 40,
    marginTop: 30,
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
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.31,
    lineHeight: 20,
    // borderWidth:1,
    width: '86%',
  },

  imgsearch: {
    height: 16,
    width: 16,
    marginHorizontal: 10,
  },
  imgfilter: {
    marginLeft: 15,
  },
  categoryText: {
    height: 22,
    color: '#2B2B2B',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 22,
    marginLeft: 24,
    marginTop: Platform.OS == 'ios' ? 30 : 30,
  },
  CourseView: {
    // flex:1,
    marginLeft: 24,
    marginRight: 24,
  },
  courseHeader: {
    height: 22,
    color: '#2B2B2B',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 22,
    marginBottom: Platform.OS == 'ios' ? 0 : 0,
  },
});
