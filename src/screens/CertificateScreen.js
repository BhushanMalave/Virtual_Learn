import React, {useEffect, useState} from 'react';

import RNFetchBlob from 'rn-fetch-blob';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {CertificateDownload} from '../authorization/Auth';

import {useSelector} from 'react-redux';

export const CertificateScreen = ({route, navigation}) => {
  const token = useSelector(state => state.userDetails.token);
  let [url, setUrl] = useState('');
  const [portrait, setPortrait] = useState(true);
  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      setPortrait(isPortrait());
    });
  }, []);

  const checkPremission = async () => {
    if (Platform.OS === 'ios') {
      downloadImage();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permissions Requires',
            Message: 'App needs access to your storage to download Photos',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Storage Permissions Granted');
          downloadImage();
        } else {
          alert('storage Permission Not Granted');
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const downloadImage = () => {
    const {config, fs} = RNFetchBlob;
    const isIOS = Platform.OS === 'ios';
    let date = new Date();
    let PictureDir =
      Platform.OS === 'ios' ? fs.dirs.DocumentDir : fs.dirs.DownloadDir;
    var ext = 'png';
    var file_ex = `certificate_${Math.floor(
      date.getTime() + date.getSeconds() / 2,
    )}.png`;
    const fPath = `${PictureDir}/${file_ex}`;

    const configOptons = Platform.select({
      ios: {
        fileCache: true,
        path: fPath,
        appendEXt: ext,
      },

      android: {
        fileCache: false,
        appendEXt: ext,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path:
            PictureDir +
            '/me_' +
            Math.floor(date.getTime() + date.getSeconds() / 2) +
            file_ex,
          description: 'Downloading File.',
        },
      },
    });

    if (isIOS) {
      RNFetchBlob.config(configOptons)
        .fetch('GET', url)
        .then(res => {
          console.log('file ', res);
          RNFetchBlob.ios.previewDocument('file://' + res.path());
        });
      return;
    } else {
      config(configOptons)
        .fetch('GET', url)
        .progress((received, total) => {
        })
        .then(res => {
          RNFetchBlob.android.actionViewIntent(res.path());
        })
        .catch(errorMessage => {
          console.log('error with downloading file  ', errorMessage);
        });
    }
  };
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
            <TouchableOpacity
              onPress={async () => {
                const response = await CertificateDownload(
                  token,
                  route.params.data?.courseId,
                );
                console.log(response);
                url = response.certificate;
                checkPremission();
              }}>
              <Icon name="download" size={24} color="white" />
            </TouchableOpacity>
          </View>
          {portrait ? (
            <>
              <View style={styles.certificateView}>
                <Image
                  source={{uri: route.params.data?.certificateUrl}}
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
