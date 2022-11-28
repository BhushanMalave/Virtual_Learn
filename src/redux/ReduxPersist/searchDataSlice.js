import {createSlice} from '@reduxjs/toolkit';

export const searchDataSlice = createSlice({
  name: 'searchData',
  initialState: {
    data: null,
    catId: [],
    chaSC: [],
    chaEC: [],
    catData: null,
    topSearchData:null,
    componentRender:1,
  },
  reducers: {
    setSearchData: (state, action) => {
      state.data = action.payload;
    },
    setCatId: (state, action) => {
      state.catId.push(action.payload);
    },
    setCatData: (state, action) => {
      state.catData = action.payload;
    },
    setTopSearchData: (state, action) => {
      state.topSearchData = action.payload;
    },
    removeCatId: (state, action) => {
      state.catId = state.catId.filter(value => value !== action.payload);
    },
    setChaSc: (state, action) => {
      state.chaSC.push(action.payload);
    },
    setChaEc: (state, action) => {
      state.chaEC.push(action.payload);
    },
    removeChaSc: (state, action) => {
      state.chaSC.pop();
    },
    removeChaEc: (state, action) => {
      state.chaEC.pop();
    },
    clearAllSelected: (state, action) => {
      state.chaEC = [];
      state.chaSC = [];
      state.catId = [];
      state.catData.map(item => {
        item.status = false;
      });
    },
    setCatState: (state, action) => {
      state.catData.map(item => {
        if (item.categoryId === action.payload) {
          item.status = !item.status;
        }
      });
    },
    setComponentRender : (state, action) => {
      state.componentRender = action.payload;
    },
  },
});

export const {
  setSearchData,
  setCatId,
  removeCatId,
  setChaEc,
  setChaSc,
  removeChaEc,
  removeChaSc,
  clearAllSelected,
  setCatData,
  setCatState,
  setComponentRender,
  setTopSearchData,
} = searchDataSlice.actions;

export default searchDataSlice.reducer;
