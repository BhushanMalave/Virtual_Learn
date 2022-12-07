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
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import {ButtonComponent} from '../components/Buttons';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useSelector, useDispatch} from 'react-redux';
import {mpChangePassword} from '../authorization/Auth';

export const ChangeYourPassword = ({navigation}) => {
  const [info, setInfo] = useState(false);
  const token = useSelector(state => state.userDetails.token);

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
    <SafeAreaView style={styles.container}>
      <KeyboardAwareView animate={true}>
      <View style={styles.body}>
        <ScrollView>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/images/icn_back_header.png')}
              style={styles.image}
            />
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
                currentpassword: '',
                newpassword: '',
                confirmnewpassword: '',
              }}
              onSubmit={async values => {
                const objBody = {
                  currentPassword: values.currentpassword,
                  newPassword: values.newpassword,
                };

                const res = await mpChangePassword(token, objBody);
                console.log(res);
                if (res.message === 'Password Changed Successfully') {
                  navigation.navigate('Profile');
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
                    <View>
                      <>
                        {values.currentpassword ? (
                          <View>
                            <Text style={styles.text}>Current Password</Text>
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
                        secureTextEntry
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
                      secureTextEntry
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
                            secureTextEntry
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
                          style={styles.infoBoxView}>
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
      </KeyboardAwareView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  image: {
    height: 16,
    width: 26,
    marginTop: Platform.OS == 'ios' ? 30 : 30,
    tintColor: '#373737',
  },
  body: {
    flex: 1,
    marginHorizontal: 24,
  },
  textView: {
    marginTop: Platform.OS == 'ios' ? 20 : 15,
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
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova-Regular',
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
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 14,
    letterSpacing: 0.29,
    lineHeight: 17,
  },
  text1: {
    height: 35,
    color: '#2B2B2B',
    fontSize: 26,
    fontWeight:  Platform.OS == 'ios' ? 'bold': 'normal',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
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
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' :'ProximaNova-Regular',
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
    opacity: 0.3,
  },
  formikView: {
    marginTop: 23,
  },
  infoBoxView: {
    marginTop: 2,
    paddingLeft: 20,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    shadowColor: '#25334b',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 12.5,
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
    lineHeight: 15,
  },
});
