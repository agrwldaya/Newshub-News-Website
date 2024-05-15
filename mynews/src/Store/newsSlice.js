import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
    name: "newsItem",
    initialState:[],
    reducers: {
        addInitialItem: (state, action) => {
            return action.payload;
        }
    }
});

export default newsSlice;
export const NewsSliceAction = newsSlice.actions;
