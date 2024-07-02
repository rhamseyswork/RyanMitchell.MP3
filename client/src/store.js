// store.js

import { configureStore } from '@reduxjs/toolkit';
import { apiReducer, apiFetch } from './slices/apiSlice'; // Adjust path as needed
import authSliceReducer from './slices/authSlice'; // Assuming you have an auth slice

const store = configureStore({
  reducer: {
    api: apiReducer, // Ensure 'api' is the correct namespace for RTK-Query reducer
    auth: authSliceReducer, // Add other reducers as necessary
    // Add more reducers as necessary
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiFetch), // Include RTK-Query middleware
  devTools: true, // Enable Redux DevTools
});

export default store;
