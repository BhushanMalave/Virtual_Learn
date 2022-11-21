import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
export const CertificateScreen = () => {
  return (
    <View style={{backgroundColor: '#2B2B2B', flex: 1}}>
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: 24,
          }}>
          <TouchableOpacity style={{width: 18}}>
            <Image
              source={require('../assets/images/icn_close_white.png')}
              style={styles.closeIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name='download' size={24} color='white'/>
          </TouchableOpacity>
        </View>

        <View style={styles.certificateView}>
                  <Image
                    source={require('../assets/images/img_designcoursedetail1_bg.png')}
                    style={styles.certificate}
                  />
                </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    height: 14.5,
    width: 14.5,
    tintColor: '#FFFFFF',
  },
  certificateView: {
    marginTop:150,
    alignItems: 'center',
    flex:1,
  },
  certificate: {
    height: 265,
    width: 375,
    marginTop: 16,
  },
});
