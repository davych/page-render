import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const popularMovies = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.episodate.com/api' }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query<any, string>({
      query: (queryArgs) => {
        return {
            url: `/most-popular?${new URLSearchParams(queryArgs).toString()}`,
            method: 'GET',
          }
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPopularMoviesQuery } = popularMovies