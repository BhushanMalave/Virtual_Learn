import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const cdsbasicCourse = createAsyncThunk(
  'basicCourse/cdsbasicCourse',
  async ({token, id}) => {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.get(
        `http://virtuallearn-env.eba-b8h9bw3u.ap-south-1.elasticbeanstalk.com/user/basicCourses?categoryId=${id}`,
        options,
      );

      return response.data;
    } catch (error) {

      console.log('bsccrs', error)

    }
  },
);

const BasicCourseSlice = createSlice({
  name: 'basicCourse',
  initialState: {
    data: null,
    status: null,
  },
  reducer: {
    setBasicCourseData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(cdsbasicCourse.pending, (state, action) => {
        state.status = 'loading';
        state.data=null;
      })
      .addCase(cdsbasicCourse.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(cdsbasicCourse.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export const {setBasicCourseData} = BasicCourseSlice.actions;
export default BasicCourseSlice.reducer;
