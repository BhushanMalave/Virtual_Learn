import React from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export const CompletedComponent = props => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={props.source}
        style={styles.image}
        imageStyle={{borderRadius: 6}}>
        <Text style={styles.completed}>Completed</Text>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.chapter}>{props.percentage} Approval Rate</Text>
        <TouchableOpacity style={styles.contbutton} onPress={props.onPress}>
          <Text style={styles.conttext}>View Certificate</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 140,
    marginBottom: 12,
  },
  image: {
    height: 140,
    marginBottom: 12,
  },
  contbutton: {
    height: 26,
    width: 103,
    borderRadius: 3.4,
    backgroundColor: '#EE5C4D',
    marginTop: 8,
    marginLeft: 15,
  },
  conttext: {
    height: 12,
    color: '#FFFFFF',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? '600':'normal',
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 11.33,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 7,
  },
  name: {
    height: 20,
    color: '#FFFFFF',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? '500':'normal',
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 20,
    marginTop: 40,
    marginLeft: 15,
  },
  chapter: {
    height: 15,

    color: '#FFFFFF',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 15,
    marginLeft: 15,
  },
  completed: {
    height: 15,

    color: '#FFFFFF',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 15,
    marginLeft: 15,
    marginTop: 5,
  },
});
