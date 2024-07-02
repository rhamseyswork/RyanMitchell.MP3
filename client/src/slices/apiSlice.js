import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, LINKS_URL } from "../constants";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

// Create an instance of createApi
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery,
    tagTypes: ['Links', 'User'],
    endpoints: (builder) => ({
        getLinks: builder.query({
            query: () => LINKS_URL, // Example endpoint, adjust as needed
          }),
    }),
});


export const apiReducer = apiSlice.reducer; // Export the reducer
export const apiFetch = apiSlice.middleware; // Export the middleware for RTK-Query

