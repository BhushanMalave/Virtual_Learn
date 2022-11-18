import React from 'react';

import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import image_Register_sucess_illustrations from '../assets/images/04.8_VirtualLearn_Register_success/img_Register_sucess_illustration.png';

export const RegisterSuccessfully = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>

   <ScrollView>
            <Image source={require('../assets/images/04.8_VirtualLearn_Register_success/img_Register_sucess_illustration.png')} resizeMode="contain" style={styles.image}/>
            <Text style={styles.text}>Success!</Text>
            <Text style={styles.description}>Your VirtualLearn account has been successfully created!</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Drawer')}>
                <Text style={styles.button}>Lets Get Started</Text>
            </TouchableOpacity>
            </ScrollView>

    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container:{
    flex:1,
    margin:29,
    // borderWidth:1
},
image:{
  alignSelf:"center",
  // borderWidth:1,
  justifyContent:"center",
  // width:"100%",
  marginTop:"50%"

},
text:{
  height:35,
  color:"#2B2B2B",
  fontFamily:"Biko",
  fontSize:32,
  fontWeight:"bold",
  letterSpacing:0,
  lineHeight:35,
  textAlign:"center",
  marginTop:35
},
description:{
  height:40,
  maxWidth:"95%",
  color:"#7A7A7A",
  fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
  fontSize:16,
  letterSpacing:0,
  lineHeight:20,
  textAlign:"center",
  marginTop:10

},
button:{
  height:20,
  color:"#EE5C4D",
  fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
  fontSize:16,
  fontWeight:"bold",
  letterSpacing:0.4,
  lineHeight:20,
  textAlign:"center",
  marginTop:"45%"
}
});
