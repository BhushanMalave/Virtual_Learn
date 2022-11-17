import React from 'react';

import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

export const ButtonComponent = ({text,onPress}) => {
  return (
    <Pressable onPress ={onPress}style={styles.body}>
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};
export const ButtonComponent2 = ({text,onPress}) => {
  return (
    <Pressable onPress ={onPress}style={styles.body1}>
      <View>
        <Text style={styles.text1}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#EE5C4D',
    height: 46,
    borderRadius: 6,
  },
  text: {
    textAlign: 'center',
    height: 20,
    fontSize: 16,
    fontFamily: 'Proxima Nova',
    fontWeight:'bold',
    color: '#FFFFFF',
    marginTop: 13,
  },
  body1: {
    backgroundColor: '#FFFFFF',
    height: 46,
    borderRadius: 6,
    borderWidth:2,
    borderColor:'#EE5C4D',
  },
  text1: {
    textAlign: 'center',
    height: 20,
    fontSize: 16,
    fontFamily: 'Proxima Nova',
    fontWeight:'bold',
    color: '#EE5C4D',
    marginTop: 13,
  },
});

