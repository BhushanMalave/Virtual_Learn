import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {Formik} from 'formik';
import * as yup from 'yup';
let valueGender = '';
let valueOccupation = '';
import icn_dropdown from '../assets/images/icn_dropdown.png';
import icn_back_header from '../assets/images/icn_back_header.png';

import {ButtonComponent} from '../components/Buttons';

import ImagePicker from 'react-native-image-crop-picker';
import DropDownField from './../components/DropDownField';

import {TextInputComp} from '../components/TextInputComp';

const data = {
  fullname: 'Mahendra Singh Dhoni',
  username: 'Msdian',
  email: 'msd07@gamil.com',
  mobilenumber: '9876543211',
  occupation: 'Design',
  gender: 'Female',
};
import {useSelector, useDispatch} from 'react-redux';
import {setUserData} from '../redux/ThunkToolkit/MyProfileApiCall/myProfileUserDetails';
import {mpChangeUserData} from '../authorization/Auth';
import {mpUserDetails} from '../redux/ThunkToolkit/MyProfileApiCall/myProfileUserDetails';
export const EditProfile = ({navigation}) => {
  const genderData = [
    {key: 'Female', value: 'Female'},
    {key: 'Male', value: 'Male'},
  ];
  const occupationData = [
    {key: 'design', value: 'design'},
    {key: 'development', value: 'development'},
    {key: 'music', value: 'music'},
  ];

  const [selected, setSelected] = useState();
  const [selectedOccu, setSelectedOccu] = useState();
  const [genderState, serGenderState] = useState(false);
  const [occupationState, setOccupationState] = useState(false);
  const [text, setText] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const dispatch = useDispatch();
  const token = useSelector(state => state.userDetails.token);
  const userData = useSelector(state => state.userData.data);
  const [image, setImage] = useState(userData?.profilePhoto);

  const changeProfileImageFromLibrary = () => {
    ImagePicker.openPicker({
      width: 110,
      height: 110,
      cropping: true,
    }).then(img => {
      // console.log(img);
      setImage(img.path);
      const {filename, mime, path} = img;
      setProfilePhoto({filename, mime, path});
      // console.log('--9090---', profilePhoto);
    });
  };
  const changeProfileImageFromCamera = () => {
    ImagePicker.openCamera({
      width: 110,
      height: 110,
      cropping: true,
    }).then(img => {
      setImage(img.path);
      const {filename, mime, path} = img;
      setProfilePhoto({filename, mime, path});
    });
  };

  const createFromData = obj => {
    let formData = new FormData();
    for (let key in obj) {
      if (key === 'profilePhoto') {
        const imageData = obj[key];
        formData.append('profilePhoto', {
          uri: imageData.path,
          type: imageData.mime,
          name: `${imageData.filename}.${imageData.mime.substr(
            imageData.mime.indexOf('/') + 1,
          )}`,
        });
      } else {
        formData.append(`${key}`, `${obj[key]}`);
      }
    }
    return formData;
  };

  useEffect(() => {
    dispatch(mpUserDetails(token));
    // console.log(userData);
  }, []);
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <ImageBackground
          source={{uri: image}}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.imageBlur}>
            <View style={styles.imageContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Image source={icn_back_header} style={styles.back} />
              </TouchableOpacity>

              <Text style={styles.editText}>Edit Profile</Text>

              <View style={{alignItems: 'center', marginTop: 30}}>
                <Image
                  source={{uri: image}}
                  style={{
                    height: 110,
                    width: 110,
                    marginRight: 40,
                    borderRadius: 6,
                  }}
                />
                <TouchableOpacity
                  onPress={() => changeProfileImageFromCamera()}>
                  <Image
                    source={require('../assets/images/icn_changeprofilepic.png')}
                    style={{
                      height: 30,
                      width: 30,
                      marginTop: -25,
                      marginLeft: 45,
                    }}
                  />
                </TouchableOpacity>
              </View>

              <View style={{alignItems: 'flex-end', marginRight: 16}}>
                <TouchableOpacity
                  onPress={() => changeProfileImageFromLibrary()}>
                  <Text style={styles.changeText}>Change image</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>

        <SafeAreaView>
          <View style={styles.container}>
            <Formik
              initialValues={{
                fullname: userData?.fullName,
                username: userData?.userName,
                email: userData?.email,
                mobilenumber: userData?.mobileNumber,
                occupation: userData?.occupation,
                gender: userData?.gender,
                dateofbirth: userData?.dateOfBirth,
                twitterlink: userData?.twitterLink,
                facebooklink: userData?.faceBookLink,
              }}
              onSubmit={async values => {
                {
                  if (selected) {
                    valueGender = selected;
                  } else {
                    valueGender = userData?.gender;
                  }
                }

                {
                  if (selectedOccu) {
                    valueOccupation = selectedOccu;
                  } else {
                    valueOccupation = userData?.occupation;
                  }
                }
                const formBody = createFromData({
                  profilePhoto: profilePhoto,
                  userName: userData?.userName,
                  occupation: valueOccupation,
                  gender: valueGender,
                  dateofBirth: values?.dateofbirth,
                  twtterLink: values?.twitterlink,
                  faceBookLink: values?.facebooklink,
                });
                // const data = {
                //   profilePhoto: image,
                //   fullName: userData?.fullName,
                //   userName: userData?.userName,
                //   email: userData?.userName,
                //   mobileNumber: userData?.mobileNumber,
                //   occupation: valueOccupation,
                //   gender: valueGender,
                //   dateofBirth: values.dateofbirth,
                //   twtterLink: values.twitterlink,
                //   faceBookLink: values.facebooklink,
                // };
                const res = await mpChangeUserData(token, formBody);
                console.log(res);
                if (res == 200) {
                  // dispatch(setUserData(data));

                  navigation.navigate('Profile');
                }
              }}>
              {({handleChange, handleBlur, handleSubmit, values, errors}) => (
                <View>
                  <TextInputComp
                    name={'fullname'}
                    editable={false}
                    value={values.fullname}
                    text="Full Name"
                  />

                  <TextInputComp
                    name={'username'}
                    editable={false}
                    value={values.username}
                    text="User Name"
                  />

                  <TextInputComp
                    name={'email'}
                    editable={false}
                    value={values.email}
                    text="Email"
                  />

                  <TextInputComp
                    name={'mobilenumber'}
                    editable={false}
                    value={values.mobilenumber}
                    text="Moblie Number"
                  />

                  {occupationState ? (
                    <>
                      {selectedOccu ? (
                        <View style={styles.dropDownForm1}></View>
                      ) : (
                        <View style={styles.dropDownForm}></View>
                      )}
                      {selectedOccu ? (
                        <View>
                          <Text style={styles.dropDownTopText}>Occupation</Text>
                        </View>
                      ) : (
                        <></>
                      )}
                      <DropDownField
                        text={data.occupation}
                        name="Occupation"
                        onChangeText={handleChange('occupation')}
                        onBlur={handleBlur('occupation')}
                        data={occupationData}
                        setSelected={setSelectedOccu}
                        value={selectedOccu}
                        placeholder="Occupation"
                      />

                      {selectedOccu ? (
                        <View style={styles.dropDownBottom}></View>
                      ) : (
                        <View style={styles.dropDownBottom2}></View>
                      )}
                    </>
                  ) : (
                    <>
                      {values.occupation ? (
                        <View style={styles.form1}></View>
                      ) : (
                        <View style={styles.form}></View>
                      )}

                      {values.occupation ? (
                        <View>
                          <Text style={styles.text}>Occupation</Text>
                        </View>
                      ) : (
                        <></>
                      )}
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <TextInput
                          name="occupation"
                          editable={false}
                          placeholder="Occupation"
                          placeholderTextColor={'#7A7A7A'}
                          value={values.occupation}
                          style={styles.textinput}
                        />
                        <TouchableOpacity
                          onPress={() => setOccupationState(true)}>
                          <Image source={icn_dropdown} />
                        </TouchableOpacity>
                      </View>
                      {values.occupation ? (
                        <View style={styles.bottom}></View>
                      ) : (
                        <View style={styles.bottom2}></View>
                      )}
                    </>
                  )}

                  {genderState ? (
                    <>
                      {selected ? (
                        <View style={styles.dropDownForm1}></View>
                      ) : (
                        <View style={styles.dropDownForm}></View>
                      )}
                      {selected ? (
                        <View>
                          <Text style={styles.dropDownTopText}>Gender</Text>
                        </View>
                      ) : (
                        <></>
                      )}

                      <DropDownField
                        text="Gender"
                        name="Gender"
                        onChangeText={handleChange('gender')}
                        onBlur={handleBlur('gender')}
                        data={genderData}
                        setSelected={setSelected}
                        value={selected}
                        placeholder="Gender"
                      />

                      {selected ? (
                        <View style={styles.dropDownBottom}></View>
                      ) : (
                        <View style={styles.dropDownBottom2}></View>
                      )}
                    </>
                  ) : (
                    <>
                      {values.gender ? (
                        <View style={styles.form1}></View>
                      ) : (
                        <View style={styles.form}></View>
                      )}

                      {values.gender ? (
                        <View>
                          <Text style={styles.text}>Gender</Text>
                        </View>
                      ) : (
                        <></>
                      )}
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <TextInput
                          name="gender"
                          placeholder="Gender"
                          placeholderTextColor={'#7A7A7A'}
                          editable={false}
                          value={values.gender}
                          style={styles.textinput}
                        />
                        <TouchableOpacity onPress={() => serGenderState(true)}>
                          <Image source={icn_dropdown} />
                        </TouchableOpacity>
                      </View>
                      {values.gender ? (
                        <View style={styles.bottom}></View>
                      ) : (
                        <View style={styles.bottom2}></View>
                      )}
                    </>
                  )}
                  <TextInputComp
                    name={'dateofbirth'}
                    value={values.dateofbirth}
                    text="Date Of Birth"
                    placeholder="Date Of Birth"
                    placeholderTextColor={'#7A7A7A'}
                    onChangeText={handleChange('dateofbirth')}
                  />

                  <TextInputComp
                    name={'twitterlink'}
                    value={values.twitterlink}
                    text="Twitter Link"
                    placeholder="Twitter Link"
                    placeholderTextColor={'#7A7A7A'}
                    onChangeText={handleChange('twitterlink')}
                  />

                  <TextInputComp
                    name={'facebooklink'}
                    value={values.facebooklink}
                    text="Facebook Link"
                    placeholder="Facebook Link"
                    placeholderTextColor={'#7A7A7A'}
                    onChangeText={handleChange('facebooklink')}
                  />

                  <View style={styles.buttonContainer}>
                    <ButtonComponent
                      text={'Submit'}
                      onPress={() => handleSubmit()}
                    />
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: '100%',
  },
  imageBlur: {
    backgroundColor: '#042C5C',
    opacity: 0.7,
    paddingBottom: 10,
  },
  imageContainer: {
    marginLeft: 24,
  },
  scrollview: {
    flex: 1,
  },
  container: {
    marginHorizontal: 24,
    marginTop: 30,
  },
  back: {
    height: 14,
    width: 22,
    marginTop: 60,
    marginLeft: 4,
    tintColor: 'white',
  },
  editText: {
    marginTop: 20,
    height: 35,
    color: '#FFFFFF',
    fontFamily: 'Biko',
    fontSize: 26,
    fontWeight: 'bold',
    lineHeight: 35,
  },
  changeText: {
    height: 17,
    color: '#EE5C4D',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.35,
    lineHeight: 17,
    textAlign: 'center',
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
  textinput: {
    color: Platform.OS == 'ios' ? '#042C5C' : '#042C5C',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 16,
    letterSpacing: 0.4,
    lineHeight: 20,
    fontWeight: '600',
    // borderWidth:1,
    width: '95%',
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
  form1: {
    marginTop: Platform.OS == 'ios' ? 14 : 15,
  },

  form: {
    marginTop: Platform.OS == 'ios' ? 40 : 30,
  },
  buttonContainer: {
    marginTop: 30,
    marginBottom: 10,
  },
  dropDownTopText: {
    height: 17,
    marginBottom: Platform.OS == 'ios' ? 0 : 0,
    color: Platform.OS == 'ios' ? '#7A7A7A' : '#7A7A7A',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 14,
    letterSpacing: 0.29,
    lineHeight: 17,
  },
  dropDownBottom: {
    marginTop: Platform.OS == 'ios' ? 0 : 0,
    borderBottomWidth: 1,
    borderBottomColor: '#042C5C',
  },
  dropDownBottom2: {
    marginTop: Platform.OS == 'ios' ? 0 : 0,
    borderBottomWidth: 1,
    borderBottomColor: '#7A7A7A',
    opacity: 0.6,
  },
  dropDownForm1: {
    marginTop: Platform.OS == 'ios' ? 14 : 15,
  },

  dropDownForm: {
    marginTop: Platform.OS == 'ios' ? 30 : 20,
  },
});
