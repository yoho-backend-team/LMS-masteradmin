import { configureStore } from "@reduxjs/toolkit"
import ProfileSlice from '../features/Profile/reducers/ProfileSlice'
import CategoriesSlice from '../features/FaqCategories/reducers/CategoriesSlice'

export const store = configureStore({
    reducer: {
        ProfileSlice:ProfileSlice,
        CategoriesSlice:CategoriesSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch