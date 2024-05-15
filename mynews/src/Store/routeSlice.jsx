import { createSlice } from '@reduxjs/toolkit';

const routeSlice = createSlice({
    name: "routeSlice",
    initialState:{
        country: "in",
        category: "general",
        page:1,
    },
    reducers: {

        homeRouting: (state) => {
            return { ...state, category: "general" };
        },
        sportsRouting: (state) => {
            return { ...state,category: "sports"};
        },
        
        businessRouting: (state) => {
            return { ...state,  category: "business"};
        },

        entertainmentRouting: (state) => {
            return { ...state,category: "entertainment" };
        },
        healthRouting: (state) => {
            return { ...state, category: "health" };
        },
        scienceRouting: (state) => {
            return { ...state,category: "science"};
        },
        technologyRouting: (state) => {
            return { ...state,category: "technology"};
        },
        countryRouting: (state,action) => {
            return { ...state,country: action.payload};
        },
        searchRouting: (state,action) => {
            return { ...state,category: action.payload};
        },

        
    }
});

export default routeSlice;
export const routeSliceActions = routeSlice.actions;


