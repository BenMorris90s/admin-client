import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Use instead of plain `useDispatch` and `useSelector`
// https://redux.js.org/usage/usage-with-typescript#standard-redux-toolkit-project-setup-with-typescript
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector