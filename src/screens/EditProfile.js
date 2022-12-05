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
import {KeyboardAwareView} from 'react-native-keyboard-aware-view';
import {Formik} from 'formik';
let valueGender = '';
let valueOccupation = '';
import icn_dropdown from '../assets/images/icn_dropdown.png';
import icn_back_header from '../assets/images/icn_back_header.png';
import {ButtonComponent} from '../components/Buttons';
import ImagePicker from 'react-native-image-crop-picker';
import {TextInputComp} from '../components/TextInputComp';
import {useSelector, useDispatch} from 'react-redux';
import {mpChangeUserData} from '../authorization/Auth';
import {mpUserDetails} from '../redux/ThunkToolkit/MyProfileApiCall/myProfileUserDetails';
import {getOccupationData} from '../authorization/Auth';


export const EditProfile = ({navigation}) => {
  const genderData = [
    {genderId: 1, genderName: 'Female'},
    {genderId: 2, genderName: 'Male'},
  ];
  const [occupationData, setOccupationData] = useState(null);
  const [selected, setSelected] = useState();
  const [selectedOccu, setSelectedOccu] = useState();
  const [genderState, setGenderState] = useState(false);
  const [occupationState, setOccupationState] = useState(false);
  const [text, setText] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(userData?.profilePhoto);
  const token = useSelector(state => state.userDetails.token);
  const userData = useSelector(state => state.userData.data);
  const [image, setImage] = useState(userData?.profilePhoto);
  const changeProfileImageFromLibrary = () => {
    ImagePicker.openPicker({
      width: 110,
      height: 110,
      cropping: true,
    }).then(img => {
      setImage(img.path);
      const {filename, mime, path} = img;
      setProfilePhoto({filename, mime, path});
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
    
    const occupation = async () => {
      const res = await getOccupationData(token);
      setOccupationData(res);
    };
    
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(mpUserDetails(token));
      occupation();
      // console.log(userData);
    }, []);
    return (
      <View style={{flex: 1}}>
      <KeyboardAwareView>
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

                <View style={styles.imageProfileView}>
                  <Image source={{uri: image}} style={styles.impageProfile} />
                  <TouchableOpacity
                    onPress={() => changeProfileImageFromCamera()}>
                    <Image
                      source={require('../assets/images/icn_changeprofilepic.png')}
                      style={styles.iconChangeProfilePic}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.changeImageTextView}>
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
                    occupation: valueOccupation,
                    gender: valueGender,
                    dateOfBirth: values?.dateofbirth,
                    twitterLink: values?.twitterlink,
                    faceBookLink: values?.facebooklink,
                  });
                  console.log(formBody);
                  const res = await mpChangeUserData(token, formBody);
                  // dispatch(setRemoveData());
                  if (res == 200) {   
                    console.log(res)
                    navigation.navigate('Profile');
                    // console.log(userData)
                  }
                }}>
                {({handleChange, handleSubmit, values}) => (
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

                    {values.occupation || selectedOccu ? (
                      <View style={styles.form1}></View>
                    ) : (
                      <View style={styles.form}></View>
                    )}

                    {values.occupation || selectedOccu ? (
                      <View>
                        <Text style={styles.text}>Occupation</Text>
                      </View>
                    ) : (
                      <></>
                    )}
                    <View style={styles.textInputView}>
                      <TextInput
                        name="occupation"
                        editable={false}
                        placeholder="Occupation"
                        placeholderTextColor={'#7A7A7A'}
                        value={selectedOccu ? selectedOccu : values.occupation}
                        style={styles.textinput}
                      />
                      {occupationState ? (
                        <>
                          <TouchableOpacity
                            onPress={() => {
                              setOccupationState(false);
                            }}
                            style={{
                              padding: 5,
                            }}>
                            <View>
                              <Image
                                source={require('../assets/images/icn_close_filter.png')}
                                style={{tintColor: 'black'}}
                              />
                            </View>
                          </TouchableOpacity>
                        </>
                      ) : (
                        <TouchableOpacity
                          onPress={() => {
                            setOccupationState(true);
                          }}
                          style={{
                            padding: 5,
                          }}>
                          <View>
                            <Image
                              style={{tintColor: '#042C5C'}}
                              source={icn_dropdown}
                            />
                          </View>
                        </TouchableOpacity>
                      )}
                    </View>
                    {values.occupation || selectedOccu ? (
                      <View style={styles.bottom}></View>
                    ) : (
                      <View style={styles.bottom2}></View>
                    )}
                    {occupationState ? (
                      <>
                        <View style={styles.dropDownBox}>
                          {occupationData.map(item => (
                            <View key={item.subCategoryId}>
                              <View style={styles.dropDownTextView}>
                                <TouchableOpacity
                                  onPress={() => {
                                    setSelectedOccu(item.subCategoryName);
                                    setOccupationState(false);
                                  }}>
                                  <Text style={styles.dropDownText}>
                                    {item.subCategoryName}
                                  </Text>
                                </TouchableOpacity>
                              </View>
                            </View>
                          ))}
                        </View>
                      </>
                    ) : (
                      <></>
                    )}

                    {values.gender || selected ? (
                      <View style={styles.form1}></View>
                    ) : (
                      <View style={styles.form}></View>
                    )}

                    {values.gender || selected ? (
                      <View>
                        <Text style={styles.text}>Occupation</Text>
                      </View>
                    ) : (
                      <></>
                    )}
                    <View
                      style={styles.textInputView}>
                      <TextInput
                        name="gender"
                        editable={false}
                        placeholder="Gender"
                        placeholderTextColor={'#7A7A7A'}
                        value={selected ? selected : values.gender}
                        style={styles.textinput}
                      />
                      {genderState ? (
                        <>
                          <TouchableOpacity
                            onPress={() => {
                              setGenderState(false);
                            }}
                            style={{
                              padding: 5,
                            }}>
                            <Image
                              source={require('../assets/images/icn_close_filter.png')}
                              style={{tintColor: 'black'}}
                            />
                          </TouchableOpacity>
                        </>
                      ) : (
                        <TouchableOpacity
                          onPress={() => {
                            setGenderState(true);
                          }}
                          style={{
                            padding: 5,
                          }}>
                          <Image
                            style={{tintColor: '#042C5C'}}
                            source={icn_dropdown}
                          />
                        </TouchableOpacity>
                      )}
                    </View>

                    {values.gender || selected ? (
                      <View style={styles.bottom}></View>
                    ) : (
                      <View style={styles.bottom2}></View>
                    )}
                    {genderState ? (
                      <>
                        <View
                          style={{
                            marginTop: 10,
                            borderWidth: 1,
                            borderColor: '#7A7A7A',
                            borderRadius: 10,
                          }}>
                          {genderData.map(item => (
                            <View key={item.genderId}>
                              <View style={styles.dropDownTextView}>
                                <TouchableOpacity
                                  onPress={() => {
                                    setSelected(item.genderName);
                                    setGenderState(false);
                                  }}>
                                  <Text style={styles.dropDownText}>
                                    {item.genderName}
                                  </Text>
                                </TouchableOpacity>
                              </View>
                            </View>
                          ))}
                        </View>
                      </>
                    ) : (
                      <></>
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
      </KeyboardAwareView>
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
  imageProfileView: {
    alignItems: 'center',
    marginTop: 30,
  },
  impageProfile: {
    height: 110,
    width: 110,
    marginRight: 40,
    borderRadius: 6,
  },
  iconChangeProfilePic: {
    height: 30,
    width: 30,
    marginTop: -25,
    marginLeft: 45,
  },
  changeImageTextView: {
    alignItems: 'flex-end',
    marginRight: 16,
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
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    fontFamily: Platform.OS == 'ios' ? 'Biko' : 'Biko_Bold',
    fontSize: 26,
    lineHeight: 35,
  },
  changeText: {
    height: 17,
    color: '#EE5C4D',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
    fontSize: 14,
    letterSpacing: 0.35,
    lineHeight: 17,
    textAlign: 'center',
  },
  textInputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
    fontWeight: Platform.OS == 'ios' ? '600':'normal',
    fontSize: 16,
    letterSpacing: 0.4,
    lineHeight: 20,
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
  dropDownBox: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#7A7A7A',
    borderRadius: 10,
  },
  dropDownTextView: {
    marginTop: 5,
    marginHorizontal: 20,
    padding: 5,
  },
  dropDownText: {
    fontSize: 12,
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    color: '#7A7A7A',
  },
});
