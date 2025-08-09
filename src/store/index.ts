import { configureStore } from "@reduxjs/toolkit"
import ProfileSlice from '../features/Profile/reducers/ProfileSlice'
import FaqReducer from '../features/Faq/slice'

export const store = configureStore({
    reducer: {
        ProfileSlice:ProfileSlice,
        FaqReducer: FaqReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch