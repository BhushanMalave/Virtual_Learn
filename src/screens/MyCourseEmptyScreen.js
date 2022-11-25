import React from 'react'
import { View ,Image,StyleSheet,Text, Platform} from 'react-native'
import { CategoriesComponent } from '../components/CategoriesComponent';
import { useSelector } from 'react-redux';



// const categories = [
//   {
//     id: 1,
//     source: require('../assets/images/icn_back_header.png'),
//     category: 'Design',
//   },
//   {
//     id: 2,
//   source: require('../assets/images/icn_back_header.png'),
//     category: 'Development',
//   },
//   {
//     id: 3,
//   source: require('../assets/images/icn_back_header.png'),
//     category: 'Business',
//   },
//   {
//     id: 4,
//      source: require('../assets/images/icn_back_header.png'),
//     category: 'Marketing',
//   },
//   {
//     id: 5,
//       source: require('../assets/images/icn_back_header.png'),
//     category: 'Photography',
//   },
//   {
//     id: 6,
//       source: require('../assets/images/icn_back_header.png'),
//     category: 'Finance',
//   },
//   {
//     id: 7,
//      source: require('../assets/images/icn_back_header.png'),
//     category: 'IT & Software',
//   },
//   {
//     id: 8,
//      source: require('../assets/images/icn_back_header.png'),
//     category: 'LifeStyle',
//   },
//   {
//     id: 9,
//      source: require('../assets/images/icn_back_header.png'),
//     category: 'Music',
//   },
//   {
//     id: 10,
//       source: require('../assets/images/icn_back_header.png'),
//     category: 'Training',
//   },
//   {
//     id: 11,
//       source: require('../assets/images/icn_back_header.png'),
//     category: 'Health & Fitness',
//   },

export default function MyCourseEmptyScreen({navigation}) {

  const categoriesData = useSelector(state => state.categories.data);
  return (
    <View>

    <View>
        <Image source={require('../assets/images/img_mycourse_empty.png')} style={styles.image}/>
        <Text style={styles.text1}>What will you learn first?</Text>
        <Text style={styles.text2}>Your courses will go here</Text>
    </View>
    <Text style={styles.category}>Categories</Text>
    <View
              style={{
                height: 104,
                width: '100%',
                flexDirection: 'row',
                flexWrap: 'wrap',
                display: 'flex',
                marginLeft: 10,
                marginTop: 10,
              }}>
              {categoriesData.map(item => (
                <CategoriesComponent  
                id={item?.categoryId}
                img={item?.categoryPhoto}
                  category={item?.categoryName}
                  onPress={() => {
                    navigation.navigate('CategoryDisplayScreen');
                    
                  }}
                />
              ))}
            </View>

    </View>
  )
}


const styles=StyleSheet.create({
  image:{
  alignSelf:"center",
  marginTop:25
  },
  text1:{
    height:22,
    color:"#2B2B2B",
    fontFamily:Platform.OS==='ios'?"Proxima Nova" : "ProximaNova",
    fontSize:18,
    fontWeight:"600",
    letterSpacing:0,
    lineHeight:22,
    textAlign:"center",
    marginTop:20
  },
  text2:{
    height:17,
    color:"#7A7A7A",
    fontFamily:Platform.OS==='ios'?"Proxima Nova" : "ProximaNova",
    fontSize:14,
    fontWeight:"600",
    letterSpacing:0,
    lineHeight:17,
    textAlign:"center",
    marginTop:5,
    opacity:0.5
  },
  category: {
    height: 22,
    // width: 167,
    color: '#2B2B2B',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0,
    lineHeight: 22,
    marginLeft: 15,
    marginTop:30
  }
  
})