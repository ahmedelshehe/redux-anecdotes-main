import { createSlice } from "@reduxjs/toolkit";

const initialState =null
const notificationSlice = createSlice({
    name : 'notification',
    initialState,
    reducers : {
        newNotification(state,action){
            return action.payload
        },
        removeNotification(state,action){
            return null;
        }
    }
})
export const setNotification = (content , time) =>{
    return async dispatch =>{
        dispatch(newNotification(`you voted for ${content}`))
        setTimeout(()=>dispatch(removeNotification()),time*1000)
    }
}
export default notificationSlice.reducer
export const {newNotification,removeNotification} = notificationSlice.actions