import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';

export const NotificationsComponentUnseen = props => {
  const notify = props.notify;

  useEffect(() => {
    notify();
  }, []);
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.view}>
        <View style={styles.viewin}>
          <Image source={{uri: props?.img}} style={styles.imageinc} />
          <View style={styles.viewtext}>
            <Text style={styles.text2}>{props?.desc}</Text>
            <Text style={styles.text3}>{props?.time}</Text>
          </View>
          <View style={styles.borderpoint1} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const NotificationsComponentSeen = props => {
  return (
    <View style={styles.viewin}>
      <Image source={{uri: props?.img}} style={styles.imageinc} />
      <View style={styles.viewtext}>
        <Text style={styles.text2}>{props?.desc}</Text>
        <Text style={styles.text3}>{props?.time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 16,
    width: 26,
    marginTop: 25,
    marginLeft: 24,
    tintColor: '#373737',
  },
  text: {
    fontWeight:  Platform.OS == 'ios' ? 'bold': 'normal',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
    fontSize: 26,
    height: 35,
    color: '#2B2B2B',
    marginLeft: 24,
    marginTop: 20,
    marginBottom: 30,
  },
  view: {
    height: 115,
    backgroundColor: '#F0F6FB',
    marginTop: 4,
  },
  viewin: {
    height: 73,
    marginLeft: 24,
    marginRight: 65,
    marginVertical: 22,
    flexDirection: 'row',
  },
  imageinc: {
    height: 24,
    width: 24,
  },
  text2: {
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 30,
    color: 'black',
  },
  text3: {
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
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
