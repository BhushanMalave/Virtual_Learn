import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


export const hsCategories = createAsyncThunk(
  'categories/hsCategories',
  async token => {
    const options = {
      headers:{
        Authorization: `Bearer ${token}`,
      }
    };
  
    try {
      const response = await axios.get(
        'https://virtual-learning-app-java.herokuapp.com/user/categoriesWP',
        options,
      );
   
      return response.data;
    } catch (error) {
      //console.log(error);
    }
  },
);

const HSCategoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    data:null,
    status: null,
  },
  extraReducers: (builder) => {
    builder
    .addCase(hsCategories.pending ,(state, action) => {
      state.status = 'loading';
    })
    .addCase(hsCategories.fulfilled ,(state, action) => {
      state.status = 'success';
      state.data = action.payload;
    })
    .addCase(hsCategories.rejected, (state, action) => {
      state.status = 'failed';
    })
  },
});

export default HSCategoriesSlice.reducer;