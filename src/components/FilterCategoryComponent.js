import React from 'react';
import {useDispatch} from 'react-redux';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import {
  setCatId,
  removeCatId,
  setCatState,
} from '../redux/ReduxPersist/searchDataSlice';

export const FilterCategoriesComponent = props => {
  const dispatch = useDispatch();
  return (
    <View>
      {!props.status ? (
        <>
          <Pressable
            onPress={() => {
              dispatch(setCatId(props.id));
              dispatch(setCatState(props.id));
            }}>
            <View style={styles.categorycontainer}>
              <Image source={{uri: props.img}} style={styles.img} />
              <Text style={styles.categorytext}>{props.category}</Text>
            </View>
          </Pressable>
        </>
      ) : (
        <Pressable
          onPress={() => {
            dispatch(setCatState(props.id));
            dispatch(removeCatId(props.id));
          }}>
          <View style={styles.categorycontainer1}>
            <Image source={{uri: props.img}} style={styles.img} />
            <Text style={styles.categorytext}>{props.category}</Text>
          </View>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  categorycontainer: {
    borderRadius: 6,
    margin: 5,
    borderWidth: 1,
    height: 30,
    padding: 5,
    borderColor: '#D3D3D3',
    flexDirection: 'row',
  },
  categorycontainer1: {
    borderRadius: 6,
    margin: 5,
    borderWidth: 1,
    height: 30,
    padding: 5,
    borderColor: '#FCBE4B',
    flexDirection: 'row',
    backgroundColor: '#FCBE4B',
  },
  categorytext: {
    height: 15,
    color: '#2B2B2B',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    fontSize: 12,
    marginHorizontal: 5,
    marginVertical: 3,
  },
  img: {
    height: 15,
    width: 15,
    marginVertical: 3,
    marginHorizontal: 3,
  },
});
