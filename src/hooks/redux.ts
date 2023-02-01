import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

export const useAppDispatch = () => useDispatch<AppDispatch>(); // This is a regular useDispatch but typed
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // This is a regular useSelector but typed
