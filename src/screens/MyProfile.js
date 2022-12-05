import React, {useEffect, useState, useCallback, useLayoutEffect} from 'react';

import {
  ImageBackground,
  Text,
  View,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {mpUserDetails} from '../redux/ThunkToolkit/MyProfileApiCall/myProfileUserDetails';
import { setToken } from '../redux/ReduxPersist/UserDetails';
import { getVerifiedKeys } from '../authorization/RefreshToken';
import { useIsFocused } from '@react-navigation/native';
import Iconss from 'react-native-vector-icons/MaterialIcons'

export const MyProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.userDetails.token);
  const userData = useSelector(state => state.userData.data);
  console.log(userData?.profilePhoto);
  const [refreshing, setRefreshing] = useState(false);

  const refreshToken = async () => {
    const key = await getVerifiedKeys(token);
    dispatch(setToken(key));
  };

  const continueCall = () => {
    dispatch(mpUserDetails(token));
  };
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    continueCall();
    setRefreshing(false);
  }, [refreshing]);

  const focus = useIsFocused();
  useLayoutEffect(() => {
    dispatch(mpUserDetails(token));
  }, [focus]);
  // useEffect(() => {
  //   dispatch(mpUserDetails(token));
  //    //refreshToken();
  // },[]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View>
        <ImageBackground
          source={{uri: userData?.profilePhoto}}
          style={styles.backgroundimg}>
          <View style={styles.imageBlur}>
            <TouchableOpacity
              onPress={() => {
                navigation.openDrawer();
              }}>
              <Image
                source={require('../assets/images/icn_hamburgermenu_white.png')}
                style={styles.imgbar}
              />
            </TouchableOpacity>
            <View style={styles.topbar}>
              <Text style={styles.text}>Profile</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('EditProfile');
                }}>
                <Iconss name="edit" size={20} color="white" />
              </TouchableOpacity>
            </View>
            <View style={styles.topinfo}>
              <Image
                source={{uri: userData?.profilePhoto}}
                style={styles.imgProfile}
              />
              <View style={styles.topinfotext}>
                <Text style={styles.textname}>{userData?.fullName}</Text>
                <Text style={styles.textdesc}>{userData?.occupation}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
        <Text style={styles.textcom}> Has Completed</Text>
        <View style={styles.viewcourseinfo}>
          <View style={styles.viewcourseinfoin}>
            <Text style={styles.textno}>{userData?.courseCompleted}</Text>
            <Text style={styles.textcourse}>Courses</Text>
          </View>
          <View style={styles.viewcourseinfoin}>
            <Text style={styles.textno}>{userData?.chaptersCompleted}</Text>
            <Text style={styles.textcourse}>Chapters</Text>
          </View>
          <View style={styles.viewcourseinfoin}>
            <Text style={styles.textno}>{userData?.testsCompleted}</Text>
            <Text style={styles.textcourse}>Test</Text>
          </View>
        </View>
        <Text style={styles.textdetails}>Personal Details</Text>
        <View style={styles.viewinfo}>
          <Text style={styles.texttag}>Name</Text>
          <Text style={styles.texttitle}>{userData?.fullName}</Text>
        </View>
        <View style={styles.viewinfo}>
          <Text style={styles.texttag}>Username</Text>
          <Text style={styles.texttitle}>{userData?.userName}</Text>
        </View>
        <View style={styles.viewinfo}>
          <Text style={styles.texttag}>Email</Text>
          <Text style={styles.texttitle}>{userData?.email}</Text>
        </View>
        <View style={styles.viewinfo}>
          <Text style={styles.texttag}>Mobile Number</Text>
          <Text style={styles.texttitle}>{userData?.mobileNumber}</Text>
        </View>
        <View style={styles.viewinfo}>
          <Text style={styles.texttag}>Occupation</Text>
          <Text style={styles.texttitle}>{userData?.occupation}</Text>
        </View>
        <View style={styles.viewinfo}>
          <Text style={styles.texttag}>Date of Birth</Text>
          <Text style={styles.texttitle}>{userData?.dateOfBirth}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ChangeYourPassword');
          }}>
          <View style={styles.viewpass}>
            <Image
              source={require('../assets/images/icn_privacy_img.png')}
              style={styles.imgpcy}
            />
            <View style={styles.viewpasstext}>
              <Text style={styles.textpvy}>Privacy</Text>
              <Text style={styles.textpvy1}>Change your password </Text>
            </View>
            <Image
              source={require('../assets/images/icn_privacy.png')}
              style={styles.imgpy}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundimg: {
    height: Platform.OS === 'ios' ? 260 : 260,
  },
  imageBlur: {
    backgroundColor: '#042C5C',
    opacity: 0.9,
    height: Platform.OS === 'ios' ? 260 : 260,
  },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  topinfo: {
    flexDirection: 'row',
    marginHorizontal: 25,
    marginTop: 30,
  },
  topinfotext: {
    marginLeft: 30,
  },
  viewcourseinfo: {
    height: 85,
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  viewcourseinfoin: {
    height: 85,
    width: 95,
    backgroundColor: '#FEFEFF',
    shadowOpacity: 0.1,
    borderRadius: 6,
  },
  viewinfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginTop: 25,
  },
  viewpass: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginVertical: 30,
    backgroundColor: '#FEFEFF',
    shadowOpacity: 0.1,
    borderRadius: 6,
  },
  viewpasstext: {
    marginTop: 10,
    marginRight: 80,
  },
  imgbar: {
    marginTop: 80,
    marginLeft: 20,
  },
  imgedit: {
    borderWidth: 1,
    height: 18,
    width: 18,
    backgroundColor: 'white',
  },
  text: {
    fontWeight: Platform.OS == 'ios' ? 'bold' : 'normal',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
    fontSize: 26,
    color: '#FFFFFF',
  },
  textname: {
    color: '#FFFFFF',
    fontWeight: Platform.OS == 'ios' ? 'bold' : 'normal',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
    fontSize: 20,
    marginTop: 10,
  },
  textdesc: {
    color: '#FFFFFF',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? 'bold' : 'normal',
    fontSize: 14,
    marginTop: 10,
  },
  textcom: {
    color: '#7A7A7A',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontWeight: '300',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  textno: {
    color: '#2BB5F4',
    fontWeight: Platform.OS == 'ios' ? 'bold' : 'normal',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
    fontSize: 32,
    marginTop: 20,
    textAlign: 'center',
  },
  textcourse: {
    color: '#373737',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 14,
    marginTop: 3,
    textAlign: 'center',
  },
  textdetails: {
    color: '#2B2B2B',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? 'bold' : 'normal',
    fontSize: 18,
    marginTop: 30,
    marginLeft: 24,
  },
  texttag: {
    color: '#7A7A7A',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 14,
  },
  texttitle: {
    color: '#373737',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? 'bold' : 'normal',
    fontSize: 16,
    textAlign: 'right',
  },
  textpvy: {
    color: '#042C5C',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? 'bold' : 'normal',
    fontSize: 16,
  },
  textpvy1: {
    color: '#7A7A7A',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    letterSpacing: 0.3,
    fontSize: 13,
    marginTop: 5,
  },

  imgpcy: {
    height: 40,
    width: 40,
    marginTop: 10,
    marginLeft: 10,
  },
  imgpy: {
    height: 13,
    width: 15,
    marginTop: 30,
    marginRight: 15,
  },
  imgProfile: {
    height: 58,
    width: 58,
    borderRadius: 6,
  },
});
