import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

export const CategoryDisplayCourseComponent = props => {
  const video = item => {
    props.nav.navigate('VideoPlayer', {item});
  };
  return (
    <View>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => video(props)}>
          <Image
            source={{uri: props?.coursePhoto}}
            style={{
              height: 134,
              width: 288,
              borderRadius: 5,
              overflow: 'hidden',
            }}
          />
          <Image
            source={require('../assets/images/icn_play-play-button2.png')}
            style={{marginLeft: 120, marginTop: -90}}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.courseName}>{props.courseName}</Text>
      <View style={{flexDirection: 'row', marginLeft: 25}}>
        <Text style={styles.chapterCount}>{props.chapterCount} Chapter</Text>
        <Text style={styles.courseDuration}>{props.courseDuration}</Text>
      </View>
    </View>
  );
};

export const CategoriesComponents = ({category, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.categorycontainer}>
        <Text style={styles.categorytext}>{category}</Text>
      </View>
    </TouchableOpacity>
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
  categorytext: {
    height: 15,
    color: '#2B2B2B',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 15,
    marginHorizontal: 5,
    marginVertical: 3,
  },
  img: {
    height: 15,
    width: 15,
    marginVertical: 3,
    marginHorizontal: 3,
  },
  imageContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    height: 134,
    width: 288,
    justifyContent: 'space-between',
    marginLeft: 25,
    marginTop: 20,
  },
  courseName: {
    marginLeft: 25,
    margin: 3,
    fontWeight: '300',
    letterSpacing: 0,
    lineHeight: 20,
    width: 288,
    color: 'black',
  },
  chapterCount: {
    fontSize: 12,
    color: '#7A7A7A',
    fontWeight: '300',
    marginRight: 15,
  },
  courseDuration: {
    fontSize: 12,
    color: '#7A7A7A',
    fontWeight: '300',
  },
});
