import {TabRouter} from '@react-navigation/native';
import React, {useState} from 'react';
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
  Platform,
  Modal,
} from 'react-native';

import {TextInput} from 'react-native-gesture-handler';
import {TopSearchComponent} from '../components/TopSearchComponent';
import {CategoriesComponent} from '../components/CategoriesComponent';
import {SearchFoundComponent} from '../components/SearchFoundComponent';
import {BottomPopup} from '../components/BottomPopup';
import { setFilterState } from '../redux/ReduxPersist/FilterSlice';
import {useSelector, useDispatch} from 'react-redux';



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

export const HomeSearch = ({navigation}) => {
  const filterState = useSelector(state => state.filterState.state);
  const [text, setText] = useState('');
  const dispatch =useDispatch();
  const [componentrender, setComponentRender] = useState(1);



  const handleText = async string => {
    setText(string);
    console.log(text);
  };
  return (
    <View style={styles.body}>
      <View style={styles.topView}>
      <Pressable onPress={()=> navigation.goBack()}>
        <Image
          source={require('../assets/images/icn_back_header.png')}
          style={styles.imgback}
        />
        </Pressable>
        <Text style={styles.texttop}>Search</Text>
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
            placeholderTextColor={'grey'}
            style={styles.textInput}
            onChangeText={handleText}
          />
        </View>
        <TouchableOpacity onPress={() =>{ {dispatch(setFilterState())}}}>
          <Image
            source={require('../assets/images/icn_filter_search.png')}
            style={styles.imgfilter}
          />
        </TouchableOpacity>
      </View>
      {componentrender == 1 && (
        <View style={styles.defaultBody}>
          <View style={styles.topsearchView}>
            <Text style={styles.texttopsearch}>Top Searches</Text>
            <View style={styles.viewtopsearch}>
              <TopSearchComponent text="dfghj" />
              <TopSearchComponent text="dfghj" />
              <TopSearchComponent text="dfghj" />
              <TopSearchComponent text="dfghj" />
              <TopSearchComponent text="dfghj" />
              <TopSearchComponent text="dfghj" />
              <TopSearchComponent text="dfghj" />
              <TopSearchComponent text="dfghj" />
              <TopSearchComponent text="dfghj" />
            </View>
          </View>
          <View style={styles.searchCatView}>
            <Text style={styles.texttopsearch}>Search From Categories</Text>
            <View style={styles.viewcatin}>
              {categories.map(item => (
                <CategoriesComponent
                  img={item.source}
                  category={item.category}
                />
              ))}
            </View>
          </View>
        </View>
      )}
      {componentrender == 2 && (
        <View style={{marginTop: 30}}>
          <SearchFoundComponent />
          <SearchFoundComponent />
          <SearchFoundComponent />
          <SearchFoundComponent />
        </View>
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
              {categories.map(item => (
                <CategoriesComponent
                  img={item.source}
                  category={item.category}
                />
              ))}
            </View>
          </View>
          
        </View>
        
      )}
      <BottomPopup />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginHorizontal: 24,
  },
  topView: {
    marginTop: Platform.OS === 'android' ? 30 : 90,
    flexDirection: 'row',
  },
  searchview: {
    height: 40,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchviewin: {
    height: 40,
    borderWidth: 1,
    borderRadius: 0.6,
    borderColor: '7A7A7A',
    flexDirection: 'row',
    borderRadius: 6,
  },
  searchCatView: {
    marginTop: 40,
  },
  searchCatView1: {
    marginTop: 60,
  },
  texttop: {
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 120,
    marginTop: Platform.OS === 'ios' ? -5 : -5,
  },
  textInput: {
    height: 35,
    width: '75%',
    marginLeft: 10,
    marginTop: 2,
    color: '#',
  },
  texttopsearch: {
    fontSize: 18,
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontWeight: 'bold',
    color: '#2B2B2B',
  },
  text1: {
    fontSize: 18,
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontWeight: 'bold',
    color: '#2B2B2B',
    textAlign: 'center',
    marginTop: 20,
  },
  text2: {
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontWeight: 'bold',
    color: '#7A7A7A',
    textAlign: 'center',
    marginTop: 10,
  },
  imgback: {
    height: 14,
    width: 22,
    color: '#373737',
  },
  imgsearch: {
    height: 16,
    width: 16,
    marginTop: 10,
    marginLeft: 10,
  },
  imgfilter: {
    marginLeft: 15,
  },
  defaultBody: {
    flex: 1,
  },
  topsearchView: {
    marginTop: 30,
  },
  viewtopsearch: {
    marginTop: 10,
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
  },
  viewcatin: {
    marginTop: 15,
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
  },
  imgnosearch: {
    height: 228,
    width: 200,
    marginTop: 50,
    marginLeft: 60,
  },
});
