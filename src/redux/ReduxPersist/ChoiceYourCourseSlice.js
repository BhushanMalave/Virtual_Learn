import {createSlice} from '@reduxjs/toolkit';

export const ChoiceYourDetailsSlice = createSlice({
  name: 'choiceYourCourse',
  initialState: {
    data: null,
  },
  reducers: {
    setAllData: (state, action) => {
      // console.log(action.payload);
      state.data = action.payload;
    },
    setPopularData: (state, action) => {
      // console.log(action.payload);
      state.data = action.payload;
    },
    setNewestData: (state, action) => {
      // console.log(action.payload);
      state.data = action.payload;
    },
  },
});

export const {setAllData, setNewestData, setPopularData} =
  ChoiceYourDetailsSlice.actions;

export default ChoiceYourDetailsSlice.reducer;
