import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  StyleSheet,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

export const PasswordChange = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={require('../assets/images/passwordchange.png')}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.text}>Password Changed</Text>
        <Text style={styles.description}>
          Your password has been successfully changed. You can now Login with
          your new password
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 29,
  },
  image: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: '50%',
    
  },
  text: {
    height: 35,
    color: '#2B2B2B',
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
    fontSize: 32,
    letterSpacing: 0,
    lineHeight: 35,
    textAlign: 'center',
    marginTop: 35,
  },
  description: {
    height: 60,
    maxWidth: '95%',
    color: '#7A7A7A',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    height: 20,
    color: '#EE5C4D',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontSize: 16,
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    letterSpacing: 0.4,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: Platform.OS == 'ios' ? "40%" : "25%",
  },
});
