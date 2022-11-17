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



export const VerifyAccount = ({navigation}) => {
    
    const [text,setText] =useState ('');
    const handleText =string => {
        setText(string)
        console.log(text)
    };

    const handleProcess =async () => {
          console.log(text);
          const obj ={
            mobileNumber : "+919591726087",
            oneTimePassword: text,
        }

        try {
            const response = await axios.post(
              'https://virtual-learn-app-java.herokuapp.com/User/Verify',
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
        
        
    };

  return(
    <SafeAreaView style={styles.body}>
        <TouchableOpacity onPress={() => navigation.navigate('New Account')}>
        <Image source={require('../assets/images/icn_back_header.png')} style={styles.image}/>
        </TouchableOpacity>
        <View style={styles.textView}>
            <Text style={styles.text1}>
                Verify Account 
            </Text>
            <Text style={styles.text2}>
            Please fill in the verification code that has been sent to your mobile number.
            </Text>
        </View>
        <View style={styles.textinputView} >
        <TextInput
                name="text"
                style={styles.textInput}
                onChangeText={handleText}
              />   
             
        </View>
        <View  style={styles.textInputBorder}>
              <View  style={styles.textInputBorderin1}>
              </View>  
              <View  style={styles.textInputBorderin2}>
              </View>  
              <View  style={styles.textInputBorderin3}>
              </View>  
              <View  style={styles.textInputBorderin4}>
              </View>  
              </View> 

        <View style={styles.textView2}>
        <Text style={styles.text3}>Didn’t recieve a code?</Text>
        <Text style={styles.text4} >Resend</Text>
        </View>
        <View style={styles.button}>
        <ButtonComponent text ="Verify" onPress={() => handleProcess()} />
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
        marginTop:50,
    },
    textinputView:{
        height:35,
        marginTop:60,  
        fontSize:16,
        alignItems:'center',
        marginLeft:50,
    },
    textView2:{
        marginTop:40,
      
    },
    button:{
        marginTop:60,
    },
    textInput:{
        // textAlign:'center',
        height:35,
        width:'80%',
        color:'#042C5C',
        fontSize:20,
        letterSpacing:45,
        // borderWidth:1,
        fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
        marginLeft:10,
    },
    textInputBorder:{
        flexDirection:'row',
        marginLeft:70,
    },
    textInputBorderin1:{
        height:0.5,
        width:35,
        opacity:0.6,
        backgroundColor:'#7A7A7A',
        marginRight:17,
       
       
    },
    textInputBorderin2:{
        height:0.5,
        width:35,
        opacity:0.6,
        backgroundColor:'#7A7A7A',
        marginRight:25,
       
       
    },
    textInputBorderin3:{
        height:0.5,
        width:35,
        opacity:0.6,
        backgroundColor:'#7A7A7A',
        marginRight:10,
       
       
    },
    textInputBorderin4:{
        height:0.5,
        width:35,
        opacity:0.6,
        backgroundColor:'#7A7A7A',
        marginLeft:10,
       
    },
    textno:{
        height:20,
        fontSize:16,
        fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
        textAlign:'center',
        marginTop:10,

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
        marginTop:10,
    },
    text3:{
        height:35,
        color:'#7A7A7A',
        fontSize:16,
        fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
        textAlign:'center',
    },
    text4:{
      
        color:'#EE5C4D',
        fontSize:17,
        fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:Platform.OS == 'ios' ? 0 : 0,
    },
    image:{
        height:16,
        width:26,  
        marginTop:20,
        tintColor:'#373737',
    },
});
