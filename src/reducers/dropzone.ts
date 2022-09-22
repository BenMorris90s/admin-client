import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface DropzoneState {
    showCreateBundleModal: boolean
}

const initialState: DropzoneState = {
    showCreateBundleModal: false,
}

export const createBundle = createSlice({
    name: 'createBundle',
    initialState,
    reducers: {
        toggle: (state) => {
            state.showCreateBundleModal = !state.showCreateBundleModal
        },
    },
})

export const { toggle } = createBundle.actions

export const showCreateBundleModal = (state: RootState) => state.showCreateBundleModal

export default createBundle.reducer
