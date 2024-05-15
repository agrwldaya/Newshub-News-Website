import { createSlice } from '@reduxjs/toolkit';

const bgSlice = createSlice({
    name: 'bgStatus',
    initialState: {
         color:"white",
         bgNev:"dark",
         bgColor:"#212121",
         imgBg:"white",
    },
    reducers: {
        toggleBg: (state) => {
         return {
                ...state,
                color: state.color === "white" ? "black" : "white",
                bgColor: state.bgColor === "#212121"? "#5f9dcd" : "#212121",
                bgNev: state.bgNev === "dark" ?"info":"dark",
                imgBg:state.imgBg==="white"?"#5f9dcd":"white"
            };
        }
    }
});

export default bgSlice;
export const bgSliceActions = bgSlice.actions;
