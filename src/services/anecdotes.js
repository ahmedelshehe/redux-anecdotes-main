import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
const createAnecdote = async (content) => {
    const object = {content , votes : 0}
    const response = await axios.post(baseUrl, object)
  return response.data
}
const voteForAnecdote = async (id) => {
    const anecdote = await axios.get(baseUrl + "/"+id)
    const object = {
        content : anecdote.data.content,
        votes : anecdote.data.votes+1
    }
    const response = await axios.put(baseUrl + "/"+id, object)
    return response.data
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {getAll ,createAnecdote,voteForAnecdote}