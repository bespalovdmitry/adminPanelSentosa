import {useDispatch} from "react-redux";
import {RootDispatchType} from "../store/index";

export const useAppDispatch = () => useDispatch<RootDispatchType>()