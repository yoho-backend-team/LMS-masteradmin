import { useDispatch, type TypedUseSelectorHook, useSelector } from "react-redux"

import type { RootState, AppDispatch } from '../store/index'

export const useAppDispatch = useDispatch<AppDispatch>();
export const useAppSlector: TypedUseSelectorHook<RootState> = useSelector;