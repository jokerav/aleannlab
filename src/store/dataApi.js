import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const dataApi = createApi({
  reducerPath: 'dataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.json-generator.com/templates/ZM1r0eic3XEy',
    prepareHeaders: (headers) => {
      const token = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'
      headers.set('authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['data'],
  endpoints: builder=>({
    getData: builder.query({
      query:() => ({
        url: '/data',
        method: "GET",
      }),
      providesTags: ['data'],
    }),
  })
});
export const {useGetDataQuery} = dataApi;
