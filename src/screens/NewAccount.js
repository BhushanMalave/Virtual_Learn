import React, {useState} from 'react';

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
import {ButtonComponent} from '../components/Buttons';
import axios from 'axios';

export const NewAccount = ({navigation}) => {
  const [text, setText] = useState('');
  const handleText = string => {
    setText(string);
    console.log(text);
  };
  const handleProcess = async () => {
    const obj ={
        mobileNumber : "+917795287943"
    }
    try {
      const response = await axios.put(
        'https://virtual-learn-app-java.herokuapp.com/User/Continue',
         obj,
      );
      console.log("=====",response.data);
      navigation.navigate('VerifyAccount');
    } catch (error) {
      console.log('errrr occured');
    }

    
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.textView}>
        <Text style={styles.text1}>New Account</Text>
        <Text style={styles.text2}>
          Create a new account to get access to all courses by entering your
          mobile number.
        </Text>
      </View>
      <View style={styles.textinputView}>
        <Text style={styles.textno}>+91</Text>
        <TextInput
          name="text"
          placeholder="Enter your mobile number"
          placeholderTextColor={'grey'}
          style={styles.textInput}
          onChangeText={handleText}
        />
      </View>
      <View style={styles.button}>
        <ButtonComponent text="Continue" onPress={() => handleProcess()} />
      </View>
      <View style={styles.textView2}>
        <Text style={styles.text3}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginStack')}>
          <Text style={styles.text4}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomView}>
        <Image
          source={require('../assets/images/btn_SM_facebook.png')}
          style={styles.images}
        />
        <Image source={require('../assets/images/btn_SM_google.png')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginHorizontal: 24,
  },
  textView: {
    marginTop: 50,
  },
  textinputView: {
    height: 40,
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    borderBottomColor: '#7A7A7A',
    marginTop: 60,
    fontSize: 16,
  },
  textView2: {
    flexDirection: 'row',
    marginHorizontal: 50,
    marginTop: 30,
  },
  button: {
    marginTop: 60,
  },
  bottomView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS == 'ios' ? 300 : 270,
  },
  textInput: {
    height: 40,
    marginLeft: 15,
    width: '80%',
    color: '#7A7A7A',
    fontSize: 16,
    letterSpacing: 0.4,
  },
  textno: {
    height: 20,
    fontSize: 16,
    fontFamily: 'ProximaNova-Regular',
    textAlign: 'center',
    marginTop: 10,
  },
  text1: {
    height: 35,
    color: '#2B2B2B',
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'Biko',
  },
  text2: {
    height: 40,
    color: '#7A7A7A',
    fontSize: 16,
    fontFamily: 'ProximaNova-Regular',
    marginTop: 10,
  },
  text3: {
    height: 40,
    color: '#7A7A7A',
    fontSize: 16,
    fontFamily: 'ProximaNova-Regular',
    textAlign: 'center',
  },
  text4: {
    marginLeft: 10,
    height: 40,
    color: '#EE5C4D',
    fontSize: 17,
    fontFamily: 'ProximaNova-semibold',
   
    marginTop: Platform.OS == 'ios' ? 2 : -3,
  },
  images: {
    height: 43,
    width: 165,
  },
});
