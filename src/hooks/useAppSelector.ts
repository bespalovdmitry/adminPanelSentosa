import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootStateType} from "../store/index";

export const useAppSelector: TypedUseSelectorHook<RootStateType > = useSelector