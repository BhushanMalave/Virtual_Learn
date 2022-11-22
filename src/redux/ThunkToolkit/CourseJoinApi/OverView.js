import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const OverView = createAsyncThunk(
    'category/OverView',
    async token => {
      console.log('--',token);
      const options = {
        headers:{
          Authorization: `Bearer ${token}`,
        }
      };
    
      try {
        const response = await axios.get(
          'https://virtual-learn-app-java.herokuapp.com/user/CourseOverView',
          options,
        );
        console.log("----",response.data);
        return response.data;
      } catch (error) {
        console.log("-()-",error);
      }
    },
  );
  
  const OverViewSlice = createSlice({
    name: 'category',
    initialState: {
      data:null,
      status: null,
    },
    extraReducers: (builder) => {
      builder
      .addCase(OverView.pending ,(state, action) => {
        state.status = 'loading';
      })
      .addCase(OverView.fulfilled ,(state, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(OverView.rejected, (state, action) => {
        state.status = 'failed';
      })
    },
  });
  
  export default OverViewSlice.reducer;