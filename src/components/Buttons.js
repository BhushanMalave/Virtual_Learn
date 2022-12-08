import React from 'react';

import {StyleSheet, Text, View, TouchableOpacity, Platform} from 'react-native';

export const ButtonComponent = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.body}>
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
export const ButtonComponent2 = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.body1}>
      <View>
        <Text style={styles.text1}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const ButtonComponent3 = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.body2}>
      <View>
        <Text style={styles.text2}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const ButtonComponent4 = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.body3}>
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
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
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    color: '#FFFFFF',
    marginTop: Platform.OS == 'ios' ? 14 : 10,
  },
  body1: {
    backgroundColor: '#FFFFFF',
    height: 46,
    borderRadius: 6,
    borderWidth:2,
    borderColor:'#EE5C4D',
    justifyContent:'center',
  },
  body2: {
    backgroundColor: '#FFFFFF',
    height: 46,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#373737',
  },
  body3: {
    backgroundColor: '#042C5C',
    height: 46,
    borderRadius: 6,
  },
  text1: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    color: '#EE5C4D',
    marginTop: Platform.OS == 'ios' ? 4 :0,
  },
  text2: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    color: '#373737',
    marginTop: 10,
  },
});
