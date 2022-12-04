import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {ButtonComponent} from '../components/Buttons';
import axios from 'axios';
import Toast from 'react-native-simple-toast'

export const ForgotPassword = ({navigation}) => {
  const [text, setText] = useState('');
  const [showError, setShowError] = useState(false);
  const handleText = string => {
    setText(string);
    setShowError(false);
  };
  const handleProcess = async () => {
    const obj = {
      mobileNumber: `+91${text}`,
    };
    try {
      const response = await axios.put(
        'http://virtuallearn-env.eba-b8h9bw3u.ap-south-1.elasticbeanstalk.com/newUser/resend',
        obj,
      );
      console.log('=====', response.data.message);
      if (response.data.message === 'Verified') {
        navigation.navigate('Personal Details');
        setShowError(false);
      } else {
        setShowError(true);
      }
    } catch (error) {
      console.log(error);
      setShowError(true);
      
    }

    navigation.navigate('Verification');
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={{marginHorizontal: 24}}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image
            source={require('../assets/images/icn_back_header.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <View style={styles.textView}>
          <Text style={styles.text1}>Forgot Password</Text>
          <Text style={styles.text2}>
            Please enter your phone number. You will receive a code to create a
            new password.
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
               keyboardType='numeric'
              />    
        </View>
        <View style={styles.button}>
          <ButtonComponent text="Send" onPress={() => handleProcess()} />
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
            Invalid mobile number, please try again
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
    marginTop: Platform.OS == 'ios' ? 25 : 20,
  },
  textinputView: {
    height: 40,
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    borderBottomColor: '#7A7A7A',
    marginTop: 60,
    fontSize: 16,
  },
  button: {
    marginTop: 60,
  },
  textInput: {
    height: 40,
    marginLeft: 15,
    width: '80%',
    color: '#042C5C',
    fontSize: 16,
    letterSpacing: 0.4,
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
  },
  textno: {
    height: 20,
    fontSize: 16,
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    textAlign: 'center',
    marginTop: 10,
    color: '#042C5C',
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
    marginTop: Platform.OS == 'ios' ? 10 : 20,
  },
  image: {
    height: 16,
    width: 26,
    marginTop: Platform.OS == 'ios' ? 20 : 30,
    tintColor: '#373737',
  },
  componentBody: {
    height: 55,
    marginTop: Platform.OS === 'ios' ? 390 : 330,
    backgroundColor: '#E92020',
    justifyContent: 'center',
  },
});
