import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
    name: "weatherData",
    initialState:{temp:20,name:'una'},
    reducers: {
        getWeather: (state,action) => {
            console.log(action.payload)
            return {...state,temp:action.payload.main.temp,name:action.payload.name};
        }
    }
});

export default weatherSlice;
export const weatherSliceAction = weatherSlice.actions;
