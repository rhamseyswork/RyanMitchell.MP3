// linksApiSlice.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; // Adjust imports as needed
import { BASE_URL, LINKS_URL } from "../constants";

// Initialize baseQuery with the base URL
const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

// Define the API slice using createApi function
export const linksApiSlice = createApi({
  reducerPath: 'linksApi',
  baseQuery,
  tagTypes: ['Links'],
  endpoints: (builder) => ({
    // Fetch all links endpoint
    getLinks: builder.query({
      query: ({ keyword }) => ({
        url: LINKS_URL,
        params: { keyword },
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Links'],
    }),
  }),
});

// Export named exports
export const { useGetLinksQuery } = linksApiSlice;
export const { reducer: linksApiReducer } = linksApiSlice;
export const { middleware: linksApiMiddleware } = linksApiSlice;

// Export the API slice for configuration in Redux store
export default linksApiSlice;
