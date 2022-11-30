import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const START_MINUTES = '00';
const START_SECOND = '15';
const START_DERATION = 10;

export const TimerComponent = () => {
  const [currentMinutes, setMinutes] = useState(START_MINUTES);
  const [currentSeconds, setSeconds] = useState(START_SECOND);
  const [isStop, setIsStop] = useState(false);
  const [duration, setDuration] = useState(START_DERATION);
  const [isRunning, setIsRunning] = useState(false);

  const startHandler = () => {
    setDuration(parseInt(START_SECOND, 10) + 60 * parseInt(START_MINUTES, 10));

    setIsRunning(true);
  };
  const stopHandler = () => {
    setIsStop(true);
    setIsRunning(false);
  };
  const resetHandler = () => {
    setMinutes(START_MINUTES);
    setSeconds(START_SECOND);
    setIsRunning(false);
    setIsStop(false);
    setDuration(START_DERATION);
  };

  const resumeHandler = () => {
    let newDuration =
      parseInt(currentMinutes, 10) * 60 + parseInt(currentSeconds, 10);
    setDuration(newDuration);

    setIsRunning(true);
    setIsStop(false);
  };

  useEffect(() => {
    if (isRunning === true) {
      let timer = duration;
      var minutes, seconds;
      const interval = setInterval(function () {
        if (--timer == -1) {
          alert('timer over');
          stopHandler();
        } else {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);

          minutes = minutes < 10 ? '0' + minutes : minutes;
          seconds = seconds < 10 ? '0' + seconds : seconds;

          setMinutes(minutes);
          setSeconds(seconds);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);
  return (
    <SafeAreaView>
      <Text>
        {currentMinutes}:{currentSeconds}
      </Text>
      <TouchableOpacity
        onPress={() => {
          startHandler();
        }}>
        <Text>start</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          stopHandler();
        }}>
        <Text>stop</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          resumeHandler();
        }}>
        <Text>resume</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          resetHandler();
        }}>
        <Text>reset</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
