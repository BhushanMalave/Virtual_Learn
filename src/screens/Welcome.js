import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {ButtonComponent, ButtonComponent2} from '../components/Buttons';
export const WelcomeScreen = ({navigation}) => {
  const nav = () => {
    navigation.navigate('TermServicesScreen');
  };
  const register = () => {
    navigation.navigate('RegisterStack');
  };
  const login = () => {
    navigation.navigate('LoginStack');
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

      <View>
        <Image
          source={require('../assets/images/virtualLearnIcon.png')}
          style={styles.Icon}></Image>
      </View>
      <View style={styles.imageView}>
        <Image
          source={require('../assets/images/welcomeIcon.png')}
          style={styles.image}
          resizeMode="contain"></Image>
      </View>
      <View style={styles.welcomeview}>
        <Text style={styles.text1}>Welcome,</Text>
        <Text style={styles.text2}>
          Are you ready to study easily in a virtual way?
        </Text>
      </View>

      <ButtonComponent text="Login" onPress={() => login()} />

      <Text style={styles.bottomtext}>Or</Text>

      <ButtonComponent2 text="Register" onPress={() => register()} />

      <View>
        <Text style={styles.bottomview}>
          By creating new account, you agree to our
        </Text>
        <View style={styles.bottomline}>
          <TouchableOpacity onPress={() => nav()}>
            <Text style={styles.bottomlinetext}>Terms of Services</Text>
          </TouchableOpacity>

          <Text
            style={styles.lastline}>
            {' '}
            &{' '}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('PrivacyPolicyScreen');
            }}>
            <Text style={styles.bottomlinetext}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
  },

  Icon: {
    height: 37,
    width: 182,
    marginTop: Platform.OS == 'ios' ? 30 : 0,
  },
  image: {
    height: 281.19,
    width: '100%',
    marginTop: 75,
    alignSelf: 'center',
  },
  imageView: {
    marginTop: Platform.OS == 'ios' ? 0 : 0,
  },
  welcomeview: {
    marginTop: Platform.OS == 'ios' ? 0 : 8,
    marginBottom:Platform.OS == 'ios' ? 0 : 33,
  },
  text1: {
    height: 35,
    color: '#2B2B2B',
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
    fontSize: 26,
    letterSpacing: 0,
    lineHeight: 35,
    marginTop: Platform.OS == 'ios' ? 30 : 8,
  },
  text2: {
    height: 20,
    color: '#7A7A7A',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 20,
    marginBottom: Platform.OS == 'ios' ? 55 : 10,
  },
  bottomview: {
    marginTop: 10,
    textAlign: 'center',
    color: 'black',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 14,
    letterSpacing: 0,
  },
  bottomtext: {
    alignSelf: 'center',
    height: 20,
    color: '#373737',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 20,
    margin: 18,
  },
  bottomline: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  lastline:{
    color: 'black',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 14,
  },
  bottomlinetext: {
    height: 78,
    color: '#2BB5F4',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 20,
    textAlign: 'center',
  },
});
