// third-party
import {configureStore, ThunkDispatch} from '@reduxjs/toolkit';

// project import
import {AnyAction, combineReducers} from "redux";
import reducers from "./reducers";

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //
const rootReducer = combineReducers({
    reducers
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
        {
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ['your/action/type'],
                // Ignore these field paths in all actions
                ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
                // Ignore these paths in the state
                ignoredPaths: ['items.dates'],
            }
        },
    )
});

export {store};
export type RootActionsType = AnyAction
export type RootStateType = ReturnType<typeof store.getState>
export type RootDispatchType = ThunkDispatch<RootStateType, unknown, RootActionsType>