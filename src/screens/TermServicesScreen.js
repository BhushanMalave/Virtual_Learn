import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {termsAndConditions} from '../authorization/Auth';
export const TermServicesScreen = ({navigation}) => {
  const [data, setData] = useState('');

  const call = async () => {
    const res = await termsAndConditions();
    console.log(res);
    setData(res);
  };
  useEffect(() => {
    call();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={require('../assets/images/icn_back_header.png')}
          style={styles.backbutton}
        />
      </TouchableOpacity>
      <Text style={styles.text}>Terms of Services</Text>
      <View style={styles.description}>
        <Text style={styles.text1}>{data}</Text>
        {/* <Text style={styles.text1}>These Terms of Services ("Terms") were last updated on September 16,
        2020.</Text>
      <Text style={styles.text1}>
        VirtualLearn's mission is to improve lives through learning. We
        enable anyone anywhere to create and share educational courses
        (instructors) and to enroll in these educational courses to learn
        (students). We consider our marketplace model the best way to offer
        valuable educational content to our users. We need rules to keep our
        platform and services safe for you, us and our student and instructor
        community. These Terms apply to all your activities on the VirtualLearn
        mobile application and our APIs and other related services (“Services”).
       
      </Text>
      <Text style={styles.text1}> If you publish a course on the VirtualLearn platform, you must also
        agree to the Instructor Terms. We also provide details regarding our
        processing of personal data of our students and instructors in our
        Privacy Policy. If you are using VirtualLearn as part of your employer's
        VirtualLearn For Business learning and development program, you can
        consult our VirtualLearn for Business Privacy Statement.</Text> */}
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
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
    fontSize: 26,
    letterSpacing: 0,
    lineHeight: 35,
    marginTop: 15,
  },
  description: {
    marginTop: 15,
  },
  text1: {
    color: '#7A7A7A',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 20,
    marginBottom: 17,
  },
});
