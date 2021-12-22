import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getGistsByUsername } from '../service/gist';

const initialState = {
    status: "idle",
    error: "",
    results: []
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getUserGistsAsync = createAsyncThunk(
    'user/getGistsByUsername',
    async (uname) => await getGistsByUsername(uname)
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    // reducers: {},
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
        builder
            .addCase(getUserGistsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUserGistsAsync.rejected, (state, action) => {
                state.status = action.error.message;
            })
            .addCase(getUserGistsAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.results = action.payload;
            });
    },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file.
export const selectUser = (state) => {
    return state.user;
}

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//     const currentValue = selectUser(getState());
//     if (currentValue % 2 === 1) {
//         dispatch(incrementByAmount(amount));
//     }
// };

export default userSlice.reducer;