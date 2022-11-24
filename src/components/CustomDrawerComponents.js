import React, {useState} from 'react';

import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Alert,
  Platform,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useRoute} from '@react-navigation/native';
import { useSelector } from 'react-redux';

export const CustomDrawerComponent = props => {

  const userData = useSelector(state => state.userData.data);
  const log = () => {
    Alert.alert('', 'Are you sure want to Logout?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {text: 'Logout', onPress: () => {}},
    ]);
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <ImageBackground
          source={{uri: userData?.profilePhoto}}
          style={styles.backgroundimg}>
          <View style={styles.backgroundImgBlur}>
            <View style={styles.topinfo}>
              <Image
              source={{uri: userData?.profilePhoto}}
                style={styles.imgprofile}
              />
              <View style={styles.topinfotext}>
                <Text style={styles.textname}>{userData?.fullName}</Text>
                <Text style={styles.textdesc}>{user?.occupation}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
        <DrawerItemList {...props} />
        <Pressable onPress={log}>
          <View style={styles.ViewText}>
            <Image
              source={require('../assets/images/icn_logout_menu.png')}
              style={{height: 16, width: 15, marginBottom: 0}}
            />
            <Text style={styles.textlog}>Logout</Text>
          </View>
        </Pressable>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundimg: {
    height: 178,
  },
  backgroundImgBlur: {
    backgroundColor: '#042C5C',
    opacity: 0.9,
    height: 178,
  },
  topinfo: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 80,
  },
  topinfotext: {
    marginLeft: 15,
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
  ViewText: {
    // marginBottom: 330,
    marginLeft: 20,
    flexDirection: 'row',
    marginTop: 15,
  },
  textname: {
    color: '#FFFFFF',
    fontFamily: 'Biko',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'left',
  },
  textdesc: {
    color: '#FFFFFF',
    fontFamily: 'Proxima Nova',
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 10,
  },
  textlog: {
    color: '#373737',
    fontFamily: 'Proxima Nova',
    fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal',
    fontSize: 16,
    marginLeft: 21,
    marginTop: Platform.OS === 'ios' ? 1 : -3,
  },
  imgprofile:{
    height:58,
    width:58,
    marginTop:5,
    borderRadius:6,
  }
});
