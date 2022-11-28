import {createSlice} from '@reduxjs/toolkit';


export const appSlice = createSlice({
    name: 'app',
    initialState: {
        status: 'idle',
        error: null,
        user_access_level: null,
    } as InitialStateType,
    reducers: {
        setLevel: (state, action) => {
            state.user_access_level = action.payload.level
        },
        setStatus: (state, action) => {
            state.status = action.payload.status;
        },
        setError: (state, action) => {
            state.error = action.payload.error;
        }
    }
})

export const {setLevel, setStatus, setError} = appSlice.actions;
export default appSlice.reducer;

//types
type InitialStateType = {
    status: 'loading' | 'idle'
    error: string | null
    user_access_level: 'admin' | 'manager' | 'agent' | null
}

