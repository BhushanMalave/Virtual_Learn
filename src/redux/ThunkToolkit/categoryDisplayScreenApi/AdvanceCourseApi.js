import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


export const cdsAdvanceCourse = createAsyncThunk(
  'advanceCourse/cdsAdvanceCourse',
  async ({token, id}) => {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(
        `http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/advanceCourses?categoryId=${id}`,
        options,
      );

      return response.data;
    } catch (error) {
      console.log('advcourse', error);
    }
  },
);

const AdvanceCourseSlice = createSlice({
  name: 'advanceCourse',
  initialState: {
    data: null,
    status: null,
  },
  reducer: {
    setAdvanceCourseData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(cdsAdvanceCourse.pending, (state, action) => {
        state.status = 'loading';
        state.data=null;
      })
      .addCase(cdsAdvanceCourse.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(cdsAdvanceCourse.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});


export const {setAdvanceCourseData} = AdvanceCourseSlice.actions;
export default AdvanceCourseSlice.reducer;
