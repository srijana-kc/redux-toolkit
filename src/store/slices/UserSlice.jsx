import { createSlice } from "@reduxjs/toolkit";

const userSlice =  createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state, action){
            state.push(action.payload);
            console.log(action.payload);
        },
        removeUser(state, action){
            // console.log("hii"+ action.payload)
            // state.pop(action.payload)
            state.splice(action.payload,1)
        },
        deleteAllUsers(state, action){
            // console.log("hi delete")
            // return state = []
            return []
        },
    }
})

console.log(userSlice.actions);
export default userSlice.reducer;
// console.log(users.actions);

export const {addUser, removeUser,deleteAllUsers} = userSlice.actions;