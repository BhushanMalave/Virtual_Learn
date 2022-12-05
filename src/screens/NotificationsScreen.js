import React, {useEffect,useCallback} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
  View,
  RefreshControl,
} from 'react-native';
import { useState } from 'react';
import {NotificationsComponentUnseen} from '../components/NotificationComponents';
import {NotificationsComponentSeen} from '../components/NotificationComponents';
import {useDispatch, useSelector} from 'react-redux';
import {notificationApiCall} from '../redux/ThunkToolkit/NotificationApiCall/NotificationDataApiCall';
import {setToken} from '../redux/ReduxPersist/UserDetails';
import {getVerifiedKeys} from '../authorization/RefreshToken';
import axios from 'axios';
import {setNotificationData} from '../redux/ThunkToolkit/NotificationApiCall/NotificationDataApiCall';

export const NotificationsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const notificationData = useSelector(state => state.notificationData.data);
  const token = useSelector(state => state.userDetails.token);
  const [refreshing, setRefreshing] = useState(false);
  const refreshToken = async () => {
    const key = await getVerifiedKeys(token);
    dispatch(setToken(key));
  };
  const continueCall = () => {
    dispatch(dispatch(notificationApiCall(token)));    
  }
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    continueCall();
    setRefreshing(false);
  }, [refreshing]);
  useEffect(() => {
    dispatch(notificationApiCall(token));
    refreshToken();
  }, []);
  return (
    <SafeAreaView style={styles.body}>
      <TouchableOpacity onPress={() => {
        //  dispatch(setNotificationData());
          navigation.goBack()
        }}
        >
        <Image
          source={require('../assets/images/icn_back_header.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text style={styles.text}>Notifications</Text>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          marginTop: 0,
          justifyContent: 'center',
        }}>
        <ActivityIndicator
          animating={!notificationData}
          size="small"
          color="#373737"
        />
      </View>
      <ScrollView  refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
        {notificationData?.map(items => {
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
              notify={async () => {
                const body = {
                  notificationId: items.notificationId,
                };
                const options = {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                };

                try {
                  const response = await axios.put(
                    'http://virtuallearn-env.eba-b8h9bw3u.ap-south-1.elasticbeanstalk.com/user/readNotification',
                    body,
                    options,
                  );

                  if (response.data) {
                    return response.data;
                  }
                } catch (error) {
                  // console.log(error);
                }
              }}
            />
          );
        })}
      </ScrollView>
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
    fontWeight: Platform.OS == 'ios' ? 'bold' : 'normal',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
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
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontSize: 14,
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
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
