import { createSlice } from "@reduxjs/toolkit";

const initialstate = ({
    status: false,
    userData: null
})

const authSilce = ( {
    name: "auth",
    initialstate,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        }, 
        logout: (state, action) => {
            state.status = false;
            state.userData = null
        }
    }
})


export default authSilce.reducers;