import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import {ButtonComponent} from '../components/Buttons';
import {Formik} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import Toast from 'react-native-simple-toast'

export const CreateNewPassword = ({navigation,route}) => {
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


                const obj = {
                  mobileNumber: route.params.obj.mobileNumber,
                  oneTimePassword: values.newpassword,
                };
                console.log(obj);

                try {
                  const response = await axios.post(
                    'http://virtuallearn-env.eba-b8h9bw3u.ap-south-1.elasticbeanstalk.com/resetPassword',
                    obj,
                  );
                  if (
                    response.data.message === 'Password Changed Successfully'
                  ) {
                    navigation.navigate('Password Changed Successfully');
                  }
                } catch (error) {
                   console.log(error.response.data);
                  Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
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
                      <View style={styles.from1}></View>
                    ) : (
                      <View style={styles.form}></View>
                    )}
                    <>
                      {values.newpassword ? (
                        <>
                          <View>
                            <Text style={styles.text}>New Password</Text>
                          </View>
                        </>
                      ) : (
                        <></>
                      )}
                    </>

                      <TextInput
                        name="newpassword"
                        placeholder="New Password"
                        onChangeText={handleChange('newpassword')}
                        onBlur={handleBlur('newpassword')}
                        value={values.password}
                        style={styles.textinput}
                        placeholderTextColor={'#7A7A7A'}
                        secureTextEntry={true}
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
 
                    {!info ? (
                      <>
                        <View>
                          {errors.newpassword && (
                            <Text style={{fontSize: 10, color: 'red'}}>
                              {errors.password}
                            </Text>
                          )}
                        </View>

                        <View>
                          {values.confirmnewpassword ? (
                            <View style={styles.from1}></View>
                          ) : (
                            <View style={styles.form}></View>
                          )}
                          <>
                            {values.confirmnewpassword ? (
                              <Text style={styles.text}>Confirm Password</Text>
                            ) : (
                              <></>
                            )}
                          </>

                          <TextInput
                            name="confirmnewpassword"
                            placeholder="Confirm New Password"
                            placeholderTextColor={'#7A7A7A'}
                            onChangeText={handleChange('confirmnewpassword')}
                            onBlur={handleBlur('confirmnewpassword')}
                            value={values.confirmnewpassword}
                            secureTextEntry={true}
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
                        <View style={[styles.infoBoxView]}>
                          <Text style={styles.infoText1}>
                            Our minimum Reqiurement
                          </Text>
                          <Text style={styles.infoText2}>
                            At least 6 characters long with one number, one
                            uppercase letter, and one lowercase letter.
                          </Text>
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
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
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
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    textAlign: 'center',
  },
  form: {
    marginTop: Platform.OS == 'ios' ? 40 : 30,
  },
  from1: {
    marginTop: Platform.OS == 'ios' ? 14 : 15,
  },
  bottom: {
    marginTop: 10,
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
