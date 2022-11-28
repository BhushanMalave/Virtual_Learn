import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const cdsSubCategories = createAsyncThunk(
    'subCategories/cdsSubCategories',
    async ({token,id}) => {
        const options={
            headers:{
                Authorization:`Bearer ${token}`,
            }
        };
        try{
            const response = await axios.get(
                `https://virtual-learn-app-java.herokuapp.com/user/subCategoriesWP?categoryId=${id}`,
                options,
            );
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
);

const SubCategoriesSlice = createSlice({
    name:'subCategories',
    initialState:{
        data:null,
        status:null,
    },
    extraReducers: (builder) => {
        builder
        .addCase(cdsSubCategories.pending ,(state, action) => {
          state.status = 'loading';
        })
        .addCase(cdsSubCategories.fulfilled ,(state, action) => {
          state.status = 'success';
          state.data = action.payload;
        })
        .addCase(cdsSubCategories.rejected, (state, action) => {
          state.status = 'failed';
        })
      },
})

export default SubCategoriesSlice.reducer;