import { configureStore } from "@reduxjs/toolkit"
import ProfileSlice from '../features/Profile/reducers/ProfileSlice'
import dashboard from '../features/dashboard/redux/slice'

export const store = configureStore({
    reducer: {
        ProfileSlice: ProfileSlice,
        dashboard,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch