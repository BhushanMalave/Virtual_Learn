import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import Toast from 'react-native-simple-toast'

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
                `http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/subCategoriesWP?categoryId=${id}`,
                options,
            );
            return response.data;
        } catch (error) {
            console.log("subcat",error);
        }
    },
);

const SubCategoriesSlice = createSlice({
    name:'subCategories',
    initialState:{
        data:null,
        status:null,
    },
    reducer: {
        setSubCategoryData: (state, action) => {
          state.data = action.payload;
        },
      },
    extraReducers: (builder) => {
        builder
        .addCase(cdsSubCategories.pending ,(state, action) => {
          state.status = 'loading';
          state.data=null;
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


export const {setSubCategoryData} = SubCategoriesSlice.actions;
export default SubCategoriesSlice.reducer;