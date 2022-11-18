import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';

export const OnBoardingScreen3 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      
        <View>

          <Image
            source={require('../assets/images/virtualLearnIcon.png')}
            style={styles.Icon}></Image>
        </View>
          <View style={styles.imageView}>
            <Image
              source={require('../assets/images/onBoardingIcon3.png')}
              style={styles.image}
              resizeMode="contain"></Image>
          </View>
          <View style={styles.textView}>
            <Text style={styles.text}>Seamless</Text>
            <Text style={styles.text}>Workflow</Text>
          </View>
          <View style={styles.descriptionview}>
            <Text style={styles.description}>
            Sync rosters, create and assign impactful video experiences, enrich your flipped classroom, and streamline tedious grading.
            </Text>
          </View>
          <View style={styles.bottomView}>
            
            <View style={styles.bottomLineView}>
                <TouchableOpacity onPress={() => navigation.navigate("OnBoardingScreen1")}>
                <View style={styles.borderpoint1}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("OnBoardingScreen1")}>
                <View style={styles.borderpoint1} />
                </TouchableOpacity>
                <View style={styles.bottomoLine}/>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>

            <Image source={require('../assets/images/btn_done.png')} />
            </TouchableOpacity>
          </View>
        
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
 
    // marginBottom:60
  },
 
  Icon: {
    height: 37,
    width: 182,
    // marginTop: 10,
    marginTop:Platform.OS == 'ios'? 20:0,
    marginLeft: 10,
  },
  image: {
    height: 281.19,
    width: '100%',
    marginTop: 75,
    alignSelf: 'center',
  },
  imageView: {
    // marginHorizontal:10
  },
  textView: {
    height: 70,
    width: '100%',

    marginTop:Platform.OS=='ios'?85:65,
  },
  text: {
    color: '#2B2B2B',
    fontSize: 26,
    letterSpacing: 0,
    lineHeight: 35,
    fontFamily:"Biko",
    fontWeight:"bold",
    paddingBottom: 4,
  },
  descriptionview:{
    // borderWidth:1,
    width:"87%",
    marginTop:25
  },
  description:{
    height:85,
    width:"100%",
    color:"#7A7A7A",
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize:14,
    letterSpacing:0,
    lineHeight:20
  },
  bottomView:{
    flexDirection:"row",
    marginTop:30,
    justifyContent:"space-between",
    marginLeft:100,
    alignItems:"center",
   
    
  },
  bottomLineView:{
    height:6,
    width:58,
    // borderWidth:1,
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:15,
    alignItems:"center",
    marginLeft:35,
   alignContent:"center",
   alignItems:"center"
    

  },
  bottomoLine:{
    height:6,
    backgroundColor:"#EE5C4D",
    borderRadius:5.99,
    width:32,
    
  },
  borderpoint1:{
    height:6,
    width:6,
    backgroundColor:"#D8D8D8",
    borderRadius:50
  },

});
