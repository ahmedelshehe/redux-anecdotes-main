import { createSlice } from "@reduxjs/toolkit"
import anecdotesService from "../services/anecdotes"
const anecdoteSlice = createSlice({
  name :'anecdotes',
  initialState : [],
  reducers : {
    appendAnecdote(state,action) {
      return state.concat(action.payload)
    },
    voteAnecdote(state,action) {
      const id = action.payload
      const anecdoteToVote =state.find(a => a.id === id)
      const votedAnecdote = {...anecdoteToVote , votes : anecdoteToVote.votes + 1}
      return state.map(a => a.id !== id ? a : votedAnecdote)
    },
    setAnecdotes(state ,action) {
      return action.payload
    }
  }
})
export const initializeAnecdotes =() => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}
export const createAnecdote = (object) => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.createAnecdote(object)
    dispatch(appendAnecdote(newAnecdote))
  }
}
export const voteForAnecdote =  (id) => { 
  return async dispatch => {
    await anecdotesService.voteForAnecdote(id)
    dispatch(voteAnecdote(id))
  }
}
export default anecdoteSlice.reducer
export const {appendAnecdote , voteAnecdote ,setAnecdotes } = anecdoteSlice.actions 
