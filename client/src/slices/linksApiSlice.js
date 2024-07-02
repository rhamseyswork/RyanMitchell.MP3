import { LINKS_URL } from "../constants";
import { apiSlice } from "./apiSlice.js";

export const linksApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Fetch all links
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

export const {
    useGetLinksQuery,
} = linksApiSlice;
