import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface NewBundleState {
    showCreateBundleModal: boolean
}

const initialState: NewBundleState = {
    showCreateBundleModal: false,
}

export const createBundleSlice = createSlice({
    name: 'createBundle',
    initialState,
    reducers: {
        toggle: (state) => {
            console.info("Action running")
            state.showCreateBundleModal = !state.showCreateBundleModal
        },
    },
})

export const { toggle } = createBundleSlice.actions

export const showCreateBundleModal = (state: RootState) => state.showCreateBundleModal

export default createBundleSlice.reducer
