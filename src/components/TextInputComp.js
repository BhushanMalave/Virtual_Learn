import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export const TextInputComp = props => {
  return (
    <View>
      {props.value ? (
        <View style={styles.form1}></View>
      ) : (
        <View style={styles.form}></View>
      )}
      <>
        {props.value ? (
          <View>
            <Text style={styles.text}>{props.text}</Text>
          </View>
        ) : (
          <></>
        )}
      </>
      <TextInput
        name={props.name}
        editable={props.editable}
        value={props.value}
        style={styles.textinput}
        placeholder={props.placeholder}
        placeholderTextColor={'#7A7A7A'}
        onChangeText={props.onChangeText}></TextInput>
      {props.value ? (
        <View style={styles.bottom}></View>
      ) : (
        <View style={styles.bottom2}></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    height: 17,
    marginBottom: Platform.OS == 'ios' ? 10 : -2,
    color: Platform.OS == 'ios' ? '#7A7A7A' : '#7A7A7A',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 14,
    letterSpacing: 0.29,
    lineHeight: 17,
  },
  textinput: {
    color: Platform.OS == 'ios' ? '#042C5C' : '#042C5C',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? '600':'normal',
    fontSize: 16,
    letterSpacing: 0.4,
    lineHeight: 20,
    width: '95%',
  },
  bottom: {
    marginTop: Platform.OS == 'ios' ? 10 : -3,
    borderBottomWidth: 1,
    borderBottomColor: '#042C5C',
  },
  bottom2: {
    marginTop: Platform.OS == 'ios' ? 10 : -3,
    borderBottomWidth: 1,
    borderBottomColor: '#7A7A7A',
    opacity: 0.6,
  },
  form1: {
    marginTop: Platform.OS == 'ios' ? 14 : 15,
  },

  form: {
    marginTop: Platform.OS == 'ios' ? 40 : 30,
  },
});
