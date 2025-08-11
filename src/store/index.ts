import { configureStore } from '@reduxjs/toolkit';
import ProfileSlice from '../features/Profile/reducers/ProfileSlice';
import PaymentReducer from '../features/Payments/Reducers/slices';
import HelpcenterTicketSlice from '../features/Profile/helpcenter-ticket/reducers/HelpcenterTicketSlice';
import dashboard from '../features/dashboard/redux/slice';
import CategoriesSlice from '../features/FaqCategories/reducers/CategoriesSlice';
import FaqReducer from '../features/Faq/slice';
import InstituteReducer from '../features/institute/reducers/slices';
import Branch from "../features/notification/redux/reduxSlice"

export const store = configureStore({
    reducer: {
        ProfileSlice: ProfileSlice,
        PaymentReducer: PaymentReducer,
        HelpcenterTicketSlice: HelpcenterTicketSlice,
        dashboard,
        CategoriesSlice: CategoriesSlice,
        FaqReducer: FaqReducer,
        Branch,
        InstituteReducer: InstituteReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
