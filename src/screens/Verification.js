import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {ButtonComponent} from '../components/Buttons';
import axios from 'axios';
import Toast from 'react-native-simple-toast'

export const Verification = ({navigation,route}) => {
  const [text, setText] = useState('');
  const mobileNumber = route.params.obj.mobileNumber;
  const [showError, setShowError] = useState(false);



  const handleText = async string => {
    setText(string);
    setShowError(false);
  };

  const handleProcess = async () => {
    const obj = {
      mobileNumber: mobileNumber,
      oneTimePassword: text,
    };

    try {
      const response = await axios.post(
        'http://virtuallearn-env.eba-b8h9bw3u.ap-south-1.elasticbeanstalk.com/newUser/verify',
        obj,
      );
      console.log('=====', response.data.message);
      if (response.data.message === 'Verified') {
        navigation.navigate('CreateNewPassword',{obj});
        setShowError(false);
      } else {
        setShowError(true);
      }
    } catch (error) {
      // console.log(error);
      Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
    }
  };
  return (
    <SafeAreaView style={styles.body}>
      <View style={{marginHorizontal: 24}}>
        <View style={styles.textView}>
          <Text style={styles.text1}>Verification</Text>
          <Text style={styles.text2}>
            Please fill in the verification code that has been sent to your
            mobile number.
          </Text>
        </View>
        <View style={styles.textinputView} >
        <TextInput
                name="text"
                style={styles.textInput}
                onChangeText={handleText}
                keyboardType='numeric'
                maxLength={4}
              />   
             
        </View>
        <View style={styles.textInputBorder}>
        <View style={styles.textInputBorderin1}></View>
        <View style={styles.textInputBorderin2}></View>
        <View style={styles.textInputBorderin3}></View>
        <View style={styles.textInputBorderin4}></View>
      </View>
        <View style={styles.textView2}>
          <Text style={styles.text3}>Didn't recieve a code?</Text>
          <TouchableOpacity
            onPress={async () => {
              const obj = {
                mobileNumber: '+919591726087',
              };

              try {
                const response = await axios.put(
                  'http://virtuallearn-env.eba-b8h9bw3u.ap-south-1.elasticbeanstalk.com/newUser/resend',
                  obj,
                );
                console.log('=====', response.data.message);
                if (response.data.message === 'OTP Valid For 2 Minutes') {
                }
              } catch (error) {
                // console.log(error);
                Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
              }
            }}>
            <Text style={styles.text4}>Resend</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <ButtonComponent text="Submit" onPress={() => handleProcess()} />
        </View>
      </View>
      {showError && (
        <View style={styles.componentBody}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
              textAlign: 'center',
              color: '#FFFFFF',
            }}>
            Invalid verification code, please try again
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  textView: {
    marginTop: 50,
  },
  textinputView: {
    // height: 35,
    marginTop: 60,
    fontSize: 16,
    alignItems: 'center',
    marginLeft: 50,

  },
  textView2: {
    marginTop: 40,
  },
  button: {
    marginTop: 60,
  },
  textInput: {
    width: Platform.OS == 'ios' ? "80%" : "70%",
    color: '#042C5C',
    fontSize: 20,
    letterSpacing: Platform.OS == 'ios' ? 45 : 35,
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    marginLeft: Platform.OS == 'ios' ? 0 : -50,
  
    height:40,

   
  },
  textInputBorder: {
    flexDirection: 'row',
    marginLeft: 70,
    marginTop:Platform.OS == 'ios' ? -5: -5
    
  },
  textInputBorderin1: {
    height: 0.5,
    width: 40,
    opacity: 0.6,
    backgroundColor: '#7A7A7A',
    marginRight: Platform.OS == 'ios' ? 17: 16,
  },
  textInputBorderin2: {
    height: 0.5,
    width: 35,
    opacity: 0.6,
    backgroundColor: '#7A7A7A',
    marginRight: Platform.OS == 'ios' ? 17: 13,
  },
  textInputBorderin3: {
    height: 0.5,
    width: 35,
    opacity: 0.6,
    backgroundColor: '#7A7A7A',
    marginRight: Platform.OS == 'ios' ? 17: 13,
  },
  textInputBorderin4: {
    height: 0.5,
    width: 35,
    opacity: 0.6,
    backgroundColor: '#7A7A7A',
    marginLeft: Platform.OS == 'ios' ? 10 : 0,
  },
  textno: {
    height: 20,
    fontSize: 16,
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    textAlign: 'center',
    marginTop: 10,
    
  },
  text1: {
    height: 35,
    color: '#2B2B2B',
    fontSize: 26,
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
  },
  text2: {
    height: 40,
    color: '#7A7A7A',
    fontSize: 16,
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    marginTop: 10,
  },
  text3: {
    height: 35,
    color: '#7A7A7A',
    fontSize: 16,
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    textAlign: 'center',
  },
  text4: {
    color: '#EE5C4D',
    fontSize: 17,
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    textAlign: 'center',
    marginBottom: Platform.OS == 'ios' ? 0 : 0,
  },
  image: {
    height: 16,
    width: 26,
    marginTop: 20,
    tintColor: '#373737',
  },
  componentBody: {
    height: 55,
    marginTop: Platform.OS === 'ios' ? 280 : 225,
    backgroundColor: '#E92020',
    justifyContent: 'center',
  },
});
