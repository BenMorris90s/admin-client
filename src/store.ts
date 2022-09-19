import { configureStore } from '@reduxjs/toolkit'
import createBundleReducer from "./reducers/createBundleSlice"

// From redux-toolkit js https://redux-toolkit.js.org/tutorials/typescript
export const store = configureStore({
    reducer: createBundleReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch