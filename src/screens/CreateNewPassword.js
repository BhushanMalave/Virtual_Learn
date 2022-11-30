import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
} from 'react-native';
import {ButtonComponent} from '../components/Buttons';
import {Formik} from 'formik';
import * as yup from 'yup';
import axios from 'axios';

export const CreateNewPassword = ({navigation}) => {
  const [info, setInfo] = useState(false);

  const registerValidationScheme = yup.object().shape({
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
          <View style={styles.textView}>
            <Text style={styles.text1}>Create New Password </Text>
            <Text style={styles.text2}>
              Your password must have at least 6 or more characters
            </Text>
          </View>

          <View style={styles.textInputBody}>
            <Formik
              validationSchema={registerValidationScheme}
              initialValues={{
                newpassword: '',
                confirmnewpassword: '',
              }}
              onSubmit={async values => {
                console.log(values);

                const obj = {
                  mobileNumber: '+917795287943',
                  oneTimePassword: values.newpassword,
                };
                console.log(obj);

                try {
                  const response = await axios.post(
                    'https://virtual-learning-app-java.herokuapp.com/resetPassword',
                    obj,
                  );
                  console.log('=====', response.data.message);
                  if (
                    response.data.message === 'Password Changed Successfully'
                  ) {
                    navigation.navigate('Password Changed Successfully');
                  }
                } catch (error) {
                  console.log(error);
                }
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
                    <View style={styles.bottom}></View>

                    {errors.newpassword && (
                      <Text style={{fontSize: 10, color: 'red'}}>
                        {errors.newpassword}
                      </Text>
                    )
                      ? setInfo(true)
                      : setInfo(false)}
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
                          <View style={styles.bottom}></View>

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
  body: {
    flex: 1,
    marginHorizontal: 24,
  },
  textView: {
    marginTop: 50,
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
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
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
    marginBottom: 10,
    color: '#7A7A7A',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
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
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    marginTop: Platform.OS == 'ios' ? 3 : 13,
  },
  text3: {
    height: 40,
    color: '#7A7A7A',
    fontSize: 16,
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    textAlign: 'center',
  },
  form: {
    marginTop: 40,
  },
  form1: {
    marginTop: 14,
  },
  bottom: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#7A7A7A',
    opacity: 0.6,
  },
  formikView: {
    marginTop: 23,
  },
  infoText1: {
    height: 15,
    color: '#042C5C',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 12,
    lineHeight: 15,
  },
  infoText2: {
    height: 30,
    color: '#7A7A7A',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 10,
  },
  infobottom: {
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#7A7A7A',
    opacity: 0.6,
    marginBottom: 8,
  },
});
