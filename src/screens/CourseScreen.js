import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TopTabNav from '../navigation/TopTabNav';

export const CourseScreen = () => {
  return (
    
  

    <View style={styles.container}>
      <View style={styles.header}>
      

        <ImageBackground
          source={require('../assets/images/img_designcoursedetail1_bg.png')}
          style={styles.header}>
          <Image source={require('../assets/images/icn_close_white.png')} style={styles.image}/>
          <Text style={styles.maintext}>
            Learn Figma - UI/UX Design Essential Training
          </Text>
          <View style={styles.text}>
            <View style={styles.designview}>
              <Text style={styles.design}>Design</Text>
            </View>
            <Text style={styles.chapter}>7 Chapters | 46 Lessons</Text>
          </View>
        </ImageBackground>
       
      </View>
      <TopTabNav/>
     
    </View>
          
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
  header: {
    height: 213,
    borderWidth: 1,
  },
  maintext: {
    marginTop:18,
    marginLeft: 20,
    color: '#FFFFFF',
    fontFamily: 'Biko',
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 0,
    lineHeight: 35,
  },
  text: {
    marginLeft: 20,
    flexDirection: 'row',
  },
  designview:{
    height:20,
    width:60,
    borderRadius:3,
    backgroundColor:"#FCBE4B",
    marginTop:10
},
design:{
    height: 12,
    
    color: "#373737",
    fontFamily:Platform.OS==='ios'?"Proxima Nova":"ProximaNova",
    fontSize:10,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 9,
    alignSelf:"center",
    marginTop:5
},
chapter:{
  color:"#FFFFFF",
  fontSize:14,
  letterSpacing:0,
  lineHeight:17,
  marginTop:10,
  marginLeft:10
},
image:{
  marginTop:70,
  marginLeft:20
}
});
