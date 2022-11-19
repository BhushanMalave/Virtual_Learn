import React from "react";
import { View,StyleSheet,Text,TouchableOpacity,FlatList} from "react-native";


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
export const CourseComponent=(props)=>{
    return(
        <View style={styles.businessview}>
        <View style={styles.categoryview}>
          <Text style={styles.category}>{props.header}</Text>
         
            <TouchableOpacity onPress={props.onPress}>
              
          <Text style={styles.all}>See All</Text>
            </TouchableOpacity>
          
        </View>
        <View>
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View>

            <View style={styles.businessContainer}>
              <Text></Text>
            </View>
           

              <Text style={styles.busnesstext}>The Complete Communication Skill</Text>
              <View style={{flexDirection:"row",marginLeft:25}}>

              <Text style={styles.busnesschapter}>{props.chapter} Chapter</Text>
              <Text style={[styles.busnesschapter]}>          1:30:20</Text>
              </View>
          </View>
         
        )}></FlatList>
    </View>   
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 35,
  
      // borderWidth:1
    },
    categoryview: {
      // height: 104,
      width: '100%',
      // borderWidth: 1,
      // marginLeft:25,
      // marginTop: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    category: {
      height: 22,
      // width: 167,
      color: '#2B2B2B',
      fontFamily: 'Proxima Nova',
      fontSize: 18,
      fontWeight: '600',
      letterSpacing: 0,
      lineHeight: 22,
      marginLeft: 25,
    },
    all: {
      height: 15,
      width: 37,
      color: '#7A7A7A',
      fontFamily: 'Proxima Nova',
      fontSize: 12,
      letterSpacing: 0,
      lineHeight: 15,
      marginRight: 25,
    },






 
    businessContainer:{
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
    businessview:{
     
        height: 223,
        width: '100%',
        // borderWidth:1,
        // marginLeft:25,
        // paddingLeft:
        marginTop:25
     
    },
    busnesstext:{
      marginLeft:25,
      margin:3,
      fontWeight:"300",
      letterSpacing:0,
      lineHeight:20,
      width:288,
    },
    busnesschapter:{
      fontSize:12,
      color:"#7A7A7A",
      fontWeight:"300"
    },
  
  });