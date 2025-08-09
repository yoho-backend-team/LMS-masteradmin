import { configureStore } from "@reduxjs/toolkit"
import ProfileSlice from '../features/Profile/reducers/ProfileSlice'
import  HelpcenterTicketSlice  from "../features/Profile/helpcenter-ticket/reducers/HelpcenterTicketSlice"

export const store = configureStore({
    reducer: {
        ProfileSlice:ProfileSlice,
        HelpcenterTicketSlice  : HelpcenterTicketSlice 
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch