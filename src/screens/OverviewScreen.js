import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ReadMore from 'react-native-read-more-text';
import {useSelector} from 'react-redux';
import { joinCourse } from '../authorization/Auth';

const details = [
  {
    id: 1,
    source: require('../assets/images/icn_includes_lifetime.png'),
    description: 'Full liftetime access',
  },
  {
    id: 2,
    source: require('../assets/images/icn_includes_lifetime.png'),
    description: 'Access on Mobile,desktop, and tv',
  },
  {
    id: 3,
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
  const coursedata = useSelector(state => state.courseData.overview);
  const token = useSelector(state => state.userDetails.token);
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

  const duration = coursedata?.courseDuration
  const time = duration.split(":")

const hours = Number(time[0])
const m = time[1]


const mins = m/60

const total_hours = hours+mins

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginHorizontal: 24}}>
          <Text style={styles.text}>{coursedata.courseTagLine}</Text>
          <View style={styles.preview}>
            <Text style={styles.previewtext}>Preview this course</Text>
            <View style={styles.videoview}>
              <TouchableOpacity onPress={()=>{ 
                
              {{ coursedata?.previewVideo}}
                console.log("vcjhdvsjchbdh")
                }}>

              <ImageBackground
                source={{uri: coursedata?.coursePhoto}}
                style={{
                  width: 340,
                  height: 80,
                  resizeMode: 'cover',
                  borderRadius: 5,
                }}
                imageStyle={{borderRadius: 5}}
              >
                <Image source={require('../assets/images/icn_play_orange.png')} style={styles.videobutton}/>
              </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <ReadMore
              numberOfLines={7}
              renderTruncatedFooter={renderTruncatedFooter}
              renderRevealedFooter={renderRevealedFooter}>
              <Text style={styles.description}>{coursedata?.description}</Text>
            </ReadMore>
          </View>
          <View style={styles.coursecontainer}>
            <Text style={styles.header}>Course Includes</Text>

            <View style={styles.coursecontent}>
              <Image
                source={require('../assets/images/icn_includes_duration.png')}
              />
              <Text style={styles.coursedescription}>
                {total_hours} total hours video
              </Text>
            </View>
            <View style={styles.coursecontent}>
              <Image
                source={require('../assets/images/icn_includes_supportfiles.png')}
              />
              <Text style={styles.coursedescription}>Support Files</Text>
            </View>
            <View style={styles.coursecontent}>
              <Image
                source={require('../assets/images/icn_includes_supportfiles.png')}
              />
              <Text style={styles.coursedescription}>
                {coursedata.testCount} Modules Test
              </Text>
            </View>

            {details.map(item => (
              <View style={styles.coursecontent} key={item.id}>
                <Image source={item.source} />
                <Text style={styles.coursedescription}>{item.description}</Text>
              </View>
            ))}
          </View>

          <View style={styles.coursecontainer}>
            <Text style={styles.header}>What you'll learn</Text>
            <View style={styles.coursecontent} >
            <Image source={require('../assets/images/Circle.png')} />
            {coursedata?.learningOutCome.map(item => (
              <View key={item.id}>
                <Text style={styles.outcomedescription}>
                  {item}
                </Text>
                </View>
            ))}
            </View>
          </View>

          <View style={styles.coursecontainer}>
            <Text style={styles.header}>Requirements</Text>
              <View style={styles.requirecontent}>
               
            {coursedata.requirements.map(item => (
              <View  key={item.id}>
                <Text style={styles.requiredescription}>
                • {item}
                </Text>
                </View>
            ))}
            </View>
          </View>

          <View style={styles.instructorview}>
            <Text style={styles.instructor}>Instructor</Text>
            <View style={styles.instructorinner}>
              <Image
                source={{uri: coursedata?.profilePhoto}}
                style={{height: 40, width: 40}}
              />
              <View style={styles.textview}>
                <Text style={styles.name}>{coursedata?.instructorName}</Text>
                <Text style={styles.desp}>{coursedata?.url}</Text>
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <ReadMore
                numberOfLines={3}
                renderTruncatedFooter={renderTruncatedFooter}
                renderRevealedFooter={renderRevealedFooter}>
                <Text style={styles.instructordescription}>
                  {coursedata.instructorDescription}
                </Text>
              </ReadMore>
            </View>
          </View>
        </View>
        {coursedata?.enrolled ? (
          <></>
        ) : (
          <>
            <TouchableOpacity style={styles.button}
            
            onPress={async() => {
              const objBody ={
                "courseId":coursedata.courseId,
                "joinDate":"2022-11-10"
              }
              console.log("hvhc",coursedata.courseId)
              const res = await joinCourse(token,objBody);
              console.log(res);
              navigation.navigate('Chapters')}}>
              <Text
                style={styles.buttontext}
                >
                Join Course
              </Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // margin: 25,
    flex: 1,
    marginTop: 20,
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
  instructordescription: {
    color: '#2B2B2B',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 20,
  },
  button: {
    height: 56,
    backgroundColor: '#EE5C4D',
    width: '100%',
  },
  buttontext: {
    height: 20,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 15,
  },
  videobutton:{
    margin:15
  }
});
