import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:[],
    userbyId:{},
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, { payload }) =>{
            state.users = payload;
        },
        selectedUser: (state, { payload }) => {
            state.userbyId = payload;
        }
    },
});

export const { addUser, selectedUser } = userSlice.actions;
export const getAllUsers = (state) => state.users;
export default userSlice.reducer;