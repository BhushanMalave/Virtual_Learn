import {createSlice} from '@reduxjs/toolkit';


export const FilterStateSlice = createSlice({
    name: 'filterState',
    initialState: {
      state: false,
      modelState:false,
        },
    reducers: {

      setFilterState: (state, action) => {
        state.state = !state.state;
      },
      setModalState:(state,action)=>{
        state.modelState =!state.modelState;
      }
    },
  });




export const {
    setFilterState
  } = FilterStateSlice.actions;
  
  export default FilterStateSlice.reducer;