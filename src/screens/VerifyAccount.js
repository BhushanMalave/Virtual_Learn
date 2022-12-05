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

export const VerifyAccount = ({navigation,route}) => {
  const [text, setText] = useState('');
  const [showError, setShowError] = useState(false);
  const mobileNumber = route.params.text;
  const handleText = string => {
    setText(string);
    setShowError(false);
  };

  const handleProcess = async () => {
    console.log(text);
    const obj = {
      mobileNumber: `+91${mobileNumber}`,
      oneTimePassword: text,
    };

    try {
      const response = await axios.post(
        'http://virtuallearn-env.eba-b8h9bw3u.ap-south-1.elasticbeanstalk.com/newUser/verify',
        obj,
      );
      console.log('=====', response.data.message);
      if (response.data.message === 'Verified') {
        setShowError(false);
        navigation.navigate('Personal Details',{mobileNumber});
      } else {
        setShowError(true);
      }
    } catch (error) {
      Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
    }
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={{ marginHorizontal: 24,}}>
      <TouchableOpacity onPress={() => navigation.navigate('New Account')}>
        <Image
          source={require('../assets/images/icn_back_header.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.textView}>
        <Text style={styles.text1}>Verify Account</Text>
        <Text style={styles.text2}>
          Please fill in the verification code that has been sent to your mobile
          number.
        </Text>
      </View>
      <View style={styles.textinputView}>
        <TextInput
          name="text"
          style={styles.textInput}
          onChangeText={handleText}
          keyboardType='numeric'
        />
      </View>
      <View style={styles.textInputBorder}>
        <View style={styles.textInputBorderin1}></View>
        <View style={styles.textInputBorderin2}></View>
        <View style={styles.textInputBorderin3}></View>
        <View style={styles.textInputBorderin4}></View>
      </View>

        <View style={styles.textView2}>
          <Text style={styles.text3}>Didn’t recieve a code?</Text>
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
          <ButtonComponent text="Verify" onPress={() => handleProcess()} />
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
    height: 35,
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
    height: 35,
    width: '80%',
    color: '#042C5C',
    fontSize: 20,
    letterSpacing: 45,
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    marginLeft: 10,
  },
  textInputBorder: {
    flexDirection: 'row',
    marginLeft: 70,
  },
  textInputBorderin1: {
    height: 0.5,
    width: 35,
    opacity: 0.6,
    backgroundColor: '#7A7A7A',
    marginRight: 17,
  },
  textInputBorderin2: {
    height: 0.5,
    width: 35,
    opacity: 0.6,
    backgroundColor: '#7A7A7A',
    marginRight: 25,
  },
  textInputBorderin3: {
    height: 0.5,
    width: 35,
    opacity: 0.6,
    backgroundColor: '#7A7A7A',
    marginRight: 10,
  },
  textInputBorderin4: {
    height: 0.5,
    width: 35,
    opacity: 0.6,
    backgroundColor: '#7A7A7A',
    marginLeft: 10,
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
