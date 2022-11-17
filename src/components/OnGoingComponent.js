import React from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export const OnGoingComponent = props => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={props.source} style={styles.image}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.chapter}>{props.chapters} Chapters</Text>
        <TouchableOpacity style={styles.contbutton}>
          <Text style={styles.conttext}>Continue</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 140,
    // width:327,
    borderWidth: 1,
    borderRadius: 6,
    // marginTop:20,
    marginBottom: 12,
  },
  image: {
    // marginTop:-15
    flex: 1,
    width: 380,
    marginLeft: -20,
  },
  contbutton: {
    height: 26,
    width: 80,
    borderRadius: 3.4,
    backgroundColor: '#EE5C4D',
    marginTop: 8,
    marginLeft: 40,
  },
  conttext: {
    height: 12,
    width: 49,
    color: '#FFFFFF',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0,
    lineHeight: 11.33,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 7,
  },
  name: {
    height: 20,
    color: '#FFFFFF',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 20,
    marginTop: 60,
    marginLeft: 40,
  },
  chapter: {
    height: 15,
    width: 80,
    color: '#FFFFFF',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 15,
    marginLeft: 40,
  },
});
