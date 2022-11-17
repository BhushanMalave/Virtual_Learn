import React from 'react';
import {ImageBackground, Text, View, Image, StyleSheet, Platform,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export const MyProfile = ({navigation}) => {
  return (
    <ScrollView>
    <View>
      <ImageBackground
        source={require('../assets/images/img_profiledetails_bg.png')}
        style={styles.backgroundimg}>
            <TouchableOpacity  onPress={ () => {navigation.openDrawer();}}>
        <Image
          source={require('../assets/images/icn_hamburgermenu_white.png')}
          style={styles.imgbar}
        />
        </TouchableOpacity>
        <View style={styles.topbar}>
          <Text style={styles.text}>Profile</Text>
          <TouchableOpacity  onPress={ () => {navigation.navigate('EditProfile');}}>
          <Image
            source={require('../assets/images/icn_edit profile.png')}
            style={styles.imgedit}
          />
          </TouchableOpacity>
        </View>
        <View style={styles.topinfo}>
          <Image
            source={require('../assets/images/img_profilepic.png')}
            style={styles.imgprofile}
          />
          <View style={styles.topinfotext}>
            <Text style={styles.textname}>Mahendra Singh Dhoni</Text>
            <Text style={styles.textdesc}>Designer</Text>
          </View>
        </View>
      </ImageBackground>
      <Text style={styles.textcom}> Has Completed</Text>
      <View style={styles.viewcourseinfo}>
        <View style={styles.viewcourseinfoin}>
          <Text style={styles.textno}>06</Text>
          <Text style={styles.textcourse}>Courses</Text>
        </View>
        <View style={styles.viewcourseinfoin}>
        <Text style={styles.textno}>06</Text>
          <Text style={styles.textcourse}>Chapters</Text>
        </View>
        <View style={styles.viewcourseinfoin}>
        <Text style={styles.textno}>06</Text>
          <Text style={styles.textcourse}>Test</Text>
        </View>
      </View>
      <Text style={styles.textdetails}>Personal Details</Text>
      <View style={styles.viewinfo}>
        <Text style={styles.texttag}>Name</Text>
        <Text style={styles.texttitle}>Mahendra Singh Dhoni</Text>
      </View>
      <View style={styles.viewinfo}>
        <Text style={styles.texttag}>Username</Text>
        <Text style={styles.texttitle}>Mahendra Singh Dhoni</Text>
      </View>
      <View style={styles.viewinfo}>
        <Text style={styles.texttag}>Email</Text>
        <Text style={styles.texttitle}>Mahendra Singh Dhoni</Text>
      </View>
      <View style={styles.viewinfo}>
        <Text style={styles.texttag}>Mobile Number</Text>
        <Text style={styles.texttitle}>Mahendra Singh Dhoni</Text>
      </View>
      <View style={styles.viewinfo}>
        <Text style={styles.texttag}>Occupation</Text>
        <Text style={styles.texttitle}>Mahendra Singh Dhoni</Text>
      </View>
      <View style={styles.viewinfo}>
        <Text style={styles.texttag}>Date of Birth</Text>
        <Text style={styles.texttitle}>Mahendra Singh Dhoni</Text>
      </View>
      <TouchableOpacity  onPress={ () => {navigation.navigate('CreateNewPassword');}}>
      <View style={styles.viewpass}>
        <Image source={require('../assets/images/icn_privacy_img.png')} style={styles.imgpcy}/>
        <View style={styles.viewpasstext}>
          <Text style={styles.textpvy}>Privacy</Text>
          <Text style={styles.textpvy1}>Change your password </Text>
        </View>
        <Image source={require('../assets/images/icn_privacy.png')} style={styles.imgpy}/>
      </View>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundimg: {
    height:Platform.OS === 'ios'? 260:260,
  },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  topinfo: {
    flexDirection: 'row',
    marginHorizontal: 25,
    marginTop: 30,
  },
  topinfotext: {
    marginLeft: 30,
  },
  viewcourseinfo: {
    height: 85,
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  viewcourseinfoin: {
    height: 85,
    width: 95,
    backgroundColor:'#FEFEFF',
    shadowOpacity:0.1,
    borderRadius:6,
  },
  viewinfo:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:24,
    marginTop:25,

  },
  viewpass:{
    height:56,
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:24,
    marginVertical:30,
    backgroundColor:'#FEFEFF',
    shadowOpacity:0.1,
    borderRadius:6,
  },
  viewpasstext:{
    marginTop:10,
    marginRight:80,
  },
  imgbar: {
    marginTop: 80,
    marginLeft: 20,
  },
  imgedit: {
    borderWidth: 1,
    height: 18,
    width: 18,
    backgroundColor:'white'
  },
  text: {
    fontFamily: 'Biko',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  textname: {
    color: '#FFFFFF',
    fontFamily: 'Biko',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  textdesc: {
    color: '#FFFFFF',
    fontFamily: 'Proxima Nova',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 10,
  },
  textcom: {
    color: '#7A7A7A',
    fontFamily: 'Proxima Nova',
    fontWeight: '300',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  textno:{
    color: '#2BB5F4',
    fontFamily: 'Biko',
    fontWeight: 'bold',
    fontSize: 32,
    marginTop: 20,
    textAlign: 'center',
  },
  textcourse:{
    color: '#373737',
    fontFamily:  'Proxima Nova',
    fontSize: 14,
    marginTop: 3,
    textAlign: 'center',
  },
  textdetails:{
    color: '#2B2B2B',
    fontFamily:  'Proxima Nova',
    fontWeight:'bold',
    fontSize: 18,
    marginTop: 30,
    marginLeft:24,
   
  },
  texttag:{
    color: '#7A7A7A',
    fontFamily:  'Proxima Nova',
    fontSize: 14,
  },
  texttitle:{
    color: '#373737',
    fontFamily:  'Proxima Nova',
    fontWeight:'bold',
    fontSize: 16,
    textAlign:'right',
  },
  textpvy:{
    color: ' #042C5C',
    fontFamily:  'Proxima Nova',
    fontWeight:'bold',
    fontSize: 16,
  },
  textpvy1:{
    color: ' #7A7A7A',
    fontFamily:  'Proxima Nova',
    letterSpacing:0.3,
    fontSize: 13,
    marginTop:5,
  },

  imgpcy:{
       height:40,
       width:40,
       marginTop:10,
       marginLeft:10,
  },
  imgpy:{
    height:13,
    width:15,
    marginTop:30,
    marginRight:15,
  }

});
