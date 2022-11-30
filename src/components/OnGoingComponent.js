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
      <ImageBackground
        source={props.source}
        style={styles.image}
        imageStyle={{borderRadius: 6}}>
        <Text style={styles.ongoing}>Ongoing</Text>
        <Text style={styles.name}>{props.name}</Text>

        <Text style={styles.chapter}>
          {props.chapter}/{props.ctdchapter} Chapters
        </Text>
        <TouchableOpacity style={styles.contbutton} onPress={props.onPress}>
          <Text style={styles.conttext}>Continue</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 140,

    borderRadius: 6,

    marginBottom: 12,
  },
  image: {
    height: 140,

    marginBottom: 12,
  },
  contbutton: {
    height: 26,
    width: 80,
    borderRadius: 3.4,
    backgroundColor: '#EE5C4D',
    marginTop: 8,
    marginLeft: 15,
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
    marginTop: 40,
    marginLeft: 15,
  },
  chapter: {
    height: 15,
    width: 80,
    color: '#FFFFFF',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 15,
    marginLeft: 15,
  },
  ongoing: {
    height: 15,

    color: '#FFFFFF',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 15,
    marginLeft: 15,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
