import React, {useState} from 'react';

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
import {ButtonComponent} from '../components/Buttons';
import {Formik} from 'formik';
import * as yup from 'yup';

export const ChangeYourPassword = () => {
  const [info, setInfo] = useState(false);

  const registerValidationScheme = yup.object().shape({
    currentpassword: yup
    .string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .min(6, ({min}) => `Password must be at least ${min} characters`)
    .required(''),
    newpassword: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .min(6, ({min}) => `Password must be at least ${min} characters`)
      .required(''),
    confirmnewpassword: yup
      .string()
      .oneOf([yup.ref('newpassword')], 'Password do not match')
      .required(''),
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.body}>
        <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
         <Image source={require('../assets/images/icn_back_header.png')} style={styles.image}/>
         </TouchableOpacity>
          <View style={styles.textView}>
            <Text style={styles.text1}>Change your Password </Text>
            <Text style={styles.text2}>
              Your password must have at least 6 or more characters
            </Text>
          </View>

          <View style={styles.textInputBody}>
            <Formik
              validationSchema={registerValidationScheme}
              initialValues={{
                currentpassword:'',
                newpassword: '',
                confirmnewpassword: '',
              }}
              onSubmit={values => {
                console.log(values);
                // try{
                //     const obj ={
                //         newpassword:values.newpassword,
                //         confirmnewpassword:values.confirmnewpassword,
                //     }

                // } catch(err){

                // }
              }}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid,
              }) => (
                <>
                  <>

                  <View>
                         
                          <>
                            {values.currentpassword ? (
                              <View>
                                <Text style={styles.text}>
                                  Confirm New Password
                                </Text>
                              </View>
                            ) : (
                              <></>
                            )}
                          </>

                          <TextInput
                            name="currentpassword"
                            placeholder="Current Password"
                            placeholderTextColor={'grey'}
                            onChangeText={handleChange('currentpassword')}
                            onBlur={handleBlur('currentpassword')}
                            value={values.currentpassword}
                            style={styles.textinput}
                          />
                          {values.currentpassword ? (
                    <View style={styles.bottom}></View>
                  ) : (
                    <View style={styles.bottom2}></View>
                  )}

                          {errors.currentpassword && (
                            <Text style={{fontSize: 10, color: 'red'}}>
                              {errors.currentpassword}
                            </Text>
                          )}
                        </View>

                        {values.newpassword ? (
                            <View style={styles.form1}></View>
                          ) : (
                            <View style={styles.form}></View>
                          )}
                    {values.newpassword ? (
                      <View>
                        <Text style={styles.text}>New Password</Text>
                      </View>
                    ) : (
                      <></>
                    )}
                  </>
                  <View>
                    <TextInput
                      name="newpassword"
                      placeholder="New Password"
                      // keyboardType='text'
                      placeholderTextColor={'grey'}
                      onChangeText={handleChange('newpassword')}
                      onBlur={handleBlur('newpassword')}
                      value={values.newpassword}
                      style={styles.textinput}
                    />
                    {values.newpassword ? (
                    <View style={styles.bottom}></View>
                  ) : (
                    <View style={styles.bottom2}></View>
                  )}

                    {errors.newpassword && (
                      <Text style={{fontSize: 10, color: 'red'}}>
                        {errors.newpassword}
                      </Text>
                    )
                      ? (setInfo(true))
                      : (setInfo(false))}
                  </View>

                  <>
                    {!info ? (
                      <>
                        <View>
                          {values.confirmnewpassword ? (
                            <View style={styles.form1}></View>
                          ) : (
                            <View style={styles.form}></View>
                          )}
                          <>
                            {values.confirmnewpassword ? (
                              <View>
                                <Text style={styles.text}>
                                  Confirm New Password
                                </Text>
                              </View>
                            ) : (
                              <></>
                            )}
                          </>

                          <TextInput
                            name="confirmnewpassword"
                            placeholder="Confrim New Password"
                            placeholderTextColor={'grey'}
                            onChangeText={handleChange('confirmnewpassword')}
                            onBlur={handleBlur('confirmnewpassword')}
                            value={values.confirmnewpassword}
                            style={styles.textinput}
                          />
                          {values.confirmnewpassword ? (
                    <View style={styles.bottom}></View>
                  ) : (
                    <View style={styles.bottom2}></View>
                  )}

                          {errors.confirmnewpassword && (
                            <Text style={{fontSize: 10, color: 'red'}}>
                              {errors.confirmnewpassword}
                            </Text>
                          )}
                        </View>
                      </>
                    ) : (
                      <>
                        <View
                          style={{
                            marginTop: 20,
                            borderWidth: 1,
                            borderRadius: 10,
                            padding: 10,
                          }}>
                          <Text style={styles.infoText1}>
                            Our minimum Reqiurement
                          </Text>
                          <View>
                            <Text style={styles.infoText2}>
                              At least 6 characters long with one number, one
                              uppercase letter, and one lowercase letter.
                            </Text>
                          </View>
                        </View>
                        <View style={styles.infobottom}></View>
                      </>
                    )}
                  </>
                  <View style={styles.button}>
                    <ButtonComponent
                      text={'Reset Password'}
                      onPress={handleSubmit}
                    />
                  </View>
                </>
              )}
            </Formik>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
    image:{
        height:16,
        width:26,  
        marginTop:Platform.OS=='ios'? 30:30,
        tintColor:'#373737',
    },
  body: {
    flex: 1,
    marginHorizontal: 24,
  },
  textView: {
    marginTop: Platform.OS== 'ios' ? 20: 15,
  },
  textinputView: {
    height: 40,
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    borderBottomColor: '#7A7A7A',
    marginTop: 60,
    fontSize: 16,
  },
  textInputBody: {
    marginTop: 40,
  },
  textView2: {
    flexDirection: 'row',
    marginHorizontal: 50,
    marginTop: 30,
  },
  button: {
    marginTop: 100,
  },
  imageView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS == 'ios' ? 60 : 60,
  },
  textno: {
    height: 20,
    fontSize: 16,
    fontFamily: 'ProximaNova-Regular',
    textAlign: 'center',
    marginTop: 10,
  },
  textinput: {
    color: '#042C5C',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 16,
    letterSpacing: 0.4,
    lineHeight: 20,
  },
  text: {
    height: 17,
    marginBottom: Platform.OS == 'ios' ? 10 : -2,
    color: '#7A7A7A',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 14,
    letterSpacing: 0.29,
    lineHeight: 17,
  },
  text1: {
    height: 35,
    color: '#2B2B2B',
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'Biko',
  },
  text2: {
    height: 40,
    color: '#7A7A7A',
    fontSize: 16,
    fontFamily: Platform.OS=='ios'? 'Proxima Nova':'ProximaNova',
    marginTop: Platform.OS == 'ios' ? 3 : 13,
  },
  text3: {
    height: 40,
    color: '#7A7A7A',
    fontSize: 16,
    fontFamily: 'ProximaNova-Regular',
    textAlign: 'center',
  },
  form: {
    marginTop: Platform.OS == 'ios' ? 40 : 28,
  },
  form1: {
    marginTop: Platform.OS == 'ios' ? 14 : 15,
  },
  bottom: {
    marginTop: Platform.OS == 'ios' ? 10 : -3,
    borderBottomWidth: 1,
    borderBottomColor: '#042C5C',
  },
  bottom2: {
    marginTop: Platform.OS == 'ios' ? 10 : -3,
    borderBottomWidth: 1,
    borderBottomColor: '#7A7A7A',
    opacity: 0.6,
  },
  formikView: {
    marginTop: 23,
  },
  infoText1: {
    height: 15,
    // width: 135,
    color: '#042C5C',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 12,
    lineHeight: 15,
  },
  infoText2: {
    height: 30,
    // width: 306,
    color: '#7A7A7A',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 10,
    // lineHight: 15,
  },
  infobottom: {
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#7A7A7A',
    opacity: 0.6,
    marginBottom: 8,
  },
});
