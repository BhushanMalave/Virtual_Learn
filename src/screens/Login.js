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
import icn_warning from '../assets/images/05.1_VirtualLearn_Login_error/warning/icn_warning.png';




export const Login = ({navigation}) => {
  const [warning, setWarning] = useState(false);

  const registerValidationScheme = yup.object().shape({
    username: yup.string(),
    // .matches()
    // .required(''),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .min(6, ({min}) => `Password must be at least ${min} characters`)
      .required(''),
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.body}>
        <ScrollView>
          <View style={styles.textView}>
            <Text style={styles.text1}>Welcome Back!</Text>
            <Text style={styles.text2}>
              Easy to learn anytime and anywhere. Login to your account
            </Text>
          </View>
          <View style={styles.imageView}>
            <Image
              source={require('../assets/images/btn_SM_facebook.png')}
              style={styles.images}
            />
            <Image source={require('../assets/images/btn_SM_google.png')} />
          </View>
          <View />
          <View style={styles.textInputBody}>
            <Formik
              validationSchema={registerValidationScheme}
              initialValues={{
                username: '',
                password: '',
              }}
              onSubmit={ async values => {
                console.log(values);
                navigation.navigate('Drawer')

                // const obj ={
                //   "userName"  :   values.username,
                //   "password"  :   values.password,
                // }
               
                // try {
                //   const response = await axios.put(
                //     'https://virtual-learn-app-java.herokuapp.com/Login',
                //      obj,
                //   );
                //   console.log("=====",response.data.message);
                //   if(response.data.message ===   "Verified")
                //   {
                //     navigation.navigate('Drawer')
                //   }
                 
                // } catch (error) {
                //   console.log(error);
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
                      placeholderTextColor={'grey'}
                      onChangeText={handleChange('username')}
                      onBlur={handleBlur('username')}
                      value={values.username}
                      style={styles.textinput}
                    />
                    <View style={styles.bottom}></View>

                    {errors.username && (
                      <Text style={{fontSize: 10, color: 'red'}}>
                        {errors.username}
                      </Text>
                    )}
                  </View>

                  {values.password ? (
                    <View style={styles.from1}></View>
                  ) : (
                    <View style={styles.form}></View>
                  )}
                  <>
                    {values.password ? (
                      <View>
                        <Text style={styles.text}>Password</Text>
                      </View>
                    ) : (
                      <></>
                    )}
                  </>

                  <TextInput
                    name="password"
                    placeholder="Password"
                    placeholderTextColor={'grey'}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    style={styles.textinput}
                  />
                  <View style={styles.bottom}></View>

                  {errors.password && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.password}
                    </Text>
                  )}

                  <View style={styles.forgotPasswoordView}>
                    <TouchableOpacity
                      onPress={() => {
                        console.log('Forgot Password');
                        navigation.navigate('Forgot Password')
                      }}>
                      <Text style={styles.forgotPasswoordStyle}>
                        Forgot password?
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.button}>
                    <ButtonComponent text={'Login'} onPress={handleSubmit} />
                  </View>
                </>
              )}
            </Formik>
            <View style={styles.registerView}>
              <Text style={styles.registerText1}>Don’t have a account?</Text>
              <TouchableOpacity
                onPress={() => {
                  console.log('register screen');
                  navigation.navigate('RegisterStack')
                }}>
                <Text style={styles.registerText2}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      {warning ? (
        <View style={styles.warningView}>
          <Image source={icn_warning} />
          <Text style={styles.warningText}>
            Invalid Login Credentials.please try again
          </Text>
        </View>
      ) : (
        <></>
      )}
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
    color: Platform.OS == 'ios' ? '#042C5C' : '#042C5C',
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
    marginTop: 10,
  },
  text3: {
    height: 40,
    color: '#7A7A7A',
    fontSize: 16,
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    textAlign: 'center',
  },
  text4: {
    marginLeft: 10,
    height: 40,
    color: '#EE5C4D',
    fontSize: 17,
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    marginTop: 2,
    textAlign: 'center',
    marginBottom: Platform.OS == 'ios' ? 0 : 10,
  },
  images: {
    height: 43,
    width: 165,
  },
  form: {
    marginTop: Platform.OS == 'ios' ? 40 : 30,
  },
  from1: {
    marginTop: Platform.OS == 'ios' ? 14 : 15,
  },
  bottom: {
    marginTop: Platform.OS == 'ios' ? 10 : -3,
    borderBottomWidth: 1,
    borderBottomColor: '#7A7A7A',
    opacity: 0.6,
  },
  formikView: {
    marginTop: 23,
  },
  forgotPasswoordView: {
    alignItems: 'flex-end',
    marginVertical: 24,
  },
  forgotPasswoordStyle: {
    height: 17,
    color: '#EE5C4D',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.29,
    lineHeight: 17,
  },
  button: {
    marginTop: 30,
  },
  registerView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 24,
    marginBottom: 20,
  },
  registerText1: {
    height: 20,
    color: '#7A7A7A',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.4,
    lineHeight: 20,
    textAlign: 'center',
    marginRight: 5,
  },
  registerText2: {
    height: 20,
    color: '#EE5C4D',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.4,
    lineHeight: 20,
    textAlign: 'center',
  },
  warningView: {
    height: 54,
    backgroundColor: '#EA2626',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    bottom: 0,
  },
  warningText: {
    color: '#FFFFFF',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 16,
    letterSpacing: 0.4,
    lineHeight: 20,
    marginLeft: 5,
  },
});
