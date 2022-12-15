import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  TextInput,
} from 'react-native';
import {KeyboardAwareView} from 'react-native-keyboard-aware-view';
import {Formik} from 'formik';
import * as yup from 'yup';
import {ButtonComponent} from '../components/Buttons';
import axios from 'axios';
import {setUserData} from '../redux/ReduxPersist/UserDetails';
import {useDispatch} from 'react-redux';
import Toast from 'react-native-simple-toast'

export const PersonalDetails = ({navigation,route}) => {
  const [info, setInfo] = useState(false);
  const mobileNumber = route.params.mobileNumber;
  const dispatch = useDispatch();

  const registerValidationScheme = yup.object().shape({
    fullname: yup
      .string()
      .matches(/(\w.+\s).+/, 'Enter at least 2 names')
      .required(''),
    username: yup.string(),
    email: yup.string().email('invalid email').required(''),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .min(6, ({min}) => `Password must be at least ${min} characters`)
      .required(''),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Password do not match')
      .required(''),
  });
  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <KeyboardAwareView animated={true}>
        <ScrollView
          style={{
            backgroundColor: Platform.OS == 'ios' ? '#FFFFFF' : '#FFFFFF',
          }}>
          <View style={styles.container}>
            <View>
              <Text style={styles.header}>Personal Details</Text>
              <Text style={styles.headertext}>
                Please fill out the feilds below so we can learn some
                information about you.
              </Text>
            </View>

            <View style={styles.numView}>
              <Text style={styles.text}>Moblie number</Text>
              <Text style={styles.number}>+91{mobileNumber}</Text>
            </View>

            <View>
              <Formik
                validationSchema={registerValidationScheme}
                initialValues={{
                  fullname: '',
                  username: '',
                  email: '',
                  password: '',
                  confirmpassword: '',
                }}
                onSubmit={async values => {

                  const obj = {
                    mobileNumber: `+91${mobileNumber}`,
                    fullName: values.fullname,
                    userName: values.username,
                    email: values.email,
                    password: values.password,
                  };
                  console.log(obj);
                  
                  const userData = {
                    profilePhoto: null,
                    fullName: values.fullname,
                    userName: values.username,
                    email: values.email,
                    mobileNumber:`+91${mobileNumber}`,
                    occupation: null,
                    gender: null,
                    dateOfBirth: null,
                    twitterLink: null,
                    faceBookLink: null,
                  };
                  dispatch(setUserData(userData));

                  try {
                    const response = await axios.post(
                      'http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/newUser/register',
                      obj,
                    );
                    console.log('=====', response.data.message);
                    Toast.show(response.data.message, Toast.SHORT);
                    if (response.data.message === 'User Created') {
                      navigation.navigate('Registration Successfull');
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
                    <View style={styles.formikView}>
                      {values.fullname ? (
                        <View style={styles.from1}></View>
                      ) : (
                        <View style={styles.form}></View>
                      )}

                      <View>
                        <>
                          {values.fullname ? (
                            <View>
                              <Text style={styles.text}>Full name</Text>
                            </View>
                          ) : (
                            <></>
                          )}
                        </>
                        <View>
                          <TextInput
                            name="fullname"
                            placeholder="Full name"
                            placeholderTextColor={'#7A7A7A'}
                            onChangeText={handleChange('fullname')}
                            onBlur={handleBlur('fullname')}
                            value={values.fullname}
                            style={styles.textinput}
                          />
                          {values.fullname ? (
                            <View style={styles.bottom}></View>
                          ) : (
                            <View style={styles.bottom2}></View>
                          )}

                          {errors.fullname && (
                            <Text style={{fontSize: 10, color: 'red'}}>
                              {errors.fullname}
                            </Text>
                          )}
                        </View>

                        {values.username ? (
                          <View style={styles.from1}></View>
                        ) : (
                          <View style={styles.form}></View>
                        )}
                        <>
                          {values.username ? (
                            <View>
                              <Text style={styles.text}>Username</Text>
                            </View>
                          ) : (
                            <></>
                          )}
                        </>
                        <View>
                          <TextInput
                            name="Username"
                            placeholder="Username"
                            keyboardType='default'
                            placeholderTextColor={'#7A7A7A'}
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                            value={values.username}
                            style={styles.textinput}
                          />
                          {values.username ? (
                            <View style={styles.bottom}></View>
                          ) : (
                            <View style={styles.bottom2}></View>
                          )}
                          {errors.username && (
                            <Text style={{fontSize: 10, color: 'red'}}>
                              {errors.username}
                            </Text>
                          )}
                        </View>

                        <View>
                          {values.email ? (
                            <View style={styles.from1}></View>
                          ) : (
                            <View style={styles.form}></View>
                          )}
                          <>
                            {values.email ? (
                              <View>
                                <Text style={styles.text}>Email</Text>
                              </View>
                            ) : (
                              <></>
                            )}
                          </>

                          <TextInput
                            name="email"
                            placeholder="Email"
                            keyboardType='email-address'
                            placeholderTextColor={'#7A7A7A'}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            style={styles.textinput}
                          />
                          {values.email ? (
                            <View style={styles.bottom}></View>
                          ) : (
                            <View style={styles.bottom2}></View>
                          )}
                          {errors.email && (
                            <Text style={{fontSize: 10, color: 'red'}}>
                              {errors.email}
                            </Text>
                          )}
                        </View>

                        {values.password ? (
                          <View style={styles.from1}></View>
                        ) : (
                          <View style={styles.form3}></View>
                        )}
                        <>
                          {values.password ? (
                            <>
                              <View>
                                <Text style={styles.text}>Password</Text>
                              </View>
                            </>
                          ) : (
                            <></>
                          )}
                        </>
                        <View
                          style={{
                            flexDirection: 'row',alignItems:'center'
                          }}>
                          <TextInput
                            name="password"
                            placeholder="Password"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            style={styles.textinput1}
                            placeholderTextColor={'#7A7A7A'}
                          />
                          {values.password ? (
                            <>
                            {setInfo(false)}
                            </>
                          ) : (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setInfo(!info);
                                }}
                                style={styles.infoView}>
                                <Image
                                  source={require('../assets/images/btn_info.png')}
                                  style={styles.info}
                                />
                              </TouchableOpacity>
                            </>
                          )}
                        </View>
                        {!info ? (
                          <>
                            <View>
                              {values.password ? (
                                <View style={styles.bottom}></View>
                              ) : (
                                <View style={styles.bottom2}></View>
                              )}
                              {errors.password && (
                                <Text style={{fontSize: 10, color: 'red'}}>
                                  {errors.password}
                                </Text>
                              )}
                            </View>

                            <View>
                              {values.confirmpassword ? (
                                <View style={styles.from1}></View>
                              ) : (
                                <View style={styles.form}></View>
                              )}
                              <>
                                {values.confirmpassword ? (
                                  <Text style={styles.text}>
                                    Confirm Password
                                  </Text>
                                ) : (
                                  <></>
                                )}
                              </>

                              <TextInput
                                name="confirm password"
                                placeholder="Confirm password"
                                placeholderTextColor={'#7A7A7A'}
                                onChangeText={handleChange('confirmpassword')}
                                onBlur={handleBlur('confrmpassword')}
                                value={values.confirmpassword}
                                style={styles.textinput}
                              />
                            </View>
                          </>
                        ) : (
                          <>
                            <View style={[styles.infoBoxView]}>
                                <Text style={styles.infoText1}>
                                  Our minimum Reqiurement
                                </Text>
                                <Text style={styles.infoText2}>
                                  At least 6 characters long with one number,
                                  one uppercase letter, and one lowercase
                                  letter.
                                </Text>
                            </View>
                         
                          </>
                        )}
                              {values.confirmpassword ? (
                                <View style={styles.bottom}></View>
                              ) : (
                                <View style={styles.bottom2}></View>
                              )}
                              {errors.confirmpassword && (
                                <Text style={{fontSize: 10, color: 'red'}}>
                                  {errors.confirmpassword}
                                </Text>
                              )}
                      </View>
                      <View style={styles.button}>
                        <ButtonComponent
                          text={'Register'}
                          onPress={handleSubmit}
                          disable={!isValid}
                        />
                      </View>
                    </View>
                  </>
                )}
              </Formik>
            </View>
          </View>
        </ScrollView>
      </KeyboardAwareView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 24,
    marginTop: 50,
  },
  header: {
    height: 35,
    color: '#2B2B2B',
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
    fontSize: 26,
  },
  headertext: {
    height: 40,
    color: '#7A7A7A',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova-Regular',
    fontSize: 16,
    lineHeight: 20,
    marginTop: Platform.OS == 'ios' ? 0 : 10,
  },
  numView: {
    marginTop: 30,
  },
  text: {
    height: 17,
    marginBottom: Platform.OS == 'ios' ? 10 : -2,
    color: Platform.OS == 'ios' ? '#7A7A7A' : '#7A7A7A',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 14,
    letterSpacing: 0.29,
    lineHeight: 17,
  },
  number: {
    height: 24,
    color: '#2BB5F4',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 20,
    letterSpacing: 0.5,
    lineHeight: 24,
    marginTop: Platform.OS == 'ios' ? 0 : 15,
  },

  textinput: {
    color: Platform.OS == 'ios' ? '#042C5C' : '#042C5C',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova-Regular',
    fontSize: 16,
    letterSpacing: 0.4,
    lineHeight: 20,
  },
  textinput1: {
    color: Platform.OS == 'ios' ? '#042C5C' : '#042C5C',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova-Regular',
    fontSize: 16,
    letterSpacing: 0.4,
    lineHeight: 20,
    paddingRight:10,
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
    marginTop: Platform.OS == 'ios' ? 23 : 20,
  },
  from1: {
    marginTop: Platform.OS == 'ios' ? 14 : 15,
  },

  form: {
    marginTop: Platform.OS == 'ios' ? 40 : 30,
  },
  form3: {
    marginTop: 30,
  },
  button: {
    marginTop: 50,
  },
  infoView: {
    width: 18,
    alignItems:'center',
  },
  info: {
    height: 12,
    width: 12,
  },
  infoBoxView: {
    marginTop: 2,
    paddingLeft: 20,
    paddingVertical:12,
    backgroundColor: '#FFFFFF',
    shadowColor: '#25334b',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 12.5,
    marginBottom: Platform.OS == 'ios' ? 0 :12
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
  infobottom: {
    marginTop: 15,
    borderBottomWidth: 1,
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    opacity: 0.3,
    borderBottomColor: '#7A7A7A',
    // marginBottom: 8,
  },
});
