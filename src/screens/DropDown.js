import React, {useState} from 'react';
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
import img_edit_profile_bg from '../assets/images/img_edit_profile_bg.png';
import img_profile_change from '../assets/images/img_profile_change.png';
import icn_back_header from '../assets/images/icn_back_header.png';
import {ButtonComponent} from '../components/Buttons';
import DropDownField from './../components/DropDownField';

const data = {
  fullname: 'Mahendra Singh Dhoni',
  username: 'Msdian',
  email: 'msd07@gamil.com',
  mobilenumber: '9876543211',
};

export const DropDown = ({navigation}) => {
  const genderData = [
    {key: 1, value: 'Female'},
    {key: 2, value: 'Male'},
  ];
  const occupationData = [
    {categoryId: 1, categoryName: 'design'},
    {categoryId: 2, categoryName: 'development'},
    {categoryId: 3, categoryName: 'music'},
  ];

  const [selected, setSelected] = useState('');

  const [selectedOccu, setSelectedOccu] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState({img_edit_profile_bg});

  const changeProfileImageFromLibrary = () => {};

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <ImageBackground
          source={img_profile_change}
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
                  source={img_profile_change}
                  style={{height: 110, width: 110, marginRight: 40}}
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
                fullname: data.fullname,
                username: data.username,
                email: data.email,
                mobilenumber: data.mobilenumber,
                occupation: '',
                gender: '',
                dateofbirth: '',
                twitterlink: '',
                facebooklink: '',
              }}
              onSubmit={values => {
                const obj = {
                  occupation: selectedOccu,
                  gender: selected,
                  dateofbirth: values.dateofbirth,
                  twtterlink: values.twitterlink,
                  facebooklink: values.facebooklink,
                };
                console.log(obj.selected);
                console.log(obj.occupation);
                console.log(obj);
              }}>
              {({handleChange, handleBlur, handleSubmit, values, errors}) => (
                <View>
                  {values.fullname ? (
                    <View style={styles.form1}></View>
                  ) : (
                    <View style={styles.form}></View>
                  )}
                  <>
                    {values.fullname ? (
                      <View>
                        <Text style={styles.text}>FullName</Text>
                      </View>
                    ) : (
                      <></>
                    )}
                  </>
                  <TextInput
                    name="fullname"
                    editable={false}
                    value={values.fullname}
                    style={styles.textinput}></TextInput>
                  {values.fullname ? (
                    <View style={styles.bottom}></View>
                  ) : (
                    <View style={styles.bottom2}></View>
                  )}

                  {values.username ? (
                    <View style={styles.form1}></View>
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
                  <TextInput
                    name="username"
                    editable={false}
                    value={values.username}
                    style={styles.textinput}></TextInput>
                  {values.username ? (
                    <View style={styles.bottom}></View>
                  ) : (
                    <View style={styles.bottom2}></View>
                  )}

                  {values.email ? (
                    <View style={styles.form1}></View>
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
                    editable={false}
                    value={values.email}
                    style={styles.textinput}></TextInput>
                  {values.email ? (
                    <View style={styles.bottom}></View>
                  ) : (
                    <View style={styles.bottom2}></View>
                  )}

                  {values.mobilenumber ? (
                    <View style={styles.form1}></View>
                  ) : (
                    <View style={styles.form}></View>
                  )}
                  <>
                    {values.mobilenumber ? (
                      <View>
                        <Text style={styles.text}>Moblie Number</Text>
                      </View>
                    ) : (
                      <></>
                    )}
                  </>
                  <TextInput
                    name="mobilenumber"
                    editable={false}
                    value={values.mobilenumber}
                    style={styles.textinput}></TextInput>
                  {values.mobilenumber ? (
                    <View style={styles.bottom}></View>
                  ) : (
                    <View style={styles.bottom2}></View>
                  )}

                  {/* 
                  {values.occupation ? (
                    <View style={styles.form1}></View>
                  ) : (
                    <View style={styles.form}></View>
                  )}
                  <>
                    {values.occupation ? (
                      <View>
                        <Text style={styles.text}>Occupation</Text>
                      </View>
                    ) : (
                      <></>
                    )}
                  </>
                  <TextInput
                    name="occupation"
                    placeholder="Occupation"
                    placeholderTextColor={'#7A7A7A'}
                    onChangeText={handleChange('occupation')}
                    // onBlur={handleBlur('username')}
                    value={values.occupation}
                    style={styles.textinput}></TextInput>
                  {values.occupation ? (
                    <View style={styles.bottom}></View>
                  ) : (
                    <View style={styles.bottom2}></View>
                  )} */}

                  <>
                    {selected ? (
                      <View style={styles.form1}></View>
                    ) : (
                      <View style={styles.form}></View>
                    )}
                    {selected ? (
                      <View>
                        <Text style={styles.dropDownTopText}>Occupation</Text>
                      </View>
                    ) : (
                      <></>
                    )}
                    <DropDownField
                      text="Occupation"
                      name="Occupation"
                      onChangeText={handleChange('gender')}
                      onBlur={handleBlur('gender')}
                      data={occupationData}
                      setSelected={setSelectedOccu}
                      value={setSelected}
                      placeholder="Gender"
                    />

                    {selected ? (
                      <View style={styles.dropDownBottom}></View>
                    ) : (
                      <View style={styles.dropDownBottom2}></View>
                    )}
                  </>

                  <>
                    {selected ? (
                      <View style={styles.form1}></View>
                    ) : (
                      <View style={styles.form}></View>
                    )}
                    {selected ? (
                      <View>
                        <Text style={styles.dropDownTopText}>Gender</Text>
                      </View>
                    ) : (
                      <></>
                    )}
                  </>
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

                  {values.dateofbirth ? (
                    <View style={styles.form1}></View>
                  ) : (
                    <View style={styles.form}></View>
                  )}
                  <>
                    {values.dateofbirth ? (
                      <View>
                        <Text style={styles.text}>Date Of Birth</Text>
                      </View>
                    ) : (
                      <></>
                    )}
                  </>
                  <TextInput
                    name="dateofbirth"
                    placeholder="Date Of Birth"
                    placeholderTextColor={'#7A7A7A'}
                    onChangeText={handleChange('dateofbirth')}
                    // onBlur={handleBlur('username')}
                    value={values.dateofbirth}
                    style={styles.textinput}></TextInput>
                  {values.dateofbirth ? (
                    <View style={styles.bottom}></View>
                  ) : (
                    <View style={styles.bottom2}></View>
                  )}

                  {values.twitterlink ? (
                    <View style={styles.form1}></View>
                  ) : (
                    <View style={styles.form}></View>
                  )}
                  <>
                    {values.twitterlink ? (
                      <View>
                        <Text style={styles.text}>Twitter Link</Text>
                      </View>
                    ) : (
                      <></>
                    )}
                  </>
                  <TextInput
                    name="twitterlink"
                    placeholder="Twitter Link"
                    placeholderTextColor={'#7A7A7A'}
                    onChangeText={handleChange('twitterlink')}
                    // onBlur={handleBlur('username')}
                    value={values.twitterlink}
                    style={styles.textinput}></TextInput>
                  {values.twitterlink ? (
                    <View style={styles.bottom}></View>
                  ) : (
                    <View style={styles.bottom2}></View>
                  )}

                  {values.facebooklink ? (
                    <View style={styles.form1}></View>
                  ) : (
                    <View style={styles.form}></View>
                  )}
                  <>
                    {values.facebooklink ? (
                      <View>
                        <Text style={styles.text}>Facebook Link</Text>
                      </View>
                    ) : (
                      <></>
                    )}
                  </>
                  <TextInput
                    name="facebooklink"
                    placeholder="FacebookLink"
                    placeholderTextColor={'#7A7A7A'}
                    onChangeText={handleChange('facebooklink')}
                    // onBlur={handleBlur('username')}
                    value={values.facebooklink}
                    style={styles.textinput}></TextInput>
                  {values.facebooklink ? (
                    <View style={styles.bottom}></View>
                  ) : (
                    <View style={styles.bottom2}></View>
                  )}
                  <View style={styles.buttonContainer}>
                    <ButtonComponent text={'Submit'} onPress={handleSubmit} />
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
    opacity: 0.9,
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
});
