import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


export const notificationApiCall = createAsyncThunk(
  'notificationData/notificationApiCall ',
  async token => {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(
        'https://virtual-learning-app-java.herokuapp.com/user/notifications',
        options,
      );
      return response.data;
    } catch (error) {
      console.log('notify', error);
    }
  },
);

const notificationApiCallSlice = createSlice({
  name: 'notificationData',
  initialState: {
    data: null,
    status: null,
  },
  reducer: {
    setNotificationData : (state) => {
      state.data = null;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(notificationApiCall.pending, (state, action) => {
        state.status = 'loading';
        state.data=null;
      })
      .addCase(notificationApiCall.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(notificationApiCall.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export const { setNotificationData } = notificationApiCallSlice.actions;
export default notificationApiCallSlice.reducer;
