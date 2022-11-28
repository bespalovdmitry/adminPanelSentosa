// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import snackbar from './snackbar';
import formReducer from './formSlice'
import appSlice from "./appSlice";
import visasReportSlice from "./visasReportSlice";

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  menu,
  snackbar,
  formReducer,
  appSlice,
  visasReportSlice
});

export default reducers;
