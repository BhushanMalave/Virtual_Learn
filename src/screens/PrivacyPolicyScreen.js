import React, { useState ,useEffect} from 'react';
import {SafeAreaView, View, StyleSheet, Image, Text, TouchableOpacity, Pressable} from 'react-native';
import { privacyPolicy } from '../authorization/Auth';
export const PrivacyPolicyScreen = ({navigation}) => {

    const [data,setData] = useState('');

    const call = async () => {
          const res = await privacyPolicy();
     
          setData(res);
    }
    useEffect(() => {
    call();
    },[]);
  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity  onPress={ () => {navigation.goBack();}}>
      <Image
        source={require('../assets/images/icn_back_header.png')}
        style={styles.backbutton}
      />
      </TouchableOpacity>
      <Text style={styles.text}>Privacy Policy</Text>
      <View style={styles.description}>
        <Text style={styles.text1}>{data}</Text>
        {/* <Text style={styles.text1}>This Privacy Policy was last updated on January 4, 2021.</Text>
      <Text style={styles.text1}>
      Thank you for joining the world's largest online learning marketplace. We at VirtuaLearn (“VirtuaLearn”, “we”, “us”) respect your privacy and want you to understand how we collect, use, and share data about you. This Privacy Policy covers our data collection practices and describes your rights to access, correct, or restrict our use of your personal data.

       
      </Text>
      <Text style={styles.text1}>Unless we link to a different policy or state otherwise, this Privacy Policy applies when you visit or use the VirtuaLearn mobile application, APIs or related services (the “Services”)</Text>
      <Text style={styles.text1}>By using the Services, you agree to the terms of this Privacy Policy. You shouldn’t use the Services if you don’t agree with this Privacy Policy or any other agreement that governs your use of the Services.</Text> */}
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
  },
  backbutton: {
    marginTop: 30,
  },
  text: {
    height: 35,
    color: '#2B2B2B',
    fontFamily: 'Biko',
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 0,
    lineHeight: 35,
    marginTop: 15,
  },
  description:{
    marginTop:15
  },
  text1:{
    color:"#7A7A7A",
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize:16,
    letterSpacing:0,
    lineHeight:20,
    marginBottom:17
  }
});
