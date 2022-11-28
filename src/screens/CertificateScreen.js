import {useIsFocused} from '@react-navigation/native';
import {original} from '@reduxjs/toolkit';
import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {Dimensions} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {render} from 'react-dom';

export const CertificateScreen = ({route, navigation}) => {
  const [portrait, setPortrait] = useState(true);

  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      setPortrait(isPortrait());
    });
  },[]);
  console.log(route.params);
  return (
    <View style={{backgroundColor: '#2B2B2B', flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: 24,
            }}>
            <TouchableOpacity
              style={{width: 18}}
              onPress={() => {
                navigation.navigate('Chapters');
              }}>
              <Image
                source={require('../assets/images/icn_close_white.png')}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="download" size={24} color="white" />
            </TouchableOpacity>
          </View>
          {portrait ? (
            <>
              <View style={styles.certificateView}>
                <Image
                  source={{uri: route.params.data.certificateUrl}}
                  style={styles.certificate}
                />
              </View>
            </>
          ) : (
            <>
              <View style={styles.certificateView1}>
                <Image
                  source={{uri: route.params.data.certificateUrl}}
                  style={styles.certificate}
                />
              </View>
            </>
          )}
        </ScrollView>
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
    marginTop: 150,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  certificateView1: {
    // marginTop:150,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  certificate: {
    height: 265,
    width: 375,
    marginTop: 16,
  },
});
