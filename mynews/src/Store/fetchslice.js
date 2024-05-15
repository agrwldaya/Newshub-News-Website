import { createSlice } from '@reduxjs/toolkit';

const fetchSlice = createSlice({
    name: 'fetchStatus',
    initialState: {
        fetchDone: false,
        fetching: false,
    },
    reducers: {
        markFetchDone: (state) => {
            // console.log(state.fetchDone)
            return {
                ...state,
                fetchDone: !state.fetchDone
            };
        },
        matchingStarted: (state) => {
            return {
                ...state,
                fetching: true
            };
        },
        matchingFinished: (state) => {
            return {
                ...state,
                fetching: false
            };
        },
    }
});

export default fetchSlice;
export const fetchSliceActions = fetchSlice.actions;
