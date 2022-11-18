import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Pressable,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import { CompletedComponent } from '../components/CompletedComponent';
import {OnGoingComponent} from '../components/OnGoingComponent';
import { SearchComponent } from '../components/SearchFoundComponent';
import MyCourseEmptyScreen from './MyCourseEmptyScreen';

const data = [
  {
    id: 1,
    source: require('../assets/images/img_mycourse_ongoing1.png'),
    name: 'Art & Illustration',
    chapters: '15/20',
  },
  {
    id: 2,
    source: require('../assets/images/img_mycourse_ongoing1.png'),
    name: 'User Interface',
    chapters: '15/20',
  },
  {
    id: 3,
    source: require('../assets/images/img_mycourse_ongoing1.png'),
    name: 'Learn Figma - UI/UX Design Essential',
    chapters: '15/20',
  },
];
export const MyCourse = () => {
  const [clicked1, setClicked1] = useState(true);
  const [clicked2, setClicked2] = useState(false);

<<<<<<< HEAD
  const[initial,setInitial]=useState(2)
=======
  const[initial,setInitial]=useState(1)
>>>>>>> a136fdbd339d6052a64b7939ebb56a0f8238bfbf

  return (
    <SafeAreaView style={styles.container}>
      
        <View style={styles.view}>
          <Pressable>
            <Image source={require('../assets/images/icn_hamburgermenu.png')} />
          </Pressable>
          <Image
            source={require('../assets/images/icn_search-Search.png')}
            style={styles.search}
          />
        </View>
        <Text style={styles.header}>My Course</Text>

        {initial === 1?(
          <>
          <MyCourseEmptyScreen/>
          </>
        ):(
          <>
             <View style={styles.buttontabs}>
          <TouchableOpacity
            onPress={() => {
              setClicked1(true), setClicked2(false);
            }}>
            {clicked1 ? (
                <View style={styles.buttonActiveview}>
                  <Text style={styles.buttonActive}>Ongoing</Text>
                </View>
            
            ) : (
              <View style={styles.buttonview}>
                <Text style={styles.button}>Ongoing</Text>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setClicked2(true), setClicked1(false);
            }}>
            {clicked2 ? (
              
              <View style={styles.buttonActiveview}>
                <Text style={styles.buttonActive}>Completed</Text>
              </View>
            
            ) : (
              <View style={styles.buttonview}>
                <Text style={styles.button}>Completed</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
            {clicked1?(
              <>
              <FlatList
            data={data}
            renderItem={({item})=>(

             <OnGoingComponent source={item.source} name={item.name} chapters={item.chapters}/>
            )}></FlatList>
              </>
            ):(<></>)}
            {
              clicked2?(
                <>
                <FlatList
              data={data}
              renderItem={({item})=>(
  
               <CompletedComponent source={item.source} name={item.name} chapters={item.chapters}/>
              )}></FlatList>
                </>

              ):(<></>)
            }

          </>
        )}
       
         
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:Platform.OS==='ios'?25:15,
    // borderWidth: 1,
    marginHorizontal: 24,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    // marginLeft: 25,
  },
  search: {
    height: 16.5,
    border: 0.5,
    color: '#373737',
    marginRight: 20,
  },
  header: {
    height: 35,
    color: '#2B2B2B',
    fontFamily: 'Biko',
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 0,
    lineHeight: 35,
    marginTop: 25,
    marginBottom: 20,
  },
  buttontabs: {
    flexDirection: 'row',
    height: 26,
    width: 156,
    justifyContent: 'space-between',
    marginBottom: 27,
  },
  buttonActiveview: {
    height: 26,
    width: 75,
    backgroundColor: '#042C5C',
    borderRadius: 6,
    // marginLeft:25,
  },
  buttonActive: {
    height: 15,
    alignSelf: 'center',
    fontFamily:Platform.OS==='ios'?"Proxima Nova":"ProximaNova",
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 15,
    color: '#FFFFFF',
    marginTop: 5,
  },
  buttonview: {
    height: 26,

    // marginLeft:25,
    margin: 5,
  },
  button: {
    height: 26,
    // borderWidth:1,
    borderRadius: 6,
    // backgroundColor:"#DFE7F5"
    textAlign: 'center',
    fontFamily:Platform.OS==='ios'?"Proxima Nova":"ProximaNova",
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 15,

    color: '#7A7A7A',
  },
});
