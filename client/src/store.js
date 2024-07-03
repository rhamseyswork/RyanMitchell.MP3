// store.js

import { configureStore } from '@reduxjs/toolkit';
import { apiReducer as api, apiFetch } from './slices/apiSlice'; // Adjust path as needed
import authSliceReducer from './slices/authSlice'; // Assuming you have an auth slice
import { linksApiSlice, linksApiMiddleware } from './slices/linksApiSlice';

const store = configureStore({
  reducer: {
    api, // Use 'api' from apiSlice as the reducer
    auth: authSliceReducer, // Add other reducers as necessary
    // Add more reducers as necessary
    [linksApiSlice.reducerPath]: linksApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiFetch, linksApiMiddleware), // Concatenate middleware correctly
  devTools: true, // Enable Redux DevTools
});

export default store;
