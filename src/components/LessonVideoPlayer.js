import React, {useState, useRef, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import {PauseTime} from '../authorization/Auth';
import {useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

export const LessonVideoPlayer = ({route, navigation}) => {
  const token = useSelector(state => state.userDetails.token);
  const data = useSelector(state => state.chapterResponse.data);
  const dispatch = useDispatch();
  const url = route.params.item.videoLink;
  const title = route.params.item.lessonName;
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({currentTime: 0, endingTime: 1});
  const [fullScreen, setFullScreen] = useState(false);

  const FullScreen = () => {
    setFullScreen(!fullScreen);
    if (fullScreen) {
      Orientation.lockToPortrait();
    } else {
      Orientation.lockToLandscape();
    }
  };

  const timeformat = timesec => {
    const digit = n => (n < 10 ? `0${n}` : `${n}`);

    const sec = digit(Math.floor(timesec % 60));
    const min = digit(Math.floor((timesec / 60) % 60));
    const hr = digit(Math.floor((timesec / 3000) % 60));
    return `${min}:${sec}`;
  };
  const timeformat1 = timesec => {
    const digit = n => (n < 10 ? `0${n}` : `${n}`);

    const sec = digit(Math.floor(timesec % 60));
    const min = digit(Math.floor((timesec / 60) % 60));
    const hr = digit(Math.floor((timesec / 3000) % 60));
    return `${hr}:${min}:${sec}`;
  };

  const focus = useIsFocused();

  const timing = () => {
    if (route.params.item.pauseTime) {
      const b = route.params.item.pauseTime.split(':');
      const h = Number(b[0]);
      const m = Number(b[1]);
      const sec = Number(b[2]);
      const hrts = h * 3600;
      const mints = m * 60;
      const totalTime = hrts + mints + sec;
      return totalTime;
    }
  };


  let [startTimerr, setStartTime] = useState(0);

  useEffect(() => {
    const turn = timing();
    // const turn = 5;
    if (turn) {
      startTimerr = turn;
    }
    startTiming();
  }, []);


  const startTiming = () => {
    videoRef.current.seek(startTimerr * time.endingTime);
  };

  const videoRef = useRef();
  const handleslide = value => {
    videoRef.current.seek(value * time.endingTime);
  };


  return (
    <View style={{flex: 1, backgroundColor: '#373737'}}>
      <TouchableOpacity
        style={styles.imgbackView}
        onPress={async () => {
          const body = {
            pauseTime: timeformat1(time.currentTime),
            lessonId: route.params.item.lessonId,
            chapterId: route.params.item.chapterId,
            courseId: data?.courseId,
          };
          // console.log(body);
          const res = await PauseTime(token, body);
          console.log(res);
          if (res.message == 'Updated SuccessFully') {
            {
              fullScreen && FullScreen();
            }

            navigation.goBack();
          }
        }}>
        <Image
          source={require('../assets/images/icn_back_header.png')}
          style={styles.imgback}
        />
      </TouchableOpacity>
      <Video
        controls={false}
        ref={videoRef}
        resizeMode="contain"
        source={{
          uri: url,
        }}
        paused={isPlaying}
        fullscreen={true}
        onEnd={async () => {
          const body = {
            pauseTime: timeformat1(time.currentTime),
            lessonId: route.params.item.lessonId,
            chapterId: route.params.item.chapterId,
            courseId: data?.courseId,
          };    
          const res = await PauseTime(token, body);
          console.log(res);
          if (res.message == 'Updated SuccessFully') {
            {
              fullScreen && FullScreen();
            }

            navigation.goBack();
          }
        }}
        onProgress={data => {
          setTime({...time, currentTime: data.currentTime});
        }}
        onLoad={data => {
          setTime({...time, endingTime: data.duration});
        }}
        style={styles.backgroundVideo}></Video>
      <View style={styles.control}>
        <View style={styles.view1}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text1}>{timeformat(time.currentTime)}</Text>
            <Text style={styles.text2}>{title}</Text>
          </View>
          <Pressable onPress={() => FullScreen()}>
            <Image source={require('../assets/images/icn_maximise.png')} style={{tintColor:"white"}} />
          </Pressable>
        </View>

        <View style={styles.view2}>
          {isPlaying ? (
            <Pressable onPress={() => setIsPlaying(!isPlaying)}>
              <Image
                source={require('../assets/images/icn_playvideo-Play.png')}
                style={{height: 16, width: 14,tintColor:"white"}}
              />
            </Pressable>
          ) : (
            <Pressable onPress={() => setIsPlaying(!isPlaying)}>
              <Image
                source={require('../assets/images/icn_pausevideo.png')}
                style={{height: 16, width: 14, transform: [{rotate: '90 deg'}],tintColor:"white"}}
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
            onValueChange={value => {
              Platform.OS === 'ios' && handleslide(value);
            }}
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
  imgbackView: {
    height: 20,
    width: 40,
    marginTop: 48,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgback: {
    height: 14,
    width: 22,
    tintColor: 'white',
  },
  control: {
    backgroundColor: '#2B2B2B',
    height: Platform.OS === 'ios' ? 100 : 90,
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
