import { LINKS_URL } from "../constants";
import { apiSlice } from "./apiSlice.js";

export const linksApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLinks: builder.query({
      query: ({pageNumber, keyword }) => ({
        url: LINKS_URL,
        params: { pageNumber, keyword },
      }),
    keepUnusedDataFor: 5,
    providesTags: ['Links'],
    }),
    createLinks: builder.mutation({
      query: () => ({
          url: LINKS_URL,
          method: 'POST',
      }),
      invalidatesTags: ['Links'],
    }),
    updateLinks: builder.mutation({
      query: (data) => ({
          url: `${LINKS_URL}/${data.id}`,
          method: 'PUT',
          body: data,
      }),
      invalidatesTags: ['Links'],
    }),
    deleteLinks: builder.mutation({
      query: (id) => ({
        url: `${LINKS_URL}/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetLinksQuery,
  useCreateLinksMutation,
  useUpdateLinksMutation,
  useDeleteLinksMutation,
} = linksApiSlice;




