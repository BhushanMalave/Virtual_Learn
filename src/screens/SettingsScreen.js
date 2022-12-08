import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Platform,
} from 'react-native';
import { useDispatch } from 'react-redux';

import icn_back_header from '../assets/images/icn_back_header.png';
import icn_notifiction_settings_Settings from '../assets/images/icn_notification_settings_Settings.png';
import Locked from '../assets/images/Locked.png';
import icn_TS_File from '../assets/images/icn_TS_File.png';
import ToggleSwitch from 'toggle-switch-react-native';
import { setToken } from '../redux/ReduxPersist/UserDetails';
import { getVerifiedKeys } from '../authorization/RefreshToken';

export function SettingsScreen({navigation}) {
  const [state, setState] = useState(false);
  const [state1, setState1] = useState(false);
  const dispatch=useDispatch();
  const [view, setView] = useState(false);
  const refreshToken = async token => {
    const key = await getVerifiedKeys(token);
    dispatch(setToken(key));
  };

  useEffect(() => {
  //  refreshToken(token);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.backIconHeader}>
          <Pressable onPress={() => navigation.openDrawer()}>
          <Image source={icn_back_header} style={styles.backIcon} />
          </Pressable>
        </View>
        <Text style={styles.settingText}>Settings</Text>

        <View style={styles.textView}>
          <TouchableOpacity style={styles.view} onPress={() => setView(!view)}>
            <Image
              source={icn_notifiction_settings_Settings}
              style={styles.notificationSettingIcon}
            />
            <Text style={styles.text}>Notification Settings</Text>
          </TouchableOpacity>
        </View>

        {view ? (
          <View style={styles.notificationContainer}>
            <View style={styles.notificationView}>
              <Text style={{color:"#373737"}}>Push Notification</Text>
              <ToggleSwitch
                isOn={state}
                onColor="green"
                offColor="#E5E5E5"
                size="small"
                onToggle={() => setState(!state)}
              />
            </View>

            <View style={styles.notificationView}>
              <Text style={{color:"#373737"}}>Notification Sound</Text>
              <ToggleSwitch
                isOn={state1}
                onColor="green"
                offColor="#E5E5E5"
                size="small"
                onToggle={() => setState1(!state1)}
              />
            </View>
          </View>
        ) : (
          <></>
        )}

        <View style={styles.textView}>
          <TouchableOpacity style={styles.view} onPress={()=> navigation.navigate('PrivacyPolicy')}>
            <Image source={Locked} style={styles.privacyIcon} />
            <Text style={styles.text}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.textView}  >
          <TouchableOpacity style={styles.view} onPress={()=>navigation.navigate('TermsServices')}>
            <Image source={icn_TS_File} style={styles.serviceIcon} />
            <Text style={styles.text}>Terms of Services</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 24,
  },
  backIconHeader: {
    marginTop: Platform.OS == 'ios'? 30:40,
  },
  backIcon: {
    height: 14,
    width: 22,
    marginLeft: 4,
    tintColor:"black"
  },
  settingText: {
    marginTop: 20,
    height: 35,
    width: 98,
    color: '#2B2B2B',
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
    fontSize: 26,
    lineHeight: 35,
    marginBottom: 23,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationSettingIcon: {
    height: 15.97,
    width: 15.97,
    tintColor:"black"
  },
  notificationContainer: {
    marginRight: 24,
    marginLeft: 45,
  },
  notificationView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  privacyIcon: {
    height: 16,
    width: 14.67,
    tintColor:"black"
  },
  serviceIcon: {
    height: 16,
    width: 13.33,
    tintColor:"black"
  },
  text: {
    marginLeft: 16.03,
    height: 20,
    color: '#373737',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
  
  },

  textView: {
    flexDirection: 'row',
    marginTop: 17,
    marginBottom:Platform.OS == 'ios' ? 17: 20,
  },
});
