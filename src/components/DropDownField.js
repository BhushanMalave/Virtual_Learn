import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';

const DropDownField = props => {
  return (
    <View style={{margin: 5}}>
      <SelectList
        text={props.text}
        name={props.name}
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
        value={props.value}
        data={props.data}
        setSelected={props.setSelected}
        placeholder={props.name}
        boxStyles={{
          width: '100%',
          alignItems: 'center',
          alignSelf: 'center',
          borderWidth: 0.5,
          borderRadius: 5,
          fontSize: 18,
        }}
        inputStyles={styles.textinput}
        dropdownStyles={{
          width: '90%',
          alignSelf: 'center',
          backgroundColor: '#F5F7FB',
          borderWidth: 0.5,
          borderColor: '#D7D7D7',
          borderRadius: 5,
        }}
        dropdownItemStyles={{marginHorizontal: 10}}
        dropdownTextStyles={{color: 'black'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#949CA5',
    fontSize: 18,
    marginTop: 10,
  },
  textinput: {
    color: Platform.OS == 'ios' ? '#042C5C' : '#042C5C',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 16,
    letterSpacing: 0.4,
    lineHeight: 20,
    fontWeight: '600',
  },
});

export default DropDownField;
