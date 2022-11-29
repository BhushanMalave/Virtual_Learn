import React, {useState,useEffect} from 'react';

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
import { useSelector ,useDispatch} from 'react-redux';
import { setToken } from '../redux/ReduxPersist/UserDetails';
import { drawerData } from '../authorization/Auth';

export const CustomDrawerComponent = props => {

  const userData = useSelector(state => state.userData.data);
  const token = useSelector(state => state.userDetails.token);
  const [data,setData] =useState(null);
  const dispatch = useDispatch();
  const log = () => {
    Alert.alert('', 'Are you sure want to Logout?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {text: 'Logout', onPress: () => {
               // dispatch(setNewUser(true));
                dispatch(setToken(null));
      }},
    ]);
  };

  const Call = async(token)=> {
      const res = await drawerData(token);
      setData(res);
  }  

  useEffect(() => {
    Call(token);
  }, [ ]);

  return (
    <View style={{flex: 1,marginTop:Platform.OS === 'ios'? -52:-4,}}>
      <DrawerContentScrollView {...props}>
        <ImageBackground
          source={{uri: data?.profilePhoto}}
          style={styles.backgroundimg}>
          <View style={styles.backgroundImgBlur}>
            <View style={styles.topinfo}>
              <Image
              source={{uri: data?.profilePhoto}}
                style={styles.imgprofile}
              />
              <View style={styles.topinfotext}>
                <Text style={styles.textname}>{data?.fullName}</Text>
                <Text style={styles.textdesc}>{data?.occupation}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
        <DrawerItemList {...props} />
        <View style={styles.notify}>
          <Text style={styles.notifyText}>{data?.notificationCount}</Text>
        </View>
        <Pressable onPress={log}>
          <View style={styles.ViewText}>
            <Image
              source={require('../assets/images/icn_logout_menu.png')}
              style={{height: 16, width: 15, marginBottom: 0,tintColor:'black'}}
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
    height: 188,
    marginBottom:30,
  },
  backgroundImgBlur: {
    backgroundColor: '#042C5C',
    opacity: 0.9,
    height: 188,
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
    marginTop: 93,
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
    fontFamily:Platform.OS === 'ios'? 'Proxima Nova': 'ProximaNova',
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 10,
  },
  textlog: {
    color: '#373737',
    fontFamily:Platform.OS === 'ios'? 'Proxima Nova': 'ProximaNova',
    fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal',
    fontSize: 16,
    marginLeft: 21,
    marginTop: Platform.OS === 'ios' ? 1 : -3,
  },
  notifyText:{
    color: '#FFFFFF',
    fontFamily:Platform.OS === 'ios'? 'Proxima Nova': 'ProximaNova',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign:'center',
     marginTop:Platform.OS === 'ios' ? 4:1,
  },
  notify:{
    height:19,
    width:28,
    borderRadius:15,
    backgroundColor:'#E83F3F',
    marginLeft:165,
    marginTop:Platform.OS === 'ios' ? -95: -90,
  },
  imgprofile:{
    height:58,
    width:58,
    marginTop:5,
    borderRadius:6,
  }
});
