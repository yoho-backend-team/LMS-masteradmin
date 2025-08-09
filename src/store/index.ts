import { configureStore } from "@reduxjs/toolkit"
import ProfileSlice from '../features/Profile/reducers/ProfileSlice'
import PaymentReducer from "../features/Payments/Reducers/slices"

export const store = configureStore({
    reducer: {
        ProfileSlice:ProfileSlice,
        PaymentReducer:PaymentReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch