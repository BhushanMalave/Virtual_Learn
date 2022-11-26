import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';

export const OnBoardingScreen2 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require('../assets/images/virtualLearnIcon.png')}
          style={styles.Icon}></Image>
      </View>
      <View style={styles.imageView}>
        <Image
          source={require('../assets/images/onBoardingIcon2.png')}
          style={styles.image}
          resizeMode="contain"></Image>
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>Accountable</Text>
        <Text style={styles.text}>Tracking</Text>
      </View>
      <View style={styles.descriptionview}>
        <Text style={styles.description}>
          Receive immediate, accessible data (both performance and
          behavior-based) to effectively remediate concepts, automatically
          assign grades, and address deficiencies.
        </Text>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity onPress={() => navigation.navigate('WelcomeStack')}>
          <Text style={styles.skiptext}>SKIP</Text>
        </TouchableOpacity>
        <View style={styles.bottomLineView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('OnBoardingScreen1')}>
            <View style={styles.borderpoint1} />
          </TouchableOpacity>

          <View style={styles.bottomoLine} />
          <TouchableOpacity
            onPress={() => navigation.navigate('OnBoardingScreen3')}>
            <View style={styles.borderpoint1} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('OnBoardingScreen3')}>
          <Image source={require('../assets/images/btn_next.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,

    // marginBottom:60
  },

  Icon: {
    height: 37,
    width: 182,
    marginTop: 25,
    marginLeft: 10,
  },
  image: {
    height: 281.19,
    width: '100%',
    marginTop: 75,
    alignSelf: 'center',
  },
  imageView: {
    // marginHorizontal:10
  },
  textView: {
    height: 70,
    width: '100%',

    marginTop: 85,
  },
  text: {
    color: '#2B2B2B',
    fontSize: 26,
    letterSpacing: 0,
    lineHeight: 35,
    fontFamily: 'Biko',
    fontWeight: 'bold',
    paddingBottom: 4,
  },
  descriptionview: {
    // borderWidth:1,
    width: '87%',
    marginTop: 25,
  },
  description: {
    height: 85,
    width: '100%',
    color: '#7A7A7A',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 20,
  },
  skiptext: {
    height: 35,
    color: '#373737',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 35,
    // marginTop:30
  },
  bottomView: {
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? 40 : 10,
    justifyContent: 'space-between',
  },
  bottomLineView: {
    height: 6,
    width: 58,
    // borderWidth:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  bottomoLine: {
    height: 6,
    backgroundColor: '#EE5C4D',
    borderRadius: 5.99,
    width: 32,
  },
  borderpoint1: {
    height: 6,
    width: 6,
    backgroundColor: '#D8D8D8',
    borderRadius: 50,
  },
});
