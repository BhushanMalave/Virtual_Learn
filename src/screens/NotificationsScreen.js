import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { NotificationsComponentUnseen } from '../components/NotificationComponents';
import { NotificationsComponentSeen } from '../components/NotificationComponents';
export const  NotificationsScreen = ({navigation}) => {
  return (
         <SafeAreaView style={styles.body}>
        <TouchableOpacity    onPress={ () => {navigation.goBack();}}>
        <Image source={require('../assets/images/icn_back_header.png')} style={styles.image}/>
        </TouchableOpacity>
        <Text style={styles.text}>
          Notifications
        </Text>
         
        <NotificationsComponentUnseen/>
        <NotificationsComponentUnseen/>
        <NotificationsComponentSeen/>
        <NotificationsComponentSeen/>
        <NotificationsComponentSeen/>
        
      


         </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body:{

  },
  image:{
    height:16,
    width:26,  
    marginTop:25,
    marginLeft:24,
    tintColor:'#373737',
},
text:{
  fontFamily:'Biko',
  fontWeight:'bold',
  fontSize:26,
  height:35,
  color:'#2B2B2B',
  marginLeft:24,
  marginTop:25,
  marginBottom:20,

},
view:{
  height:115,
  backgroundColor:'#F0F6FB',
},
viewin:{
  height:73,
  marginLeft:24,
  marginRight:65,
  marginVertical:22,
  flexDirection:'row',

},
imageinc:{
  height:34,width:34,
},
text2:{
  fontFamily:'Proxima Nova',
  fontSize:14,
  fontWeight:'bold',
  marginLeft:10,
  marginRight:30
},
text3:{
  fontFamily:'Proxima Nova',
  fontSize:12,
  color:'#7A7A7A',
  marginLeft:10,
  marginTop:8,
},
borderpoint1:{
  height:6,
  width:6,
  backgroundColor:"#EE5C4D",
  borderRadius:50,
  marginRight:10,
  marginTop:30,
},

})