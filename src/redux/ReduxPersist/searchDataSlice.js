import {createSlice} from '@reduxjs/toolkit';

export const searchDataSlice = createSlice({
  name: 'searchData',
  initialState: {

    data:null,
    
  },
  reducers: {
    setSearchData: (state, action) => {
        // console.log("========",action.payload)
        state.data = action.payload;
        console.log("=---=",state.data)
    },
    
  },
});

export const { setSearchData} = searchDataSlice.actions;

export default searchDataSlice.reducer;