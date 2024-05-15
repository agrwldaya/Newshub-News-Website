import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./newsSlice"; 
import fetchSlice from "./fetchslice";
import routeSlice from "./routeSlice";
import weatherSlice from "./weatherSlice";
import bgSlice from "./bgSlice";
 

const NewsStore = configureStore({
    reducer:{newsItem:newsSlice.reducer,
        fatchStatus: fetchSlice.reducer,
        route:routeSlice.reducer ,
        WeatherData:weatherSlice.reducer,
         BgStatus:bgSlice.reducer }
})
export default NewsStore;
