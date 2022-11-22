import React, {useEffect} from 'react';
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
import {NotificationsComponentUnseen} from '../components/NotificationComponents';
import {NotificationsComponentSeen} from '../components/NotificationComponents';
import {useDispatch, useSelector} from 'react-redux';
import {notificationApiCall} from '../redux/ThunkToolkit/NotificationApiCall/NotificationDataApiCall';
import {iteratorSymbol} from 'immer/dist/internal';
import axios from 'axios';
export const NotificationsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  

  const notificationData = useSelector(state => state.notificationData.data);
  const token = useSelector(state => state.userDetails.token);
  useEffect(() => {
    dispatch(notificationApiCall(token));
    // console.log(notificationData)
  }, []);
  return (
    <SafeAreaView style={styles.body}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={require('../assets/images/icn_back_header.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text style={styles.text}>Notifications</Text>

      {notificationData.map(items => {
        return items.readStatus === true ? (
          <NotificationsComponentSeen
            desc={items.description}
            img={items.notificationUrl}
            time={items.timeStamp}
          />
        ) : (
          <NotificationsComponentUnseen
            desc={items.description}
            img={items.notificationUrl}
            time={items.timeStamp}
            onPress={ async () => {
              const body = {
                notificationId : items.notificationId
              }
              
              const options = {
                headers: {
                  Authorization: `Bearer ${token}`,
                 
                },
              };
            
              try {
                const response = await axios.put(
                  'https://virtual-learn-app-java.herokuapp.com/ReadNotification',
                  body,
                  options,
                );
            
                if (response.data) {
                  return response.data;
                }
              } catch (error) {
                console.log(error);
              }

            }
            
            }
          />
        );
      })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {},
  image: {
    height: 16,
    width: 26,
    marginTop: 25,
    marginLeft: 24,
    tintColor: '#373737',
  },
  text: {
    fontFamily: 'Biko',
    fontWeight: 'bold',
    fontSize: 26,
    height: 35,
    color: '#2B2B2B',
    marginLeft: 24,
    marginTop: 25,
    marginBottom: 20,
  },
  view: {
    height: 115,
    backgroundColor: '#F0F6FB',
  },
  viewin: {
    height: 73,
    marginLeft: 24,
    marginRight: 65,
    marginVertical: 22,
    flexDirection: 'row',
  },
  imageinc: {
    height: 34,
    width: 34,
  },
  text2: {
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 30,
  },
  text3: {
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 12,
    color: '#7A7A7A',
    marginLeft: 10,
    marginTop: 8,
  },
  borderpoint1: {
    height: 6,
    width: 6,
    backgroundColor: '#EE5C4D',
    borderRadius: 50,
    marginRight: 10,
    marginTop: 30,
  },
});
