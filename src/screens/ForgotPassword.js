import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { ButtonComponent } from '../components/Buttons';
import axios from 'axios';



export const ForgotPassword = ({navigation}) => {
    
    const [text,setText] =useState ('');
    const handleText =string => {
        setText(string)
        console.log(text)
    };
    const handleProcess =async () => {
        const obj ={
            "mobileNumber" : "+919591726087"
        }
       try {
            const response = await axios.put(
              'https://virtual-learn-app-java.herokuapp.com/User/Resend',
               obj,
            );
            console.log("=====",response.data.message);
            if(response.data.message ===   "Verified")
            {
                navigation.navigate('Personal Details');
            }
           
          } catch (error) {
            console.log(error);
          }
        
        navigation.navigate('Verification');
        };


  return(
    <SafeAreaView style={styles.body}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
         <Image source={require('../assets/images/icn_back_header.png')} style={styles.image}/>
         </TouchableOpacity>
        <View style={styles.textView}>
            <Text style={styles.text1}>
                Forgot Password
            </Text>
            <Text style={styles.text2}>
            Please enter your phone number. You will receive a code to create a new password.
            </Text>
        </View>
        <View style={styles.textinputView} >
        <Text style={styles.textno} >+91</Text>
        <TextInput
                name="text"
                placeholder="Enter your mobile number"
                placeholderTextColor={'#7A7A7A'}
                style={styles.textInput}
                onChangeText={handleText}
               
              />    
        </View>
        <View style={styles.button}>
        <ButtonComponent text ="Send" onPress={() => handleProcess()} />
        </View>
    </SafeAreaView>
     
  );
};

const styles = StyleSheet.create({
    body:{
        flex:1,
        marginHorizontal:24,
    },
    textView:{
        marginTop:Platform.OS == 'ios'? 25: 20,
    },
    textinputView:{
        height:40,
        flexDirection:'row',
        borderBottomWidth:0.2,
        borderBottomColor:'#7A7A7A',
        marginTop:60,  
        fontSize:16,
    },
    button:{
        marginTop:60,
    },
    textInput:{
        height:40,
        marginLeft:15,
        width:'80%',
        color:'#042C5C',
        fontSize:16,
        letterSpacing:0.4,
        fontFamily: Platform.OS == 'ios' ? 'Avenir' : 'Avenir',
    },
    textno:{
        height:20,
        fontSize:16,
        fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
        textAlign:'center',
        marginTop:10,
        color:'#042C5C',
    },
    text1:{
        height:35,
        color:'#2B2B2B',
        fontSize:26,
        fontWeight:'bold',
        fontFamily:'Biko',
    },
    text2:{
        height:40,
        color:'#7A7A7A',
        fontSize:16,
        fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
        marginTop:Platform.OS=='ios'? 10:20,
    },
    image:{
        height:16,
        width:26,  
        marginTop:Platform.OS=='ios'? 20:30,
        tintColor:'#373737',
    },
});

