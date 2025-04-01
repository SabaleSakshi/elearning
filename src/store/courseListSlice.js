import {createSlice} from '@reduxjs/toolkit';
import { cardsData } from './coursesList';

const courseListSlice = createSlice({
    name: 'courseList',
    initialState: cardsData,
    reducers:{
        AddItems: (state, action)=>{
            return action.payload;
        }
    }
});

export const courseListActions = courseListSlice;
export default courseListSlice;
