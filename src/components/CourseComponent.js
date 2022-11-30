import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

export const CourseComponent = (props)=> {


  const video = (item) => {
  props.nav.navigate('VideoPlayer',{item});
  };
  return (
    <View style={styles.businessview}>
      <View style={styles.categoryview}>
        <Text style={styles.category}>Top Courses in {props.header}</Text>

        <TouchableOpacity onPress={props.onPress}>
          <Text style={styles.all}>See All</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={props.data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View>
              
              <View style={styles.imageContainer}>
                <TouchableOpacity
                  onPress={() => {
                    video(item);
                  }}>
                  <Image
                    source={{uri: item?.coursePhoto}}
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

              <Text style={styles.courseName}>{item.courseName}</Text>
              <View style={{flexDirection: 'row', marginLeft: 25}}>
                <Text style={styles.chapterCount}>
                  {item.chapterCount} Chapter
                </Text>
                <Text style={styles.courseDuration}>{item.courseDuration}</Text>
              </View>
            </View>
          )}></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
  categoryview: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    height: 22,
    color: '#2B2B2B',
    fontFamily: 'Proxima Nova',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0,
    lineHeight: 22,
    marginLeft: 25,
  },
  all: {
    height: 15,
    width: 37,
    color: '#7A7A7A',
    fontFamily: 'Proxima Nova',
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 15,
    marginRight: 30,
  },

  imageContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    height: 134,
    width: 288,
    justifyContent: 'space-between',
    marginLeft: 25,
    marginTop: 20,
    // borderWidth:1,
  },
  businessview: {
    height: 223,
    width: '100%',
    marginTop: 25,
  },
  courseName: {
    marginLeft: 25,
    margin: 3,
    fontWeight: '300',
    letterSpacing: 0,
    lineHeight: 20,
    width: 288,
    color:'black'
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
