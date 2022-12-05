import React from 'react';

import {
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';


export const RegisterSuccessfully = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>

   <ScrollView showsVerticalScrollIndicator={false}>
            <Image source={require('../assets/images/img_Register_sucess_illustration.png')} resizeMode="contain" style={styles.image}/>
            <Text style={styles.text}>Success!</Text>
            <Text style={styles.description}>Your VirtualLearn account has been successfully created!</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
},
image:{
  alignSelf:"center",
  justifyContent:"center",
  marginTop:"50%"
},
text:{
  height:35,
  color:"#2B2B2B",
  fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
  fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
  fontSize:32,
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
  fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
  letterSpacing:0.4,
  lineHeight:20,
  textAlign:"center",
  marginTop:Platform.OS == 'ios' ? "45%" : "35%",
  marginBottom:10
}
});
