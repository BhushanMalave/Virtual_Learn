import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Platform,
  Image,
} from 'react-native';
import {CategoriesComponent} from './CategoriesComponent';
import { ButtonComponent } from './Buttons';
import { ButtonComponent3 } from './Buttons';
import {useSelector, useDispatch} from 'react-redux';
import { setFilterState } from '../redux/ReduxPersist/FilterSlice';

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
  {
    id: 8,
    source: require('../assets/images/icn_back_header.png'),
    category: 'Music',
  },
  {
    id: 9,
    source: require('../assets/images/icn_back_header.png'),
    category: 'Music',
  },
  {
    id: 10,
    source: require('../assets/images/icn_back_header.png'),
    category: 'Music',
  },
];

export const BottomPopup = ({show}) => {

  const filterState = useSelector(state => state.filterState.state);

  const dispatch =useDispatch();
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={filterState}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        {dispatch(setFilterState())}
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={{flexDirection: 'row' , }}>
            <Text style={styles.text1}> Search Filter</Text>
            <Pressable  onPress={() => {dispatch(setFilterState())}}>
            <Image
              source={require('../assets/images/icn_close_filter.png')}
              style={styles.img}
            />
            </Pressable>
          </View>
          <View style={styles.searchCatView}>
            <Text style={styles.texttopsearch}>Categories</Text>
            <View style={styles.viewcatin}>
              {categories.map(item => (
                <CategoriesComponent
                  img={item.source}
                  category={item.category}
                />
              ))}
            </View>
          </View>
          <View style={styles.durationView}>
            <Text style={styles.texttopsearch}>Duration</Text>
            <View style={styles.viewdurin}>
              <View style={styles.durview}>
                <Text style={styles.durtext}>5/10 Chapters</Text>
              </View >
              <View style={styles.durview}>
                <Text style={styles.durtext}>10/20 Chapters</Text>
              </View >
              <View style={styles.durview}>
                <Text style={styles.durtext}>20/30 Chapters</Text>
              </View >
              <View style={styles.durview}>
                <Text style={styles.durtext}>30/40 Chapters</Text>
              </View >
              <View style={styles.durview}>
                <Text style={styles.durtext}>50+ Chapters</Text>
              </View >
            </View>
          </View>
          <View style={{marginTop:   Platform.OS === 'ios' ? 15:5}}>
          <ButtonComponent text='Apply Filter' onPress={() => {}}/>
          </View>
          <View style={{marginTop:   Platform.OS === 'ios' ? 15:5}}>
          <ButtonComponent3 text='Clear All' onPress={() => {}}/>
          </View>
          <View>

          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: '#000000AA',
  },
  modalView: {
    marginTop: Platform.OS == 'ios' ? 300 : 230,
    height: 600,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#00000AA',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  text1: {
    fontSize: 18,
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontWeight: 'bold',
    marginLeft: 100,
  },
  img: {
    marginTop: 5,
    marginLeft: 95,
  },
  searchCatView: {
    marginTop: 30,
  },
  durationView: {
    marginTop: 20,
  },
  texttopsearch: {
    fontSize: 18,
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontWeight: 'bold',
    color: '#2B2B2B',
  },
  viewcatin: {
    marginTop:  Platform.OS === 'ios' ? 15:5,
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
  },
  viewdurin: {
    
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
  },
  durview:{
    height:30,
    width:101,
    borderWidth:1,
    borderColor:'#D3D3D3',
    borderRadius:6,
    marginTop:10,
    marginLeft:5,
    

  },
  durtext:{
      fontSize:12,
      fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
      textAlign:'center',
      marginTop:6,
      
  },
});
