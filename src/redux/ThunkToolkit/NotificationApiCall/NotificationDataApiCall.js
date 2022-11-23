import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


export const notificationApiCall = createAsyncThunk(
  'notificationData/notificationApiCall ',
  async token => {
    const options = {
      headers:{
        Authorization: `Bearer ${token}`,
      }
    };
  
    try {
      const response = await axios.get(
        'https://virtual-learn-app-java.herokuapp.com/notification',
        options,
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const notificationApiCallSlice = createSlice({
  name: 'notificationData',
  initialState: {
    data:null,
    status: null,
  },
  extraReducers: (builder) => {
    builder
    .addCase(notificationApiCall .pending ,(state, action) => {
      state.status = 'loading';
    })
    .addCase(notificationApiCall .fulfilled ,(state, action) => {
      state.status = 'success';
      state.data = action.payload;
    })
    .addCase(notificationApiCall .rejected, (state, action) => {
      state.status = 'failed';
    })
  },
});

export default notificationApiCallSlice.reducer;