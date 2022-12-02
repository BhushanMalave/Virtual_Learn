import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {termsAndConditions} from '../authorization/Auth';
import { ActivityIndicator } from 'react-native';
export const TermServicesScreen = ({navigation}) => {
  const [data, setData] = useState('');

  const call = async () => {
    const res = await termsAndConditions();
    setData(res);
  };
  useEffect(() => {
    call();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={require('../assets/images/icn_back_header.png')}
          style={styles.backbutton}
        />
      </TouchableOpacity>
      <Text style={styles.text}>Terms of Services</Text>
      {data?(<></>):(
        <View style={{  flex: 1,alignItems:"center",marginTop:50,
        justifyContent: "center"}}>
                <ActivityIndicator animating={!data} size="small" color="#373737"/>
                </View>
      )}
      <View style={styles.description}>
        <Text style={styles.text1}>{data}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
  },
  backbutton: {
    marginTop: 30,
  },
  text: {
    height: 35,
    color: '#2B2B2B',
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
    fontSize: 26,
    letterSpacing: 0,
    lineHeight: 35,
    marginTop: 15,
  },
  description: {
    marginTop: 15,
  },
  text1: {
    color: '#7A7A7A',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 20,
    marginBottom: 17,
  },
});
