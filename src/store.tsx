import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { popularMovies } from './services'

export const store = configureStore({
  reducer: {
    [popularMovies.reducerPath]: popularMovies.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(popularMovies.middleware),
})

setupListeners(store.dispatch)