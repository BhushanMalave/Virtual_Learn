import React, {useState, useEffect} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Platform,
  Image,
} from 'react-native';

import {ButtonComponent} from './Buttons';
import {ButtonComponent3} from './Buttons';
import {useSelector, useDispatch} from 'react-redux';
import {setFilterState} from '../redux/ReduxPersist/FilterSlice';
import {searchCategoriesdata} from '../authorization/Auth';
import {FilterCategoriesComponent} from './FilterCategoryComponent';
import {setSearchData} from '../redux/ReduxPersist/searchDataSlice';
import {
  clearAllSelected,
  setChaEc,
  setChaSc,
  removeChaEc,
  removeChaSc,
  setCatData,
  setComponentRender,
} from '../redux/ReduxPersist/searchDataSlice';
import {applySearchFilter} from '../authorization/Auth';

export const BottomPopup = () => {
  const filterState = useSelector(state => state.filterState.state);
  const token = useSelector(state => state.userDetails.token);
  const catData = useSelector(state => state.searchData.catData);
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const [click5, setClick5] = useState(false);
  const catId = useSelector(state => state.searchData.catId);
  const catEC = useSelector(state => state.searchData.chaEC);
  const catSC = useSelector(state => state.searchData.chaSC);

  const call = async () => {
    const categories = await searchCategoriesdata(token);
    dispatch(setCatData(categories));
  };

  const applyFilter = async () => {
    const body = {
      categoryId: catId,
      chapterStartCount: catSC,
      chapterEndCount: catEC,
    };
    console.log(body);
    const res = await applySearchFilter(token, body);
    if (res) {
      dispatch(setSearchData(res));
      dispatch(setFilterState());
      dispatch(setComponentRender(2));
      clearAll();
    }
  };
  const clearAll = () => {
    setClick1(false);
    setClick3(false);
    setClick2(false);
    setClick4(false);
    setClick5(false);
    dispatch(clearAllSelected());
  };

  const dispatch = useDispatch();
  useEffect(() => {
    call();
  }, []);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={filterState}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        {
          dispatch(setFilterState());
        }
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text1}> Search Filter</Text>
            <Pressable
              onPress={() => {
                dispatch(setFilterState());
              }}>
              <Image
                source={require('../assets/images/icn_close_filter.png')}
                style={styles.img}
              />
            </Pressable>
          </View>
          <View style={styles.searchCatView}>
            <Text style={styles.texttopsearch}>Categories</Text>
            <View style={styles.viewcatin}>
              {catData?.map(item => (
                <FilterCategoriesComponent
                  img={item.categoryPhoto}
                  category={item.categoryName}
                  id={item.categoryId}
                  status={item.status}
                />
              ))}
            </View>
          </View>
          <View style={styles.durationView}>
            <Text style={styles.texttopsearch}>Duration</Text>
            <View style={styles.viewdurin}>
              {!click1 ? (
                <Pressable
                  onPress={() => {
                    setClick1(!click1);
                    dispatch(setChaSc(5));
                    dispatch(setChaEc(10));
                  }}>
                  <View style={styles.durview}>
                    <Text style={styles.durtext}>5/10 Chapters</Text>
                  </View>
                </Pressable>
              ) : (
                <Pressable
                  onPress={() => {
                    setClick1(!click1);
                    dispatch(removeChaEc());
                    dispatch(removeChaSc());
                  }}>
                  <View style={styles.durview1}>
                    <Text style={styles.durtext}>5/10 Chapters</Text>
                  </View>
                </Pressable>
              )}

              {!click2 ? (
                <Pressable
                  onPress={() => {
                    setClick2(!click2);
                    dispatch(setChaSc(10));
                    dispatch(setChaEc(20));
                  }}>
                  <View style={styles.durview}>
                    <Text style={styles.durtext}>10/20 Chapters</Text>
                  </View>
                </Pressable>
              ) : (
                <Pressable
                  onPress={() => {
                    setClick2(!click2);
                    dispatch(removeChaEc());
                    dispatch(removeChaSc());
                  }}>
                  <View style={styles.durview1}>
                    <Text style={styles.durtext}>10/20 Chapters</Text>
                  </View>
                </Pressable>
              )}

              {!click3 ? (
                <Pressable
                  onPress={() => {
                    setClick3(!click3);
                    dispatch(setChaSc(20));
                    dispatch(setChaEc(30));
                  }}>
                  <View style={styles.durview}>
                    <Text style={styles.durtext}>20/30 Chapters</Text>
                  </View>
                </Pressable>
              ) : (
                <Pressable
                  onPress={() => {
                    setClick3(!click3);
                    dispatch(removeChaEc());
                    dispatch(removeChaSc());
                  }}>
                  <View style={styles.durview1}>
                    <Text style={styles.durtext}>20/30 Chapters</Text>
                  </View>
                </Pressable>
              )}
              {!click4 ? (
                <Pressable
                  onPress={() => {
                    setClick4(!click4);
                    dispatch(setChaSc(30));
                    dispatch(setChaEc(40));
                  }}>
                  <View style={styles.durview}>
                    <Text style={styles.durtext}>30/40 Chapters</Text>
                  </View>
                </Pressable>
              ) : (
                <Pressable
                  onPress={() => {
                    setClick4(!click4);
                    dispatch(removeChaEc());
                    dispatch(removeChaSc());
                  }}>
                  <View style={styles.durview1}>
                    <Text style={styles.durtext}>30/40 Chapters</Text>
                  </View>
                </Pressable>
              )}
              {!click5 ? (
                <Pressable
                  onPress={() => {
                    setClick5(!click5);
                    catSC.push(50);
                    catEC.push(100);
                  }}>
                  <View style={styles.durview}>
                    <Text style={styles.durtext}>50+ Chapters</Text>
                  </View>
                </Pressable>
              ) : (
                <Pressable
                  onPress={() => {
                    setClick5(!click5);
                    dispatch(removeChaEc());
                    dispatch(removeChaSc());
                  }}>
                  <View style={styles.durview1}>
                    <Text style={styles.durtext}>50+ Chapters</Text>
                  </View>
                </Pressable>
              )}
            </View>
          </View>

          <View style={{marginTop: Platform.OS === 'ios' ? 15 : 5}}>
            <ButtonComponent
              text="Apply Filter"
              onPress={() => {
                applyFilter();
              }}
            />
          </View>

          <View style={{marginTop: Platform.OS === 'ios' ? 15 : 5}}>
            <ButtonComponent3
              text="Clear All"
              onPress={() => {
                clearAll();
              }}
            />
          </View>
          <View></View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: '#000000AA',
  },
  modalView: {
    marginTop: Platform.OS == 'ios' ? 300 : 230,
    height: 600,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#00000AA',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  text1: {
    fontSize: 18,
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontWeight: 'bold',
    marginLeft: 100,
  },
  img: {
    marginTop: 5,
    marginLeft: 95,
  },
  searchCatView: {
    marginTop: 30,
  },
  durationView: {
    marginTop: 20,
  },
  texttopsearch: {
    fontSize: 18,
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontWeight: 'bold',
    color: '#2B2B2B',
  },
  viewcatin: {
    marginTop: Platform.OS === 'ios' ? 15 : 5,
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
  },
  viewdurin: {
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
  },
  durview: {
    height: 30,
    width: 101,
    borderWidth: 1,
    borderColor: '#7A7A7A',
    borderRadius: 6,
    marginTop: 10,
    marginLeft: 5,
  },
  durview1: {
    height: 30,
    width: 101,
    borderWidth: 1,
    borderColor: '#FCBE4B',
    borderRadius: 6,
    marginTop: 10,
    marginLeft: 5,
    backgroundColor: '#FCBE4B',
  },
  durtext: {
    fontSize: 12,
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    textAlign: 'center',
    marginTop: 6,
  },
});
