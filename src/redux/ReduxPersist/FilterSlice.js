import {createSlice} from '@reduxjs/toolkit';

export const FilterStateSlice = createSlice({
  name: 'filterState',
  initialState: {
    state: false,
    mockState:false,
  },
  reducers: {
    setFilterState: (state, action) => {
      state.state = !state.state;
    },
    setMockstate: (state, action) => {
      state.mockState = !state.mockState;
    },
  },
});

export const {setFilterState,setMockstate} = FilterStateSlice.actions;

export default FilterStateSlice.reducer;
