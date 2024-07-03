import { createSlice } from '@reduxjs/toolkit'; 

const initialState = { 
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    isSuperAdmin: false, // add this property
  };

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            if (action.payload) {
              state.userInfo = action.payload;
              console.log(state.userInfo);
              if (action.payload.isAdmin === false || action.payload.isAdmin === undefined) {
                delete state.userInfo.isAdmin;
                delete state.userInfo.isSuperAdmin;
              }
              else if(action.payload.isSuperAdmin === undefined){
                delete state.userInfo.isSuperAdmin;
              }
              localStorage.setItem('userInfo', JSON.stringify(action.payload));
              const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 1 day change to 30min
              // const expirationTime = new Date().getTime() + 60 * 1000; // 1 minute (for testing)
              localStorage.setItem('expirationTime', expirationTime);
            }
          },
        logout: (state, action) => {
            state.userInfo = null;
            localStorage.clear();
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;