import { NEWSLETTER_URL } from '../constants.js';
import { apiSlice } from './apiSlice.js'; // Ensure this import matches your setup

export const newsLetterApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (credentials) => ({
        url: `${NEWSLETTER_URL}/signup`,
        method: 'POST',
        body: credentials,
      }),
      keepUnusedDataFor: 5,
      providesTags: ['NewsLetterUser'],
    }),

    logout: builder.mutation({
      query: () => ({
        url: `${NEWSLETTER_URL}/logout`,
        method: 'POST',
        credentials: 'include',
      }),
      keepUnusedDataFor: 5,
      providesTags: ['NewsLetterUser'],
    }),
  }),
});

export const {
  useSignupMutation,
  useLogoutMutation
} = newsLetterApiSlice;
