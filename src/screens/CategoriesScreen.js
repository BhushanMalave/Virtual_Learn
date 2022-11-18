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

const categories = [
  {
    id: 1,
    source: require('../assets/images/icn_back_header.png'),
    category: 'Design',
  },
  {
    id: 2,
    source: require('../assets/images/icn_back_header.png'),
    category: 'Development',
  },
  {
    id: 3,
    source: require('../assets/images/icn_back_header.png'),
    category: 'Business',
  },
  {
    id: 4,
    source: require('../assets/images/icn_back_header.png'),
    category: 'Marketing',
  },
  {
    id: 5,
    source: require('../assets/images/icn_back_header.png'),
    category: 'Photography',
  },
  {
    id: 6,
    source: require('../assets/images/icn_back_header.png'),
    category: 'Finance',
  },
  {
    id: 7,
    source: require('../assets/images/icn_back_header.png'),
    category: 'IT & Software',
  },
  {
    id: 8,
    source: require('../assets/images/icn_back_header.png'),
    category: 'LifeStyle',
  },
  {
    id: 9,
    source: require('../assets/images/icn_back_header.png'),
    category: 'Music',
  },
  {
    id: 10,
    source: require('../assets/images/icn_back_header.png'),
    category: 'Training',
  },
  {
    id: 11,
    source: require('../assets/images/icn_back_header.png'),
    category: 'Health & Fitness',
  },
];
export const CategoriesScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainheader}>
        <Pressable onPress={() => navigation.navigate('HomeScreen')}>
          <Image source={require('../assets/images/icn_back_header.png')} />
        </Pressable>

        <Pressable>
          <Image source={require('../assets/images/icn_search-Search.png')} />
        </Pressable>
      </View>
      <Text style={styles.name}>Categories</Text>
      <Text style={styles.description}>
        Please choose a topic on which you want to start a course.
      </Text>

      <View style={styles.middlecontainer}>
        {categories.map(item => (
          <View style={styles.categorycontainer} key={item.id}>
            <Image source={item.source} style={styles.icon} />
            <Text style={styles.categorytext}>{item.category}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
    // borderWidth: 1,
  },
  mainheader: {
    marginTop: Platform.OS === 'ios' ? 25 : 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    height: 35,
    width: 128,
    color: '#2B2B2B',
    fontFamily: 'Biko',
    fontSize: 26,
    fontWeight: 'bold',
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
    // backgroundColor:"pink",
    borderRadius: 6,
    // justifyContent:'space-between',
    // marginStart:10,
    margin: 6,
    borderWidth: 0.5,
    height: 80,
    width: 100,
    // padding: 5,
    borderColor: '#D3D3D3',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categorytext: {
    height: 15,
    color: '#2B2B2B',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 12,
    fontWeight: '500',
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
    // height:20,

    marginBottom: 15,
  },
});
