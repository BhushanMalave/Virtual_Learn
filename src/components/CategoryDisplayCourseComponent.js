import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, FlatList,Image, ImageBackground, Platform} from 'react-native';

const data = [
  {
    id: 1,
    courseName: 'Product UX Design Course Sale hcujwedhuh',
  },
  {
    id: 2,
    courseName: 'Product UX Design Course Sale',
  },
  {
    id: 3,
    courseName: 'Product UX Design Course Sale',
  },
];
export const CategoryDisplayCourseComponent = props => {
  return (
    <View style={styles.businessview}>
      <View style={{marginLeft:-20}}>
        <FlatList
          data={data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View>
              <View style={styles.businessContainer}>
              <ImageBackground>
              <Image source={require('../assets/images/icn_testduration.png')}/>
              </ImageBackground>
              </View>

              <Text style={styles.busnesstext}>
                The Complete Communication Skill   The Complete Communication Skill
              </Text>
              <View style={{flexDirection: 'row', marginLeft: 25}}>
                <Text style={styles.busnesschapter}>
                  {props.chapter} Chapter
                </Text>
                <Image source={require('../assets/images/icn_testduration.png')} style={{height:10, width:10 ,marginTop:3,marginLeft:15}}/>
                <Text style={[styles.busnesschapter]}> 1:30:20</Text>
              </View>
            </View>
          )}></FlatList>
      </View>
    </View>
  );
};

export const CategoriesComponents =({
    category
}) => {
 return(
     <View style={styles.categorycontainer}>
     <Text style={styles.categorytext}>{category}</Text>
   </View>
 );
};

const styles = StyleSheet.create({



  businessContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    height: 134,
    width: 288,
    justifyContent: 'space-between',
    marginLeft: 25,
    padding: 10,
    // elevation: 5,
    // marginLeft: 10,
    borderWidth: 1,
    marginTop: 20,
  },
  businessview: {
    height: 223,
    width: '100%',
    // borderWidth:1,
    // marginLeft:25,
    // paddingLeft:
    marginTop: 0,
  },
  busnesstext: {
    marginLeft: 25,
    margin: 3,
    fontWeight: '300',
    letterSpacing: 0,
    lineHeight: 20,
    width:288,
    color:'#373737',
    fontFamily:Platform.OS === 'ios' ? 'Proxima Nova' : 'PromimaNova',
    fontWeight:'bold',

  },
  busnesschapter: {
    fontSize: 12,
    color: '#7A7A7A',
    fontWeight: '300',
  },
  categorycontainer: {
    // backgroundColor:"pink",
    borderRadius: 6,
    // justifyContent:'space-between',
    // marginStart:10,
    margin: 5,
    borderWidth: 1,
    height: 30,
    // width:83,
    padding: 5,
    borderColor: '#D3D3D3',
    flexDirection: 'row',

    // borderColor:"#7A7A7A",
    // opacity:0.2,
  },
  categorytext: {
    height: 15,
    color: '#2B2B2B',
    fontFamily:Platform.OS === 'ios' ?  'Proxima Nova' : 'ProximaNova',
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 15,
    marginHorizontal:5,
    marginVertical:3
  },
  img:{
    height:15,
    width:15,
    marginVertical:3,
    marginHorizontal:3
  },
});
