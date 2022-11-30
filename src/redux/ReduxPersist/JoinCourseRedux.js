import {createSlice} from '@reduxjs/toolkit';

export const JoinCourseSlice = createSlice({
  name: 'JoinCourse',
  initialState: {
    courseId: null,
  },
  reducers: {
    setJoinState: (state, action) => {
      state.courseId = action.payload;
    },
  },
});

export const {setJoinState} = JoinCourseSlice.actions;

export default JoinCourseSlice.reducer;
