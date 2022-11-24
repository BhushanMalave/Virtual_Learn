import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {hsTopHeaders} from '../redux/ThunkToolkit/HomeScreenApiCalls/homeScreenTopHeaders';
import {hsCategories} from '../redux/ThunkToolkit/HomeScreenApiCalls/homeScreenCategories';
import { hsTopCourses } from '../redux/ThunkToolkit/HomeScreenApiCalls/homeScreenTopCourses';
import { all } from '../authorization/Auth';
import { newest } from '../authorization/Auth';
import { popular } from '../authorization/Auth';
import { setAllData } from '../redux/ReduxPersist/ChoiceYourCourseSlice';



export const OnBoardingScreen1 = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.userDetails.token);
  const userData = useSelector(state => state.userData.data);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require('../assets/images/virtualLearnIcon.png')}
          style={styles.Icon}></Image>
      </View>
      <View style={styles.imageView}>
        <Image
          source={require('../assets/images/onBoardingIcon1.png')}
          style={styles.image}
          resizeMode="contain"></Image>
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>Learner</Text>
        <Text style={styles.text}>Engagement</Text>
      </View>
      <View style={styles.descriptionview}>
        <Text style={styles.description}>
          Interactive features mirror the traditional classroom experience and
          learners receive feedback to increase long-term retention, stripling
          learning efficacy over standard video.
        </Text>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity>
          <View>
            <TouchableOpacity
              onPress={() => {
                 //  navigation.navigate('Welcome');
                navigation.navigate('Drawer'); 
              }}>
              <Text style={styles.skiptext}>SKIP</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <View style={styles.bottomLineView}>
          <View style={styles.bottomoLine} />
          <TouchableOpacity
            onPress={() => navigation.navigate('OnBoardingScreen2')}>
            <View style={styles.borderpoint1} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('OnBoardingScreen3')}>
            <View style={styles.borderpoint1} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('OnBoardingScreen2')}>
          <Image source={require('../assets/images/btn_next.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    // borderWidth:1,
    // marginBottom:60
  },

  Icon: {
    height: 37,
    width: 182,
    marginTop: 25,
    marginLeft: 30,
  },
  image: {
    height: 281.19,
    width: '94%',
    marginTop: 75,
    alignSelf: 'center',
  },
  imageView: {
    // marginHorizontal:10
  },
  textView: {
    height: Platform.OS === 'ios' ? 70 : 40,
    width: '100%',
    flex: 1,

    marginTop: 85,
  },
  text: {
    color: '#2B2B2B',
    fontSize: 26,
    letterSpacing: 0,
    lineHeight: 35,
    fontFamily: 'Biko',
    paddingBottom: 4,
  },
  descriptionview: {
    // borderWidth:1,
    width: '100%',
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
    fontFamily: 'Proxima Nova',
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 35,
    // marginTop:30
  },
  bottomView: {
    flexDirection: 'row',
    marginTop: 30,
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
