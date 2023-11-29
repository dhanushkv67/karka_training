import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {
        id:"1",
        title:"learning redux toolkit",
        content:"it's easy"
    },
    {
        id:"2",
        title:"subscribe...",
        content:"like and share this video"
    }
]
const postsSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        postAdded(state,action){
            state.push(action.payload)
        }
    }
})
export default postsSlice.reducer
export const {postAdded} = postsSlice.actions
export const selectAllPosts = (state) => state.posts;