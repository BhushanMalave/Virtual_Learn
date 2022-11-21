import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ReadMore from 'react-native-read-more-text';

const details = [
  {
    id: 1,
    source: require('../assets/images/icn_includes_duration.png'),
    description: '3.5 total hours video',
  },
  {
    id: 2,
    source: require('../assets/images/icn_includes_supportfiles.png'),
    description: 'Support Files',
  },
  {
    id: 3,
    source: require('../assets/images/icn_includes_test.png'),
    description: '6 Modules Test',
  },
  {
    id: 4,
    source: require('../assets/images/icn_includes_lifetime.png'),
    description: 'Full liftetime access',
  },
  {
    id: 5,
    source: require('../assets/images/icn_includes_lifetime.png'),
    description: 'Access on Mobile,desktop, and tv',
  },
  {
    id: 6,
    source: require('../assets/images/icn_includes_certificate.png'),
    description: 'Certificate of Completion',
  },
];

const outcomes = [
  {
    id: 1,
    source: require('../assets/images/Circle.png'),
    description: 'Design Websites',
  },
  {
    id: 2,
    source: require('../assets/images/Circle.png'),
    description: 'Design mobile and desktop',
  },
  {
    id: 3,
    source: require('../assets/images/Circle.png'),
    description:
      'You will have a fully interactive design and prototype at the end of this course',
  },
  {
    id: 4,
    source: require('../assets/images/Circle.png'),
    description:
      'You will learn how to reuse design elements for future projects',
  },
];

const requirements = [
  {
    id: 1,
    description: '• Internet Access',
  },
  {
    id: 2,
    description: '• You should know your way around computer basics',
  },
];
export const OverviewScreen = ({navigation}) => {
  renderTruncatedFooter = handlePress => {
    return (
      <Text
        style={{
          color: '#EE5C4D',

          fontSize: 12,
          height: 15,
          lineHeight: 15,
          marginLeft: 250,
        }}
        onPress={handlePress}>
        SHOW MORE
      </Text>
    );
  };
  renderRevealedFooter = handlePress => {
    return (
      <Text
        style={{
          color: '#EE5C4D',
          fontSize: 12,
          height: 15,
          lineHeight: 15,
          marginLeft: 250,
        }}
        onPress={handlePress}>
        SHOW LESS
      </Text>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginHorizontal:24}}>

       
        <Text style={styles.text}>
          Learn how to design a beautiful and engaging mobile app with Figma.
          Learn-by-doing approach.
        </Text>
        <View style={styles.preview}>
          <Text style={styles.previewtext}>Preview this course</Text>
          <View style={styles.videoview}>
            <Image />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <ReadMore
            numberOfLines={7}
            renderTruncatedFooter={renderTruncatedFooter}
            renderRevealedFooter={renderRevealedFooter}>
            <Text style={styles.description}>
              Figma is a very powerful application that runs online. There are
              virtually no platform boundaries when it comes to using figma
              because you can design within a web browser or using their desktop
              application made for windows and macs. Figma is similar to Sketch
              and Adobe XD but is the more powerful of the three when it comes
              to Figma is a very powerful application that runs online. There
              are virtually no platform boundaries when it comes to using figma
              because you can design within a web browser or using their desktop
              application made for windows and macs.There are virtually no
              platform boundaries when it comes to using figma because you can
              design within a web browser or using their desktop application
              made for windows and macs.
            </Text>
          </ReadMore>
        </View>
        <View style={styles.coursecontainer}>
          <Text style={styles.header}>Course Includes</Text>
          {details.map(item => (
            <View style={styles.coursecontent} key={item.id}>
              <Image source={item.source} />
              <Text style={styles.coursedescription}>{item.description}</Text>
            </View>
          ))}
        </View>

        <View style={styles.coursecontainer}>
          <Text style={styles.header}>What you'll learn</Text>
          {outcomes.map(item => (
            <View style={styles.coursecontent} key={item.id}>
              <Image source={item.source} />
              <Text style={styles.outcomedescription}>{item.description}</Text>
            </View>
          ))}
        </View>

        <View style={styles.coursecontainer}>
          <Text style={styles.header}>Requirements</Text>
          {requirements.map(item => (
            <View style={styles.requirecontent} key={item.id}>
              <Image source={item.source} />
              <Text style={styles.requiredescription}>{item.description}</Text>
            </View>
          ))}
        </View>

        <View style={styles.instructorview}>
          <Text style={styles.instructor}>Instructor</Text>
          <View style={styles.instructorinner}>
            <Image source={require('../assets/images/img_instructor1.png')} />
            <View style={styles.textview}>
              <Text style={styles.name}>Dean Mathew</Text>
              <Text style={styles.desp}>
                User Interface teacher www.appledesigntips.com
              </Text>
            </View>
          </View>
          <View style={{marginTop:10}}>

          <ReadMore
            numberOfLines={3}
            renderTruncatedFooter={renderTruncatedFooter}
            renderRevealedFooter={renderRevealedFooter}>
            <Text style={styles.instructordescription}>
              Back in 2020, I started brainspin with a desire to design
              compelling and engaging apps. For over 7 years, I have designed
              many high. Back in 2020, I started brainspin with a desire to design
              compelling and engaging apps. For over 7 years, I have designed
              many high.
            </Text>
          </ReadMore>
          </View>
          </View>

          </View>
          <TouchableOpacity
          style={styles.button}><Text style={styles.buttontext} onPress={() => navigation.navigate('Chapters')}>Join Course</Text>
          </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // margin: 25,
    flex: 1,
    marginTop:20
  },
  text: {
    height: 40,
    color: '#2BB5F4',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 20,
  },
  preview: {
    height: 116,

    marginTop: 30,
  },
  previewtext: {
    height: 22,
    color: '#2B2B2B',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 21,
  },
  videoview: {
    height: 80,
    borderWidth: 1,
    marginTop: 12,
    borderRadius: 5,
  },
  description: {
    height: 140,
    color: '#2B2B2B',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 20,
  },
  coursecontainer: {
    marginTop: 35,
  },
  coursecontent: {
    flexDirection: 'row',
    marginTop: 12,
  },
  header: {
    height: 22,
    color: '#2B2B2B',

    fontSize: 18,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 21,
  },
  coursedescription: {
    height: 17,
    color: '#7A7A7A',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 17,
    marginLeft: 10,
  },
  outcomedescription: {
    // height: 17,

    color: '#2B2B2B',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 17,
    marginLeft: 10,
  },
  header: {
    height: 22,
    color: '#2B2B2B',

    fontSize: 18,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 21,
  },
  requirecontent: {
    marginTop: 5,
  },
  requiredescription: {
    color: '#2B2B2B',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 14,
    fontWeight: '400',

    lineHeight: 17,
  },
  instructorview: {
   
    marginTop: 25,
  },
  instructorinner: {
    flexDirection: 'row',
    marginTop: 12,
  },
  instructor: {
    height: 22,
    color: '#2B2B2B',

    fontSize: 18,

    letterSpacing: 0,
    lineHeight: 21,
  },
  textview: {
    marginLeft: 10,
    marginTop: 5,
  },
  name: {
    height: 15,
    color: '#2B2B2B',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 15,
  },
  desp: {
    height: 14,
    color: '#373737',
    fontSize: 10,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 14,
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
  },
  instructordescription:{
    color: '#2B2B2B',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing:0,
    lineHeight: 20,
  },
  button:{
    height:56,
    backgroundColor:"#EE5C4D",
    width:"100%"
  },
  buttontext:{
    height: 20,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 20,
    textAlign:"center",
    marginTop:15
  }
});
