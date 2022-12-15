import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
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
          contentContainerStyle={{marginStart:25,paddingRight:25}}
          renderItem={({item}) => (
            <View style={{marginRight:22}}>
              
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
              <View style={{flexDirection: 'row'}}>
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
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? '600':'normal',
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: 22,
    marginLeft: 25,
  },
  all: {
    height: 15,
    width: 37,
    color: '#7A7A7A',
    fontFamily:Platform.OS === 'ios' ? 'Proxima Nova': 'ProximaNova',
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
  
    marginTop: 20,
  },
  businessview: {
    height: 223,
    width: '100%',
    marginTop: 25,
  },
  courseName: {
    marginTop:5,
    marginBottom:4,
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
