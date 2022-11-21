import {createSlice} from '@reduxjs/toolkit';

export const FilterStateSlice = createSlice({
  name: 'filterState',
  initialState: {
    state: false,
  },
  reducers: {
    setFilterState: (state, action) => {
      state.state = !state.state;
    },
  },
});

export const {setFilterState} = FilterStateSlice.actions;

export default FilterStateSlice.reducer;
