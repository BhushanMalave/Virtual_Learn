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

import {Formik} from 'formik';
import * as yup from 'yup';

import {ButtonComponent} from '../components/Buttons';
import axios from 'axios';
import { setUserData } from '../redux/ReduxPersist/UserDetails';
import { useDispatch } from 'react-redux';

export const PersonalDetails = ({navigation}) => {
  const [info, setInfo] = useState(false);
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
    <SafeAreaView style={{backgroundColor: '#FFFFFF'}}>
      <ScrollView
        style={{backgroundColor: Platform.OS == 'ios' ? '#FFFFFF' : '#FFFFFF'}}>
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>Personal Details</Text>
            <Text style={styles.headertext}>
              Please fill out the feilds below so we can learn some information
              about you.
            </Text>
          </View>

          <View style={styles.numView}>
            <Text style={styles.text}>Moblie number</Text>
            <Text style={styles.number}>+919876543211</Text>
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
                console.log(values);

                const obj = {
                  mobileNumber: '+919591726087',
                  fullName: values.fullname,
                  userName: values.username,
                  email: values.email,
                  password: values.password,
                };
                const userData = {
                  profilePhoto:null,
                  fullName: values.fullname,
                  userName:values.username,
                  email:values.email,
                  mobileNumber:'9591726087',
                  occupation:null,
                  gender:null,
                  dateOfBirth:null,
                  twitterLink:null,
                  faceBookLink:null,
               }
               dispatch(setUserData(userData));

                try {
                  const response = await axios.post(
                    'https://virtual-learn-app-java.herokuapp.com/register',
                    obj,
                  );
                  console.log('=====', response.data.message);
                  if (response.data.message === 'User Created') {
                    navigation.navigate('Registration Successfull');
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
                          placeholder="FullName"
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
                          // keyboardType='text'
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
                          // keyboardType='text'
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
                          <View>
                            <Text style={styles.text}>Password</Text>
                          </View>
                        ) : (
                          <>
                            <View
                              style={{
                                flexDirection: 'row',
                                marginBottom: Platform.OS == 'ios' ? 0 : -5,
                              }}>
                              <View style={{marginHorizontal: 42}}></View>
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
                            </View>
                          </>
                        )}
                      </>

                      {!info ? (
                        <>
                          <View>
                            <TextInput
                              name="password"
                              placeholder="Password"
                              // keyboardType='text'
                              // placeholderTextColor={'#7A7A7A'}
                              onChangeText={handleChange('password')}
                              onBlur={handleBlur('password')}
                              value={values.password}
                              style={styles.textinput}
                            />
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
                              placeholder="confirm Password"
                              // keyboardType='text'
                              placeholderTextColor={'#7A7A7A'}
                              onChangeText={handleChange('confirmpassword')}
                              onBlur={handleBlur('confrmpassword')}
                              value={values.confirmpassword}
                              style={styles.textinput}
                            />
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
                    </View>

                    <View style={styles.button}>
                      <ButtonComponent
                        text={'Register'}
                        onPress={handleSubmit}
                      />
                    </View>
                  </View>
                </>
              )}
            </Formik>
          </View>
        </View>
      </ScrollView>
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
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Black',
    fontSize: 26,
    fontWeight: 'bold',
  },
  headertext: {
    height: 40,
    color: '#7A7A7A',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
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
    fontFamily: 'Proxima Nova',
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
    fontFamily: 'ProximaNova-Regular',
    fontSize: 16,
    letterSpacing: 0.4,
    lineHeight: 20,
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
    width: 14,
  },
  info: {
    height: 12,
    width: 12,
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
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    opacity: 0.6,
    marginBottom: 8,
  },
});
