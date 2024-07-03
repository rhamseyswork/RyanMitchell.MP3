import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from "../constants";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

// Create an instance of createApi
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery,
    tagTypes: ['Links', 'User'],
    endpoints: (builder) => ({

    }),
});

