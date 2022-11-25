import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Image,
  Platform,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';


export const LessonVideoPlayer = ({navigation, route}) => {
  //   console.log('==-=-=-=-', route.params);
  const url = route.params.item.previewVideo;
  const title = route.params.item.courseName;
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({currentTime: 0, endingTime: 1});



  const timeformat = timesec => {
    const digit = n => (n < 10 ? `0${n}` : `${n}`);

    const sec = digit(Math.floor(timesec % 60));
    const min = digit(Math.floor((timesec / 60) % 60));
    const hr = digit(Math.floor((timesec / 3000) % 60));
    return `${min}:${sec}`;
  };
  const videoRef = useRef();
  const handleslide = value => {
    videoRef.current.seek(value * time.endingTime);
  };
  return (
    <View style={{flex: 1, backgroundColor: '#373737'}}>
      <Pressable
        onPress={() => {
            console.log("====",time.currentTime);
          navigation.goBack();
        
        }}>
        <Image
          source={require('../assets/images/icn_back_header.png')}
          style={styles.imgback}
        />
      </Pressable>
      <Video
        ref={videoRef}
        source={{
          uri: url,
        }}
        paused={isPlaying}
        fullscreen={true}
        onEnd={() => {
          navigation.goBack();
        }}
        onProgress={data => {
          setTime({...time, currentTime: data.currentTime});
        }}
        onLoad={data => {
          setTime({...time, endingTime: data.duration});
        }}
        style={styles.backgroundVideo}>
        </Video>
      <View style={styles.control}>
        <View style={styles.view1}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text1}>{timeformat(time.currentTime)}</Text>
            <Text style={styles.text2}>{title}</Text>
          </View>
          <Image source={require('../assets/images/icn_maximise.png')} />
        </View>
        <View style={styles.view2}>
          {isPlaying ? (
            <Pressable onPress={() => setIsPlaying(!isPlaying)}>
              <Image
                source={require('../assets/images/icn_playvideo-Play.png')}
                style={{height: 16, width: 14}}
              />
            </Pressable>
          ) : (
            <Pressable onPress={() => setIsPlaying(!isPlaying)}>
              <Image
                source={require('../assets/images/icn_pausevideo.png')}
                style={{height: 16, width: 14, transform:[{rotate:'90 deg'}]}}
              />
            </Pressable>
          )}
          <Slider
            style={{width: '90%', height: 5, marginTop: -10, marginLeft: 10}}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#2BB5F4"
            maximumTrackTintColor="#3A4452"
            thumbTintColor="transparent"
            value={time.currentTime / time.endingTime}
            onValueChange={v => handleslide(v)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,
  },
  imgback: {
    height: 14,
    width: 22,
    marginTop: 50,
    tintColor: 'white',
    marginLeft: 24,
  },
  control: {
    backgroundColor: '#2B2B2B',
    height: Platform.OS === 'ios' ? 120 : 90,
  },
  view1: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  view2: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginTop: 20,
  },
  text1: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
  },
  text2: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    marginLeft: 20,
  },
});
